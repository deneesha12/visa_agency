"use client";

export default function TouristVisaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Tourist Visa Services
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Dreaming of exploring the world? Our experts help you apply for tourist visas quickly and hassle-free.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>🌍 Tourist visa processing for over 50 countries</li>
          <li>📸 Travel itinerary and hotel booking support</li>
          <li>🧾 Document verification before submission</li>
        </ul>

        <div className="text-center mt-10">
          <a
            href="/apply"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Apply for a Tourist Visa
          </a>
        </div>
      </div>
    </main>
  );
}
