"use client";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Applicant Dashboard</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">My Applications</h2>
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Visa Type</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">1</td>
              <td className="p-3 border-b">Tourist Visa</td>
              <td className="p-3 border-b text-green-600 font-semibold">Approved</td>
              <td className="p-3 border-b">Jan 10, 2025</td>
            </tr>
            <tr>
              <td className="p-3 border-b">2</td>
              <td className="p-3 border-b">Business Visa</td>
              <td className="p-3 border-b text-yellow-600 font-semibold">In Review</td>
              <td className="p-3 border-b">Jan 22, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
