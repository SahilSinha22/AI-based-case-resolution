// pages/history.js
import NavBar from '@/components/NavBar';

const CaseHistory = () => {
  const historyCases = [
    { id: 5, title: "Case 5", description: "Description of Case 5" },
    { id: 6, title: "Case 6", description: "Description of Case 6" },
    // Add more history cases as needed
  ];

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Case History</h1>
        <div className="grid grid-cols-1 gap-6">
          {historyCases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{caseItem.title}</h2>
              <p>{caseItem.description}</p>
              <button
                onClick={() => router.push(`/cases/${caseItem.id}`)}
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

export default CaseHistory;
