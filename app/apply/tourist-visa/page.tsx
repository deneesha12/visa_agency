"use client";
import Link from "next/link";

export default function TouristVisa() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Tourist Visa</h1>
        <p className="text-gray-600 mb-8">
          Explore the world with ease! Our Tourist Visa service helps you apply quickly and securely.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md text-left space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Required Documents</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Valid Passport (minimum 6 months validity)</li>
            <li>Recent passport-sized photo</li>
            <li>Confirmed return flight ticket</li>
            <li>Proof of accommodation</li>
            <li>Travel insurance details</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Processing Time</h2>
          <p className="text-gray-700">Usually takes 7–10 working days depending on the destination.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Service Fee</h2>
          <p className="text-gray-700">LKR 15,000 (includes consultation and application handling).</p>
        </div>

        <Link
          href="/apply"
          className="inline-block mt-10 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Apply for Tourist Visa
        </Link>
      </div>
    </main>
  );
}
