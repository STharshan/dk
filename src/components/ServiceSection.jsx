"use client";
import React from "react";
import { HandHeart, Home, Pill, UserCheck, Accessibility} from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Personal Care",
      desc: "Our personal care service supports daily activities with dignity and respect. From bathing and grooming to mobility assistance, we ensure comfort at every step. Your wellbeing is always our priority.",
      icon: <UserCheck size={44} className="text-[#1F6D6D]" />,
    },
    {
      title: "Medication Support",
      desc: "We provide safe, reliable assistance with prescribed medications. Our team helps with reminders, dosage monitoring, and timely administration. You can count on consistent, professional support every day.",
      icon: <Home size={44} className="text-[#1F6D6D]" />,
    },
    {
      title: "Meal Preparation",
      desc: `Nutritious, home-cooked meals are prepared based on your tastes and dietary needs.
We handle everything from planning to cooking, ensuring variety and quality.
Healthy eating becomes effortless and enjoyable.`,
      icon: <HandHeart size={44} className="text-[#1F6D6D]" />,
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Caregivers background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Our Home Care Services
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">
            Your Well-Being, Our Priority
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F3E9] rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#D5E8E8] flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-4 mb-6">
                <span className="flex items-center gap-1 text-sm text-[#1F6D6D]">
                  <Accessibility size={20} className="text-[#1F6D6D]" /> Assistance
                </span>
                <span className="flex items-center gap-1 text-sm text-[#1F6D6D]">
                  <Pill size={20} className="text-[#1F6D6D]" /> Mobility
                </span>
              </div>

              {/* Learn More */}
              <button className="text-[#1F6D6D] font-medium text-sm hover:underline">
                → Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
