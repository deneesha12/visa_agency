"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConsultationGuidancePage() {
  const SERVICES = [
    {
      id: "personalized-advice",
      title: "Personalized Travel Advice",
      desc: "One-on-one consultations to plan your perfect trip — tailored itineraries, budgeting, and destination selection.",
      img: "/images/consultation-advice.jpg",
    },
    {
      id: "document-assistance",
      title: "Assistance with Required Documents",
      desc: "Get expert help with all your travel documents — visas, insurance, and health requirements.",
      img: "/images/consultation-documents.jpg",
    },
    {
      id: "pre-departure-guidance",
      title: "Pre-departure Guidance & Travel Tips",
      desc: "Everything you need to know before you fly — packing, airport tips, and travel safety advice.",
      img: "/images/consultation-predeparture.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/consultation-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
          <h1 className="text-4xl font-extrabold">Consultation & Travel Guidance</h1>
          <p className="mt-3 text-blue-100 max-w-2xl">
            Personalized travel advice • Document support • Pre-departure guidance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
              <Link
                href={`/consultation-guidance/${s.id}`}
                className="inline-block mt-3 text-blue-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
