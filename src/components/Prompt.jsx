// // import React from 'react';
// // import { Bot } from 'lucide-react';

// // function Prompt() {
// //   return (
// //    <div>
// //     {/**greeting */}
// //     <div>
// //        <div>
// //         <img src="" alt="" />
// //         <h1>Hi, I'm Deepseek</h1>
// //         </div> 
// //         <p>How can I help you today?</p>
// //     </div>
// // {/**prompt */}
// // <div>
// //     <div>

// //     </div>
// // </div>
// // {/** input box*/}
// // <div>
// //     <div>
// //       <input type="text" placeholder="Message Deepseek" />  
// // <div>
// //     <div><button><Bot/>DeepThink(R1)</button></div>
// // </div>

// //     </div>
// // </div>

// //    </div>
// //   )
// // }

// // export default Prompt;



// import React, { useState } from 'react';
// import { ArrowUp, Bot,Globe, Paperclip } from 'lucide-react';
// import logo from "../../public/logo.png"
// import axios from 'axios';

// function Prompt() {

//   const [inputValue,setInputValue]=useState("")
//   const [typeMessage,setTypeMeassage]=useState("")

//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);

//   //js code for send the message
//   const handleSend=async ()=>{
//     const trimmed=inputValue.trim()
//     if(!trimmed) return
//     setTypeMeassage(trimmed)
//     setInputValue("")
//     setLoading(true)

//     try{
//       const token = localStorage.getItem("token");
// const data=await axios.post("http://localhost:4000/api/v1/deepseekai/prompt",
//   { content:trimmed},
//   headers:{
//     Authorization:`Bearer $(token)`
  
// }
//   withCredentials:true
// }
// )
// setPrompt((prev)=>[...prev,{content:trimmed},
//   {role:"assistant", content:data.reply}
// ])

//     }catch(error){
//       setPrompt((prev)=>[...prev,{content:trimmed},
//   {role:"assistant", content:"Something went wrong"}])
//     }
//     finally{
//       setLoading(false);
//       setTypeMeassage(null);
//     }
//   };

//   const handleKeyDown=(e)=>{
//     if(e.key=="Enter"){
//       handleSend()
//     }
//   }
//   return (
//     <div className="flex flex-col items-center justify-between flex-1 w-full px-4 pb-4">
//       {/* Greeting */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold text-white mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base mt-2">How can I help you today?</p>
//       </div>

//       {/* Prompt */}
//       <div className="w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1">
//         {typeMessage && (
//           <div className="w-full flex justify-end">
//             <div className="bg-blue-700 text-white self-end max-w-[75%] rounded-xl px-4 py-2">
//               {typeMessage}
//               </div>
//             </div>
//         )}
//       </div>

//       {/* Input box */}
//       <div className="w-full max-w-4xl relative mt-auto">
//         <div className="bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md">
//           <input type="text"
//           value={inputValue}
//           onChange={(e)=>setInputValue(e.target.value)} 
//           onKeyDown={handleKeyDown}

//            placeholder="Message Deepseek"
//             className="bg-transparent w-full text-white placeholder-gray-400 text-lg outline-none" />
//           <div className="flex items-center justify-between mt-4 gap-4">
//             <div className="flex gap-2">
//               <button className="flex itmes-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Bot className="h-4 w-4"/>
//                  DeepThink(R1)</button>
//               <button className="flex itmes-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Globe className="w-4 h-4"/>
//                 Search</button>
//             </div>

// <div className="flex items-center gap-2">
//      <button className="text-gray-400 hover:text-white transition">
//         <Paperclip className="w-5 h-5"/>
//         </button>
//     <button 
//     onClick={handleSend}
//     className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white transition">
//         <ArrowUp className="w-4 h-4"/>
//         </button>
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;





// import React, { useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [typeMessage, setTypeMessage] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     setTypeMessage(trimmed);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           },
//           withCredentials: true
//         }
//       );

//       const reply = response.data?.reply || "No response";
//       setPrompt((prev) => [
//         ...prev,
//         { role: "user", content: trimmed },
//         { role: "assistant", content: reply }
//       ]);
//     } catch (error) {
//       console.error(error);
//       setPrompt((prev) => [
//         ...prev,
//         { role: "user", content: trimmed },
//         { role: "assistant", content: "Something went wrong" }
//       ]);
//     } finally {
//       setLoading(false);
//       setTypeMessage("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-between flex-1 w-full px-4 pb-4">
//       {/* Greeting */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold text-white mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base mt-2">How can I help you today?</p>
//       </div>

