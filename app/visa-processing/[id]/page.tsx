import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const VISA_SERVICES = [
  {
    id: "uae-tourist",
    title: "UAE Tourist & Visit Visas",
    duration: "30 / 60 / 90 Days",
    price: "Starting from LKR 45,000",
    country: "United Arab Emirates (UAE)",
    img: "/images/uae-visa.jpg",
    description: `
      Apply for hassle-free UAE tourist and visit visas for single or multiple entries.
      Choose from 30, 60, or 90-day stays. Perfect for leisure or short business visits.
    `,
    highlights: [
      "Single & Multiple Entry Options",
      "Fast approval (within 3 working days)",
      "Secure & online processing",
      "Expert visa consultants",
    ],
  },
  {
    id: "renewal",
    title: "Renewal & Extension Support",
    duration: "Instant Processing",
    price: "LKR 15,000",
    country: "UAE",
    img: "/images/renewal.jpg",
    description: `
      Need to stay longer in the UAE? We make visa renewal and extension simple.
      Avoid the stress of exiting the country — we’ll handle everything for you.
    `,
    highlights: [
      "No exit required for renewal",
      "Instant service",
      "Official documentation handling",
      "Affordable pricing",
    ],
  },
  {
    id: "fast-approval",
    title: "Express Visa Processing",
    duration: "Within 3 Working Days",
    price: "LKR 60,000",
    country: "UAE",
    img: "/images/express-visa.jpg",
    description: `
      Get your UAE visa approved in record time with our express visa service.
      Ideal for urgent business or last-minute travel needs.
    `,
    highlights: [
      "Approval in 3 working days",
      "Priority processing",
      "Dedicated support",
      "Trusted by hundreds of travelers",
    ],
  },
];

// ✅ FIXED VERSION BELOW
export default async function VisaDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const visa = VISA_SERVICES.find((v) => v.id === id);

  if (!visa) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 w-full">
        <Image
          src={visa.img}
          alt={visa.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
              {visa.title}
            </h1>
            <p className="text-blue-100 mt-2">{visa.country}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          {visa.title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {visa.description}
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600">⏱ Duration: {visa.duration}</p>
          <p className="text-2xl font-semibold text-blue-700 mt-2">
            {visa.price}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Key Benefits:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {visa.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            href="/apply"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Apply Now
          </Link>
          <Link
            href="/visa-processing"
            className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium transition"
          >
            ← Back to Visa Services
          </Link>
        </div>
      </section>
    </main>
  );
}
