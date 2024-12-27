// pages/dashboard.js
"use client";
import React from "react";
const Dashboard = () => {
  return (
    <div>
    
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Judge</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Active Cases</h2>
            <p>View and manage your current cases.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">New Cases</h2>
            <p>Review newly assigned cases.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Case History</h2>
            <p>Access your case history and details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