//       {/* Prompt Messages */}
//       <div className="w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1">
//         {prompt.map((msg, index) => (
//           <div
//             key={index}
//             className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`${
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } text-white max-w-[75%] rounded-xl px-4 py-2`}
//             >
//               {msg.content}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="w-full flex justify-start">
//             <div className="bg-gray-700 text-white max-w-[75%] rounded-xl px-4 py-2 animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Box */}
//       <div className="w-full max-w-4xl relative mt-auto">
//         <div className="bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Message Deepseek"
//             className="bg-transparent w-full text-white placeholder-gray-400 text-lg outline-none"
//           />
//           <div className="flex items-center justify-between mt-4 gap-4">
//             <div className="flex gap-2">
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Bot className="h-4 w-4" />
//                 DeepThink(R1)
//               </button>
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Globe className="w-4 h-4" />
//                 Search
//               </button>
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="text-gray-400 hover:text-white transition">
//                 <Paperclip className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleSend}
//                 className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white transition"
//               >
//                 <ArrowUp className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;












// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {tomorrow as CodeTheme} from 'react-syntax-highlighter/dist/esm/styles/prism';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [typeMessage, setTypeMessage] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [title, setTitle] = useState("Janvi Gupta");

//   // Load chat history from localStorage on mount
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (history[title]) {
//       setPrompt(history[title]);
//     }
//   }, [title]);

//   // Save current chat to localStorage on update
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[title] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt]);


//   //dikhe msg jo hmne likha h while achieving response from backend
//   const promptEndRef = useRef();
//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     setTypeMessage(trimmed);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         }
//       );

//       const reply = response.data?.reply || "No response";
//       setPrompt((prev) => [
//         ...prev,
//         { role: "user", content: trimmed },
//         { role: "assistant", content: reply }
//       ]);
//     } catch (error) {
//       console.error(error);
//       setPrompt((prev) => [
//         ...prev,
//         { role: "user", content: trimmed },
//         { role: "assistant", content: "Something went wrong" }
//       ]);
//     } finally {
//       setLoading(false);
//       setTypeMessage("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault(); // Prevent new line on Enter
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-between flex-1 w-full px-4 pb-4">
//       {/* Greeting */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold text-white mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base mt-2">How can I help you today?</p>
//       </div>

//       {/* Chat Messages */}
//       <div className="w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1">
//         {prompt.map((msg, index) => (
//           <div
//             key={index}
//             className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`${
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } text-white max-w-[75%] rounded-xl px-4 py-2 whitespace-pre-wrap`}
//             >
//               {msg.content}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="w-full flex justify-start">
//             <div className="bg-gray-700 text-white max-w-[75%] rounded-xl px-4 py-2 animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Box */}
//       <div className="w-full max-w-4xl relative mt-auto">
//         <div className="bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md">
//           <textarea
//             rows={2}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Message Deepseek (Shift + Enter for newline)"
//             className="bg-transparent resize-none w-full text-white placeholder-gray-400 text-lg outline-none"
//           />
//           <div className="flex items-center justify-between mt-4 gap-4">
//             <div className="flex gap-2">
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Bot className="h-4 w-4" />
//                 DeepThink(R1)
//               </button>
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Globe className="w-4 h-4" />
//                 Search
//               </button>
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="text-gray-400 hover:text-white transition">
//                 <Paperclip className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleSend}
//                 className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white transition"
//               >
//                 <ArrowUp className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;





// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow as CodeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [title, setTitle] = useState("Janvi Gupta");
//   const promptEndRef = useRef();

//   // Load chat history
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (history[title]) {
//       setPrompt(history[title]);
//     }
//   }, [title]);

//   // Save chat history
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[title] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, title]);

//   // Auto scroll to bottom
//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     setPrompt((prev) => [...prev, { role: "user", content: trimmed }]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       const reply = response.data?.reply || "No response";
//       setPrompt((prev) => [...prev, { role: "assistant", content: reply }]);
//     } catch (error) {
//       console.error(error);
//       setPrompt((prev) => [...prev, { role: "assistant", content: "Something went wrong" }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-between flex-1 w-full px-4 pb-4">
//       {/* Greeting */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold text-white mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base mt-2">How can I help you today?</p>
//       </div>

//       {/* Chat Messages */}
//       <div className="w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1 scroll-smooth">
//         {prompt.map((msg, index) => (
//           <div
//             key={index}
//             className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`$ {
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } text-white max-w-[75%] rounded-xl px-4 py-2 whitespace-pre-wrap`}
//             >
//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 components={{
//                   code({ node, inline, className, children, ...props }) {
//                     const match = /language-(\w+)/.exec(className || "");
//                     return !inline && match ? (
//                       <SyntaxHighlighter style={CodeTheme} language={match[1]} PreTag="div" {...props}>
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     ) : (
//                       <code className={className} {...props}>
//                         {children}
//                       </code>
//                     );
//                   },
//                 }}
//               >
//                 {msg.content}
//               </ReactMarkdown>
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <div className="w-full flex justify-start">
//             <div className="bg-gray-700 text-white max-w-[75%] rounded-xl px-4 py-2 animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}

//         <div ref={promptEndRef} className="h-0"/>
//       </div>

//       {/* Input Box */}
//       <div className="w-full max-w-4xl relative mt-auto">
//         <div className="bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md">
//           <textarea
//             rows={2}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Message Deepseek (Shift + Enter for newline)"
//             className="bg-transparent resize-none w-full text-white placeholder-gray-400 text-lg outline-none"
//           />

//           <div className="flex items-center justify-between mt-4 gap-4">
//             <div className="flex gap-2">
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Bot className="h-4 w-4" /> DeepThink(R1)
//               </button>
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Globe className="w-4 h-4" /> Search
//               </button>
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="text-gray-400 hover:text-white transition">
//                 <Paperclip className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleSend}
//                 className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white transition"
//               >
//                 <ArrowUp className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;




// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotIcon } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [title, setTitle] = useState("Janvi Gupta");

//   const promptEndRef = useRef();

//   // Load chat from localStorage
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (history[title]) {
//       setPrompt(history[title]);
//     }
//   }, [title]);

//   // Save chat to localStorage
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[title] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, title]);

//   // Auto scroll
//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const getTime = () => {
//     const now = new Date();
//     return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     setInputValue("");
//     setLoading(true);

//     const userMessage = { role: "user", content: trimmed, timestamp: getTime() };
//     setPrompt((prev) => [...prev, userMessage]);

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const reply = response.data?.reply || "No response";
//       const assistantMessage = { role: "assistant", content: reply, timestamp: getTime() };
//       setPrompt((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       const errorMsg = {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: getTime(),
//       };
//       setPrompt((prev) => [...prev, errorMsg]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-between flex-1 w-full px-4 pb-4">
//       {/* Greeting */}
//       <div className="mt-16 text-center">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold text-white mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base mt-2">How can I help you today?</p>
//       </div>

//       {/* Messages */}
//       <div className="w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-6 space-y-4 px-1 max-h-[60vh]">
//         {prompt.map((msg, index) => (
//           <div
//             key={index}
//             className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div className="flex items-end gap-2 max-w-[75%]">
//               {/* Avatar */}
//               {msg.role === "assistant" ? (
//                 <div className="bg-gray-700 p-2 rounded-full">
//                   <BotIcon className="w-5 h-5 text-white" />
//                 </div>
//               ) : null}

//               <div
//                 className={`${
//                   msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//                 } text-white rounded-xl px-4 py-2 whitespace-pre-wrap`}
//               >
//                 <p>{msg.content}</p>
//                 <p className="text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</p>
//               </div>

//               {/* User Avatar */}
//               {msg.role === "user" ? (
//                 <div className="bg-blue-700 p-2 rounded-full">
//                   <UserCircle className="w-5 h-5 text-white" />
//                 </div>
//               ) : null}
//             </div>
//           </div>
//         ))}

//         {/* Loading... */}
//         {loading && (
//           <div className="w-full flex justify-start">
//             <div className="bg-gray-700 text-white max-w-[75%] rounded-xl px-4 py-2 animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}

//         <div ref={promptEndRef} />
//       </div>

//       {/* Input */}
//       <div className="w-full max-w-4xl relative mt-auto">
//         <div className="bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md">
//           <textarea
//             rows={2}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Message Deepseek (Shift + Enter for newline)"
//             className="bg-transparent resize-none w-full text-white placeholder-gray-400 text-lg outline-none"
//           />
//           <div className="flex items-center justify-between mt-4 gap-4">
//             <div className="flex gap-2">
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Bot className="h-4 w-4" />
//                 DeepThink(R1)
//               </button>
//               <button className="flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//                 <Globe className="w-4 h-4" />
//                 Search
//               </button>
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="text-gray-400 hover:text-white transition">
//                 <Paperclip className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={handleSend}
//                 className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white transition"
//               >
//                 <ArrowUp className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;






// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotMessageSquare } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const promptEndRef = useRef();

//   // Scroll to latest message
//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString()
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Something went wrong",
//           timestamp: new Date().toLocaleTimeString()
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
//       {/* Header */}
//       <div className="text-center mt-6">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl mx-auto w-full space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${
//               msg.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap`}
//             >
//               <p>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Box */}
//       <div className="w-full max-w-4xl mx-auto p-4 bg-[#2f2f2f] rounded-t-xl">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek (Shift + Enter for newline)"
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex gap-2">
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Bot className="h-4 w-4" />
//               DeepThink(R1)
//             </button>
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Globe className="w-4 h-4" />
//               Search
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <button className="text-gray-400 hover:text-white">
//               <Paperclip className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleSend}
//               className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;





// import React, { useRef, useEffect, useState, use } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotMessageSquare } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt() {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const promptEndRef = useRef();


// useEffect(() => {
//   const user=JSON.parse(localStorage.getItem("user"));
//   const storePrompt=localStorage.getItem(`promptHistory_${user._id}`);
//   if (storePrompt) {
//     setPrompt(JSON.parse(storePrompt));
//   }
// },[]);

// useEffect(() => {
//   const user=JSON.parse(localStorage.getItem("user"));
//   localStorage.setItem(`promptHistory_${user._id}`, JSON.stringify(prompt));
// },[prompt]);


//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString()
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Something went wrong",
//           timestamp: new Date().toLocaleTimeString()
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="text-center mt-6">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${
//               msg.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap`}
//             >
//               <p>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Box */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek (Shift + Enter for newline)"
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex gap-2">
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Bot className="h-4 w-4" />
//               DeepThink(R1)
//             </button>
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Globe className="w-4 h-4" />
//               Search
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <button className="text-gray-400 hover:text-white">
//               <Paperclip className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleSend}
//               className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;







// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotMessageSquare } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt({ activeTitle, prompt, setPrompt }) {
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (activeTitle && history[activeTitle]) {
//       setPrompt(history[activeTitle]);
//     }
//   }, [activeTitle]);

//   useEffect(() => {
//     if (!activeTitle) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[activeTitle] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, activeTitle]);

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed || !activeTitle) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString()
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString()
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       <div className="text-center mt-6">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div key={idx} className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//             {msg.role === "assistant" && <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />}
//             <div className={`${msg.role === "user" ? "bg-blue-700" : "bg-gray-700"} px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap`}>
//               <p>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && <UserCircle className="w-6 h-6 text-green-400 mt-1" />}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">Thinking...</div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek (Shift + Enter for newline)"
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex gap-2">
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Bot className="h-4 w-4" /> DeepThink(R1)
//             </button>
//             <button className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Globe className="w-4 h-4" /> Search
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <button className="text-gray-400 hover:text-white">
//               <Paperclip className="w-5 h-5" />
//             </button>
//             <button onClick={handleSend} className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white">
//               <ArrowUp className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;







// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotMessageSquare } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt({ activeTitle, setPrompt, prompt }) {
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async (type = "default", file = null) => {
//     const trimmed = inputValue.trim();
//     if (!trimmed && !file) return;

//     const userMessage = {
//       role: "user",
//       content: file ? "Uploaded an image" : trimmed,
//       timestamp: new Date().toLocaleTimeString()
//     };

//     const updatedPrompt = [...prompt, userMessage];
//     setPrompt(updatedPrompt);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       let response;

//       if (file) {
//         const formData = new FormData();
//         formData.append("image", file);

//         response = await axios.post(
//           "http://localhost:4000/api/v1/deepseekai/image",
//           formData,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           }
//         );
//       } else if (type === "deepthink") {
//         response = await axios.post(
//           "http://localhost:4000/api/v1/deepseekai/prompt/r1",
//           { content: trimmed },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           }
//         );
//       } else if (type === "search") {
//         response = await axios.post(
//           "http://localhost:4000/api/v1/deepseekai/search",
//           { query: trimmed },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           }
//         );
//       } else {
//         response = await axios.post(
//           "http://localhost:4000/api/v1/deepseekai/prompt",
//           { content: trimmed },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           }
//         );
//       }

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString()
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Something went wrong.",
//           timestamp: new Date().toLocaleTimeString()
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) handleSend("file", file);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="text-center mt-6">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${
//               msg.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${
//                 msg.role === "user" ? "bg-blue-700" : "bg-gray-700"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap`}
//             >
//               <p>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Box */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek (Shift + Enter for newline)"
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex gap-2">
//             <button
//               onClick={() => handleSend("deepthink")}
//               className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition"
//             >
//               <Bot className="h-4 w-4" />
//               DeepThink(R1)
//             </button>
//             <button
//               onClick={() => handleSend("search")}
//               className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition"
//             >
//               <Globe className="w-4 h-4" />
//               Search
//             </button>
//           </div>
//           <div className="flex gap-2 items-center">
//             <label className="cursor-pointer text-gray-400 hover:text-white">
//               <Paperclip className="w-5 h-5" />
//               <input type="file" accept="image/*" hidden onChange={handleFileUpload} />
//             </label>
//             <button
//               onClick={() => handleSend()}
//               className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;





// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, Bot, Globe, Paperclip, UserCircle, BotMessageSquare } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';

// function Prompt({ activeTitle, prompt, setPrompt }) {
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (activeTitle) {
//       history[activeTitle] = prompt;
//       localStorage.setItem("chatHistory", JSON.stringify(history));
//     }
//   }, [prompt, activeTitle]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed || !activeTitle) return;

//     const userMessage = { role: "user", content: trimmed, timestamp: new Date().toLocaleTimeString() };
//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("http://localhost:4000/api/v1/deepseekai/prompt", { content: trimmed }, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });

//       const aiReply = { role: "assistant", content: response.data?.reply || "No response", timestamp: new Date().toLocaleTimeString() };
//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, { role: "assistant", content: "Something went wrong", timestamp: new Date().toLocaleTimeString() }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !activeTitle) return;

//     const formData = new FormData();
//     formData.append("image", file);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("http://localhost:4000/api/v1/deepseekai/image", formData, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });

//       const aiReply = { role: "assistant", content: response.data?.reply || "No image response", timestamp: new Date().toLocaleTimeString() };
//       setPrompt(prev => [...prev, aiReply]);
//     } catch {
//       setPrompt(prev => [...prev, { role: "assistant", content: "Image upload failed", timestamp: new Date().toLocaleTimeString() }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeepThink = async () => {
//     if (!inputValue.trim()) return;
//     const token = localStorage.getItem("token");
//     const res = await axios.post("http://localhost:4000/api/v1/deepseekai/prompt/r1", { content: inputValue }, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true,
//     });
//     setPrompt(prev => [...prev, { role: "assistant", content: res.data?.reply || "No response", timestamp: new Date().toLocaleTimeString() }]);
//     setInputValue("");
//   };

//   const handleSearch = async () => {
//     if (!inputValue.trim()) return;
//     const token = localStorage.getItem("token");
//     const res = await axios.post("http://localhost:4000/api/v1/deepseekai/search", { query: inputValue }, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true,
//     });
//     setPrompt(prev => [...prev, { role: "assistant", content: res.data?.results || "No search result", timestamp: new Date().toLocaleTimeString() }]);
//     setInputValue("");
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       <div className="text-center mt-6">
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Display */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div key={idx} className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//             {msg.role === "assistant" && <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />}
//             <div className={`${msg.role === "user" ? "bg-blue-700" : "bg-gray-700"} px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap`}>
//               <p>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && <UserCircle className="w-6 h-6 text-green-400 mt-1" />}
//           </div>
//         ))}
//         {loading && <div className="flex items-start gap-3"><BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" /><div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">Thinking...</div></div>}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Section */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
//           placeholder="Message Deepseek "
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex gap-2">
//             <button onClick={handleDeepThink} className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Bot className="h-4 w-4" /> DeepThink(R1)
//             </button>
//             <button onClick={handleSearch} className="flex items-center gap-2 border border-gray-500 text-white px-3 py-1.5 rounded-full hover:bg-gray-600 transition">
//               <Globe className="w-4 h-4" /> Search
//             </button>
//           </div>
//           <div className="flex gap-2 items-center">
//             <label className="cursor-pointer text-gray-400 hover:text-white">
//               <Paperclip className="w-5 h-5" />
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//             </label>
//             <button onClick={handleSend} className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white">
//               <ArrowUp className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;




// // ✅ Prompt.jsx with emojis, AI formatting, and responsive sidebar trigger
// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, UserCircle, BotMessageSquare, Smile, Menu } from 'lucide-react';
// import logo from "../../public/logo.png";
// import axios from 'axios';
// import Picker from 'emoji-picker-react';

// function Prompt({ activeTitle }) {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showEmoji, setShowEmoji] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setPrompt(history[activeTitle] || []);
//   }, [activeTitle]);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (activeTitle) {
//       history[activeTitle] = prompt;
//       localStorage.setItem("chatHistory", JSON.stringify(history));
//     }
//   }, [prompt, activeTitle]);

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString(),
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const onEmojiClick = (emojiObject) => {
//     setInputValue(prev => prev + emojiObject.emoji);
//     setShowEmoji(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b border-gray-700">
//         <div className="flex items-center gap-2">
//           <button className="lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>
//             <Menu className="text-white" />
//           </button>
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-2xl font-semibold">Hi, I'm Deepseek</h1>
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${msg.role === "user" ? "bg-blue-700" : "bg-gradient-to-r from-gray-600 to-gray-800"} px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow`}
//             >
//               <p className="leading-relaxed">
//                 {msg.content}
//               </p>
//               <span className="block text-xs text-gray-300 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Box */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <div className="relative">
//           <textarea
//             rows={2}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Message Deepseek "
//             className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none pr-10"
//           />
//           <button
//             onClick={() => setShowEmoji(!showEmoji)}
//             className="absolute right-12 top-2 text-gray-300 hover:text-white"
//           >
//             <Smile className="w-6 h-6" />
//           </button>
//           {showEmoji && (
//             <div className="absolute bottom-16 right-4 z-20">
//               <Picker onEmojiClick={onEmojiClick} theme="dark" />
//             </div>
//           )}
//         </div>
//         <div className="flex justify-end mt-2">
//           <button
//             onClick={handleSend}
//             className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white"
//           >
//             <ArrowUp className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;




// ✅ Prompt.jsx (Updated: emoji beside arrow, search/deepthink removed, AI code colorized, sidebar toggle added)
// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, BotMessageSquare, UserCircle, Menu } from 'lucide-react';
// import logo from "../../public/logo.png";
// import Picker from "emoji-picker-react";
// import axios from 'axios';

// function Prompt({ activeTitle }) {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     setPrompt(history[activeTitle] || []);
//   }, [activeTitle]);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     if (activeTitle) {
//       history[activeTitle] = prompt;
//       localStorage.setItem("chatHistory", JSON.stringify(history));
//     }
//   }, [prompt, activeTitle]);

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString(),
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const onEmojiClick = (emojiData) => {
//     setInputValue(prev => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="text-center mt-6 relative">
//         <button onClick={() => setShowSidebar(!showSidebar)} className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
//           <Menu className="w-6 h-6 text-white" />
//         </button>
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${msg.role === "user" ? "bg-blue-700 text-white" : "bg-[#2d2d2d] text-[#a3e635]"} px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow-md border border-gray-600`}
//             >
//               <p className={msg.role === "assistant" ? "font-mono text-sm leading-relaxed" : ""}>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Box */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek "
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-end mt-2 gap-2 relative">
//           <div className="flex gap-2">
//             <button
//               onClick={() => setShowEmojiPicker(prev => !prev)}
//               className="text-white text-3xl hover:text-white"
//             >
//               😊
//             </button>
//             {showEmojiPicker && (
//               <div className="absolute bottom-20 left-6 z-10">
//                 <Picker onEmojiClick={onEmojiClick} theme="dark" />
//               </div>
//             )}
//           </div>
//           <button
//             onClick={handleSend}
//             className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;



// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, BotMessageSquare, UserCircle, Menu } from 'lucide-react';
// import logo from "../../public/logo.png";
// import Picker from "emoji-picker-react";
// import axios from 'axios';

// function Prompt({ activeTitle }) {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const promptEndRef = useRef();

//   // ✅ Load chat from localStorage with fallback title
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     const fallbackTitle = activeTitle || Object.keys(history)[0] || "New Chat";
//     setPrompt(history[fallbackTitle] || []);
//   }, [activeTitle]);

//   // ✅ Save chat to localStorage
//   useEffect(() => {
//     if (!activeTitle) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[activeTitle] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, activeTitle]);

//   // Scroll to bottom when prompt updates
//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   // Send message
//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString(),
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const onEmojiClick = (emojiData) => {
//     setInputValue(prev => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="text-center mt-6 relative">
//         <button onClick={() => setShowSidebar(true)} className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
//           <Menu className="w-6 h-6 text-white" />
//         </button>
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${msg.role === "user"
//                 ? "bg-blue-700 text-white"
//                 : "bg-[#2d2d2d] text-[#a3e635]"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow-md border border-gray-600`}
//             >
//               <p className={msg.role === "assistant" ? "font-mono text-sm leading-relaxed" : ""}>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek "
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-end mt-2 gap-2 relative">
//           {/* Emoji */}
//           <button
//             onClick={() => setShowEmojiPicker(prev => !prev)}
//             className="text-white text-2xl"
//           >
//             😊
//           </button>
//           {showEmojiPicker && (
//             <div className="absolute bottom-16 right-14 z-20">
//               <Picker onEmojiClick={onEmojiClick} theme="dark" />
//             </div>
//           )}

//           {/* Send */}
//           <button
//             onClick={handleSend}
//             className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;






// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, BotMessageSquare, UserCircle, Menu } from 'lucide-react';
// import logo from "../../public/logo.png";
// import Picker from "emoji-picker-react";
// import axios from 'axios';
// import { use } from 'react';

// function Prompt({ activeTitle, setShowSidebar }) {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const promptEndRef = useRef();


//   useEffect(() => {
//     const user=JSON.parse(localStorage.getItem("user"));
//     const storedPrompt=localStorage.getItem(`promptHistory_${user._id}`);
//     if (storedPrompt) {
//       setPrompt(JSON.parse(storedPrompt));  
//     }
//   }, []);

//   useEffect(() => {
//     const user=JSON.parse(localStorage.getItem("user"));  
//     localStorage.setItem(`promptHistory_${user._id}`, JSON.stringify(prompt));
//   }, [prompt]);

//   //  Load chat on title change
//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     const fallbackTitle = activeTitle || Object.keys(history)[0] || "New Chat";
//     setPrompt(history[fallbackTitle] || []);
//   }, [activeTitle]);

//   //  Save chat when prompt updates
//   useEffect(() => {
//     if (!activeTitle) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[activeTitle] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, activeTitle]);

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString(),
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const onEmojiClick = (emojiData) => {
//     setInputValue(prev => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       {/* Header */}
//       <div className="text-center mt-6 relative">
//         {/* Menu icon for mobile/split */}
//         <button
//           onClick={() => setShowSidebar(true)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden"
//         >
//           <Menu className="w-6 h-6 text-white" />
//         </button>
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${msg.role === "user"
//                 ? "bg-blue-700 text-white"
//                 : "bg-[#2d2d2d] text-[#a3e635]"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow-md border border-gray-600`}
//             >
//               <p className={msg.role === "assistant" ? "font-mono text-sm leading-relaxed" : ""}>{msg.content}</p>
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek "
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-end mt-2 gap-2 relative">
//           <button
//             onClick={() => setShowEmojiPicker(prev => !prev)}
//             className="text-white text-2xl"
//           >
//             😊
//           </button>
//           {showEmojiPicker && (
//             <div className="absolute bottom-16 right-14 z-20">
//               <Picker onEmojiClick={onEmojiClick} theme="dark" />
//             </div>
//           )}
//           <button
//             onClick={handleSend}
//             className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;





// import React, { useRef, useEffect, useState } from 'react';
// import { ArrowUp, BotMessageSquare, UserCircle, Menu } from 'lucide-react';
// import logo from "../../public/logo.png";
// import Picker from "emoji-picker-react";
// import axios from 'axios';

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

// function Prompt({ activeTitle, setShowSidebar }) {
//   const [inputValue, setInputValue] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const promptEndRef = useRef();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const storedPrompt = localStorage.getItem(`promptHistory_${user._id}`);
//     if (storedPrompt) setPrompt(JSON.parse(storedPrompt));
//   }, []);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     localStorage.setItem(`promptHistory_${user._id}`, JSON.stringify(prompt));
//   }, [prompt]);

//   useEffect(() => {
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     const fallbackTitle = activeTitle || Object.keys(history)[0] || "New Chat";
//     setPrompt(history[fallbackTitle] || []);
//   }, [activeTitle]);

//   useEffect(() => {
//     if (!activeTitle) return;
//     const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
//     history[activeTitle] = prompt;
//     localStorage.setItem("chatHistory", JSON.stringify(history));
//   }, [prompt, activeTitle]);

//   useEffect(() => {
//     promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [prompt, loading]);

//   const handleSend = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed) return;

//     const userMessage = {
//       role: "user",
//       content: trimmed,
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setPrompt(prev => [...prev, userMessage]);
//     setInputValue("");
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/deepseekai/prompt",
//         { content: trimmed },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );

//       const aiReply = {
//         role: "assistant",
//         content: response.data?.reply || "No response",
//         timestamp: new Date().toLocaleTimeString(),
//       };

//       setPrompt(prev => [...prev, aiReply]);
//     } catch (error) {
//       setPrompt(prev => [...prev, {
//         role: "assistant",
//         content: "Something went wrong",
//         timestamp: new Date().toLocaleTimeString(),
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const onEmojiClick = (emojiData) => {
//     setInputValue(prev => prev + emojiData.emoji);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
//       <div className="text-center mt-6 relative">
//         <button
//           onClick={() => setShowSidebar(true)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden"
//         >
//           <Menu className="w-6 h-6 text-white" />
//         </button>
//         <div className="flex items-center justify-center gap-2">
//           <img src={logo} alt="Deepseek Logo" className="h-8" />
//           <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
//         </div>
//         <p className="text-gray-400 text-base">How can I help you today?</p>
//       </div>

//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//         {prompt.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {msg.role === "assistant" && (
//               <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             )}
//             <div
//               className={`${msg.role === "user"
//                 ? "bg-blue-700 text-white"
//                 : "bg-[#2d2d2d] text-[#a3e635]"
//               } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow-md border border-gray-600`}
//             >
//               {msg.role === "assistant" ? (
//                 <div className="prose prose-invert max-w-none">
//                   <ReactMarkdown
//                     children={msg.content}
//                     remarkPlugins={[remarkGfm]}
//                     rehypePlugins={[rehypeHighlight]}
//                   />
//                 </div>
//               ) : (
//                 <p>{msg.content}</p>
//               )}
//               <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
//             </div>
//             {msg.role === "user" && (
//               <UserCircle className="w-6 h-6 text-green-400 mt-1" />
//             )}
//           </div>
//         ))}
//         {loading && (
//           <div className="flex items-start gap-3">
//             <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
//             <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
//               Thinking...
//             </div>
//           </div>
//         )}
//         <div ref={promptEndRef} />
//       </div>

//       <div className="w-full px-6 py-4 bg-[#2f2f2f]">
//         <textarea
//           rows={2}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Message Deepseek "
//           className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
//         />
//         <div className="flex items-center justify-end mt-2 gap-2 relative">
//           <button
//             onClick={() => setShowEmojiPicker(prev => !prev)}
//             className="text-white text-2xl"
//           >
//             😊
//           </button>
//           {showEmojiPicker && (
//             <div className="absolute bottom-16 right-14 z-20">
//               <Picker onEmojiClick={onEmojiClick} theme="dark" />
//             </div>
//           )}
//           <button
//             onClick={handleSend}
//             className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Prompt;




import React, { useRef, useEffect, useState } from 'react';
import { ArrowUp, BotMessageSquare, UserCircle, Menu } from 'lucide-react';
import logo from "../../public/logo.png";
import Picker from "emoji-picker-react";
import axios from 'axios';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Prompt({ activeTitle, setShowSidebar }) {
  const [inputValue, setInputValue] = useState("");
  const [prompt, setPrompt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const promptEndRef = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const storedPrompt = localStorage.getItem(`promptHistory_${user._id}`);
    if (storedPrompt) setPrompt(JSON.parse(storedPrompt));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(`promptHistory_${user._id}`, JSON.stringify(prompt));
  }, [prompt]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const fallbackTitle = activeTitle || Object.keys(history)[0] || "New Chat";
    setPrompt(history[fallbackTitle] || []);
  }, [activeTitle]);

  useEffect(() => {
    if (!activeTitle) return;
    const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
    history[activeTitle] = prompt;
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }, [prompt, activeTitle]);

  useEffect(() => {
    promptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [prompt, loading]);

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage = {
      role: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString(),
    };

    setPrompt(prev => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/api/v1/deepseekai/prompt",
        { content: trimmed },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      const aiReply = {
        role: "assistant",
        content: response.data?.reply || "No response",
        timestamp: new Date().toLocaleTimeString(),
      };

      setPrompt(prev => [...prev, aiReply]);
    } catch (error) {
      setPrompt(prev => [...prev, {
        role: "assistant",
        content: "Something went wrong",
        timestamp: new Date().toLocaleTimeString(),
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const onEmojiClick = (emojiData) => {
    setInputValue(prev => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden w-full">
      <div className="text-center mt-6 relative">
        <button
          onClick={() => setShowSidebar(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="Deepseek Logo" className="h-8" />
          <h1 className="text-3xl font-semibold mb-2">Hi, I'm Deepseek</h1>
        </div>
        <p className="text-gray-400 text-base">How can I help you today?</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 mx-4"> {/* Added mx-4 for left and right margins */}
        {prompt.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
            )}
            <div
              className={`${msg.role === "user"
                ? "bg-blue-700 text-white"
                : "bg-[#2d2d2d] text-[#a3e635]"
              } px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap shadow-md border border-gray-600`}
            >
              {msg.role === "assistant" ? (
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    children={msg.content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  />
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
              <span className="block text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</span>
            </div>
            {msg.role === "user" && (
              <UserCircle className="w-6 h-6 text-green-400 mt-1" />
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-start gap-3">
            <BotMessageSquare className="w-6 h-6 text-blue-400 mt-1" />
            <div className="bg-gray-700 px-4 py-2 rounded-xl animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={promptEndRef} />
      </div>

      <div className="w-[calc(100%-0.5rem)] mx-auto mb-6 bg-[#2f2f2f] rounded-3xl max-w-5xl">
  <div className="px-7 py-5">
          <textarea
            rows={2}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Deepseek "
            className="w-full bg-transparent resize-none text-white placeholder-gray-400 text-lg outline-none"
          />
          <div className="flex items-center justify-end mt-2 gap-2 relative">
            <button
              onClick={() => setShowEmojiPicker(prev => !prev)}
              className="text-white text-2xl"
            >
              😊
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-16 right-14 z-20">
                <Picker onEmojiClick={onEmojiClick} theme="dark" />
              </div>
            )}
            <button
              onClick={handleSend}
              className="bg-gray-500 hover:bg-blue-900 p-2 rounded-full text-white"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prompt;
