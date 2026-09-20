import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const TrustAndWarranty: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'FDA & CE Onaylı Cihazlar',
      desc: 'Salonumuzda kullanılan tüm lazer ve medikal cilt bakım cihazları uluslararası klinik testlerden geçmiş orijinal sistemlerdir.',
    },
    {
      icon: ShieldCheck,
      title: 'Kişiye Özel Steril Başlık',
      desc: 'Her müşterimiz için tek kullanımlık steril başlıklar açılır, hijyen ve dezenfeksiyon standartlarından asla ödün verilmez.',
    },
    {
      icon: HeartPulse,
      title: 'Ücretsiz Cilt & Kıl Analizi',
      desc: 'Seansa başlamadan önce cilt tipiniz, leke derinliğiniz ve kıl yapınız uzman estetisyenlerimizce detaylı analiz edilir.',
    },
    {
      icon: Sparkles,
      title: '%100 Memnuniyet Garantisi',
      desc: 'Lazer epilasyon seanslarından 15 gün sonra ücretsiz kontrol ve ara atış seansı ile maksimum dökülme garantilenir.',
    },
  ];

  return (
    <section className="py-20 bg-[#090808] border-t border-b border-rose-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-rose-950/30 rounded-3xl p-6 hover:border-rose-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
