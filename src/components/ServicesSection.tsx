import React, { useState } from 'react';
import { SERVICES_CATEGORIES, SHOWROOM_INFO } from '../data/showroomData.ts';
import {
  Layers,
  Wrench,
  UtensilsCrossed,
  Shirt,
  Armchair,
  Columns,
  DoorOpen,
  Hammer,
  Package,
  Building2,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  '01': Layers,
  '02': Wrench,
  '03': UtensilsCrossed,
  '04': Shirt,
  '05': Armchair,
  '06': Columns,
  '07': DoorOpen,
  '08': Hammer,
  '09': Package,
  '10': Building2,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteWithCategory,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-24 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E7E2D8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C5D28] mb-2.5">
              <span className="w-6 h-px bg-[#8C5D28]" />
              <span>PRODUCTS &amp; SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14161B] tracking-tight">
              Materials, Furniture &amp; Interior Work
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md leading-relaxed">
            Whether you need individual materials for your carpenter or complete turnkey furniture and interior execution, we supply everything under one roof.
          </p>
        </div>

        {/* 10 Services Compact Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES_CATEGORIES.map((srv) => {
            const Icon = CATEGORY_ICONS[srv.number] || Sparkles;
            const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
              `Hello Ankush Sir, I am inquiring about "${srv.title}" at AKASH Ply & Hardware Bhopal. Please share details and pricing.`
            )}`;

            return (
              <div
                key={srv.number}
                className="group bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#8C5D28]/40 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-mono font-bold text-[#8C5D28] bg-[#FAF6F0] px-2 py-0.5 rounded-md border border-[#EADBBE]/50">
                      {srv.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-[#181A20] group-hover:text-[#EADBBE] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                    {srv.tag}
                  </div>
                  <h3 className="text-base font-bold text-[#14161B] group-hover:text-[#8C5D28] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-3.5 pt-3 border-t border-stone-100 space-y-1.5">
                    {srv.highlights.map((item, i) => (
                      <li key={i} className="text-[11px] text-stone-600 flex items-start gap-1.5 leading-tight">
                        <span className="text-[#8C5D28] font-bold leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTAs */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuoteWithCategory(srv.title)}
                    className="flex-1 py-1.5 px-2 bg-stone-50 hover:bg-stone-100 text-stone-800 text-[11px] font-semibold rounded-lg border border-stone-200 transition-colors text-center cursor-pointer"
                  >
                    Get Quote
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Inquire on WhatsApp"
                    className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg border border-emerald-200 transition-colors shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Both Options Clarification Bar */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-[#E7E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8C5D28]" />
            <span className="font-semibold text-stone-900">
              Need individual raw materials or full interior woodwork?
            </span>
            <span className="hidden md:inline text-stone-500">— We support contractors, carpenters, architects, and direct homeowners.</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#furniture-work" className="font-bold text-[#8C5D28] hover:underline whitespace-nowrap">
              Explore Furniture Work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
