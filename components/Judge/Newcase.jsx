// pages/new-cases.js
"use client";
import React from "react";

const NewCases = () => {
  const newCases = [
    { id: 3, title: "Case 3", description: "Description of Case 3" },
    { id: 4, title: "Case 4", description: "Description of Case 4" },
    // Add more new cases as needed
  ];

  return (
    <div>
   
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">New Cases</h1>
        <div className="grid grid-cols-1 gap-6">
          {newCases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{caseItem.title}</h2>
              <p>{caseItem.description}</p>
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

export default NewCases;
