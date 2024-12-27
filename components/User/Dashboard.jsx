// pages/index.js

"use client";
import React from "react";
const Dashboard = () => {
  return (
    <div>
      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
            {/* List of recent activities */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            {/* List of notifications */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            {/* Quick access links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
