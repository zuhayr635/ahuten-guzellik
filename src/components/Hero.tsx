import React from 'react';
import { Sparkles, MessageCircle, ChevronRight, Award, Star, Heart, CheckCircle2 } from 'lucide-react';
import { BusinessConfig } from '../types';

interface HeroProps {
  business: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ business }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0c0a09]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-rose-500/15 via-pink-600/5 to-transparent blur-[130px] pointer-events-none" />

      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#fb718512_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Gaziantep Şahinbey Yeşilvadi Özel Güzellik & Bakım Merkezi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Güzelliğinizi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
                Profesyonel Dokunuşla
              </span>{' '}
              Taçlandırın
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Acısız buz başlıklı lazer epilasyon, medikal HydraFacial cilt yenileme, bölgesel incelme ve altın oran kaş tasarımı ile hayalinizdeki ışıltılı ve pürüzsüz görünüme kavuşun.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#hesaplayici"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 hover:from-rose-400 hover:to-amber-300 text-white font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(244,63,94,0.35)] flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Paket & Fiyat Hesapla</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, randevu ve seans bilgisi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700/80 hover:border-rose-500/50 flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
                <span>WhatsApp'tan Randevu Al</span>
              </a>
            </div>

            {/* Key Trust Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-950/40 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">-4°C</div>
                <div className="text-xs text-zinc-400 font-medium">Acısız Buz Lazer</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-rose-400">%100</div>
                <div className="text-xs text-zinc-400 font-medium">Steril & Kişiye Özel</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>{business.googleRating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-zinc-400 font-medium">Tam Memnuniyet</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-rose-900/30 bg-zinc-900 shadow-2xl shadow-rose-950/40 group">
              
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
                alt="Ahuten Güzellik Salonu Cilt Bakımı & Lazer Epilasyon"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Badge on Image */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-rose-500/40 rounded-2xl px-3.5 py-1.5 flex items-center gap-2 text-xs font-semibold text-rose-300">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Kişiye Özel Cilt Analizi</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md rounded-2xl p-4 border border-rose-950/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-wider">Uzman Kadro</div>
                  <div className="text-sm font-bold text-white">Sertifikalı & Deneyimli Estetisyenler</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Mini floating assurance card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-zinc-900/95 border border-rose-900/40 rounded-2xl p-3.5 shadow-xl backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Orijinal FDA Cihazları</div>
                <div className="text-[11px] text-zinc-400">Son teknoloji hijyenik uygulama</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
