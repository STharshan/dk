"use client";
import React from "react";
import { Play } from "lucide-react"; // optional
import { Clock, Medal, ThumbsUp, Heart } from 'lucide-react';

export default function WhyChoose() {
    const features = [
        {
            title: "Care in Your Own Home",
            desc: "Stay safe and independent.",
            icon: <Clock className="w-8 h-8 text-teal-500" />,
        },
        {
            title: "Flexible Care Plans",
            desc: "Assessments within 24–48 hours.",
            icon: <Medal className="w-8 h-8 text-teal-500" />,
        },
        {
            title: "Fully Trained Carers ",
            desc: "Medication, Dementia, Moving & Handling.",
            icon: <ThumbsUp className="w-8 h-8 text-teal-500" />,
        },
        {
            title: "Local Team",
            desc: "Covering Nottingham and surrounding areas.",
            icon: <Heart className="w-8 h-8 text-teal-500" />,
        },
    ];

    return (
        <section className="relative w-full bg-white py-20 px-6 lg:px-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
                {/* LEFT: Feature Cards */}
                <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-[#faf8ff] p-6 shadow-md transition hover:shadow-lg"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                                    {item.icon}
                                </div>

                                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Text + Image */}
                <div className="flex flex-col items-start gap-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
                        Why Families Trust Dkcare 
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                        Your Vision, Our <br /> Expertise.
                    </h2>

                    {/* Image with Play Button */}
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
                        <img
                            src="/lo.webp"
                            alt="Nurse checking temperature"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}