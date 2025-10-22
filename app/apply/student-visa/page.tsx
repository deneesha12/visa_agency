"use client";
import Link from "next/link";

export default function StudentVisa() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Student Visa</h1>
        <p className="text-gray-600 mb-8">
          Start your academic journey abroad! We guide you through every step of your student visa process.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md text-left space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Required Documents</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Valid Passport</li>
            <li>University/College admission letter</li>
            <li>Proof of tuition fee payment</li>
            <li>Bank statements (for financial support)</li>
            <li>Medical and police clearance certificates</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Processing Time</h2>
          <p className="text-gray-700">Varies from 2–4 weeks depending on destination country.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Service Fee</h2>
          <p className="text-gray-700">LKR 18,000 (includes consultation and file preparation).</p>
        </div>

        <Link
          href="/apply"
          className="inline-block mt-10 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Apply for Student Visa
        </Link>
      </div>
    </main>
  );
}
