"use client";
import Link from "next/link";

export default function BusinessVisa() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Business Visa</h1>
        <p className="text-gray-600 mb-8">
          Attend meetings, conferences, or business events abroad with our hassle-free Business Visa support.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md text-left space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Required Documents</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Valid Passport</li>
            <li>Invitation letter from host company</li>
            <li>Company registration or employment letter</li>
            <li>Bank statements for the last 3 months</li>
            <li>Travel itinerary</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Processing Time</h2>
          <p className="text-gray-700">5–8 working days depending on embassy workload.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Service Fee</h2>
          <p className="text-gray-700">LKR 20,000 (includes document review and embassy coordination).</p>
        </div>

        <Link
          href="/apply"
          className="inline-block mt-10 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Apply for Business Visa
        </Link>
      </div>
    </main>
  );
}
