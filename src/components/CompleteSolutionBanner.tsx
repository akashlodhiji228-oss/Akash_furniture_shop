import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { CheckCircle2, MessageSquare, Phone, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface CompleteSolutionBannerProps {
  onOpenQuote: () => void;
}

export const CompleteSolutionBanner: React.FC<CompleteSolutionBannerProps> = ({
  onOpenQuote,
}) => {
  const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir, I am planning an interior project in Bhopal and would like to discuss materials and furniture solutions.'
  )}`;

  return (
    <section className="py-16 md:py-20 bg-[#181A20] text-white relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="solution-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#solution-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EADBBE] mb-3">
            <span className="w-6 h-px bg-[#EADBBE]" />
            <span>ONE-STOP INTERIOR DESTINATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Everything You Need. <br className="hidden sm:inline" />
            <span className="text-[#EADBBE]">Under One Roof.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            From plywood and laminates to hardware, curtains, furniture and complete interior work — we provide the materials and solutions you need to build and finish your space.
          </p>
        </div>

        {/* 3 Practical Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-800">
          <div className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-[#8C5D28]/20 text-[#EADBBE] flex items-center justify-center font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Individual Material Supply
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Buy calibrated plywood, laminates, hardware fittings, PU foam, or drapes for your existing carpenter and contractor with genuine grade verification.
            </p>
          </div>

          <div className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-[#8C5D28]/20 text-[#EADBBE] flex items-center justify-center font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Custom Furniture &amp; Woodwork
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Order customized beds, sliding wardrobes, modular kitchens, dining sets, or TV consoles manufactured to your exact room dimensions.
            </p>
          </div>

          <div className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-[#8C5D28]/20 text-[#EADBBE] flex items-center justify-center font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Turnkey Interior Packages
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Consolidate full residential apartments or office fit-outs with single-source accountability, synchronized delivery, and clear transparent billing.
            </p>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8C5D28] hover:bg-[#A36D30] text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-98"
          >
            <span>Send an Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss with Ankush Sir</span>
          </a>

          <a
            href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-sm rounded-xl transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call: {SHOWROOM_INFO.managingDirector.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
