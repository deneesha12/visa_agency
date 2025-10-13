"use client";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Visa Application Form
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Passport Number</label>
            <input
              type="text"
              placeholder="Enter your passport number"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Visa Type</label>
            <select className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none">
              <option>Tourist Visa</option>
              <option>Business Visa</option>
              <option>Student Visa</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Upload Documents</label>
            <input
              type="file"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
