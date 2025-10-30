"use client";

import { useState } from "react";
import Image from "next/image";

export default function AskAgentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Thank you! Our travel agent will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/agent-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Ask an Agent
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Get Personal Assistance from Our Travel Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about flights, visa support, or travel planning? Fill out this quick form and our agent will reach out within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side – Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/travel-agent.jpg"
              alt="Travel Agent"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side – Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+94XXXXXXXXX"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your destination</option>
                <option value="Dubai">Dubai</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Maldives">Maldives</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans or questions..."
                className="w-full border border-gray-300 p-3 rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          *Our agents are available daily from 8:00 AM to 10:00 PM (GMT+5:30).
        </p>
      </section>
    </main>
  );
}


