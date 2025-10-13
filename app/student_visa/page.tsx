"use client";

export default function StudentVisaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Student Visa Services
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Planning to study abroad? We provide full guidance on student visa applications, document preparation, and interview coaching.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>📘 Assistance with admission letters and university documents</li>
          <li>🧾 Visa form filling and appointment scheduling</li>
          <li>📅 Guidance for embassy interviews and timelines</li>
        </ul>

        <div className="text-center mt-10">
          <a
            href="/apply"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Apply for a Student Visa
          </a>
        </div>
      </div>
    </main>
  );
}
