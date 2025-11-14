import React from 'react';

export default function Gallery() {
  const sessions = [
    {
      id: 1,
      image: "a2.jpg",
      alt: "Therapy session between older man and young woman"
    },
    {
      id: 2,
      image: "a3.jpg",
      alt: "Two women in counseling session"
    },
    {
      id: 3,
      image: "a1.jpg",
      alt: "Therapist and client in conversation with gestures"
    },
    {
      id: 4,
      image: "a4.jpeg",
      alt: "Group therapy session"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-4/3"
            >
              <img
                src={session.image}
                alt={session.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}