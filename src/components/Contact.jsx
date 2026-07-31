import React, { useState } from 'react';

const FORMSPREE_ID = 'xdaqvdpw';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    interest: '',
    message: '',
    _gotcha: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          _gotcha: formData._gotcha,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-muted focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm';

  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-md mx-auto">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4 text-center">
          Get started
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          Book a walkthrough
        </h2>
        <p className="text-sm text-muted text-center mb-10 max-w-sm mx-auto leading-relaxed">
          A 30-minute screen share of live model output over real ground. Or
          start with the free first look: send your claim outline, we send back
          a targeting brief and Google Earth file.
        </p>

        {status === 'success' ? (
          <div className="border border-accent/30 rounded-xl p-8 text-center bg-accent/[0.03]">
            <p className="text-accent text-base font-medium">
              Got it. We will reply within two business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="block text-sm text-subtle mb-1.5 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm text-subtle mb-1.5 font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-subtle mb-1.5 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm text-subtle mb-1.5 font-medium">
                I am interested in
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Free first look">Free first look</option>
                <option value="Booking a walkthrough">Booking a walkthrough</option>
                <option value="Something else">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-subtle mb-1.5 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-8 py-3.5 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-2 hover:shadow-lg hover:shadow-accent/15"
            >
              {status === 'submitting' ? 'Sending...' : 'Book a walkthrough'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
