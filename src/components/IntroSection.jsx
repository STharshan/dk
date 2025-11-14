// AboutStatsSection.jsx
"use client";

import React from "react";

export default function IntroSection() {
  return (
    <section className="bg-[#5f8b8f] text-white py-16 md:py-24">
      <div className="container mx-auto px-6 gap-30 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Dkcare 
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Dkcare  provides personalised home care across Nottingham, helping you stay safe, comfortable and independent in your own home. From hourly visits to complete live-in care, our team is here whenever you need us.
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">50+</h3>
            <p className="mt-1 text-xl font-semibold text-white">Happy Family Served</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">8</h3>
            <p className="mt-1 text-xl font-semibold text-white">Years of Experiences</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">68</h3>
            <p className="mt-1 text-xl font-semibold text-white">Professional Caregivers</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">97%</h3>
            <p className="mt-1 text-xl font-semibold text-white">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
