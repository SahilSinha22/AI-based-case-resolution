// pages/cases/index.js


const ActiveCases = () => {
  const cases = [
    { id: 1, title: "Case 1", description: "Description of Case 1" },
    { id: 2, title: "Case 2", description: "Description of Case 2" },
    // Add more cases as needed
  ];

  return (
    <div>
     
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Active Cases</h1>
        <div className="grid grid-cols-1 gap-6">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{caseItem.title}</h2>
              <p>{caseItem.description}</p>
              <button
               // onClick={() => router.push(`/cases/${caseItem.id}`)}
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

export default ActiveCases;
