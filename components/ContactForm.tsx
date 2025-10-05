import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzngpoa', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Thanks for your submission!');
        form.reset();
      } else {
        const responseData = await response.json();
        // FIX: Replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for better compatibility.
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          setStatus(responseData["errors"].map((error: { message: string }) => error.message).join(", "));
        } else {
          setStatus('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Name" required className="w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition"/>
        <input type="tel" name="number" placeholder="Number" className="w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition"/>
      </div>
      <input type="email" name="email" placeholder="Email" required className="w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition"/>
      <textarea name="enquiry" placeholder="Enquiry" required rows={5} className="w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition"></textarea>
      <div className="flex items-center space-x-3">
        <input type="checkbox" id="subscribe" name="subscribe" value="yes" className="h-5 w-5 rounded border-blue-800 text-[#F88F26] focus:ring-[#F88F26] bg-gray-900/50"/>
        <label htmlFor="subscribe" className="text-gray-400">Subscribe to blog updates</label>
      </div>
      <button type="submit" className="w-full px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30">
        Send Message
      </button>
      {status && <p className="text-center text-blue-300 mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;