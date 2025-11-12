import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'consulting',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would connect to your backend/email service
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-northern-green-light opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI and consulting services?
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-northern-green-light transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-northern-green-light transition-colors text-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-northern-green-light transition-colors text-white"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-northern-green-light transition-colors text-white"
                >
                  <option value="consulting">Consulting Services</option>
                  <option value="ai-platform">AI Mineral Exploration Platform</option>
                  <option value="software">Software Development</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-northern-green-light transition-colors text-white resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info and additional details */}
          <div className="space-y-6">
            {/* Quick contact */}
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <svg className="w-6 h-6 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400 text-sm">contact@northern-ai.ca</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <svg className="w-6 h-6 text-northern-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400 text-sm">Canada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services highlight */}
            <div className="glass p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 text-white">What We Offer</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Mineral Exploration Platform
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Software & AI Consulting
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mechanical Engineering Services
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom ML Model Development
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="glass p-8 rounded-2xl bg-gradient-to-br from-northern-green-dark to-northern-green">
              <h4 className="text-xl font-bold mb-3 text-white">Ready to Start?</h4>
              <p className="text-gray-200 text-sm mb-4">
                Join the companies leveraging Northern AI's technology for competitive advantage.
              </p>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-300">
                <strong>Indigenous-owned.</strong> Canadian-focused. World-class technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
