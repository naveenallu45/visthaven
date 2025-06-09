'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center brightness-110"
      style={{
        backgroundImage: "url('/formimage.jpg.avif')", 
      }} >
    
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-block bg-white text-black text-sm font-medium px-4 py-1 rounded-full mb-8">
          Get in Touch
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          LET’S MAKE YOUR PROPERTY JOURNEY EFFORTLESS
        </h2>

        <p className="mt-4 text-white text-base md:text-lg">
          Have questions or ready to take the next step? Whether you’re looking to buy, rent, or invest,
          our team is here to guide you every step of the way. Let’s turn your property goals into reality.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 mt-10 shadow-xl grid gap-6 w-full max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border-b p-2 outline-none"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-b p-2 outline-none"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-b p-2 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="border-b p-2 outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="What Can We Help You ?"
            rows={4}
            className="border-b p-2 outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-black text-white rounded-full py-3 px-6 text-lg hover:bg-gray-900 transition"
          >
            Book a Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
