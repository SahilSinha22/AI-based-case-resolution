// pages/messages.js


const Messages = () => {
  const messages = [
    { id: 1, from: "Lawyer 1", message: "Message from Lawyer 1" },
    { id: 2, from: "Client 1", message: "Message from Client 1" },
    // Add more messages as needed
  ];

  return (
    <div>
   
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6">Messages</h1>
        <div className="grid grid-cols-1 gap-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{message.from}</h2>
              <p>{message.message}</p>
              <button
               // onClick={() => router.push(`/messages/${message.id}`)}
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

export default Messages;
