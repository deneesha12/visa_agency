
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Travel Packages | SKS Travels & Tourism",
};

type Package = {
  id: string;
  title: string;
  days: string;
  price: string;
  country: string;
  img: string;
  tag?: "Trending" | "Best Seller" | "New";
};

const PACKAGES: Package[] = [
  {
    id: "maldives",
    title: "Maldives Holiday Package",
    days: "5 days",
    price: "LKR 120,000",
    country: "Maldives",
    img: "/images/maldives.jpg",
    tag: "Best Seller",
  },
  {
    id: "singapore",
    title: "Singapore Explorer",
    days: "7 days",
    price: "LKR 230,000",
    country: "Singapore",
    img: "/images/singapore.jpg",
    tag: "Trending",
  },
  {
    id: "dubai",
    title: "Dubai City Break",
    days: "6 days",
    price: "LKR 185,000",
    country: "UAE",
    img: "/images/dubai.jpg",
    tag: "Trending",
  },
  {
    id: "thailand",
    title: "Thailand Trio: Bangkok • Phuket • Pattaya",
    days: "8 days",
    price: "LKR 210,000",
    country: "Thailand",
    img: "/images/thailand.jpg",
  },
  {
    id: "vietnam",
    title: "Vietnam Highlights",
    days: "7 days",
    price: "LKR 240,000",
    country: "Vietnam",
    img: "/images/vietnam.jpg",
  },
  {
    id: "malaysia",
    title: "Malaysia Fun & Food Tour",
    days: "5 days",
    price: "LKR 165,000",
    country: "Malaysia",
    img: "/images/malaysia.jpg",
    tag: "New",
  },
];

export default function TravelPackagesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero2.jpg')", // put an image in /public/images/hero-travel.jpg
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            Best Tour Packages from Sri Lanka
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-blue-100">
            Discover amazing destinations with our expertly crafted group tours.
            Thailand, Vietnam, Singapore, Dubai & more. Trusted by travelers since 2017!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar (static filters, purely UI) */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Find Your Perfect Tour</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <select className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option>Any</option>
                    <option>UAE (Dubai)</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option>Vietnam</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Month of Travel</label>
                  <select className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option>Any Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                  <select className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option>Any</option>
                    <option>Under LKR 150,000</option>
                    <option>LKR 150,000 - 250,000</option>
                    <option>Over LKR 250,000</option>
                  </select>
                </div>

                <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition">
                  Search Tours
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="lg:col-span-9">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Group Tours</h2>
            <p className="text-sm text-gray-500">Showing {PACKAGES.length} tours</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {PACKAGES.map((p) => (
              <div
                key={p.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* small badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
                      {p.days}
                    </span>
                    {p.tag && (
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-600 text-white">
                        {p.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.country}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-blue-700 font-bold">{p.price}</span>
                    <div className="flex gap-2">
                      <Link
                        href={`/travel-packages/${p.id}`}
                        className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:border-gray-400"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/apply"
                        className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination stub */}
          <div className="mt-10 flex justify-center gap-2">
            <button className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Prev</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">1</button>
            <button className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </section>
    </main>
  );
}
