import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle, KeyRound, Menu, X, Gem } from 'lucide-react';
import { BusinessConfig } from '../types';

interface NavbarProps {
  business: BusinessConfig;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ business, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/90 backdrop-blur-md border-b border-rose-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(244,63,94,0.35)] group-hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] transition-all">
            <Gem className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-white uppercase">{business.name.split(' ')[0]}</span>
              <span className="text-xl font-light tracking-widest text-rose-300 uppercase">GÜZELLİK</span>
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-rose-300/70">LAZER EPİLASYON & CİLT BAKIMI</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#hizmetler" className="hover:text-rose-400 transition-colors">Hizmetlerimiz</a>
          <a href="#karsilastirma" className="hover:text-rose-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Öncesi / Sonrası
          </a>
          <a href="#hesaplayici" className="hover:text-rose-400 transition-colors">Fiyat Hesapla</a>
          <a href="#paketler" className="hover:text-rose-400 transition-colors">Güzellik Paketleri</a>
          <a href="#iletisim" className="hover:text-rose-400 transition-colors">İletişim</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Admin Button */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-rose-900/40 text-xs font-medium transition-all"
            title="Yönetici Paneli (Demo Girişi)"
          >
            <KeyRound className="w-3.5 h-3.5 text-amber-400" />
            <span>Yönetici Paneli</span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, web sitenizden ulaşıyorum. Cilt bakımı / lazer epilasyon randevusu ve fiyat bilgisi almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>WhatsApp Randevu</span>
          </a>

          {/* Quick Call */}
          <a
            href={`tel:${business.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{business.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAdmin}
            className="p-2 rounded-xl bg-zinc-900 text-amber-400 border border-zinc-800"
            title="Yönetici Paneli"
          >
            <KeyRound className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0a09]/98 border-b border-rose-950/40 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <a 
              href="#hizmetler" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-rose-400 py-1"
            >
              Hizmetlerimiz
            </a>
            <a 
              href="#karsilastirma" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-rose-400 py-1 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-rose-400" />
              Öncesi / Sonrası Canlı Karşılaştırma
            </a>
            <a 
              href="#hesaplayici" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-rose-400 py-1"
            >
              Paket & Fiyat Hesaplayıcı
            </a>
            <a 
              href="#paketler" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-rose-400 py-1"
            >
              Güzellik Paketleri
            </a>
            <a 
              href="#iletisim" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-rose-400 py-1"
            >
              İletişim & Konum
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, randevu almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Randevu Hattı</span>
            </a>
            <a
              href={`tel:${business.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-rose-300 border border-rose-900/40 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Ara: {business.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
