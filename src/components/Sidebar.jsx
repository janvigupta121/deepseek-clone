// import React from 'react';
// import {X,LogOut,} from "lucide-react"
// import profile from "../../public/profile.png"
// import { useAuth } from '../context/AuthProvider';

// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// function Sidebar() {
// const user=JSON.parse(localStorage.getItem("user"));

// const {setAuthUser} = useAuth();
// const navigate = useNavigate();

// const handleLogout =async () => {
//     try{
//     const {data}=await axios.get("http://localhost:4000/api/v1/user/logout",{
//         withCredentials: true
//     })
//   localStorage.removeItem("user");  
//   localStorage.removeItem("token");

//     setAuthUser(null);
//     navigate("/login");
// }catch(error){
// alert(error?.response?.data?.errors || "Logout failed");
// }

// };

//   return (
//     <div className="h-full flex flex-col bg-[232327]">
//         {/**header */}
//         <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//             <div className="text-xl font-bold text-white">deepseek</div>
//             <button className="text-gray-300 w-6 h-6"><X/></button>
//         </div>

//         {/**history */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//             <button className="w-full bg-indigo-600 hover:bg-indigo-500 text:white px-4 py-2 rounded-xl mb-4">+ New Chat</button>
//             <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
//         </div>

//         {/**footer or settings */}
//         <div className="p-4 border-t border-gray-700">
//             <div className="flex flex-col gap-3">
//                 <div className="flex items-center gap-2 text-white cursor-pointer ">
//                     <img className="rounded-full w-8 h-8"src={profile} alt=""/>
//                     <span className="text-gray-300"> {user?user.firstName:"My Profile"}</span>
//                 </div>
//                 <button onClick={handleLogout} className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 duration-300 transition"><LogOut className=""/>
//                 Logout</button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Sidebar;




// import React from 'react';
// import { X, LogOut } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });

//       // Clear user data
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);

//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-[#232327]"> {/* ✅ fixed background color class */}
      
//       {/* Header */}
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button className="text-gray-300 w-6 h-6">
//           <X />
//         </button>
//       </div>

//       {/* Chat History */}
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4">
//           + New Chat
//         </button>
//         <div className="text-gray-500 text-sm mt-20 text-center">
//           No chat history yet
//         </div>
//       </div>

//       {/* Footer / Profile / Logout */}
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user ? user.firstName : "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





// import React, { useEffect, useState } from 'react';
// import { X, LogOut, Pencil, Trash2 } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [titles, setTitles] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setTitles(Object.keys(stored));
//   }, [activeTitle]);

//   const handleNewChat = () => {
//     const newTitle = `Chat ${new Date().toLocaleString()}`;
//     const updatedHistory = {
//       ...(JSON.parse(localStorage.getItem("chatHistory")) || {}),
//       [newTitle]: []
//     };
//     localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
//     setActiveTitle(newTitle);
//   };

//   const handleDeleteChat = (title) => {
//     const updatedHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete updatedHistory[title];
//     localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
//     if (title === activeTitle) {
//       const fallback = Object.keys(updatedHistory)[0] || "New Chat";
//       setActiveTitle(fallback);
//     }
//     setTitles(Object.keys(updatedHistory));
//   };

//   const handleRenameChat = (oldTitle) => {
//     const newTitle = prompt("Enter new chat name:", oldTitle);
//     if (!newTitle || newTitle === oldTitle) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (history[newTitle]) {
//       alert("Chat with this title already exists.");
//       return;
//     }
//     history[newTitle] = history[oldTitle];
//     delete history[oldTitle];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setActiveTitle(newTitle);
//     setTitles(Object.keys(history));
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });

//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);
//       navigate("/login");
//     } catch (error) {
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-[#232327]">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button className="text-gray-300 w-6 h-6">
//           <X />
//         </button>
//       </div>

//       {/* Chat History */}
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>
//         {titles.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
//         ) : (
//           <div className="space-y-2">
//             {titles.map((title) => (
//               <div
//                 key={title}
//                 className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition ${
//                   title === activeTitle ? "bg-gray-700" : "bg-[#2d2d2d]"
//                 }`}
//               >
//                 <div onClick={() => setActiveTitle(title)} className="text-white truncate max-w-[140px]">
//                   {title}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <button
//                     onClick={() => handleRenameChat(title)}
//                     className="text-gray-400 hover:text-white"
//                   >
//                     <Pencil size={14} />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteChat(title)}
//                     className="text-red-400 hover:text-red-600"
//                   >
//                     <Trash2 size={14} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer / Profile / Logout */}
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user ? user.firstName : "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;




// import React, { useState, useEffect } from 'react';
// import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [chatHistory, setChatHistory] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   // Load chat history from localStorage
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setChatHistory(Object.keys(history));
//   }, []);

//   const handleNewChat = () => {
//     const newTitle = `Chat - ${new Date().toLocaleTimeString()}`;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = [];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     setActiveTitle(newTitle);
//   };

//   const handleDelete = (title) => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle("");
//   };

//   const handleRename = (title) => {
//     const newTitle = prompt("Enter new title", title);
//     if (!newTitle || newTitle === title) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = history[title];
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle(newTitle);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });

