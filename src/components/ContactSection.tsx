import React, { useState } from 'react';
import { SHOWROOM_INFO, INQUIRY_CHECKBOX_OPTIONS } from '../data/showroomData.ts';
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
  CheckSquare,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  
  // Master Prompt Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedLookingFor, setSelectedLookingFor] = useState<string[]>([
    'Plywood & Structural Boards',
  ]);
  const [requirementMessage, setRequirementMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterGroup, setFilterGroup] = useState<'All' | 'Materials' | 'Hardware' | 'Furniture'>('All');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SHOWROOM_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const toggleOption = (opt: string) => {
    if (selectedLookingFor.includes(opt)) {
      if (selectedLookingFor.length > 1) {
        setSelectedLookingFor(selectedLookingFor.filter((item) => item !== opt));
      }
    } else {
      setSelectedLookingFor([...selectedLookingFor, opt]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const lookingForList = selectedLookingFor.join(', ');
    const message = `*Showroom Inquiry — AKASH Ply & Hardware, Bhopal*
• Full Name: ${fullName.trim() || 'Client'}
• Phone Number: ${phone.trim() || 'Not specified'}
${whatsappNumber ? `• WhatsApp Number: ${whatsappNumber.trim()}` : ''}
${email ? `• Email: ${email.trim()}` : ''}
• What are you looking for:
  ${lookingForList}
${requirementMessage ? `• Requirement / Details: ${requirementMessage.trim()}` : ''}
---------------------------------
Attention: Ankush Shrivastava (Founder & MD)`;

    const url = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setWhatsappNumber('');
    setEmail('');
    setRequirementMessage('');
    setSelectedLookingFor(['Plywood & Structural Boards']);
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
          {/* RIGHT COLUMN: MASTER INQUIRY FORM (REQUIREMENT 5)             */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E7E2D8] p-6 sm:p-8 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D28]">
              SEND AN INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#14161B] mt-1">
              Connect with Our Bhopal Store
            </h3>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Tell us about your materials, furniture, or complete interior requirement. We respond promptly.
            </p>

            {isSubmitted ? (
              /* Success State (Requirement 5) */
              <div className="mt-6 p-6 sm:p-8 bg-[#FAF8F5] border border-[#DDD6CA] rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#14161B]">
                    Thank you! Your inquiry has been received.
                  </h4>
                  <p className="text-xs text-stone-600 mt-1.5 max-w-md mx-auto leading-relaxed">
                    Our team will get in touch with you shortly. For immediate assistance or direct quotation, you can also continue directly on WhatsApp.
                  </p>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl text-left text-xs text-stone-700 space-y-1">
                  <div className="font-semibold text-stone-900 truncate">
                    Client: {fullName} · {phone}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Selected Items ({selectedLookingFor.length}): {selectedLookingFor.join(', ')}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                      `Hello Ankush Sir, my name is ${fullName}. I just submitted an inquiry on your website for: ${selectedLookingFor.join(
                        ', '
                      )}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open in WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Amit Verma"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      PHONE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98260XXXXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
                    />
                  </div>
                </div>

                {/* WhatsApp Number & Email (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      WHATSAPP NUMBER
                    </label>
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. 98260XXXXX (if different)"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      EMAIL (OPTIONAL)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
                    />
                  </div>
                </div>

                {/* What are you looking for? (24 Checkbox Multi-Select Options) */}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                      WHAT ARE YOU LOOKING FOR? <span className="text-[#8C5D28]">({selectedLookingFor.length} Selected)</span>
                    </label>
                    <span className="text-[10px] text-stone-500">Tap to select multiple</span>
                  </div>

                  {/* Category Filter Chips for Smooth Mobile Experience */}
                  <div className="flex items-center gap-1.5 mb-2 overflow-x-auto no-scrollbar">
                    {(['All', 'Materials', 'Hardware', 'Furniture'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setFilterGroup(tab)}
                        className={`text-[10px] px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer shrink-0 ${
                          filterGroup === tab
                            ? 'bg-[#181A20] text-white'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {tab === 'All' ? 'All (24)' : tab}
                      </button>
                    ))}
                  </div>

                  {/* Checkbox Grid (Clean, Tap-Friendly, Scrollable Container) */}
                  <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3 max-h-56 overflow-y-auto space-y-1 shadow-inner">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {INQUIRY_CHECKBOX_OPTIONS.filter((item) => {
                        if (filterGroup === 'Materials') {
                          return [
                            'Plywood & Structural Boards',
                            'Laminates / Sunmica',
                            'Curtains & Drapes',
                            'Blinds',
                            'Wallpapers',
                            'Doors',
                            'Louvers',
                            'Mattress',
                            'Pillows',
                            'PU Foam',
                            'Coolers',
                            'Complete Interior Material Package',
                          ].includes(item);
                        }
                        if (filterGroup === 'Hardware') {
                          return [
                            'Hardware & Fittings',
                            'Hinges & Drawer Runners',
                            'Modular Kitchen Accessories',
                            'Wardrobe / Closet Materials',
                          ].includes(item);
                        }
                        if (filterGroup === 'Furniture') {
                          return [
                            'Furniture Work',
                            'Custom Wooden Furniture',
                            'Modular Kitchen Work',
                            'Wardrobe Work',
                            'Sofa / Upholstery Work',
                            'Complete Interior Furniture Work',
                            'Other',
                          ].includes(item);
                        }
                        return true;
                      }).map((item) => {
                        const isChecked = selectedLookingFor.includes(item);
                        return (
                          <label
                            key={item}
                            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-white text-stone-900 font-bold border border-[#8C5D28]/40 shadow-xs'
                                : 'text-stone-600 hover:bg-stone-200/50 border border-transparent'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleOption(item)}
                              className="w-4 h-4 accent-[#8C5D28] rounded cursor-pointer shrink-0"
                            />
                            <span className="truncate">{item}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Tell us about your requirement */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    TELL US ABOUT YOUR REQUIREMENT
                  </label>
                  <textarea
                    rows={3}
                    value={requirementMessage}
                    onChange={(e) => setRequirementMessage(e.target.value)}
                    placeholder="Tell us what you need, quantity, size, design or any specific requirement..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#8C5D28] text-stone-900 resize-none shadow-2xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#181A20] hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#EADBBE]" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}

            <p className="mt-4 text-[11px] text-stone-500 text-center leading-relaxed">
              Fast responses during showroom hours (10:00 AM – 8:30 PM). Direct telephone support with Ankush Shrivastava also available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
