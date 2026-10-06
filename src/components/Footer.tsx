import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14161B] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-[#EADBBE]">
                AKASH
              </span>
              <span className="text-lg font-medium text-white tracking-tight">
                Ply &amp; Hardware
              </span>
            </div>

            <p className="mt-4 text-xs text-stone-400 leading-relaxed max-w-sm">
              Architectural Materials &amp; Bespoke Interior Solutions for Distinguished Spaces. Sourcing reliable calibrated plywood, designer laminates, and precision hardware for homes and commercial developments across Bhopal.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <span className="text-stone-200 font-semibold">Managing Director:</span>
                <span>Ankush Shrivastava</span>
              </div>
              <a
                href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#EADBBE] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Line: {SHOWROOM_INFO.managingDirector.phone}</span>
              </a>
              <a
                href={SHOWROOM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#EADBBE] hover:underline mt-1"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Showroom
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Material Catalog
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  The AKASH Advantage
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Architectural Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Map
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories (All 19 Materials) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white">
                Materials &amp; Solutions (19)
              </h4>
              <a href="#material-range" className="text-[11px] text-[#EADBBE] hover:underline font-medium">
                View All →
              </a>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-stone-400">
              <li><a href="#material-range" className="hover:text-white transition-colors">Plywood &amp; Boards</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Sunmica / Laminates</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Hardware &amp; Fittings</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Hinges &amp; Runners</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Kitchen Baskets</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Wardrobe Systems</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Sofa Fabrics</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Curtains &amp; Drapes</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Blinds</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Doors &amp; Flush Doors</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Wallpapers</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Mattress &amp; Pillows</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">PU Foam</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Coolers</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Lovers / Louvers</a></li>
              <li><a href="#material-range" className="hover:text-white transition-colors">Custom Furniture</a></li>
            </ul>
          </div>

          {/* Bhopal Showroom Address & Timings */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Bhopal Showroom
            </h4>
            <div className="mt-4 space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C5D28] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {SHOWROOM_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <p>{SHOWROOM_INFO.timings}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <a href={`mailto:${SHOWROOM_INFO.email}`} className="hover:text-white">
                  {SHOWROOM_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={SHOWROOM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EADBBE] hover:underline"
                >
                  <span>Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright & Credits */}
        <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} AKASH Ply &amp; Hardware, Bhopal. All rights reserved.
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-stone-300">
            <span>
              Website provided by <a href="https://auraforge.site/" target="_blank" rel="noopener noreferrer" className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#EADBBE] hover:opacity-80 transition-opacity uppercase tracking-wider text-base sm:text-lg ml-1">AuraForge</a>
            </span>
            <span className="hidden sm:inline text-stone-600" aria-hidden="true">|</span>
            <span>
              Contact: <strong className="font-bold text-white tracking-wider text-base ml-1">7869461895</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
