import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Layers, Award } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir / AKASH Ply & Hardware team, I would like to inquire about plywood and interior materials for our Bhopal project.'
  )}`;

  return (
    <section id="home" className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background Architectural Atmosphere */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-35 lg:opacity-75 pointer-events-none select-none z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Architectural Interior Living & Dining Room Showcase"
          fallbackCategory="Showroom Architecture"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7">
            {/* Typographic Status / Kicker (Zero-Pill Clean Text) */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C5D28] tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BHOPAL ARCHITECTURAL DESTINATION</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-600 font-semibold">FOUNDER: ANKUSH SHRIVASTAVA</span>
            </div>

            {/* Headline matching Master Prompt */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#14161B] tracking-tight leading-[1.12]">
              Complete Interior Materials &amp; <br className="hidden sm:inline" />
              <span className="italic font-serif font-normal text-[#8C5D28]">Furniture Solutions</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Quality plywood, laminates, hardware, furniture materials, curtains, doors and customised furniture solutions — all under one roof. Sourced for homes, offices, and commercial projects across Bhopal.
            </p>

            {/* Responsive Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#181A20] hover:bg-stone-800 text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="w-4 h-4 text-[#EADBBE]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 border border-[#DDD6CA] text-[#1F2228] font-semibold text-sm rounded-xl transition-colors shadow-2xs"
              >
                <span>Explore Products</span>
              </a>

              <a
                href="#furniture-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FAF6F0] hover:bg-[#F3ECE0] border border-[#D9C4A9] text-[#70481E] font-semibold text-sm rounded-xl transition-colors shadow-2xs"
              >
                <span>Discuss Furniture Work</span>
              </a>
            </div>

            {/* Quick Sourcing Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-600">
              <span className="font-bold text-[#8C5D28] mr-1">Under One Roof:</span>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Plywood &amp; Sunmica</a>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Hardware &amp; Fittings</a>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Modular Kitchens</a>
              <a href="#furniture-work" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Custom Furniture Work</a>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Curtains &amp; Blinds</a>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">Doors &amp; Louvers</a>
              <a href="#services" className="px-2 py-0.5 bg-white border border-stone-200 rounded-md hover:border-[#8C5D28] hover:text-[#8C5D28] transition-colors">PU Foam &amp; Mattress</a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-[#E7E2D8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span>100% Calibrated Core</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span>IS:710 Marine Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span>Wholesale &amp; Retail Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span>Direct Founder Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Architectural Card with Spec Callouts */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-[#DDD6CA] shadow-2xl bg-white aspect-4/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Architectural Woodwork & Interior Living Space Showcase Bhopal"
                fallbackCategory="Architecture Showcase"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />

              {/* Floating Spec Tag 1: Top Right */}
              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200 shadow-md text-xs">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C5D28]" />
                  <span>100% Calibrated BWP</span>
                </div>
                <div className="text-[10px] text-stone-500 font-mono">IS:710 Marine Grade</div>
              </div>

              {/* Floating Spec Tag 2: Bottom Left */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#181A20]/95 backdrop-blur-md p-4 rounded-2xl border border-stone-700 shadow-lg text-white">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-700">
                  <span className="font-bold text-[#EADBBE] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#EADBBE]" />
                    Architectural Materials Hub
                  </span>
                  <span className="text-[10px] text-stone-400">Bhopal · 462001</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-stone-300">
                  <span>Plywood · Laminates · Hardware · Modular</span>
                  <a
                    href="#gallery"
                    className="text-[#EADBBE] hover:underline font-semibold"
                  >
                    View Works →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
