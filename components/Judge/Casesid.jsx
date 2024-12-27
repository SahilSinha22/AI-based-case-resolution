// pages/cases/[id].js
"use client";
import React from "react";


const CaseDetails = () => {



  return (
    <div>
    
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Case Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Case {/*#{id}*/}</h2>
          <p>Details about the case...</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Judgment</button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
