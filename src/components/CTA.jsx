"use client";
import React from "react";

export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{ backgroundImage: "url('/bg.jpg')" }} // replace
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* LEFT TEXT AREA */}
        <div className="text-white max-w-xl">
          <p className="text-sm uppercase tracking-widest text-teal-300">
            + Get Started
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-serif font-bold leading-tight">
            Need Care Quickly? Book a Free Home Assessment Today.
          </h2>

          <div className="flex gap-4 mt-8">
            <a
              href="#start"
              className="px-8 py-3 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-full transition"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full border hover:bg-gray-100 transition"
            >
              Request a Call Back
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="text-white max-w-lg">
          <p className="text-lg leading-relaxed">
            Have questions or need assistance? Our dedicated team is here to help 
            you every step of the way. Reach out today, and let’s start a conversation.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-5">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <span className="text-gray-300 text-sm">4.9 Google review</span>
          </div>

          {/* Profile Avatars
          <div className="flex mt-4">
            {["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"].map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-10 h-10 rounded-full border-2 border-white -ml-3 first:ml-0"
                alt="user"
              />
            ))}
          </div> */}
        </div>

      </div>
    </section>
  );
}