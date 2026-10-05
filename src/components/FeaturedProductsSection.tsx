import React, { useState } from 'react';
import { ProductItem } from '../types/index.ts';
import { FEATURED_PRODUCTS, SHOWROOM_INFO } from '../data/showroomData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { Check, Search, X, MessageSquare, ArrowRight, Layers, FileText } from 'lucide-react';

interface FeaturedProductsSectionProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectProductForDetail: (prod: ProductItem) => void;
  onOpenQuoteWithProduct: (productName: string, category: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProductForDetail,
  onOpenQuoteWithProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { key: 'All', label: 'All' },
    { key: 'Plywood', label: 'Plywood' },
    { key: 'Laminates', label: 'Laminates' },
    { key: 'Hardware', label: 'Hardware Fittings' },
    { key: 'Modular', label: 'Modular Solutions' },
  ];

  const filteredProducts = FEATURED_PRODUCTS.filter((prod) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      prod.category === selectedCategory ||
      (selectedCategory === 'Hardware Fittings' && prod.category === 'Hardware') ||
      (selectedCategory === 'Modular Solutions' && prod.category === 'Modular');

    const matchesSearch =
      searchQuery.trim() === '' ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getTabCount = (key: string) => {
    if (key === 'All') return FEATURED_PRODUCTS.length;
    return FEATURED_PRODUCTS.filter(
      (p) =>
        p.category === key ||
        (key === 'Hardware' && p.category === 'Hardware') ||
        (key === 'Modular' && p.category === 'Modular')
    ).length;
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8C5D28]">
            FEATURED SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14161B] mt-2 tracking-tight">
            Curated Products for Refined Interiors
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
            Selected materials and fittings available in multiple specifications, finishes, and dimensions for homes and commercial venues.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Segmented Filter Buttons with item count */}
          <div className="w-full md:w-auto flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto no-scrollbar">
            {filterTabs.map((tab) => {
              const active = selectedCategory === tab.key;
              const count = getTabCount(tab.key);
              return (
                <button
                  key={tab.key}
                  onClick={() => onSelectCategory(tab.key)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#181A20] text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
                      active ? 'bg-white/20 text-[#EADBBE]' : 'bg-black/5 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade, laminate, finish..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-[#DDD6CA] rounded-xl focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((prod) => {
              const waItemUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                `Hello Ankush Sir, I am inquiring about "${prod.name}" from your Bhopal catalog. Please share prices and sheet availability.`
              )}`;

              return (
                <div
                  key={prod.id}
                  className="group bg-white rounded-2xl border border-[#E7E2D8] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#DDD6CA]"
                >
                  <div>
                    {/* Image with Tag & Status */}
                    <div
                      onClick={() => onSelectProductForDetail(prod)}
                      className="relative aspect-4/3 overflow-hidden bg-[#ECE7DE] cursor-pointer"
                    >
                      <ImageWithFallback
                        src={prod.image}
                        alt={prod.name}
                        fallbackCategory={prod.categoryLabel}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#14161B] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs">
                        {prod.categoryLabel}
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available in Multiple Options</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3
                        onClick={() => onSelectProductForDetail(prod)}
                        className="text-base font-bold text-[#14161B] tracking-tight hover:text-[#8C5D28] transition-colors cursor-pointer"
                      >
                        {prod.name}
                      </h3>

                      <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-2">
                        {prod.shortDescription}
                      </p>

                      {/* Specs checkmarks */}
                      <div className="mt-4 space-y-1.5 pt-3 border-t border-stone-100">
                        {prod.specs.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                            <Check className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProductForDetail(prod)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#EADBBE]" />
                      <span>Enquire Now</span>
                    </button>

                    <a
                      href={waItemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Direct WA</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 text-center py-16 bg-white rounded-2xl border border-dashed border-stone-300">
            <p className="text-sm font-semibold text-stone-700">No matching materials found</p>
            <p className="text-xs text-stone-500 mt-1">
              Try searching for "plywood", "laminate", "hardware", or click "All"
            </p>
            <button
              onClick={() => {
                onSelectCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-stone-900 bg-stone-100 rounded-lg hover:bg-stone-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Bulk Consultation Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#F5F2EB] rounded-2xl border border-[#DDD6CA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
              Architectural & Contractor Support
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#14161B] mt-1">
              Need Project-Specific Sizing & Bulk Quantities?
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              We provide tailored pricing for interior designers, architects, and turnkey contractors in Bhopal with doorstep delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteWithProduct('Bulk Project Inquiries', 'Turnkey Interior Package')}
              className="px-5 py-2.5 bg-[#181A20] text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-2xs"
            >
              Request Bulk Rate Card
            </button>
            <a
              href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
              className="px-4 py-2.5 bg-white border border-[#DDD6CA] text-stone-800 text-xs font-semibold rounded-xl hover:bg-stone-50 transition-colors"
            >
              Call: {SHOWROOM_INFO.managingDirector.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
