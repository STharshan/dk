import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    postcode: '',
    careType: '',
    startDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-blue-50 to-cyan-50">
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Contact Dkcare 
              </p>
              <h1 className="text-4xl font-bold text-teal-900 leading-tight">
                We provide home care across Nottingham and all surrounding areas.
              </h1>
            </div>

            <div className="space-y-6 mt-12">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-900 rounded-full p-3 shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-900 mb-1">Email</h3>
                  <p className="text-gray-600">Dkcaree@outlook.com</p>
                </div>
              </div>

              {/* Call us */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-900 rounded-full p-3 shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-900 mb-1">Call us</h3>
                  <p className="text-gray-600">+44 7304 081688</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-900 rounded-full p-3 shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-900 mb-1">Hours</h3>
                  <p className="text-gray-600">Mon–Sat | 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-teal-900 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              {/* Email and Telephone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-teal-900 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Add email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-teal-900 font-semibold mb-2">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-teal-900 font-semibold mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              {/* Type of Care Needed */}
              <div>
                <label className="block text-teal-900 font-semibold mb-2">
                  Type of Care Needed
                </label>
                <input
                  type="text"
                  name="careType"
                  placeholder="Type of care (e.g., Personal Care, Nursing)"
                  value={formData.careType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              {/* Preferred Start Date */}
              <div>
                <label className="block text-teal-900 font-semibold mb-2">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-teal-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl mx-auto h-64 md:h-80 lg:h-96 mb-15">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76918.04142537262!2d-1.1700617500000001!3d52.9540225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487832d2390779cd%3A0x108063201919db15!2sNottingham%2C%20UK!5e0!3m2!1sen!2slk!4v1763138649912!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="London Eye Location"
        ></iframe>
      </div>
    </div>
  );
}
