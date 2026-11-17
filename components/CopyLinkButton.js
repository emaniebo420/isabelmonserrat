'use client';
import { useState } from 'react';

export default function CopyLinkButton({ url }) {
  const [state, setState] = useState('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setState('copied');
    } catch {
      setState('failed');
    }
    setTimeout(() => setState('idle'), 2500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="px-6 py-3 rounded-full text-sm font-medium border transition hover:opacity-80"
      style={{ borderColor: '#6b1e2e', color: '#6b1e2e' }}
    >
      {state === 'copied' ? 'Link copied' : state === 'failed' ? 'Copy failed, copy the address bar' : 'Copy link'}
    </button>
  );
}
