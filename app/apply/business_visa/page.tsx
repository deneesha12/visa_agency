"use client";

export default function BusinessVisaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Business Visa Services
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Travel for meetings, conferences, or business expansion. We help you secure the right visa and prepare your supporting documents.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>💼 Guidance on invitation letters and sponsorship documentation</li>
          <li>🧾 Document review and embassy appointment assistance</li>
          <li>✈️ Fast-track options for urgent business travel</li>
        </ul>

        <div className="text-center mt-10">
          <a
            href="/apply"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Apply for a Business Visa
          </a>
        </div>
      </div>
    </main>
  );
}
