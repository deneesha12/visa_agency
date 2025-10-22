import Image from "next/image";

export default function BusinessVisa() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/images/Business-Visa.jpg"
          alt="Business Visa"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Business Visa
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Empowering Global Business Travel
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Business Visa services are designed for professionals attending
            meetings, conferences, or company visits abroad. Let our consultants
            streamline your application process while you focus on your goals.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Expert documentation and appointment guidance</li>
            <li>Support for multiple-entry and long-term business visas</li>
            <li>Corporate travel management services</li>
            <li>Priority processing options available</li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
