import React, { useState } from 'react';
import { INQUIRY_MATERIAL_OPTIONS, SHOWROOM_INFO } from '../data/showroomData.ts';
import {
  Layers,
  Sparkles,
  Wrench,
  Sliders,
  UtensilsCrossed,
  DoorOpen,
  Armchair,
  Shirt,
  Columns,
  Grid,
  PaintBucket,
  Bed,
  Cloud,
  Box,
  Wind,
  AlignJustify,
  Hammer,
  Package,
  Search,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface CompleteRangeSectionProps {
  onOpenQuoteWithCategory: (categoryName: string) => void;
}

interface MaterialDetail {
  name: string;
  group: 'Wood & Boards' | 'Surfaces & Decor' | 'Hardware & Modular' | 'Furnishing & Comfort';
  tag: string;
  description: string;
  popularFor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const MATERIAL_SPECTRUM: MaterialDetail[] = [
  {
    name: 'Plywood & Structural Boards',
    group: 'Wood & Boards',
    tag: 'Calibrated IS:710 & IS:303',
    description: 'High-density calibrated core plywood, boiling waterproof marine ply, MR grade, and structural blockboards.',
    popularFor: 'Furniture carcasses, wardrobes, kitchen bases & beds',
    icon: Layers,
  },
  {
    name: 'Decorative Laminates / Sunmica',
    group: 'Surfaces & Decor',
    tag: '1.0mm & 0.8mm Designer Sheets',
    description: 'Extensive catalog of woodgrain, ultra-matte, high-gloss acrylic, textured, and anti-fingerprint surface mica.',
    popularFor: 'Wardrobe shutters, kitchen cabinets & wall panelling',
    icon: Sparkles,
  },
  {
    name: 'Hardware & Fittings',
    group: 'Hardware & Modular',
    tag: 'Solid Brass & SS 304',
    description: 'Architectural handles, mortise locksets, tower bolts, magnetic catches, and heavy-duty architectural fittings.',
    popularFor: 'Doors, windows, main entrance & cabinet installations',
    icon: Wrench,
  },
  {
    name: 'Hinges & Drawer Runners',
    group: 'Hardware & Modular',
    tag: 'Soft-Close Precision',
    description: 'Integrated hydraulic clip-on hinges, 3D adjustable dampers, and full-extension telescopic ball-bearing channels.',
    popularFor: 'Silent-closing kitchen drawers & wardrobe shutters',
    icon: Sliders,
  },
  {
    name: 'Modular Kitchen Accessories / Baskets',
    group: 'Hardware & Modular',
    tag: 'SS 304 Anti-Rust',
    description: 'Cutlery organizers, pull-out wire baskets, tall larder units, corner carousels, and bottle pull-outs.',
    popularFor: 'Space-maximizing modern modular kitchens',
    icon: UtensilsCrossed,
  },
  {
    name: 'Wardrobe & Closet Materials',
    group: 'Hardware & Modular',
    tag: 'Sliding & LED Profiles',
    description: 'Top-hung heavy sliding channels, aluminum glass door profiles, closet lighting channels, and internal drawer trays.',
    popularFor: 'Floor-to-ceiling modern sliding wardrobes',
    icon: Shirt,
  },
  {
    name: 'Sofa Material & Upholstery Fabrics',
    group: 'Furnishing & Comfort',
    tag: 'Premium Velvet & Bouclé',
    description: 'Spill-resistant velvet, linen-cotton weaves, textured bouclé, and durable leatherette upholstery fabrics.',
    popularFor: 'Living room sofas, armchairs & dining chairs',
    icon: Armchair,
  },
  {
    name: 'Curtains & High-End Drapes',
    group: 'Surfaces & Decor',
    tag: 'Blackout & Sheer Linens',
    description: 'Acoustic thermal blackout drapery, sheer Belgian linen fabrics, pelmet hardware, and motorized curtain tracks.',
    popularFor: 'Living rooms, bedrooms & luxury villas',
    icon: Columns,
  },
  {
    name: 'Blinds',
    group: 'Surfaces & Decor',
    tag: 'Zebra, Roller & Wooden',
    description: 'Custom-fit zebra day-and-night blinds, roller sunscreens, blackout office blinds, and natural wooden venetians.',
    popularFor: 'Offices, conference rooms & modern balconies',
    icon: Grid,
  },
  {
    name: 'Doors',
    group: 'Wood & Boards',
    tag: 'Solid Wood & Laminated',
    description: 'Ready-to-fit solid wood doors, heavy membrane doors, primed interior doors, and durable entryway panels.',
    popularFor: 'Bedrooms, bathrooms & apartment entries',
    icon: DoorOpen,
  },
  {
    name: 'Designer / Flush Doors',
    group: 'Wood & Boards',
    tag: 'Waterproof Pine Core',
    description: 'IS:2202 calibrated flush doors, decorative veneer inlay designs, and sound-insulating room doors.',
    popularFor: 'Interior residential suites & office cabins',
    icon: DoorOpen,
  },
  {
    name: 'Wallpapers',
    group: 'Surfaces & Decor',
    tag: 'Custom Murals & 3D Textures',
    description: 'Washable non-woven wallpapers, metallic foil accents, geometric murals, and textured wall coverings.',
    popularFor: 'Accent TV walls, master bedrooms & feature foyers',
    icon: PaintBucket,
  },
  {
    name: 'Mattress',
    group: 'Furnishing & Comfort',
    tag: 'Orthopedic & Memory Foam',
    description: 'Multi-layer orthopedic mattresses, natural rubberized coir, pocket springs, and dual-comfort sleeping systems.',
    popularFor: 'Master beds, guest rooms & hotels',
    icon: Bed,
  },
  {
    name: 'Pillows',
    group: 'Furnishing & Comfort',
    tag: 'Cervical & Microfiber',
    description: 'Contour ergonomic memory foam pillows, plush down-alternative microfiber pillows, and bolster supports.',
    popularFor: 'Spine alignment & restorative sleep',
    icon: Cloud,
  },
  {
    name: 'PU Foam',
    group: 'Furnishing & Comfort',
    tag: 'High Density 32D / 40D / 50D',
    description: 'Superior resilience flexible polyurethane foam sheets and cushions with long-lasting bounce and durability.',
    popularFor: 'Custom sofa manufacturing, seat cushions & mattress cores',
    icon: Box,
  },
  {
    name: 'Coolers',
    group: 'Furnishing & Comfort',
    tag: 'Heavy-Duty & Desert Units',
    description: 'Energy-saving room coolers, large-tank commercial desert coolers, and durable honeycomb pad cooling units.',
    popularFor: 'Home cooling, summer workshops & halls',
    icon: Wind,
  },
  {
    name: 'Lovers / Louvers',
    group: 'Wood & Boards',
    tag: 'Charcoal & Acoustic Slats',
    description: 'Fluted wooden wall panels, exterior weatherproof louvers, and interior charcoal acoustic wall slats.',
    popularFor: 'TV backdrop panelling, facade highlights & ceilings',
    icon: AlignJustify,
  },
  {
    name: 'Custom Wooden Furniture',
    group: 'Wood & Boards',
    tag: 'Teak & Seasoned Hardwood',
    description: 'Bespoke dining tables, fluted media consoles, study desks, storage credenzas, and handcrafted beds.',
    popularFor: 'Turnkey interior furnish-outs & unique residences',
    icon: Hammer,
  },
  {
    name: 'Other Interior Materials',
    group: 'Hardware & Modular',
    tag: 'Essential Supplies & Adhesives',
    description: 'Premium synthetic adhesives (Fevicol), edge-band tapes, silicones, wood fillers, screws, and turnkey site supplies.',
    popularFor: 'On-site carpentry, installation & finishing work',
    icon: Package,
  },
];

export const CompleteRangeSection: React.FC<CompleteRangeSectionProps> = ({
  onOpenQuoteWithCategory,
}) => {
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const groups = [
    { key: 'All', label: 'All Items (19)' },
    { key: 'Wood & Boards', label: 'Plywood & Doors' },
    { key: 'Surfaces & Decor', label: 'Laminates & Decor' },
    { key: 'Hardware & Modular', label: 'Hardware & Kitchen' },
    { key: 'Furnishing & Comfort', label: 'Furnishing & Sleep' },
  ];

  const filteredItems = MATERIAL_SPECTRUM.filter((item) => {
    const matchesGroup = activeGroup === 'All' || item.group === activeGroup;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <section id="material-range" className="py-20 md:py-28 bg-white border-t border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8C5D28]">
            COMPREHENSIVE PRODUCT DIRECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14161B] mt-2 tracking-tight">
            Everything Available Under One Roof
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
            From core structural plywood and designer sunmica to luxury drapes, PU foam, mattresses, and hardware—explore all 19 material categories available at our Bhopal showroom.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="w-full md:w-auto flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto no-scrollbar border border-stone-200">
            {groups.map((grp) => {
              const active = activeGroup === grp.key;
              const count =
                grp.key === 'All'
                  ? MATERIAL_SPECTRUM.length
                  : MATERIAL_SPECTRUM.filter((m) => m.group === grp.key).length;
              return (
                <button
                  key={grp.key}
                  onClick={() => setActiveGroup(grp.key)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#181A20] text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  <span>{grp.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
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
              placeholder="Search mattress, foam, louvers..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:border-[#8C5D28] text-stone-900 shadow-2xs"
            />
          </div>
        </div>

        {/* 19 Materials Responsive Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((mat) => {
            const IconComp = mat.icon;
            const waItemUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
              `Hello Ankush Sir, I am inquiring about "${mat.name}" from AKASH Ply & Hardware Bhopal. Please share rates, specifications, and availability.`
            )}`;

            return (
              <div
                key={mat.name}
                className="group bg-[#FAF8F5] rounded-2xl border border-[#E7E2D8] hover:border-[#8C5D28]/40 hover:bg-white hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon + Tag */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 group-hover:border-[#8C5D28]/30 flex items-center justify-center text-[#8C5D28] group-hover:bg-[#181A20] group-hover:text-[#EADBBE] transition-colors shrink-0 shadow-2xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-600 bg-white border border-stone-200 px-2 py-0.8 rounded-md shrink-0">
                      {mat.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#14161B] tracking-tight group-hover:text-[#8C5D28] transition-colors">
                    {mat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-3">
                    {mat.description}
                  </p>

                  {/* Best Used For */}
                  <div className="mt-3 pt-3 border-t border-stone-200/70 text-[11px] text-stone-500">
                    <strong className="text-stone-700">Application:</strong> {mat.popularFor}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => onOpenQuoteWithCategory(mat.name)}
                    className="flex-1 py-2 px-3 bg-white hover:bg-stone-100 border border-stone-200 text-stone-900 font-semibold rounded-lg transition-colors text-center text-[11px] cursor-pointer"
                  >
                    Get Quote
                  </button>

                  <a
                    href={waItemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold rounded-lg transition-colors text-[11px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181A20] text-white rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EADBBE]">
              WHATEVER YOUR SITE NEEDS IN BHOPAL
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Planning a Complete Home, Modular Kitchen, or Office Interior?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1.5 max-w-2xl leading-relaxed">
              Consolidate your entire order with AKASH Ply &amp; Hardware. We bundle calibrated plywood, designer laminates, hardware, foam, drapes, and doors with direct wholesale rates and doorstep delivery.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteWithCategory('Complete Interior Turnkey Material Package')}
            className="px-6 py-3.5 bg-[#8C5D28] hover:bg-[#A36D30] text-white font-bold text-xs rounded-xl transition-all shadow-md active:scale-98 whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Bundle Pricing →
          </button>
        </div>
      </div>
    </section>
  );
};
