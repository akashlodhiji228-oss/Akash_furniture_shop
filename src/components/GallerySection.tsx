import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, SHOWROOM_INFO } from '../data/showroomData.ts';
import { GalleryItem } from '../types/index.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Maximize2,
  Check,
  Compass,
} from 'lucide-react';

interface GallerySectionProps {
  onOpenQuote: () => void;
  onOpenQuoteWithProduct: (productName: string, category: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenQuote,
  onOpenQuoteWithProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Modular Kitchens',
    'Luxury Wardrobes',
    'Custom Wooden Furniture',
    'Architectural Hardware & Fittings',
    'Sofa Fabrics & Upholstery',
    'Calibrated Plywood & Core Boards',
    'Curtains & High-End Drapes',
    'Designer Entrance & Room Doors',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8C5D28]">
            INTERIOR INSPIRATION &amp; ARCHITECTURAL PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14161B] mt-2 tracking-tight">
            Build Spaces You'll Love.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
            See how quality plywood, sleek laminates, and precision hardware transform living rooms, modular kitchens, and contemporary workspaces in Bhopal.
          </p>
        </div>

        {/* 8-Category Segmented Filter Bar matching user's layout */}
        <div className="mt-10 overflow-x-auto no-scrollbar pb-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 min-w-max sm:min-w-0 p-2 bg-stone-200/50 rounded-2xl sm:rounded-full border border-stone-200/80 max-w-5xl mx-auto">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              const count = cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#181A20] text-white shadow-sm ring-1 ring-stone-800'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-white/70'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-white/20 text-[#EADBBE]' : 'bg-black/5 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category count indicator (Zero-Pill clean typography) */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600 px-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#8C5D28] uppercase tracking-wider text-[11px]">
              {activeCategory === 'All' ? 'Complete Portfolio Collection' : activeCategory}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              Showing <strong className="text-stone-900 font-semibold">{filteredItems.length}</strong> architectural references
            </span>
          </div>
          <span className="text-[11px] text-stone-500">
            Click any work to view materials and enquire directly
          </span>
        </div>

        {/* Gallery Grid (32 curated portfolio works) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#E7E2D8] hover:border-[#DDD6CA] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#ECE7DE]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackCategory={item.category}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#14161B] text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-2xs">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#EADBBE] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-300 mt-0.5 line-clamp-1">
                    {item.specsHighlight}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-white flex items-center justify-between text-xs border-t border-stone-100">
                <span className="text-stone-500 font-medium truncate max-w-[200px]">
                  Material: <strong className="text-stone-800 font-semibold">{item.materialUsed}</strong>
                </span>
                <span className="text-[#8C5D28] font-bold text-[11px] shrink-0 hover:underline">
                  Inspect Spec →
                </span>
              </div>
            </div>
          ))}
        </div>



        {/* Bottom Leadership Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-white rounded-3xl border border-[#E7E2D8] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#14161B]">
              Looking for the Right Material?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Bring your floor plans or furniture ideas. We'll help you select the exact plywood and finishes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                'Hello Ankush Sir, I am planning an interior project in Bhopal and would like your consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-colors shadow-2xs whitespace-nowrap"
            >
              Talk to AKASH
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL                                      */}
      {/* ============================================================== */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar with Counter and Close */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="text-xs font-mono tracking-wider text-stone-300 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              Photo {(lightboxIndex ?? 0) + 1} of {filteredItems.length} · {currentLightboxItem.category}
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
              );
            }}
            aria-label="Previous photo"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/15 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
              );
            }}
            aria-label="Next photo"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/15 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Lightbox Card */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] bg-[#14161B] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image View */}
            <div className="relative md:w-3/5 h-64 sm:h-80 md:h-[500px] bg-black">
              <ImageWithFallback
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                fallbackCategory={currentLightboxItem.category}
                containerClassName="w-full h-full"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            {/* Information & Action Pane */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-[#1A1D24] text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#EADBBE]">
                  {currentLightboxItem.category}
                </span>

                <h3 className="text-xl font-bold mt-1 text-white">
                  {currentLightboxItem.title}
                </h3>

                <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">
                    Material Specification
                  </span>
                  <p className="text-stone-200 mt-1 font-medium">
                    {currentLightboxItem.specsHighlight}
                  </p>
                </div>
              </div>

              {/* Lightbox Actions */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                    `Hello Ankush Sir, I am interested in inquiring about this project from your Bhopal portfolio: "${currentLightboxItem.title}" (${currentLightboxItem.category}). Please share material specs and rates.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const item = currentLightboxItem;
                    setLightboxIndex(null);
                    onOpenQuoteWithProduct(item.title, item.category);
                  }}
                  className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-xl transition-colors border border-stone-700 cursor-pointer"
                >
                  Request Detailed Material Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
