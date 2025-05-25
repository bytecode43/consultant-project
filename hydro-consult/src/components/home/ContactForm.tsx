// src/components/home/ContactForm.tsx
import React from 'react'

export default function ContactForm() {
  return (
    <form className="container mx-auto bg-white rounded-lg shadow-lg p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Get in touch!</h2>
      <p className="text-gray-600 mb-6">
        Send us a message if you have any feedback or have queries.
      </p>

      {/* Grid of inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Full Name spans both cols */}
        <input
          type="text"
          placeholder="Full Name"
          className="
            col-span-1 md:col-span-2
            w-full
            border border-gray-300
            rounded-lg
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            placeholder-gray-400
          "
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company"
          className="
            w-full
            border border-gray-300
            rounded-lg
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            placeholder-gray-400
          "
        />

        {/* Country select */}
        <select
          defaultValue=""
          className="
            w-full
            border border-gray-300
            rounded-lg
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            placeholder-gray-400
          "
        >
          <option disabled value="">
            Select Country
          </option>
          <option>Nepal</option>
          <option>…other countries…</option>
        </select>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full
            border border-gray-300
            rounded-lg
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            placeholder-gray-400
          "
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="
            w-full
            border border-gray-300
            rounded-lg
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            placeholder-gray-400
          "
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Message"
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-4 py-3
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
          placeholder-gray-400
          h-40
          mb-6
        "
      />

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full
          bg-primary text-white
          rounded-full
          py-3
          text-lg font-medium
          hover:bg-secondary
          transition-colors
        "
      >
        Send
      </button>
    </form>
  )
}
