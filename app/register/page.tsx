"use client";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Create an Account</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <button className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
