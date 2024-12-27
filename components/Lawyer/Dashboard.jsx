

// pages/lawyer-dashboard.js


const LawyerDashboard = () => {
  return (
    <div>
  
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome, {/*[Lawyer's Name]*/}</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Active Cases</h2>
            {/* Summary of active cases */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Upcoming Deadlines</h2>
            {/* List of upcoming deadlines */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Recent Activities</h2>
            {/* Summary of recent activities */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;

