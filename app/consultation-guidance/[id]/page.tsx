import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CONSULTATION_SERVICES = [
  {
    id: "personalized-advice",
    title: "Personalized Travel Advice",
    img: "/images/consultation-advice.jpg",
    desc: "Our travel advisors provide one-on-one consultations to help you design your ideal journey.",
    benefits: [
      "Tailored travel itinerary planning",
      "Destination and airline recommendations",
      "Budget-friendly options",
      "Assistance with connecting tours and transfers",
    ],
  },
  {
    id: "document-assistance",
    title: "Assistance with Required Documents",
    img: "/images/consultation-documents.jpg",
    desc: "We guide you through visa, insurance, and travel document requirements for a stress-free experience.",
    benefits: [
      "Visa documentation checklist",
      "Insurance and health requirements",
      "Translation and notarization support",
      "Paperwork verification",
    ],
  },
  {
    id: "pre-departure-guidance",
    title: "Pre-departure Guidance & Travel Tips",
    img: "/images/consultation-predeparture.jpg",
    desc: "Our pre-departure briefings prepare you with packing advice, airport processes, and travel safety guidance.",
    benefits: [
      "Packing and luggage tips",
      "Airport and boarding instructions",
      "Cultural etiquette awareness",
      "Emergency contact and safety tips",
    ],
  },
];

export default function ConsultationDetails({ params }: { params: { id: string } }) {
  const service = CONSULTATION_SERVICES.find((s) => s.id === params.id);

  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative w-full h-80">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl font-bold drop-shadow-lg">{service.title}</h1>
          <p className="mt-3 text-blue-100">Expert guidance for a stress-free journey</p>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-700 leading-relaxed mb-6">{service.desc}</p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            {service.benefits.map((b) => (
              <li key={b}>✅ {b}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Link
            href="/apply"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book a Consultation
          </Link>
          <Link
            href="/consultation-guidance"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