//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);

//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-[#232327]">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button className="text-gray-300 w-6 h-6">
//           <X />
//         </button>
//       </div>

//       {/* Chat History */}
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>

//         {chatHistory.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">
//             No chat history yet
//           </div>
//         ) : (
//           chatHistory.map((title) => (
//             <div
//               key={title}
//               className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${
//                 activeTitle === title ? "bg-gray-800" : ""
//               }`}
//               onClick={() => setActiveTitle(title)}
//             >
//               <span className="truncate max-w-[160px]">{title}</span>
//               <div className="relative">
//                 <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
//                   <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                 </button>
//                 {showOptions === title && (
//                   <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Pencil className="w-4 h-4" /> Rename
//                     </button>
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Footer / Profile / Logout */}
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user ? user.firstName : "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;






// // ✅ Sidebar.jsx
// import React, { useState, useEffect } from 'react';
// import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle, setPrompt }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [chatHistory, setChatHistory] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setChatHistory(Object.keys(history));
//   }, []);

//   const handleNewChat = () => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     let index = 1;
//     let newTitle = `New Chat ${index}`;
//     while (history[newTitle]) {
//       index++;
//       newTitle = `New Chat ${index}`;
//     }
//     history[newTitle] = [];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     setActiveTitle(newTitle);
//     setPrompt([]); // ✅ Clear the chat in Prompt component
//   };

//   const handleDelete = (title) => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle("");
//   };

//   const handleRename = (title) => {
//     const newTitle = prompt("Enter new title", title);
//     if (!newTitle || newTitle === title) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = history[title];
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle(newTitle);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-[#232327]">
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button className="text-gray-300 w-6 h-6">
//           <X />
//         </button>
//       </div>
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>
//         {chatHistory.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">
//             No chat history yet
//           </div>
//         ) : (
//           chatHistory.map((title) => (
//             <div
//               key={title}
//               className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${
//                 activeTitle === title ? "bg-gray-800" : ""
//               }`}
//               onClick={() => setActiveTitle(title)}
//             >
//               <span className="truncate max-w-[160px]">{title}</span>
//               <div className="relative">
//                 <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
//                   <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                 </button>
//                 {showOptions === title && (
//                   <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Pencil className="w-4 h-4" /> Rename
//                     </button>
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user ? user.firstName : "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





// import React, { useState, useEffect } from 'react';
// import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle, setPrompt }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [chatHistory, setChatHistory] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setChatHistory(Object.keys(history));
//   }, []);

//   const handleNewChat = () => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     let index = 1;
//     let newTitle = `New Chat ${index}`;
//     while (history[newTitle]) {
//       index++;
//       newTitle = `New Chat ${index}`;
//     }
//     history[newTitle] = [];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     setActiveTitle(newTitle);
//     setPrompt([]); // clear current chat
//   };

//   const handleDelete = (title) => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle("");
//   };

//   const handleRename = (title) => {
//     const newTitle = prompt("Enter new title", title);
//     if (!newTitle || newTitle === title) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = history[title];
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle(newTitle);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);
//       navigate("/login");
//     } catch (error) {
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-[#232327]">
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button className="text-gray-300 w-6 h-6">
//           <X />
//         </button>
//       </div>

//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>

//         {chatHistory.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
//         ) : (
//           chatHistory.map((title) => (
//             <div
//               key={title}
//               className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${activeTitle === title ? "bg-gray-800" : ""}`}
//               onClick={() => setActiveTitle(title)}
//             >
//               <span className="truncate max-w-[160px]">{title}</span>
//               <div className="relative">
//                 <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
//                   <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                 </button>
//                 {showOptions === title && (
//                   <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Pencil className="w-4 h-4" /> Rename
//                     </button>
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user?.firstName || "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





// import React, { useState, useEffect } from 'react';
// import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle, setPrompt, showSidebar, setShowSidebar }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [chatHistory, setChatHistory] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setChatHistory(Object.keys(history));
//   }, []);

//   const handleNewChat = () => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     let index = 1;
//     let newTitle = `New Chat ${index}`;
//     while (history[newTitle]) {
//       index++;
//       newTitle = `New Chat ${index}`;
//     }
//     history[newTitle] = [];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     setActiveTitle(newTitle);
//     setPrompt([]); // clear current chat
//     if (window.innerWidth < 768) setShowSidebar(false); // auto close on mobile
//   };

//   const handleDelete = (title) => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle("");
//   };

//   const handleRename = (title) => {
//     const newTitle = prompt("Enter new title", title);
//     if (!newTitle || newTitle === title) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = history[title];
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle(newTitle);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);
//       navigate("/login");
//     } catch (error) {
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className={`h-full flex flex-col bg-[#232327] transition-transform duration-300
//       ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
//       md:translate-x-0 fixed md:static top-0 left-0 w-72 z-50`}>
      
