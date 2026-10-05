import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { ArrowUpRight, MessageSquare, ShieldCheck, Palette, MapPin, Hammer } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir, I would like to consult with AKASH Ply & Hardware regarding materials for my space.'
  )}`;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card with Pinned Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DDD6CA] shadow-md bg-stone-200 aspect-4/3 sm:aspect-square lg:aspect-4/3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                alt="AKASH Ply & Hardware Bhopal Showroom Display"
                fallbackCategory="Showroom Display"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />

              {/* Pinned Location Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-stone-200 flex items-center justify-between shadow-sm text-xs">
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#8C5D28]" />
                  <span>Bhopal Showroom & Materials</span>
                </div>
                <span className="font-mono text-stone-500 font-medium">MP · 462001</span>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#8C5D28]/20 -z-10"
            />
          </div>

          {/* Right Column: Editorial Copy & Pillars */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
              ABOUT AKASH PLY &amp; HARDWARE
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-[#14161B] mt-2.5 tracking-tight leading-tight">
              From Material to Finished Furniture
            </h2>

            <p className="mt-4 text-base text-stone-600 leading-relaxed">
              We provide a wide range of interior materials along with furniture and woodwork solutions, helping customers source everything they need for their home, office or commercial space.
            </p>

            {/* 3 Core Trust Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E7E2D8] shadow-2xs hover:border-[#DDD6CA] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DDD6CA] flex items-center justify-center text-[#8C5D28] mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#14161B]">
                  Verified Quality
                </h3>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Calibrated plywood, authentic brands, and tested hardware for lasting durability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7E2D8] shadow-2xs hover:border-[#DDD6CA] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DDD6CA] flex items-center justify-center text-[#8C5D28] mb-2.5">
                  <Hammer className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#14161B]">
                  Custom Woodwork
                </h3>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Tailored furniture manufacturing and on-site carpentry solutions for your room layout.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7E2D8] shadow-2xs hover:border-[#DDD6CA] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#DDD6CA] flex items-center justify-center text-[#8C5D28] mb-2.5">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#14161B]">
                  Complete Palette
                </h3>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Curtains, drapes, blinds, PU foam, and wallpapers for cohesive aesthetics.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#why-choose-us"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#181A20] hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors"
              >
                <span>Know More About Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#EADBBE]" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-white hover:bg-stone-50 border border-[#DDD6CA] text-stone-800 font-medium text-xs rounded-xl transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 text-[#10B981]" />
                <span>Talk to AKASH</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
