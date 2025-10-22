"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-blue-700">
            SKS Travels & Tourism
          </h1>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            {/* <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-blue-600">
              Admin
            </Link> */}
            <Link
              href="/apply"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="w-full text-center bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/hero1.jpg.jpg')", // ✅ exact file name
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

      {/* ✅ Visa Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Visa Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Tourist Visa */}
          <Link href="/tourist-visa">
            <div
              className="relative h-72 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/Tourist-Visa.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h3 className="text-2xl font-semibold mb-2">Tourist Visa</h3>
                <p className="text-sm max-w-xs">
                  Travel for leisure and explore the world with ease.
                </p>
              </div>
            </div>
          </Link>

          {/* Business Visa */}
          <Link href="/business-visa">
            <div
              className="relative h-72 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/Business-Visa.webp')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h3 className="text-2xl font-semibold mb-2">Business Visa</h3>
                <p className="text-sm max-w-xs">
                  Attend meetings, conferences, and expand your business globally.
                </p>
              </div>
            </div>
          </Link>

          {/* Student Visa */}
          <Link href="/student-visa">
            <div
              className="relative h-72 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/Student-Visa.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h3 className="text-2xl font-semibold mb-2">Student Visa</h3>
                <p className="text-sm max-w-xs">
                  Achieve your academic goals with expert visa guidance.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-blue-900 text-white py-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          About SKS Travels & Tourism
        </h3>
        <p className="max-w-2xl mx-auto text-blue-100">
          We are a Sri Lanka-based visa agency committed to simplifying global
          travel. Our goal is to make visa processing faster, easier, and more
          transparent for applicants and agencies alike.
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              How do I apply for a visa?
            </h4>
            <p className="text-gray-600">
              Simply click “Apply Now,” create an account, and follow the guided
              application steps.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Can I track my visa application?
            </h4>
            <p className="text-gray-600">
              Yes! After logging in, you can track the status of your
              application in real time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              How do I contact support?
            </h4>
            <p className="text-gray-600">
              You can reach our team via the contact form below or through our
              support email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20 text-center text-black">
        <h3 className="text-3xl font-semibold mb-10 text-blue-700">
          Contact Us
        </h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border border-gray-600 p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-gray-600 p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full bg-transparent border border-gray-600 p-3 rounded-md text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-blue-400 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">Visa</h3>
            <p className="text-gray-400">
              Your trusted partner in easy visa applications. We simplify your
              journey with clear guidance and support for all types of visas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition">
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@foreignjobs.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave, Suite 100</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 SKS Travels & Tourism. All rights reserved.</p>
          <div className="mt-3 space-x-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