//       {/* Top */}
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button onClick={() => setShowSidebar(false)} className="text-gray-300 w-6 h-6 md:hidden">
//           <X />
//         </button>
//       </div>

//       {/* Chat History */}
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>

//         {chatHistory.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
//         ) : (
//           chatHistory.map((title) => (
//             <div
//               key={title}
//               className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${activeTitle === title ? "bg-gray-800" : ""}`}
//               onClick={() => {
//                 setActiveTitle(title);
//                 if (window.innerWidth < 768) setShowSidebar(false); // auto close on small
//               }}
//             >
//               <span className="truncate max-w-[160px]">{title}</span>
//               <div className="relative">
//                 <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
//                   <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                 </button>
//                 {showOptions === title && (
//                   <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Pencil className="w-4 h-4" /> Rename
//                     </button>
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Footer */}
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user?.firstName || "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





// import React, { useState, useEffect } from 'react';
// import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
// import profile from "../../public/profile.png";
// import { useAuth } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Sidebar({ activeTitle, setActiveTitle, setPrompt, showSidebar, setShowSidebar }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const { setAuthUser } = useAuth();
//   const navigate = useNavigate();

//   const [chatHistory, setChatHistory] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setChatHistory(Object.keys(history));
//   }, []);

//   const handleNewChat = () => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     let index = 1;
//     let newTitle = `New Chat ${index}`;
//     while (history[newTitle]) {
//       index++;
//       newTitle = `New Chat ${index}`;
//     }
//     history[newTitle] = [];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     setActiveTitle(newTitle);
//     setPrompt([]);
//     if (window.innerWidth < 768) setShowSidebar(false);
//   };

//   const handleDelete = (title) => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle("");
//   };

//   const handleRename = (title) => {
//     const newTitle = prompt("Enter new title", title);
//     if (!newTitle || newTitle === title) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[newTitle] = history[title];
//     delete history[title];
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//     setChatHistory(Object.keys(history));
//     if (activeTitle === title) setActiveTitle(newTitle);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true
//       });
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       setAuthUser(null);
//       navigate("/login");
//     } catch (error) {
//       alert(error?.response?.data?.errors || "Logout failed");
//     }
//   };

//   return (
//     <div className={`h-full flex flex-col bg-[#232327] transition-transform duration-300
//       ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
//       md:translate-x-0 fixed md:static top-0 left-0 w-72 z-50`}>

//       {/* Top Bar */}
//       <div className="p-4 border-b border-gray-700 flex items-center justify-between">
//         <div className="text-xl font-bold text-white">deepseek</div>
//         <button onClick={() => setShowSidebar(false)} className="text-gray-300 w-6 h-6 md:hidden">
//           <X />
//         </button>
//       </div>

//       {/* Chat History */}
//       <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
//         <button
//           onClick={handleNewChat}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
//         >
//           + New Chat
//         </button>

//         {chatHistory.length === 0 ? (
//           <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
//         ) : (
//           chatHistory.map((title) => (
//             <div
//               key={title}
//               className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${activeTitle === title ? "bg-gray-800" : ""}`}
//               onClick={() => {
//                 setActiveTitle(title);
//                 if (window.innerWidth < 768) setShowSidebar(false);
//               }}
//             >
//               <span className="truncate max-w-[160px]">{title}</span>
//               <div className="relative">
//                 <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
//                   <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
//                 </button>
//                 {showOptions === title && (
//                   <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Pencil className="w-4 h-4" /> Rename
//                     </button>
//                     <button
//                       onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
//                       className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Footer */}
//       <div className="p-4 border-t border-gray-700">
//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
//             <span className="text-gray-300">{user?.firstName || "My Profile"}</span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



