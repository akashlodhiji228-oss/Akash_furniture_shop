import React from 'react';
import { PROCESS_STEPS, SHOWROOM_INFO } from '../data/showroomData.ts';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface HowWeHelpSectionProps {
  onOpenQuote: () => void;
}

export const HowWeHelpSection: React.FC<HowWeHelpSectionProps> = ({ onOpenQuote }) => {
  const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir, I am planning an interior project in Bhopal and would like to get started with AKASH Ply & Hardware.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
            SIMPLE & TRANSPARENT PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14161B] mt-2 tracking-tight">
            How We Help You Build
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
            A seamless experience from material exploration to doorstep project dispatch in Bhopal.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-[#E7E2D8] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#DDD6CA] transition-all"
            >
              <div>
                <span className="font-serif font-bold text-3xl text-[#8C5D28]">
                  {step.step}
                </span>

                <h3 className="text-base font-bold text-[#14161B] mt-4">
                  {step.title}
                </h3>

                <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                <span>{step.phase}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C5D28]" />
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width CTA Banner */}
        <div className="relative mt-20 rounded-3xl overflow-hidden border border-[#DDD6CA] p-8 sm:p-12 text-center bg-stone-900 text-white shadow-xl">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Interior Background"
              fallbackCategory="Interior Background"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/95 to-stone-900 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EADBBE]">
              GET STARTED TODAY
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Planning Your Next Interior Project?
            </h3>

            <p className="mt-3.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
              Let's find the right materials and solutions for your space. Connect directly with our material consultants in Bhopal.
            </p>

            {/* 3 Stackable Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-bold rounded-xl border border-stone-700 transition-colors shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#EADBBE]" />
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-stone-100 text-xs font-semibold rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EADBBE]" />
                <span>Call: {SHOWROOM_INFO.managingDirector.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
