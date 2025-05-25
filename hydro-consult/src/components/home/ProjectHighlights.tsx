// src/components/home/ProjectHighlights.tsx
import React from 'react'

export default function ProjectHighlights() {
  // 8 random placeholder images
  const images = Array.from({ length: 8 }, (_, i) =>
    `https://picsum.photos/600/400?random=${i + 1}`
  )

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Our Project Highlights</h2>
        <p className="text-gray-600 mt-2">
          Project overview of the projects accomplished by HCEL
        </p>
      </div>

      {/* Image grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Project ${idx + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
