import React from 'react';
import { Award, Layers, Tag, Clock, HeartHandshake, ArrowRight } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';

interface WhyChooseUsSectionProps {
  onOpenQuote: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenQuote }) => {
  const cards = [
    {
      num: '01',
      title: 'Premium Quality',
      subtitle: 'Quality-focused products for dependable interior applications.',
      description: 'Every material is curated to ensure durability, structural integrity, and long service life.',
      icon: Award,
    },
    {
      num: '02',
      title: 'Wide Range',
      subtitle: 'Explore plywood, laminates, hardware and modular solutions under one roof.',
      description: 'Complete one-stop interior material sourcing saving contractors, architects, and owners valuable time.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Affordable Pricing',
      subtitle: 'Quality products at competitive prices.',
      description: 'Direct and transparent commercial pricing tailored to residential renovations and commercial projects.',
      icon: Tag,
    },
    {
      num: '04',
      title: 'Timely Delivery',
      subtitle: 'Reliable service focused on timely requirements.',
      description: 'Prompt dispatch and order fulfillment to keep your on-site carpentry work on schedule.',
      icon: Clock,
    },
    {
      num: '05',
      title: 'Customer Satisfaction',
      subtitle: 'Customer needs remain at the heart of our service.',
      description: 'Attentive personal assistance, material guidance, and dedicated post-purchase support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
            THE AKASH ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14161B] mt-2 tracking-tight">
            Why Choose AKASH?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
            Committed to supplying durable materials, trustworthy guidance, and dependable service for every interior build.
          </p>
        </div>

        {/* 6 Cards Grid (5 features + 1 specialist card) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.num}
                className="bg-white rounded-2xl border border-[#E7E2D8] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#DDD6CA] transition-all"
              >
                <div>
                  {/* Top row: Number and minimal icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-[#8C5D28]">
                      {card.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-stone-600">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#14161B] mt-4">
                    {card.title}
                  </h3>

                  <p className="text-xs font-medium text-stone-800 mt-2">
                    {card.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-500 mt-4 leading-relaxed pt-3 border-t border-stone-100">
                  {card.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Need Guidance / Talk to Our Material Specialists */}
          <div className="bg-[#EFE8DC] rounded-2xl border border-[#DDD6CA] p-6 sm:p-7 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D28]">
                NEED GUIDANCE?
              </span>

              <h3 className="text-lg font-bold text-[#14161B] mt-2">
                Talk to Our Material Specialists
              </h3>

              <p className="text-xs text-stone-700 mt-2.5 leading-relaxed">
                Not sure about the ideal plywood grade or laminate finish for your space? Our team in Bhopal is ready to assist you.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DDD6CA]/60">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EADBBE]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
