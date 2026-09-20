import React from 'react';
import { Gem, Phone, MessageCircle, MapPin, KeyRound, Heart } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FooterProps {
  business: BusinessConfig;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ business, onOpenAdmin }) => {
  return (
    <footer className="bg-[#070606] border-t border-rose-950/40 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-black">
                <Gem className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-base font-black text-white uppercase">{business.name.split(' ')[0]}</span>
                <span className="text-base font-light tracking-widest text-rose-300 uppercase"> GÜZELLİK</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {business.city} {business.district}'de acısız buz başlıklı lazer epilasyon, HydraFacial medikal cilt bakımı, G5 bölgesel incelme ve altın oran kalıcı makyaj stüdyosu.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-[11px] font-medium transition-all"
              >
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                <span>Yönetici Paneli (Demo Girişi)</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hizmetler" className="hover:text-rose-400 transition-colors">Uygulama Hizmetleri</a></li>
              <li><a href="#karsilastirma" className="hover:text-rose-400 transition-colors">Öncesi / Sonrası Karşılaştırma</a></li>
              <li><a href="#hesaplayici" className="hover:text-rose-400 transition-colors">Akıllı Paket & Seans Hesaplayıcı</a></li>
              <li><a href="#paketler" className="hover:text-rose-400 transition-colors">Avantajlı Bakım Paketleri</a></li>
              <li><a href="#iletisim" className="hover:text-rose-400 transition-colors">İletişim & Konum</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Uzmanlık Alanlarımız</h4>
            <ul className="space-y-2 text-xs">
              <li>• Buz Başlıklı Acısız Lazer Epilasyon</li>
              <li>• HydraFacial Medikal Cilt Bakımı</li>
              <li>• G5 Masajı & Bölgesel İncelme</li>
              <li>• Altın Oran Microblading Kaş</li>
              <li>• Dudak Renklendirme & Kalıcı Makyaj</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">İletişim & Randevu</h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {business.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp Randevu Hattı
                </a>
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                {business.workingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-rose-950/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Özel Tasarım & Yazılım Altyapısı</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
          </div>
        </div>

      </div>
    </footer>
  );
};
