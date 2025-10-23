import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PACKAGES = [
  {
    id: "maldives",
    title: "Maldives Holiday Package",
    country: "Maldives",
    days: "5 days",
    price: "LKR 120,000",
    img: "/images/maldives.jpg",
    description:
      "Enjoy the perfect island escape with crystal-clear waters, white sandy beaches, and luxurious villas in the Maldives.",
  },
  {
    id: "singapore",
    title: "Singapore Explorer",
    country: "Singapore",
    days: "7 days",
    price: "LKR 230,000",
    img: "/images/singapore.jpg",
    description:
      "Discover the vibrant city of Singapore with guided tours, street food adventures, and visits to Sentosa Island and Marina Bay Sands.",
  },
  {
    id: "dubai",
    title: "Dubai City Break",
    country: "UAE",
    days: "6 days",
    price: "LKR 185,000",
    img: "/images/dubai.jpg",
    description:
      "Explore Dubai’s skyscrapers, desert safaris, shopping malls, and the iconic Burj Khalifa on this unforgettable tour.",
  },
  {
    id: "thailand",
    title: "Thailand Trio: Bangkok • Phuket • Pattaya",
    country: "Thailand",
    days: "8 days",
    price: "LKR 210,000",
    img: "/images/thailand.jpg",
    description:
      "Immerse yourself in the culture of Thailand — enjoy vibrant Bangkok, relaxing Phuket, and the beaches of Pattaya.",
  },
  {
    id: "vietnam",
    title: "Vietnam Highlights",
    country: "Vietnam",
    days: "7 days",
    price: "LKR 240,000",
    img: "/images/vietnam.jpg",
    description:
      "Cruise through Ha Long Bay, explore ancient Hanoi, and experience Vietnam’s street food and traditions.",
  },
  {
    id: "malaysia",
    title: "Malaysia Fun & Food Tour",
    country: "Malaysia",
    days: "5 days",
    price: "LKR 165,000",
    img: "/images/malaysia.jpg",
    description:
      "Discover Malaysia’s cultural diversity, from Kuala Lumpur’s skyline to Penang’s delicious street food scene.",
  },
];

export default async function PackageDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ fix for Next.js 15+ dynamic params
  const pkg = PACKAGES.find((p) => p.id === id);

  if (!pkg) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Image */}
        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={pkg.img}
            alt={pkg.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-800 mb-4">{pkg.title}</h1>
        <p className="text-gray-600 mb-2">
          📍 {pkg.country} • {pkg.days}
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {pkg.description}
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-fit mb-8">
          <p className="text-gray-600">Starting From</p>
          <p className="text-2xl font-semibold text-blue-700">{pkg.price}</p>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/apply"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Book Now
          </Link>

          <Link
            href="/travel-packages"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition"
          >
            ← Back to Packages
          </Link>
        </div>
      </section>
    </main>
  );
}
