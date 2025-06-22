


import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Prompt from '../components/Prompt';

function Home() {
  // Load activeTitle from localStorage on first render
  const [activeTitle, setActiveTitle] = useState(() => {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || {};
    return Object.keys(history)[0] || "";
  });

  const [prompt, setPrompt] = useState([]);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768); // sidebar visible on desktop

  //  Responsive handling on screen resize
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
