
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
