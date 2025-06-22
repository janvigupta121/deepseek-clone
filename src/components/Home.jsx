// // import React from 'react'
// // import Sidebar from './Sidebar';
// // import Prompt from './Prompt';
// // function Home() {
// // return <div className="flex h-screen bd-[#1e1e1e] text-white">
// //     {/** sidebar ka code jha rhega*/}
// //     <div className="w-64 bg-[#232327]"><Sidebar/></div>
// //     {/**prompt */}
// //     <div className="flex-1 flex flex-col w-full">
// //         <div className="flex-1 flex items-center justify-center px-6"><Prompt/></div>
// //     </div>

// // </div>
// // }

// // export default Home




// import React from 'react';
// import Sidebar from './Sidebar';
// import Prompt from './Prompt';

// function Home() {
//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-[#232327]">
//         <Sidebar />
//       </div>

//       {/* Prompt */}
//       <div className="flex-1 flex flex-col w-full">
//         <div className="flex-1 flex items-center justify-center px-6">
//           <Prompt />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;










// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Prompt from './Prompt';

// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-[#232327]">
//         <Sidebar 
//           activeTitle={activeTitle} 
//           setActiveTitle={setActiveTitle} 
//           setPrompt={setPrompt} 
//         />
//       </div>

//       {/* Prompt */}
//       <div className="flex-1 flex flex-col w-full">
//         <div className="flex-1 flex items-center justify-center px-6">
//           <Prompt 
//             activeTitle={activeTitle} 
//             prompt={prompt} 
//             setPrompt={setPrompt} 
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Prompt from './Prompt';

// const [showSidebar, setShowSidebar] = useState(false);


// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
//       <div className="w-64 bg-[#232327]">
//         <Sidebar
//           activeTitle={activeTitle}
//           setActiveTitle={setActiveTitle}
//           setPrompt={setPrompt}
//         />
//       </div>

//       <div className="flex-1 flex flex-col w-full">
//         <div className="flex-1 flex items-center justify-center px-6">
//           <Prompt
//             activeTitle={activeTitle}
//             prompt={prompt}
//             setPrompt={setPrompt}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;







// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Prompt from './Prompt';

// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(true);

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
//       {/* Sidebar */}
//       {showSidebar && (
//         <div className="w-64 bg-[#232327] hidden md:block md:flex-shrink-0">
//           <Sidebar
//             showSidebar={showSidebar}
//             setShowSidebar={setShowSidebar}
//             activeTitle={activeTitle}
//             setActiveTitle={setActiveTitle}
//             setPrompt={setPrompt}
//           />
//         </div>
//       )}

//       {/* Prompt */}
//       <div className="flex-1 flex flex-col w-full">
//         <div className="flex-1 flex items-center justify-center px-6">
//           <Prompt
//             activeTitle={activeTitle}
//             showSidebar={showSidebar}
//             setShowSidebar={setShowSidebar}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




// ✅ Home.jsx
// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Prompt from '../components/Prompt';

// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // show by default on desktop

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar
//         showSidebar={showSidebar}
//         setShowSidebar={setShowSidebar}
//         activeTitle={activeTitle}
//         setActiveTitle={setActiveTitle}
//         setPrompt={setPrompt}
//       />
//       <div className="flex-1">
//         <Prompt
//           activeTitle={activeTitle}
//           setShowSidebar={setShowSidebar}
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;





// import React, { useState, useEffect } from 'react'; // ✅ useEffect included
// import Sidebar from '../components/Sidebar';
// import Prompt from '../components/Prompt';

// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(true); // Always show on load

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setShowSidebar(true);  // Desktop = always show
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar
//         showSidebar={showSidebar}
//         setShowSidebar={setShowSidebar}
//         activeTitle={activeTitle}
//         setActiveTitle={setActiveTitle}
//         setPrompt={setPrompt}
//       />
//       <div className="flex-1">
//         <Prompt
//           activeTitle={activeTitle}
//           setShowSidebar={setShowSidebar}
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;





// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Prompt from '../components/Prompt';

// function Home() {
//   const [activeTitle, setActiveTitle] = useState("");
//   const [prompt, setPrompt] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // default: visible on desktop

//   // 👇 When screen resizes, toggle sidebar visibility for responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setShowSidebar(true); // desktop
//       } else {
//         setShowSidebar(false); // mobile
//       }
//     };
//     handleResize(); // set on load
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar
//         showSidebar={showSidebar}
//         setShowSidebar={setShowSidebar}
//         activeTitle={activeTitle}
//         setActiveTitle={setActiveTitle}
//         setPrompt={setPrompt}
//       />
//       <div className="flex-1">
//         <Prompt
//           activeTitle={activeTitle}
//           setShowSidebar={setShowSidebar} // 👈 send to open sidebar from menu
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;




import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Prompt from '../components/Prompt';

function Home() {
  // ✅ Load activeTitle from localStorage on first render
  const [activeTitle, setActiveTitle] = useState(() => {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
    return Object.keys(history)[0] || "";
  });

  const [prompt, setPrompt] = useState([]);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // sidebar visible on desktop

  // 👇 Responsive handling on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true); // desktop view
      } else {
        setShowSidebar(false); // mobile/split view
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        activeTitle={activeTitle}
        setActiveTitle={setActiveTitle}
        setPrompt={setPrompt}
      />
      <div className="flex-1">
        <Prompt
          activeTitle={activeTitle}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </div>
  );
}

export default Home;