import React, { useState, useEffect } from 'react';
import { LogOut, MoreVertical, Trash2, Pencil, X } from "lucide-react";
import profile from "../../public/profile.png";
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Sidebar({ activeTitle, setActiveTitle, setPrompt, showSidebar, setShowSidebar }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const [chatHistory, setChatHistory] = useState([]);
  const [showOptions, setShowOptions] = useState(null);

  const updateChatHistory = () => {
    const history = JSON.parse(localStorage.getItem(`chatHistory_${user?._id}`)) || {};
    setChatHistory(Object.keys(history).reverse()); // Latest chat on top
  };

  useEffect(() => {
    updateChatHistory();
  }, []);

  const handleNewChat = () => {
    const history = JSON.parse(localStorage.getItem(`chatHistory_${user?._id}`)) || {};
    let index = 1;
    let newTitle = `New Chat ${index}`;
    while (history[newTitle]) {
      index++;
      newTitle = `New Chat ${index}`;
    }
    history[newTitle] = [];
    localStorage.setItem(`chatHistory_${user?._id}`, JSON.stringify(history));
    updateChatHistory();
    setActiveTitle(newTitle);
    setPrompt([]);
    if (window.innerWidth < 768) setShowSidebar(false);
  };

  const handleDelete = (title) => {
    const history = JSON.parse(localStorage.getItem(`chatHistory_${user?._id}`)) || {};
    delete history[title];
    localStorage.setItem(`chatHistory_${user?._id}`, JSON.stringify(history));
    updateChatHistory();
    if (activeTitle === title) setActiveTitle("");
  };

  const handleRename = (title) => {
    const newTitle = prompt("Enter new title", title);
    if (!newTitle || newTitle === title) return;
    const history = JSON.parse(localStorage.getItem(`chatHistory_${user?._id}`)) || {};
    history[newTitle] = history[title];
    delete history[title];
    localStorage.setItem(`chatHistory_${user?._id}`, JSON.stringify(history));
    updateChatHistory();
    if (activeTitle === title) setActiveTitle(newTitle);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true
      });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      alert(error?.response?.data?.errors || "Logout failed");
    }
  };

  return (
    <div className={`h-full flex flex-col bg-[#232327] transition-transform duration-300
      ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 fixed md:static top-0 left-0 w-72 z-50`}>

      {/* Top Bar */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <div className="text-xl font-bold text-white">deepseek</div>
        <button onClick={() => setShowSidebar(false)} className="text-gray-300 w-6 h-6 md:hidden">
          <X />
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        <button
          onClick={handleNewChat}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
        >
          + New Chat
        </button>

        {chatHistory.length === 0 ? (
          <div className="text-gray-500 text-sm mt-20 text-center">No chat history yet</div>
        ) : (
          chatHistory.map((title) => (
            <div
              key={title}
              className={`group relative flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-gray-700 ${activeTitle === title ? "bg-gray-800" : ""}`}
              onClick={() => {
                setActiveTitle(title);
                if (window.innerWidth < 768) setShowSidebar(false);
              }}
            >
              <span className="truncate max-w-[160px]">{title}</span>
              <div className="relative">
                <button onClick={(e) => { e.stopPropagation(); setShowOptions(showOptions === title ? null : title); }}>
                  <MoreVertical className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </button>
                {showOptions === title && (
                  <div className="absolute right-0 top-6 z-10 bg-[#2f2f2f] border border-gray-700 rounded-md shadow-lg">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRename(title); setShowOptions(null); }}
                      className="flex items-center gap-2 text-sm text-white px-3 py-2 hover:bg-gray-600 w-full"
                    >
                      <Pencil className="w-4 h-4" /> Rename
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(title); setShowOptions(null); }}
                      className="flex items-center gap-2 text-sm text-red-500 px-3 py-2 hover:bg-gray-600 w-full"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-white cursor-pointer">
            <img className="rounded-full w-8 h-8" src={profile} alt="Profile" />
            <span className="text-gray-300">{user?.firstName || "My Profile"}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-sm gap-2 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <LogOut />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;



