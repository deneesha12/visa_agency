"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ✅ Navbar */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <Image
               src="/logo.svg"
              alt="SKS Travels & Tourism Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-blue-700">
              SKS Travels & Tourism (Pvt) Ltd
            </h1>
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/apply"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>

      {/* ✅ Hero Section */}
      <section
        className="w-full text-center bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/hero1.jpg.jpg')",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Simplify Your Visa Application Process
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            SKS Travels & Tourism helps applicants easily apply, upload
            documents, and track their visa status — all in one secure platform.
          </p>
          <Link
            href="/apply"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Visa Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Tourist Visa",
              desc: "Travel for leisure and explore the world with ease.",
              img: "/Tourist-Visa.jpg",
              href: "/tourist-visa",
            },
            {
              title: "Business Visa",
              desc: "Attend meetings, conferences, and expand your business globally.",
              img: "/Business-Visa.webp",
              href: "/business-visa",
            },
            {
              title: "Student Visa",
              desc: "Achieve your academic goals with expert visa guidance.",
              img: "/Student-Visa.jpg",
              href: "/student-visa",
            },
          ].map((service) => (
            <Link href={service.href} key={service.title}>
              <div
                className="relative h-72 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm max-w-xs">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 text-center"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6 text-[#93c5fd]">
            About SKS Travels & Tourism (Pvt) Ltd
          </h3>
          <p className="max-w-2xl mx-auto text-gray-300 mb-12 leading-relaxed">
            We are a Sri Lanka-based visa agency committed to simplifying global
            travel. Our goal is to make visa processing faster, easier, and more
            transparent for applicants and agencies alike.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-[#334155] hover:shadow-blue-800/30 transition">
              <h4 className="text-2xl font-semibold mb-3 text-[#93c5fd]">
                Our Mission
              </h4>
              <p className="text-gray-300 text-center">
                To make international travel simple, affordable, and trustworthy
                for every Sri Lankan who dreams of exploring or working abroad.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-[#334155] hover:shadow-blue-800/30 transition">
              <h4 className="text-2xl font-semibold mb-3 text-[#93c5fd]">
                Our Vision
              </h4>
              <p className="text-gray-300 text-center">
                To become Sri Lanka’s most reliable and customer-friendly travel
                agency for Dubai and Middle East destinations.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-[#334155] hover:shadow-blue-800/30 transition">
              <h4 className="text-2xl font-semibold mb-4 text-[#93c5fd]">
                Our Values
              </h4>
              <ul className="text-gray-300 space-y-3 text-left">
                <li>
                  <span className="font-semibold text-[#60a5fa]">
                    Trust & Transparency:
                  </span>{" "}
                  Clear communication and honest service.
                </li>
                <li>
                  <span className="font-semibold text-[#60a5fa]">
                    Customer Care:
                  </span>{" "}
                  Personalized attention to every traveler.
                </li>
                <li>
                  <span className="font-semibold text-[#60a5fa]">
                    Efficiency:
                  </span>{" "}
                  Fast visa processing and reliable follow-ups.
                </li>
                <li>
                  <span className="font-semibold text-[#60a5fa]">
                    Affordability:
                  </span>{" "}
                  Competitive pricing with no hidden charges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section
        id="contact"
        className="relative bg-gradient-to-b from-blue-50 via-gray-100 to-gray-200 text-gray-900 py-24 px-6"
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            Have a question or need visa assistance? Fill out the form below and
            our team will reach out to you soon.
          </p>

          <form className="bg-gradient-to-b from-white to-blue-50 shadow-lg border border-gray-200 rounded-2xl max-w-2xl mx-auto p-8 space-y-6 hover:shadow-blue-100 transition-all">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-50 border border-gray-300 p-4 rounded-lg text-gray-800 placeholder-gray-500 h-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-blue-200/60">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 🌙 Elegant Dark Blue-Gray Footer */}
<footer className="bg-gradient-to-b from-blue-950 via-gray-900 to-gray-950 text-gray-200 py-16 relative overflow-hidden">
  {/* Soft background pattern overlay */}
  <div className="absolute inset-0 bg-[url('/images/world-map-dark.png')] opacity-10 bg-center bg-cover"></div>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Company Info */}
    <div>
      <h3 className="text-2xl font-bold text-blue-400 mb-4">
        SKS Travels & Tourism (Pvt) Ltd
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Your trusted partner in easy visa applications. We simplify your
        journey with clear guidance, personal assistance, and secure support
        for all types of visas.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h4>
      <ul className="space-y-3 text-gray-300">
        <li>
          <a href="#about" className="hover:text-blue-300 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-300 transition">
            Contact
          </a>
        </li>
        <li>
          <a href="/login" className="hover:text-blue-300 transition">
            Sign In
          </a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-xl font-semibold text-blue-400 mb-4">Contact Us</h4>
      <div className="space-y-3 text-gray-300">
        <p>📍 No.18, New Bus Stand, Nattandiya, Sri Lanka</p>
        <p>📞 0776426033 / 0775221739</p>
        <a
          href="https://facebook.com/SKSTravelsAndTourism"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline hover:text-blue-200 block"
        >
          🌐 facebook.com/SKSTravelsAndTourism
        </a>
      </div>
    </div>
  </div>

  {/* ✅ Bottom Bar (White Background) */}
  <div className="bg-white mt-12 py-4 text-center text-gray-700 text-sm shadow-inner border-t border-gray-300">
    <p>© 2025 SKS Travels & Tourism (Pvt) Ltd. All rights reserved.</p>
  </div>
</footer>

</main>
);
}
