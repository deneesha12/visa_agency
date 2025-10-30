"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AirTicketingPage() {
  const ROUTES = [
    {
      id: "cmb-dxb",
      title: "Colombo → Dubai",
      subtitle: "One-way / Round trip",
      price: "From LKR 92,500",
      img: "/images/routes-dubai.jpg",
      perks: [
        "Free itinerary hold (24–48h*)",
        "Baggage options",
        "E-ticket via email",
      ],
    },
    {
      id: "cmb-sin",
      title: "Colombo → Singapore",
      subtitle: "One-way / Round trip",
      price: "From LKR 78,900",
      img: "/images/routes-singapore.jpg",
      perks: ["Flexible dates", "Seat selection", "Instant confirmation*"],
    },
    {
      id: "cmb-mle",
      title: "Colombo → Malé (Maldives)",
      subtitle: "One-way / Round trip",
      price: "From LKR 56,400",
      img: "/images/routes-maldives.jpg",
      perks: ["Great weekend fares", "Carry-on included*", "Mobile boarding pass"],
    },
    {
      id: "cmb-bkk",
      title: "Colombo → Bangkok",
      subtitle: "One-way / Round trip",
      price: "From LKR 69,300",
      img: "/images/routes-bangkok.jpg",
      perks: ["Fare reissue support", "Add bags later", "24/7 assistance"],
    },
    {
      id: "cmb-kul",
      title: "Colombo → Kuala Lumpur",
      subtitle: "One-way / Round trip",
      price: "From LKR 63,800",
      img: "/images/routes-kl.jpg",
      perks: ["Multi-airline combos", "Meal pre-orders*", "Seat upgrades*"],
    },
    {
      id: "cmb-auh",
      title: "Colombo → Abu Dhabi",
      subtitle: "One-way / Round trip",
      price: "From LKR 88,200",
      img: "/images/routes-auh.jpg",
      perks: ["Best-price checks", "Visa-friendly timings", "Itinerary reminders"],
    },
  ];

  const FEATURES = [
    {
      title: "One-way & Round-trip Bookings",
      desc: "Book one-way, return, or multi-city trips. We compare airlines and times to suit your travel plans.",
      icon: "✈️",
    },
    {
      title: "Best Price Guaranteed",
      desc: "We compare fares across major airlines to ensure you always get the lowest available price.",
      icon: "💸",
    },
    {
      title: "Flexible Dates & Times",
      desc: "We help you find cheaper or more convenient flight options with our flexible search tools.",
      icon: "📅",
    },
    {
      title: "Fast E-Ticket Issuance",
      desc: "Get your e-ticket and PNR instantly after booking. 100% secure and paperless process.",
      icon: "📧",
    },
    {
      title: "Baggage, Seats & Extras",
      desc: "Add baggage, seat selection, meals, and other ancillaries easily during or after booking.",
      icon: "🧳",
    },
    {
      title: "Change & Cancellation Support",
      desc: "Need to reschedule? We handle changes, refunds, and reissues according to airline policies.",
      icon: "🛠️",
    },
  ];

  const FAQ = [
    {
      q: "How soon will I get my ticket?",
      a: "E-tickets are usually issued instantly after payment. Some special fares may take up to a few hours for confirmation.",
    },
    {
      q: "Can I change or cancel my booking?",
      a: "Yes, depending on your fare rules. We’ll help you review airline penalties and process the change smoothly.",
    },
    {
      q: "Do you handle group or family bookings?",
      a: "Absolutely! We offer tailored group and family ticketing services with better discounts.",
    },
    {
      q: "Can I book without confirming my visa?",
      a: "Yes, for some routes, we offer a 24–48 hour fare hold so you can finalize your visa before ticketing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50">
    {/* Hero Section */}
<section
  className="relative w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/air-hero.jpg')" }}
>
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
      Air Ticketing Services
    </h1>
    <p className="mt-4 max-w-3xl mx-auto text-blue-100 text-lg">
      One-way and round-trip bookings • Best price guaranteed • Flexible
      date and time arrangements
    </p>
  </div>
</section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Everything You Need for a Seamless Flight Experience
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Routes */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Routes</h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {ROUTES.map((r) => (
            <div
              key={r.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-44">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm text-blue-700 mt-1">{r.price}</p>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {r.perks.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <Link
                    href="/apply"
                    className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Book / Hold
                  </Link>
                  <Link
                    href="/ask-agent"
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                  >
                    Ask an Agent
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          FAQs
        </h2>

        <div className="space-y-4">
          {FAQ.map((f, i) => (
            <div
              key={f.q}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900">{f.q}</p>
                <span className="text-blue-600 text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>

              {openIndex === i && (
                <p className="text-gray-600 mt-3 transition-all duration-300">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-gray-500">
          Notes: E-tickets and PNR records are standard in modern airline
          ticketing. Airlines also offer paid ancillaries like baggage, seats,
          and meals. Sources: IATA Ticketing Handbook (ET/EMD), IATA PNR
          position paper, and industry analysis of airline ancillaries.
        </div>
      </section>
    </main>
  );
}
