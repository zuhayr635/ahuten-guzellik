import React, { useState } from 'react';
import { Check, ShieldCheck, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { ServicePackage, BusinessConfig } from '../types';

interface PackagesSectionProps {
  packages: ServicePackage[];
  business: BusinessConfig;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ packages, business }) => {
  const [sessionView, setSessionView] = useState<'six' | 'eight'>('six');

  return (
    <section id="paketler" className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Avantajlı Bakım Paketleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Şeffaf, Garantili ve Sertifikalı Güzellik Paketleri
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ahuten Güzellik Salonu'nda uygulanan tüm seanslar kişiye özel takip kartlarıyla kayıt altına alınır ve memnuniyet garantilidir.
          </p>

          {/* Switcher Pill */}
          <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-rose-950/40 mt-4">
            <button
              onClick={() => setSessionView('six')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                sessionView === 'six'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              6 Seanslık Avantaj Paketleri
            </button>
            <button
              onClick={() => setSessionView('eight')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                sessionView === 'eight'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              8 Seanslık VIP Paketler
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const price = sessionView === 'six' ? pkg.priceSixSessions : pkg.priceEightSessions;
            const isRecommended = pkg.recommended;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-rose-400 shadow-2xl shadow-rose-950/50 -translate-y-2'
                    : 'bg-zinc-900/50 border border-rose-950/40 hover:border-zinc-700'
                }`}
              >
                {/* Popular Ribbon */}
                {isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-[11px] font-black uppercase tracking-wider shadow-lg">
                    En Çok Tercih Edilen
                  </div>
                )}

                <div>
                  {/* Badge & Title */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/60">
                      {pkg.badge || 'Özel Seri'}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 leading-snug">{pkg.title}</h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-t border-b border-rose-950/30 my-4">
                    <div className="text-[11px] text-zinc-400">Paket Fiyatı ({sessionView === 'six' ? '6 Seans' : '8 Seans'})</div>
                    <div className="text-3xl font-black text-white">
                      {price.toLocaleString('tr-TR')} <span className="text-sm font-normal text-zinc-400">TL</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-zinc-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-rose-400" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-rose-400" />
                        {pkg.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 text-xs text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Order Button */}
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, "${pkg.title}" paketi hakkında randevu ve detaylı bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isRecommended
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white shadow-lg shadow-rose-500/20'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Bu Paketi Seç & Randevu Al</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
