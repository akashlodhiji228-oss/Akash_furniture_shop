import React, { useState } from 'react';
import { FURNITURE_WORK_ITEMS, SHOWROOM_INFO } from '../data/showroomData.ts';
import {
  Bed,
  Shirt,
  Tv,
  UtensilsCrossed,
  Utensils,
  BookOpen,
  Briefcase,
  Hammer,
  Building,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface FurnitureWorkSectionProps {
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

const FURNITURE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Beds: Bed,
  Wardrobes: Shirt,
  'TV Units': Tv,
  'Modular Kitchens': UtensilsCrossed,
  'Dining Tables': Utensils,
  'Study Tables': BookOpen,
  'Office Furniture': Briefcase,
  'Custom Wooden Furniture': Hammer,
  'Complete Furniture Work': Building,
};

export const FurnitureWorkSection: React.FC<FurnitureWorkSectionProps> = ({
  onOpenQuoteWithCategory,
}) => {
  const [activeItem, setActiveItem] = useState<string>('All');

  const waGeneralUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir, I want to discuss custom furniture and interior woodwork for my space in Bhopal.'
  )}`;

  return (
    <section id="furniture-work" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E7E2D8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C5D28] mb-3">
              <span className="w-8 h-px bg-[#8C5D28]" />
              <span>DEDICATED CARPENTRY &amp; MANUFACTURING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14161B] tracking-tight">
              Custom Furniture &amp; Woodwork
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              From individual furniture pieces to complete interior furniture work, we create practical and customised solutions for your space.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={waGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8C5D28] hover:bg-[#A36D30] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Discuss Your Furniture Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 border border-[#DDD6CA] text-stone-800 font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-2xs"
            >
              <span>Send Specs</span>
            </a>
          </div>
        </div>

        {/* 9 Furniture Items Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FURNITURE_WORK_ITEMS.map((item) => {
            const Icon = FURNITURE_ICONS[item.name] || Hammer;
            const waItemUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
              `Hello Ankush Sir, I am interested in discussing "${item.name}" for my project in Bhopal. Please share details and portfolio.`
            )}`;

            return (
              <div
                key={item.name}
                className="group bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#8C5D28]/40 hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-stone-200 group-hover:bg-[#181A20] group-hover:text-[#EADBBE] group-hover:border-[#181A20] text-[#8C5D28] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#14161B] group-hover:text-[#8C5D28] transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuoteWithCategory(`${item.name} Work`)}
                    className="flex-1 py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Get Estimate
                  </button>

                  <a
                    href={waItemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Box */}
        <div className="mt-12 bg-white rounded-2xl border border-[#DDD6CA] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#14161B]">
              How Furniture Work Works with AKASH Ply &amp; Hardware
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              1. Share room measurements or 3D drawings → 2. Select materials &amp; finishes in our Bhopal showroom → 3. Factory precision cutting &amp; on-site joinery → 4. Clean turnkey handover.
            </p>
          </div>

          <a
            href={waGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#181A20] hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            Discuss Your Furniture Requirement →
          </a>
        </div>
      </div>
    </section>
  );
};
