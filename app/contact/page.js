'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_6skuisd',
          template_id: 'template_r54705m',
          user_id: '0iOcFS39UQGB6QU74',
          template_params: data,
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="contact" />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: '#c9a84c' }}>
          Contact
        </p>
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center mb-16" style={{ color: '#6b6b6b' }}>
          Whether it's a commission, an inquiry, or just to say hello — Isabel would love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Form */}
          <div>
            {status === 'success' && (
              <div className="border px-4 py-3 rounded-xl mb-6 text-center"
                style={{ background: '#f0fdf4', borderColor: '#86efac', color: '#166534' }}>
                Message sent! Isabel will get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="border px-4 py-3 rounded-xl mb-6 text-center"
                style={{ background: '#fef2f2', borderColor: '#fca5a5', color: '#991b1b' }}>
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4a4a4a' }}>Name</label>
                <input name="name" type="text" placeholder="Your name" required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none bg-white text-sm"
                  style={{ borderColor: '#e8e0d5' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4a4a4a' }}>Email</label>
                <input name="email" type="email" placeholder="your@email.com" required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none bg-white text-sm"
                  style={{ borderColor: '#e8e0d5' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4a4a4a' }}>Subject</label>
                <select name="subject" required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none bg-white text-sm"
                  style={{ borderColor: '#e8e0d5', color: '#4a4a4a' }}>
                  <option value="">Select a subject</option>
                  <option value="Commission Request">Commission Request</option>
                  <option value="Artwork Inquiry">Artwork Inquiry</option>
                  <option value="Purchase Inquiry">Purchase Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4a4a4a' }}>Message</label>
                <textarea name="message" rows={6} placeholder="Tell Isabel about your inquiry..." required
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none bg-white text-sm"
                  style={{ borderColor: '#e8e0d5' }} />
              </div>
              <button type="submit" disabled={loading}
                className="w-full text-white py-3 rounded-full font-medium text-base transition hover:opacity-90 disabled:opacity-50"
                style={{ background: '#6b1e2e' }}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right — Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>
                Direct Contact
              </p>
              <a href="mailto:lebasimonserrat@gmail.com"
                className="block text-sm transition hover:opacity-70"
                style={{ color: '#1a1a1a' }}>
                lebasimonserrat@gmail.com
              </a>
            </div>

            <div className="border-t" style={{ borderColor: '#e8e0d5' }} />

            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>
                Social Media
              </p>
              <div className="space-y-3">
                <a href="https://facebook.com/isabelmonserrat14" target="_blank"
                  className="flex items-center gap-3 text-sm transition hover:opacity-70"
                  style={{ color: '#1a1a1a' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                  /isabelmonserrat14
                </a>
                <a href="https://instagram.com/lebasimonserrat" target="_blank"
                  className="flex items-center gap-3 text-sm transition hover:opacity-70"
                  style={{ color: '#1a1a1a' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @lebasimonserrat
                </a>
              </div>
            </div>

            <div className="border-t" style={{ borderColor: '#e8e0d5' }} />

            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>
                Commission Info
              </p>
              <div className="space-y-2 text-sm" style={{ color: '#6b6b6b' }}>
                <p>— Custom portraits & landscapes</p>
                <p>— Mixed media & oil paintings</p>
                <p>— Turnaround time varies by size</p>
                <p>— Ships locally and internationally</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 border" style={{ background: '#ffffff', borderColor: '#e8e0d5' }}>
              <p className="text-sm font-semibold mb-2">Response Time</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>
                Isabel typically responds within 1–3 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}