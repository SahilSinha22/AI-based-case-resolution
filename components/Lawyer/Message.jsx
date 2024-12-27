// pages/messages.js
"use client";
import React from "react";
const Messages = () => {
  // Dummy data for illustration
  const messages = [
    { id: 1, sender: 'Client 1', subject: 'Question about case', date: '2024-07-20' },
    { id: 2, sender: 'Client 2', subject: 'Follow-up on case', date: '2024-07-19' },
    // More messages...
  ];

  return (
    <div>
     
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Messages</h1>
        <div className="grid grid-cols-1 gap-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{message.subject}</h2>
              <p>From: {message.sender}</p>
              <p>Date: {message.date}</p>
              <button
               
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
