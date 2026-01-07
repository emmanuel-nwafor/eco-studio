import React, { useState } from 'react';
import { PlaceholdersAndVanishInput } from './PlaceholdersAndVanishInput';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" flex items-center justify-center p-9">
      <div className="w-full max-w-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <PlaceholdersAndVanishInput
              placeholders={['Your Name', 'Enter your full name']}
              value={formData.name}
              onChange={handleChange}
              onSubmit={handleSubmit}
              name="name"
            />
          </div>
          <div>
            <PlaceholdersAndVanishInput
              placeholders={['Your Email', 'Enter your email address']}
              value={formData.email}
              onChange={handleChange}
              onSubmit={handleSubmit}
              name="email"
            />
          </div>
          <div>
            <PlaceholdersAndVanishInput
              placeholders={['Your Message', 'Type your message here']}
              value={formData.message}
              onChange={handleChange}
              onSubmit={handleSubmit}
              name="message"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
