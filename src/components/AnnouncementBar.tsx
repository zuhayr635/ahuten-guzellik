import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BusinessConfig } from '../types';

interface AnnouncementBarProps {
  business: BusinessConfig;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ business }) => {
  if (!business.announcementActive) return null;

  return (
    <div className="bg-gradient-to-r from-rose-900 via-pink-800 to-rose-950 text-white text-xs py-2 px-4 border-b border-rose-700/50 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
          <span className="text-rose-100">{business.announcementText}</span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, sitedeki güncel kampanya hakkında randevu almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-amber-300 hover:text-white transition-colors"
          >
            <span>Fırsatı Yakala</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
