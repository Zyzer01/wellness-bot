'use client'

import React from "react";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";


const ChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // Simulate a reply from a chatbot or another user
      setTimeout(() => {
        setMessages([...messages, { text: 'I received your message!', sender: 'bot' }]);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col item-center h-screen px-32">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === 'user' ? 'bg-gray-500 text-white' : 'bg-gray-300'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-lg dark:text-white p-3 focus:gray-200 shadow-sm border-gray-200 bg-transparent "
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 bg-transparent dark:border-white border-black border dark:text-white text-black rounded-lg p-3"
          onClick={handleSendMessage}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
