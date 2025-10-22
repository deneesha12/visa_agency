import Image from "next/image";

export default function StudentVisa() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/images/Student-Visa.jpg"
          alt="Student Visa"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Student Visa
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Study Abroad with Confidence
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            SKS Travels helps students achieve their academic dreams overseas.
            We provide personalized guidance for documentation, interviews, and
            post-arrival support.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Visa support for UK, USA, Canada, and Australia</li>
            <li>Help with SOP writing and financial documentation</li>
            <li>University application and counseling services</li>
            <li>Visa renewals and extension assistance</li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Start Application
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
