"use client";
import Image from "next/image";
import Link from "next/link";

export default function VisaProcessingPage() {
  const VISA_SERVICES = [
    {
      id: "uae-tourist",
      title: "UAE Tourist & Visit Visas",
      duration: "30 / 60 / 90 Days",
      price: "Starting from LKR 45,000",
      desc: "Apply for hassle-free UAE tourist and visit visas for single or multiple entries with fast approval and trusted documentation support.",
      img: "/images/uae-visa.jpg",
      tag: "Most Popular",
    },
    {
      id: "renewal",
      title: "Renewal & Extension Support",
      duration: "Instant Processing",
      price: "LKR 15,000",
      desc: "Extend or renew your UAE visa easily without leaving the country. We handle the full process — quick, secure, and affordable.",
      img: "/images/renewal.jpg",
      tag: "Fast Service",
    },
    {
      id: "fast-approval",
      title: "Express Visa Processing",
      duration: "Within 3 Working Days",
      price: "LKR 60,000",
      desc: "Need your visa urgently? Our express service ensures approval within 3 working days for smooth and stress-free travel.",
      img: "/images/express-visa.jpg",
      tag: "Express",
    },
    {
      id: "employment-visa",
      title: "Employment & Work Visa Assistance",
      duration: "Up to 90 Days",
      price: "LKR 85,000",
      desc: "We guide you through every step of the UAE employment visa process — from documentation to final approval for smooth onboarding.",
      img: "/images/employment-visa.jpg",
      tag: "Professional",
    },
    {
      id: "family-visa",
      title: "Family & Dependent Visa Support",
      duration: "Up to 60 Days",
      price: "LKR 75,000",
      desc: "Reunite with family in the UAE. We manage complete family and dependent visa applications, ensuring quick and compliant approvals.",
      img: "/images/family-visa.jpg",
      tag: "Trusted",
    },
    {
      id: "freelance-visa",
      title: "UAE Freelance Visa Support",
      duration: "60 Days",
      price: "LKR 95,000",
      desc: "Obtain your UAE freelance visa and permit to work independently. Ideal for remote professionals, creators, and consultants.",
      img: "/images/freelance-visa.jpg",
      tag: "Popular",
    },
    {
      id: "multiple-entry",
      title: "Multiple Entry Visa (30/60 Days)",
      duration: "Flexible Options",
      price: "LKR 70,000",
      desc: "Perfect for frequent business or leisure travelers. Enjoy multiple UAE entries within your visa validity period.",
      img: "/images/multiple-entry.jpg",
      tag: "Business",
    },
    {
      id: "transit-visa",
      title: "96-Hour Transit Visa",
      duration: "4 Days",
      price: "LKR 35,000",
      desc: "For travelers transiting through Dubai or Abu Dhabi — a short-stay visa with easy processing and quick approval.",
      img: "/images/transit-visa.jpg",
      tag: "Short Stay",
    },
    {
      id: "cancellation",
      title: "Visa Cancellation & Re-Entry",
      duration: "3–5 Days",
      price: "LKR 20,000",
      desc: "We handle UAE visa cancellation and re-entry applications, ensuring you remain compliant with immigration laws.",
      img: "/images/cancellation.jpg",
      tag: "Support",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ✅ Hero Section */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/visa-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Visa Processing Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-blue-100 text-lg">
            Simplify your UAE visa applications with our fast, reliable, and
            secure services. Trusted by thousands of travelers and agencies.
          </p>
        </div>
      </section>

      {/* ✅ Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Our Visa Processing Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {VISA_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
            >
              {/* 🖼 Image */}
              <div className="relative h-48">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {service.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* 📄 Card Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <p className="text-blue-700 font-medium text-sm">
                  ⏱ {service.duration}
                </p>
                <p className="text-gray-800 font-semibold">{service.price}</p>

                {/* 🔗 Buttons */}
                <div className="pt-3 flex gap-2">
                  <Link
                    href="/apply"
                    className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 text-sm font-medium transition"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href={`/visa-processing/${service.id}`}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 text-sm font-medium transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
