import Image from "next/image";

export default function TouristVisa() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/images/Tourist-Visa.jpg"
          alt="Tourist Visa"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Tourist Visa
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Discover the World with SKS Travels
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Traveling for leisure should be stress-free. Our Tourist Visa services
            handle all the paperwork while you plan your adventures. From document
            submission to interview preparation, we’ve got you covered.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Assistance for 60+ countries including UAE, UK, and Schengen regions</li>
            <li>Document preparation and online submission</li>
            <li>Travel insurance and flight itinerary support</li>
            <li>24/7 customer support and visa tracking</li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
