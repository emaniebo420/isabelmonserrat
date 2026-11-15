'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight"
          style={{ color: '#1a1a1a' }}>
          Isabel Monserrat ♦
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              style={{ color: active === link.label.toLowerCase() ? '#6b1e2e' : '#1a1a1a' }}
              className="transition hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-gray-100 pt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: active === link.label.toLowerCase() ? '#6b1e2e' : '#1a1a1a' }}
              className="text-base font-medium transition hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}