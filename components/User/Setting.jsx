// pages/settings.js


const Settings = () => {
  return (
    <div>
     
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Change Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            {/* Add more settings fields as needed */}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
