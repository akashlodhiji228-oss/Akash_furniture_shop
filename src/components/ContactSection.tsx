import React, { useState } from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Copy,
  Check,
  Navigation,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [materialInterest, setMaterialInterest] = useState('Plywood & Structural Boards');
  const [details, setDetails] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SHOWROOM_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Direct Showroom Inquiry — AKASH Ply & Hardware*
• Name: ${formName.trim() || 'Client'}
• Phone: ${formPhone.trim() || 'Not specified'}
• Material Interest: ${materialInterest}
${details ? `• Details / Sheet Count: ${details}` : ''}
---------------------------
Attention: Ankush Shrivastava (Founder & MD)`;

    const url = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ============================================================== */}
          {/* LEFT COLUMN: SHOWROOM DETAILS & INTERACTIVE VECTOR MAP         */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 space-y-6">
            {/* Showroom Address Card */}
            <div className="bg-white rounded-2xl border border-[#E7E2D8] p-6 shadow-2xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#8C5D28] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#14161B]">
                      Showroom Address
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {SHOWROOM_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-semibold rounded-lg transition-colors shrink-0"
                  title="Copy full address"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-600">
                <Clock className="w-3.5 h-3.5 text-[#8C5D28]" />
                <span>{SHOWROOM_INFO.timings}</span>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp Card for Ankush Shrivastava */}
            <div className="bg-white rounded-2xl border border-[#E7E2D8] p-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mt-0.5">
                    {SHOWROOM_INFO.managingDirector.name}
                  </h4>
                  <div className="text-sm font-semibold text-[#8C5D28] mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{SHOWROOM_INFO.managingDirector.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold">
                  <a
                    href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
                    className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                      'Hello Ankush Sir, I am contacting you regarding an interior material requirement in Bhopal.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl border border-emerald-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Directions Row */}
            <div className="bg-white rounded-2xl border border-[#E7E2D8] p-5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-stone-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                    Email Inquiries
                  </div>
                  <div className="text-xs font-medium text-stone-800">
                    {SHOWROOM_INFO.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${SHOWROOM_INFO.email}`}
                  className="flex-1 sm:flex-initial px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors text-center"
                >
                  Email Us
                </a>
                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#EADBBE]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* ============================================================== */}
            {/* INTERACTIVE GOOGLE MAP CARD (EXACT MATCH TO USER SCREENSHOT)  */}
            {/* ============================================================== */}
            <div className="bg-white rounded-2xl border border-[#DDD6CA] overflow-hidden shadow-xs">
              {/* Top Bar */}
              <div className="px-4 py-3 bg-[#FAF8F5] border-b border-[#E7E2D8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>Interactive Map: Hamidia Road, Bhopal</span>
                </div>

                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#8C5D28] transition-colors group"
                >
                  <span>Open Full Map</span>
                  <Send className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8C5D28] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Interactive Google Map Iframe */}
              <div className="relative w-full h-80 sm:h-96 bg-stone-100">
                <iframe
                  title="AKASH Ply & Hardware Bhopal Showroom Map"
                  src="https://maps.google.com/maps?q=H.No.+28+Sartaj+Patel+Nagar+Colony+Near+Bharat+Talkies+Hamidia+Road+Bhopal+462001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Bar */}
              <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#E7E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold text-sm leading-none shrink-0" aria-hidden="true">📍</span>
                  <span>
                    Located Behind Shakti Ali Hospital, Near Bharat Talkies, Hamidia Road, Bhopal
                  </span>
                </div>

                <div className="text-stone-800 font-medium shrink-0">
                  Walk-ins Welcome Everyday
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: INTERACTIVE WHATSAPP INQUIRY FORM               */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E7E2D8] p-6 sm:p-8 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D28]">
              SEND A DIRECT MESSAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#14161B] mt-1">
              Connect with Our Bhopal Store
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Fill in your requirements below to instantly start a WhatsApp conversation with our store team.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Amit Verma"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  YOUR PHONE NUMBER
                </label>
                <input
                  type="tel"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="e.g. 98260XXXXX"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
                />
              </div>

              {/* Material of Interest */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  MATERIAL OF INTEREST
                </label>
                <select
                  value={materialInterest}
                  onChange={(e) => setMaterialInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900"
                >
                  <option value="Plywood & Structural Boards">Plywood &amp; Structural Boards</option>
                  <option value="Decorative Laminates & Acrylics">Decorative Laminates &amp; Acrylics</option>
                  <option value="Hardware, Hinges & Drawer Runners">Hardware, Hinges &amp; Drawer Runners</option>
                  <option value="Modular Kitchen Cabinets & Baskets">Modular Kitchen Cabinets &amp; Baskets</option>
                  <option value="Luxury Wardrobes & Closets">Luxury Wardrobes &amp; Closets</option>
                  <option value="Custom Wooden Furniture">Custom Wooden Furniture</option>
                  <option value="Sofa Fabrics & Upholstery">Sofa Fabrics &amp; Upholstery</option>
                  <option value="Curtains & High-End Drapes">Curtains &amp; High-End Drapes</option>
                  <option value="Designer Entrance & Room Doors">Designer Entrance &amp; Room Doors</option>
                  <option value="Complete Interior Material Package">Complete Interior Material Package</option>
                </select>
              </div>



              {/* Message / Details */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  MESSAGE / SHEET COUNT / DETAILS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. Please share catalog for interior plywood and textured laminates..."
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Inquiry on WhatsApp</span>
              </button>
            </form>

            <p className="mt-4 text-[11px] text-stone-500 text-center leading-relaxed">
              Fast responses during working hours (10:00 AM – 8:30 PM). Direct telephone support also available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
