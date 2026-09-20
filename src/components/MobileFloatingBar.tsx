import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { BusinessConfig } from '../types';

interface MobileFloatingBarProps {
  business: BusinessConfig;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ business }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0a09]/95 backdrop-blur-lg border-t border-rose-950/60 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${business.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-rose-300 text-[11px] font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-1 text-rose-400" />
          <span>Hemen Ara</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, randevu ve seans bilgisi almak istiyorum.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-[11px] font-bold shadow-lg shadow-emerald-950/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-1 fill-white text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Calculator Button */}
        <a
          href="#hesaplayici"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[11px] font-bold shadow-lg shadow-rose-950/40 active:scale-95 transition-transform"
        >
          <Calculator className="w-4 h-4 mb-1" />
          <span>Fiyat Hesapla</span>
        </a>
      </div>
    </div>
  );
};
