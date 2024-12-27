// pages/new-case.js


const NewCase = () => {
  return (
    <div>
    
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Submit a New Case</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Case Title</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Case</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
