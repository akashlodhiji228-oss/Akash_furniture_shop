import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

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

          {/* Product Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Materials &amp; Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-stone-400">
              <li>Calibrated BWP Marine Plywood</li>
              <li>Decorative &amp; Acrylic Laminates</li>
              <li>Hydraulic Soft-Close Hinges</li>
              <li>Telescopic Drawer Channels</li>
              <li>Modular Kitchen Baskets &amp; Pantries</li>
              <li>Luxury Wardrobe Sliding Systems</li>
              <li>Sofa Fabrics &amp; Belgian Drapes</li>
              <li>Designer Teak Wood Entrance Doors</li>
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

        {/* Bottom Bar: Clean Copyright with Ankush Shrivastava */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} AKASH Ply &amp; Hardware, Bhopal. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-stone-400 text-xs">
            <span>Direct Inquiries: <strong className="text-stone-200 font-semibold">{SHOWROOM_INFO.managingDirector.name}</strong></span>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:+${SHOWROOM_INFO.managingDirector.phoneRaw}`}
              className="text-[#EADBBE] hover:underline"
            >
              {SHOWROOM_INFO.managingDirector.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
