// pages/profile.js


const Profile = () => {
  return (
    <div>
      
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              {/* Add more fields as needed */}
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
