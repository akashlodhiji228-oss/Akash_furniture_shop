import React from 'react';
import { SHOWROOM_INFO } from '../data/showroomData.ts';
import { MessageSquare } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenQuote: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = () => {
  const directMdUrl = `https://wa.me/${SHOWROOM_INFO.managingDirector.phoneRaw}?text=${encodeURIComponent(
    'Hello Ankush Sir, I am visiting the AKASH Ply & Hardware website and have an inquiry.'
  )}`;

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={directMdUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Ankush Shrivastava"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group font-semibold text-xs sm:text-sm tracking-wide"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp: {SHOWROOM_INFO.managingDirector.name}</span>
      </a>
    </aside>
  );
};
