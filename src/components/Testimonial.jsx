import React from "react";

const testimonials = [
  {
    name: "Deborah M",
    location: "Nottingham",
    text: "My relative went into this home a couple of months ago. Since moving in, I have peace of mind. I know that he is well looked after and that he has people that actually care about him. The staff are caring and take the time to feed him as he is unable to do this. They change him regularly and move his position to make sure there are no bedsores."
  },
  {
    name: "Patricia B",
    location: "Derby",
    text: "The home has always been clean warm and welcoming. The staff are always attentive and doing activities or sitting and chatting to the residents. My mum seems happy and settled."
  },
  {
    name: "Leah H",
    location: "Leicester",
    text: "My mother was in Blessings Care Home for over 9 years and from day one we were very pleased with the care and love she received. The staff were kind at all times and spent as much time as they could talking to her especially when she was eventually confined to her room."
  }
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-left text-gray-800">
          Real Experiences, Real Results
        </h2>
        <div className="text-center">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            More Testimonials
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg font-medium text-gray-600 mb-4">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <p className="text-gray-800">{testimonial.name}</p>
            </div>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
