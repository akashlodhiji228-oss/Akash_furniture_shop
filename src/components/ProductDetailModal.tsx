import React, { useEffect } from 'react';
import { ProductItem } from '../types/index.ts';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';
import { X, CheckCircle, MessageSquare, Phone, Layers, ShieldCheck, Maximize2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuoteWithProduct: (productName: string, category: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuoteWithProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hello Ankush Sir / AKASH Ply & Hardware team, I am interested in inquiring about "${product.name}" (${product.categoryLabel}) for our interior project in Bhopal. Please share rates and stock availability.`
  );
  const waUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${waMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-2xl border border-[#DDD6CA] shadow-2xl text-[#14161B] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 text-stone-600 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full border border-stone-200 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image & Quick Highlight */}
          <div className="relative h-64 md:h-auto min-h-[260px] bg-[#ECE7DE]">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              fallbackCategory={product.categoryLabel}
              containerClassName="h-full w-full"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-xs text-stone-100 text-xs px-2.5 py-1 rounded-md font-medium tracking-wide">
              {product.categoryLabel}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-stone-200 text-xs text-stone-700 shadow-sm flex items-center justify-between">
              <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8C5D28]" />
                {product.specs.warranty}
              </span>
              <span className="text-[#8C5D28] font-medium">{product.availability}</span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
                <span>{product.tag}</span>
                <span>·</span>
                <span>Bhopal Showroom</span>
              </div>

              <h3 id="product-modal-title" className="text-xl md:text-2xl font-bold text-[#14161B] mt-1.5 leading-snug">
                {product.name}
              </h3>

              <p className="text-sm text-stone-600 mt-2.5 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Technical Specs Table */}
              <div className="mt-5 space-y-2.5 border-t border-b border-stone-200 py-3.5 text-xs text-stone-700">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-stone-500 font-medium">Standard Sizes:</span>
                  <span className="font-semibold text-right text-stone-900">{product.specs.dimensions}</span>
                </div>
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-stone-500 font-medium">Thickness / Gauge:</span>
                  <span className="font-semibold text-right text-stone-900">{product.specs.thickness}</span>
                </div>
                {product.specs.grade && (
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-stone-500 font-medium">Standard / Grade:</span>
                    <span className="font-semibold text-right text-stone-900">{product.specs.grade}</span>
                  </div>
                )}
                {product.specs.finish && (
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-stone-500 font-medium">Available Finishes:</span>
                    <span className="font-semibold text-right text-stone-900">{product.specs.finish}</span>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Key Technical Features
                </p>
                <div className="space-y-1.5">
                  {product.specs.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-800">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Recommended For
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.specs.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#10B981] hover:bg-[#059669] text-white font-medium text-xs rounded-lg transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Price</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteWithProduct(product.name, product.categoryLabel);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#181A20] hover:bg-stone-800 text-white font-medium text-xs rounded-lg transition-colors"
              >
                <Layers className="w-4 h-4 text-[#EADBBE]" />
                <span>Custom Sizing Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
