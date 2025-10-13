"use client";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Panel</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Applications</h2>
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Applicant</th>
              <th className="p-3 border-b">Visa Type</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">John Silva</td>
              <td className="p-3 border-b">Student Visa</td>
              <td className="p-3 border-b text-yellow-600 font-semibold">Pending</td>
              <td className="p-3 border-b space-x-3">
                <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition">Approve</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
