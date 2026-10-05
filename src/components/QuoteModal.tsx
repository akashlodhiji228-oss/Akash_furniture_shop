import React, { useState, useEffect } from 'react';
import { SHOWROOM_INFO, INQUIRY_MATERIAL_OPTIONS } from '../data/showroomData.ts';
import { X, Send, Copy, Check, MessageSquare, PhoneCall } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialCategory?: string;
}

const CATEGORY_OPTIONS = INQUIRY_MATERIAL_OPTIONS;

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
  initialCategory = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Bhopal');
  const [category, setCategory] = useState(initialCategory || CATEGORY_OPTIONS[0]);
  const [productFocus, setProductFocus] = useState(initialProduct);
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductFocus(initialProduct);
    }
    if (initialCategory) {
      const match = CATEGORY_OPTIONS.find((c) =>
        c.toLowerCase().includes(initialCategory.toLowerCase())
      );
      if (match) setCategory(match);
    }
  }, [initialProduct, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const recipientPhone = SHOWROOM_INFO.managingDirector.phoneRaw;
  const recipientLabel = `${SHOWROOM_INFO.managingDirector.name} (${SHOWROOM_INFO.managingDirector.phone})`;

  const messageText = `*New Material Quote Request — AKASH Ply & Hardware, Bhopal*
• Client Name: ${name.trim() || 'Valued Client'}
• Contact Phone: ${phone.trim() || 'Not specified'}
• Location: ${location.trim() || 'Bhopal'}
• Category: ${category}
${productFocus ? `• Product / Spec: ${productFocus}` : ''}
${quantity ? `• Approx Quantity / Sizing: ${quantity}` : ''}
${notes ? `• Project Details: ${notes}` : ''}
---------------------------------
Kindly provide quotation, sample catalog, and showroom availability.`;

  const waUrl = `https://wa.me/${recipientPhone}?text=${encodeURIComponent(messageText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waUrl, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-2xl border border-[#DDD6CA] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C5D28]">
              <span>Bhopal Architectural Materials</span>
              <span>·</span>
              <span>Direct Showroom Quote</span>
            </div>
            <h2 id="quote-modal-title" className="text-xl sm:text-2xl font-bold text-[#14161B] mt-1">
              Request Material Quotation
            </h2>
            <p className="text-xs text-stone-600 mt-0.5">
              Connect directly with our Bhopal showroom team for tailored rates and instant catalogs.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="p-3 bg-stone-100/80 rounded-xl text-xs flex items-center justify-between">
            <span className="text-stone-600 font-medium">Direct Showroom Attention:</span>
            <span className="font-bold text-stone-900">{SHOWROOM_INFO.managingDirector.name} ({SHOWROOM_INFO.managingDirector.phone})</span>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ar. Rajesh Sharma"
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] focus:ring-1 focus:ring-[#8C5D28] text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98260XXXXX"
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] focus:ring-1 focus:ring-[#8C5D28] text-stone-900"
              />
            </div>
          </div>

          {/* Category & Specific Product */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Material Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Specific Product / Grade
              </label>
              <input
                type="text"
                value={productFocus}
                onChange={(e) => setProductFocus(e.target.value)}
                placeholder="e.g. 19mm Marine Ply / 1mm Matte Slate"
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
              />
            </div>
          </div>

          {/* Quantity & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Estimated Sheets / Units
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 30 sheets / 1 whole kitchen"
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Site Location / Area
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Arera Colony, MP Nagar, Kolar, Bhopal"
                className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Project Notes / Specifications (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Looking for moisture-proof plywood for kitchen carcass and acrylic high-gloss for shutters. Please share catalog."
              className="w-full px-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 resize-none"
            />
          </div>

          {/* Live Message Preview Card */}
          <div className="bg-[#F5F2EB] border border-[#DDD6CA] rounded-xl p-3.5 text-xs text-stone-700">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
                WhatsApp Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] text-[#8C5D28] hover:text-[#5E3B14] font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="font-mono text-[11px] text-stone-800 whitespace-pre-wrap bg-white/70 p-2.5 rounded-md border border-stone-200 max-h-28 overflow-y-auto">
              {messageText}
            </pre>
          </div>

          {/* Submit & Call options */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-medium text-sm rounded-lg transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Send Inquiry to {recipientLabel.split(' ')[0]}</span>
            </button>
            <a
              href={`tel:+${recipientPhone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#181A20] hover:bg-stone-800 text-white font-medium text-sm rounded-lg transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#EADBBE]" />
              <span>Direct Phone Call</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
