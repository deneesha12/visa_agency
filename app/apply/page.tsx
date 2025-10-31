"use client";

import { useState } from "react";

export default function VisaApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            🎉 Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your visa application. Our team will review
            your details and contact you shortly.
          </p>
          <a
            href="/"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/visa-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            Visa Application Form
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-blue-100 text-lg">
            Apply easily for tourist, visit, or employment visas with expert
            support and fast approval.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10 mb-16">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Applicant Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passport Number
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter passport number"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+94 7X XXX XXXX"
              />
            </div>
          </div>

          {/* Visa Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visa Type
            </label>
            <select
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Visa Type</option>
              <option value="tourist">Tourist Visa</option>
              <option value="visit">Visit Visa</option>
              <option value="employment">Employment Visa</option>
            </select>
          </div>

          {/* Travel Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination Country
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g., UAE, Singapore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travel Duration
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g., 30 Days"
              />
            </div>
          </div>

          {/* File Uploads */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Documents
            </label>
            <input
              type="file"
              multiple
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Upload passport copy, photo, or other supporting documents (PDF, JPG, PNG).
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes (optional)
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter any special requests or notes..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
