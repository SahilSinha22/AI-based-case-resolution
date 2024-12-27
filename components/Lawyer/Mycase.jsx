"use client";
import React from "react";

const MyCases = () => {
  // Dummy data for illustration
  const cases = [
    { id: 1, title: 'Case 1', status: 'In Progress' },
    { id: 2, title: 'Case 2', status: 'Awaiting Client Response' },
    // More cases...
  ];

  return (
    <div>
      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">My Cases</h1>
        <div className="grid grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{caseItem.title}</h2>
              <p>Status: {caseItem.status}</p>
              <button
            
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCases;
