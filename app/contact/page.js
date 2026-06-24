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
              <div className="space-y-3">
                <a href="mailto:lebasimonserrat@gmail.com"
                  className="block text-sm transition hover:opacity-70"
                  style={{ color: '#1a1a1a' }}>
                  lebasimonserrat@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t" style={{ borderColor: '#e8e0d5' }} />

            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>
                Social Media
              </p>
              <div className="space-y-3">
                <a href="https://facebook.com/isabelmonserrat14" target="_blank"
                  className="block text-sm transition hover:opacity-70"
                  style={{ color: '#1a1a1a' }}>
                  Facebook — /isabelmonserrat14
                </a>
                <a href="https://instagram.com/lebasimonserrat" target="_blank"
                  className="block text-sm transition hover:opacity-70"
                  style={{ color: '#1a1a1a' }}>
                  Instagram — @lebasimonserrat
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