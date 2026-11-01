import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, AlertCircle, Trophy } from 'lucide-react';
import { WHATSAPP_LINK } from '@ramji/shared';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-neutral-900/60 border border-amber-500/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <AlertCircle size={32} />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-2 mb-3">
          Lost in the Exchange?
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
          The sports market or page you are looking for has been settled or moved. Return to the live betting exchange or reach our 24/7 WhatsApp desk.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Home size={15} />
            <span>Return Home</span>
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Help</span>
          </a>
        </div>
      </div>
    </div>
  );
}

