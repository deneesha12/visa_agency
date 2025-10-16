"use client";

export default function TouristVisaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/tourist.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-4xl font-bold text-white drop-shadow-lg">
          Tourist Visa Services
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <p className="text-gray-600 text-lg text-center mb-10">
          Dreaming of exploring the world? Our team helps you apply for tourist visas quickly and
          stress-free.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-blue-700 font-semibold mb-2">Worldwide Support</h3>
            <p className="text-gray-600">Visa services for over 50 countries worldwide.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-blue-700 font-semibold mb-2">Document Assistance</h3>
            <p className="text-gray-600">We review and verify all your supporting documents.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-blue-700 font-semibold mb-2">Fast Processing</h3>
            <p className="text-gray-600">We ensure your visa gets processed quickly and correctly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
