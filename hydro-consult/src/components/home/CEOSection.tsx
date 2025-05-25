// src/components/home/CEOSection.tsx
export default function CEOSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-16">
      {/* image with colored block behind it */}
      <div className="relative w-full md:w-1/3">
        {/* colored block (adjust translate values to tweak offset) */}
        <div
          className="
            absolute 
            inset-0 
            bg-blue-200 
            transform 
            translate-x-4 
            translate-y-4 
            -z-10
          "
        />
        <img
          src="https://picsum.photos/seed/ceo/600/800"
          alt="CEO"
          className="relative w-full rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* text */}
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold mb-4">CEO’s Perspective</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          It is a pleasure to share the achievements of Survey Pro during Fiscal Year 2023‑24. 
          HCE’s performance this year has been commendable. Thanks to the hard work of our team and support from the stakeholders, 
          this collective effort has strengthened our reputation as a trusted consulting partner in the hydropower industry.
        </p>
        <p className="text-gray-700 leading-relaxed">
          In 2023‑24, HCE continued delivering practical and sustainable solutions while adapting to the evolving global energy landscape. 
          Our commitment to renewable energy aligns with global climate action, and we are proud to be recognized as one of the trusted 
          companies in the hydropower consulting field with a legacy of over 58 years…
        </p>
        <a href="/about-us" className="mt-4 inline-block text-primary font-medium hover:underline">
          Read More
        </a>
      </div>
    </div>
  )
}
