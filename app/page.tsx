'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Trophy, MessageCircle, ShieldCheck, Zap, ArrowRight, 
  Flame, CheckCircle, Sparkles, TrendingUp, Users, Clock, Play
} from 'lucide-react';
import { 
  SITE_CONFIGS, 
  MOCK_MATCHES, 
  MOCK_CASINO_GAMES, 
  GENERAL_FAQS, 
  MatchCard, 
  CasinoCard, 
  QuickBetSlipModal, 
  WhatsAppCtaModal, 
  FaqAccordion, 
  ProvidersBar, 
  PaymentMethodsBar,
  WHATSAPP_LINK, 
  WHATSAPP_NUMBER,
  Match, 
  CasinoGame 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji2;

export default function HomePage() {
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [betSlipOpen, setBetSlipOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState<{
    match: Match;
    team: string;
    odds: number;
    type: 'back' | 'lay';
  } | null>(null);

  const handleSelectOdds = (match: Match, team: string, odds: number, type: 'back' | 'lay') => {
    setActiveSelection({ match, team, odds, type });
    setBetSlipOpen(true);
  };

  const filteredMatches = selectedSport === 'all' 
    ? MOCK_MATCHES 
    : MOCK_MATCHES.filter(m => m.sport === selectedSport);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-amber-500/20 bg-gradient-to-b from-[#1c1008] via-[#120a06] to-[#0c0806]">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase shadow-inner">
                <Sparkles size={14} className="text-amber-400" />
                <span>India's Royal Exchange • 24/7 Verified WhatsApp Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Play With India's <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-[0_2px_15px_rgba(245,158,11,0.4)]">
                  Most Trusted Exchange
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get an <strong className="text-amber-400 font-semibold">Instant ID in 60 Seconds</strong> on WhatsApp. Enjoy live cricket back/lay odds, fast 2-minute UPI payouts, Teen Patti, Andar Bahar & Aviator crash games with zero withdrawal deduction.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>Get Instant ID on WhatsApp</span>
                </button>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/40 text-amber-300 font-bold text-sm transition-all hover:scale-[1.02]"
                >
                  <Play size={16} className="fill-current" />
                  <span>Request Free Demo ID</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-neutral-300 text-xs">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">60 Seconds</div>
                    <div className="text-[11px] text-neutral-400">ID Activation</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">2 Minutes</div>
                    <div className="text-[11px] text-neutral-400">Rapid Payout</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">100% Secure</div>
                    <div className="text-[11px] text-neutral-400">UPI / IMPS</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} className="text-rose-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">24/7 Hotline</div>
                    <div className="text-[11px] text-neutral-400">Hindi & English</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Featured In-Play Widget */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-neutral-900/90 border border-amber-500/30 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-black uppercase tracking-wider text-red-400">Live Match Odds</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">IND vs AUS 3rd T20I</span>
                </div>

                {/* Score & Live Over Details */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/5 space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>India</span>
                    <span className="text-amber-400 font-mono">184/3 (17.4 ov)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-400">
                    <span>Australia</span>
                    <span className="text-neutral-500 text-xs">Yet to bat (Target 215)</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 pt-1 font-mono">
                    Req Run Rate: 10.4 • Win Probability: IND 74%
                  </div>
                </div>

                {/* Exchange Odds Grid */}
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">India to Win</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleSelectOdds(MOCK_MATCHES[0], 'India', 1.48, 'back')}
                        className="px-3 py-1.5 rounded bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold font-mono"
                      >
                        Back 1.48
                      </button>
                      <button
                        onClick={() => handleSelectOdds(MOCK_MATCHES[0], 'India', 1.50, 'lay')}
                        className="px-3 py-1.5 rounded bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold font-mono"
                      >
                        Lay 1.50
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Australia to Win</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleSelectOdds(MOCK_MATCHES[0], 'Australia', 2.85, 'back')}
                        className="px-3 py-1.5 rounded bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold font-mono"
                      >
                        Back 2.85
                      </button>
                      <button
                        onClick={() => handleSelectOdds(MOCK_MATCHES[0], 'Australia', 2.92, 'lay')}
                        className="px-3 py-1.5 rounded bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold font-mono"
                      >
                        Lay 2.92
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCtaModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Zap size={14} className="fill-current" />
                  <span>Open WhatsApp ID to Trade This Match</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LIVE SPORTS & EXCHANGE MARKETS */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
              <Trophy size={14} />
              <span>Real-Time Sportsbook & Exchange</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Featured In-Play & Upcoming Matches
            </h2>
          </div>

          {/* Sport Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Matches' },
              { id: 'cricket', label: 'Cricket' },
              { id: 'football', label: 'Football' },
              { id: 'tennis', label: 'Tennis' },
              { id: 'kabaddi', label: 'Kabaddi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSport(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedSport === tab.id
                    ? 'bg-amber-500 text-neutral-950 shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSelectOdds={handleSelectOdds}
              brandPrimary="text-amber-400"
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/sports"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-amber-500/30 hover:border-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
          >
            <span>View All Sports Markets</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 3. CASINO & LIVE DEALER SHOWCASE */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-neutral-950 via-neutral-900/60 to-neutral-950 border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                <Sparkles size={14} />
                <span>Live Casino Suites</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Popular Indian & International Casino Games
              </h2>
            </div>
            <Link
              href="/casino"
              className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Explore All 1000+ Games</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_CASINO_GAMES.map((game) => (
              <CasinoCard
                key={game.id}
                game={game}
                onPlayDemo={() => setCtaModalOpen(true)}
                brandPrimary="text-amber-400"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 SIMPLE STEPS VIA WHATSAPP) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">Seamless Setup</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            How to Get Your ID in 3 Easy Steps
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            No endless registration forms or KYC delays. Get set up instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative hover:border-amber-500/40 transition-colors">
            <div className="text-4xl font-black text-amber-500/20 mb-3">01</div>
            <h3 className="text-base font-bold text-white mb-2">Message Official WhatsApp</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Click any WhatsApp button to initiate a chat with our verified 24/7 hotline at <strong className="text-white">+91 8360750829</strong>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative hover:border-amber-500/40 transition-colors">
            <div className="text-4xl font-black text-amber-500/20 mb-3">02</div>
            <h3 className="text-base font-bold text-white mb-2">Receive Demo or Instant ID</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our support representative delivers your verified credentials in under 60 seconds with simple instructions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative hover:border-amber-500/40 transition-colors">
            <div className="text-4xl font-black text-amber-500/20 mb-3">03</div>
            <h3 className="text-base font-bold text-white mb-2">Play & Enjoy 2-Min Payouts</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Enjoy zero commission sports betting and live casino. Cashout winnings straight to UPI, PhonePe or GPay.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PAYMENT & PROVIDER BAR */}
      <PaymentMethodsBar />
      <ProvidersBar />

      {/* 6. FAQ SECTION */}
      <FaqAccordion 
        faqs={GENERAL_FAQS}
        title="Ramji2 Frequently Asked Questions"
        subtitle="Everything you need to know about getting your instant ID, betting exchange rules, and withdrawals."
        brandPrimary="text-amber-400"
      />

      {/* MODALS */}
      <QuickBetSlipModal
        isOpen={betSlipOpen}
        onClose={() => setBetSlipOpen(false)}
        selection={activeSelection}
        siteName={config.name}
      />

      <WhatsAppCtaModal
        isOpen={ctaModalOpen}
        onClose={() => setCtaModalOpen(false)}
        siteName={config.name}
      />
    </div>
  );
}

