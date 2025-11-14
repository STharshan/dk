"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f3ea] py-16 px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
        {/* Left: Image collage */}
        <div className="flex flex-1 justify-center gap-6">
          {/* First image */}
          <div className="relative h-[360px] w-[230px] overflow-hidden rounded-sm bg-[#faf7ef] shadow-md md:h-[420px] md:w-[260px]">
            <img
              src="/a1.jpg"
              alt="Nurse talking with elderly man"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Second image (slightly lower for staggered look) */}
          <div className="relative mt-10 h-[360px] w-[230px] overflow-hidden rounded-sm bg-[#faf7ef] shadow-md md:mt-16 md:h-[420px] md:w-[260px]">
            <img
              src="/a4.jpeg"
              alt="Nurse sitting and smiling in clinic"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
           About Dkcare 
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
           Dkcare  is a trusted home care provider supporting families across Nottingham. All our carers are fully trained, DBS-checked and matched to you based on your personality, routine and needs.

          </p>

          <button className="mt-7 rounded-full bg-teal-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800">
            Learn More
          </button>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-semibold text-slate-900">15+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700">
                DBS-Checked Carers

              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-slate-900">5k+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700">
                Tailored Care Plans

              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-slate-900">90%</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700">
               Local, Reliable Support

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}