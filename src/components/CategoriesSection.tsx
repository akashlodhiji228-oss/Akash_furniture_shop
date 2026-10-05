import React from 'react';
import { CATEGORIES_DATA } from '../data/showroomData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryKey: 'Plywood' | 'Laminates' | 'Hardware' | 'Modular') => void;
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onOpenQuoteWithCategory,
}) => {
  return (
    <section id="categories" className="py-24 bg-[#FAF8F5] border-t border-[#E7E2D8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#8C5D28]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#8C5D28]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E2D8]/60"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C5D28] mb-3">
              <span className="w-8 h-px bg-[#8C5D28]"></span>
              Product Categories
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#14161B] tracking-tight leading-tight">
              Everything You Need for Your <span className="text-[#8C5D28] italic font-serif font-light">Interior</span>
            </h2>
          </div>
          <p className="text-base text-stone-600 max-w-md leading-relaxed">
            From structural core plywood to designer decorative surfaces and precision modular fittings in Bhopal.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CATEGORIES_DATA.map((cat) => (
            <motion.div
              variants={itemVariants}
              key={cat.id}
              className="group bg-white rounded-3xl border border-[#E7E2D8] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-[#8C5D28]/10 hover:border-[#8C5D28]/30 hover:-translate-y-2"
            >
              <div
                onClick={() => onSelectCategory(cat.categoryKey)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.categoryKey);
                  }
                }}
              >
                {/* Image Cover with Tag */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE7DE]">
                  <ImageWithFallback
                    src={cat.image}
                    alt={cat.name}
                    fallbackCategory={cat.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#14161B] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {cat.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[#14161B] tracking-tight group-hover:text-[#8C5D28] transition-colors flex items-center justify-between">
                    {cat.name}
                    <ArrowRight className="w-4 h-4 text-[#8C5D28] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-stone-600 mt-2.5 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-stone-100">
                    {cat.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#E7E2D8]">
                          <Check className="w-2.5 h-2.5 text-[#8C5D28]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs mt-auto">
                <button
                  onClick={() => onSelectCategory(cat.categoryKey)}
                  className="font-bold text-stone-900 hover:text-[#8C5D28] transition-colors cursor-pointer"
                >
                  Explore Catalog
                </button>

                <button
                  onClick={() => onOpenQuoteWithCategory(cat.name)}
                  className="text-xs font-bold text-[#8C5D28] hover:text-[#5E3B14] hover:underline cursor-pointer bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#E7E2D8] hover:border-[#8C5D28]/30 transition-all"
                >
                  Quick Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
