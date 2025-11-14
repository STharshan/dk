"use client";
import React from "react";

export default function CareHero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-900">
      
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Teal overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/80 via-[#0f172a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-8">
        
        {/* Left: Text */}
        <div className="max-w-xl text-left text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-200">
            Welcome to Dkcare 
          </p>

          <h1 className="text-2xl font-semibold leading-tight">
            Compassionate Home Care 
            <br />
          </h1>
          <p className="mt-2 text-2xl font-semibold leading-tight">
            That Keeps You Independent 
          </p>

          <p className="mt-6 text-sm leading-relaxed text-slate-100/80 sm:text-base">
            Professional support in the comfort of your own home — hourly, overnight and live-in care available across Nottingham.
          </p>

          <div className="mt-8">
            <button className="rounded-full bg-[#4fd1c5] px-7 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-[#38b2ac] hover:shadow-lg">
              Book a Free Home Assessment
            </button>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="mt-10 flex flex-col items-center gap-6 md:mt-0 md:items-end">
          <div className="w-40 rounded-2xl bg-white/95 p-6 text-center shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-slate-900">98%</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Positive Review
            </p>
          </div>

          <div className="w-40 rounded-2xl bg-white/95 p-6 text-center shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-slate-900">7+</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Year Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
