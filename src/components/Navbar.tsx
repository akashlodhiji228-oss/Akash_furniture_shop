import React, { useState, useEffect } from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { Phone, Menu, X, ArrowRight, MessageSquare, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Furniture Work', href: '#furniture-work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Architectural Notice Bar */}
      <div className="bg-[#181A20] text-stone-300 text-[11px] py-1.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open Daily (10:00 AM – 8:30 PM)
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#EADBBE]" />
              Near Bharat Talkies, Hamidia Road, Bhopal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#EADBBE]" />
              <span className="font-semibold text-stone-200">Ankush Shrivastava: {SHOWROOM_INFO.managingDirector.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                'Hello Ankush Sir, I am visiting the AKASH Ply & Hardware website and have an inquiry.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7E2D8]'
            : 'bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#E7E2D8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Wordmark with Brass Monogram Badge */}
          {/* Zone 1: Pure Typographic Wordmark (No Logo Box) */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8C5D28] rounded-md py-1"
          >
            <div className="flex items-baseline gap-2 leading-none">
              <span className="text-2xl sm:text-[26px] font-black tracking-tight text-[#14161B] group-hover:text-[#8C5D28] transition-colors">
                AKASH
              </span>
              <span className="text-base sm:text-lg font-medium text-stone-700 tracking-tight">
                Ply &amp; Hardware
              </span>
            </div>
            <span className="text-[10px] text-[#8C5D28] font-bold tracking-widest uppercase mt-1">
              Bhopal Architectural Showroom · Hamidia Road
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-[#484B52] hover:text-[#14161B] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#8C5D28] decoration-2 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1F2228] bg-white hover:bg-stone-50 border border-[#DDD6CA] rounded-full transition-colors whitespace-nowrap shadow-2xs"
              title="Executive Direct Line — Ankush Shrivastava"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C5D28]" />
              <span>{SHOWROOM_INFO.managingDirector.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#181A20] hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#181A20] rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-stone-700 hover:text-stone-900 bg-white border border-[#DDD6CA] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#DDD6CA] px-5 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-stone-800 hover:text-[#8C5D28] py-1 border-b border-stone-200/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-[#DDD6CA] rounded-lg text-xs font-semibold text-stone-900 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#8C5D28]" />
                <span>Call: {SHOWROOM_INFO.managingDirector.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
                  'Hello Ankush Sir, I am visiting the AKASH Ply & Hardware website and would like to inquire about interior materials.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#10B981] text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#181A20] text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                <span>Get Material Quote</span>
                <ArrowRight className="w-4 h-4 text-[#EADBBE]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
