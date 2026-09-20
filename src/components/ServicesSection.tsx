import React from 'react';
import { Sparkles, Heart, Zap, Smile, Gem, Eye } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Buz Başlıklı Lazer Epilasyon',
      badge: 'Acısız & 4 Mevsim',
      description: '-4°C kontakt soğutma teknolojisi ile acı hissetmeden istenmeyen tüylerden kalıcı olarak kurtulun. Açık ve ince tüylerde bile yüksek dökülme oranı.',
      specs: ['Kişiye Özel Silikon Başlık', 'Sıfır Yanma Riski', '15 Gün Sonra Ücretsiz Kontrol'],
      accentColor: 'from-rose-500/20 to-pink-500/5',
      borderColor: 'group-hover:border-rose-500/50',
    },
    {
      icon: Sparkles,
      title: 'HydraFacial Medikal Cilt Bakımı',
      badge: 'Derinlemesine Işıltı',
      description: 'Vortex vakum sistemiyle siyah nokta ve ölü derileri temizler; salisilik asit, hyaluronik asit ve peptid serumlarıyla cilde nem ve ışıltı kazandırır.',
      specs: ['Tıkalı Gözenekleri Sıfırlama', 'Kolajen Uyarıcı LED Işık', '72 Saat Yoğun Nem'],
      accentColor: 'from-pink-500/20 to-rose-500/5',
      borderColor: 'group-hover:border-pink-500/50',
    },
    {
      icon: Heart,
      title: 'G5 Masajı & Bölgesel İncelme',
      badge: '2-8 cm İncelme',
      description: 'Hızlı titreşim ve iterek sıkıştırma yöntemi ile inatçı selülitleri parçalayan, lenf dolaşımını hızlandırarak vücudu toparlayan masaj terapisi.',
      specs: ['Selülit Görünümünü Azaltma', 'Bacak & Karın Sıkılaşması', 'Seans Bazlı Ölçüm Takibi'],
      accentColor: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'group-hover:border-amber-500/50',
    },
    {
      icon: Gem,
      title: 'Microblading Kaş & Pudralama',
      badge: 'Altın Oran Çizim',
      description: 'Yüz hattınıza ve ten renginize uygun altın oran ölçümüyle, organik pigmentler kullanılarak yapılan kıl tekniği doğal kaş dolgunlaştırma.',
      specs: ['Avrupa Organik Boyaları', 'Kızarma Yapmayan Formül', '1-2 Yıl Kalıcılık'],
      accentColor: 'from-purple-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-purple-500/50',
    },
    {
      icon: Smile,
      title: 'Dudak Renklendirme & Kalıcı Makyaj',
      badge: 'Canlı & Doğal Tonlar',
      description: 'Solgun, pigmentini kaybetmiş veya asimetrik dudaklara doğal şeftali/gül kurusu pigmentler enjekte edilerek 7/24 taze görünüm sağlanır.',
      specs: ['Dudak Çerçevesi Belirginleştirme', 'Doğal Ruj Efekti', 'Kişiye Özel Renk Skalası'],
      accentColor: 'from-rose-500/20 to-red-500/5',
      borderColor: 'group-hover:border-rose-500/50',
    },
    {
      icon: Eye,
      title: 'İpek Kirpik & Protez Tırnak',
      badge: 'Kusursuz Estetik',
      description: 'Göz yapınıza uygun vizon/ipek kirpik lifting ve tırnak kırılmalarına son veren medikal protez tırnak ve nail art tasarımları.',
      specs: ['Doğal Kirpiğe Zarar Vermez', 'Hafif & Ağırlık Yapmayan Yapı', '3-4 Hafta Kalıcılık'],
      accentColor: 'from-teal-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-teal-500/50',
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <span>Özel Bakım Alanlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Güzelliğinizi Öne Çıkaran Profesyonel Uygulamalar
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ahuten Güzellik Salonu'nda yalnızca Sağlık Bakanlığı onaylı medikal cihazlar, antialerjik organik ürünler ve tek kullanımlık steril başlıklar kullanılır.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-3xl bg-zinc-900/60 border border-rose-950/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${srv.borderColor} flex flex-col justify-between overflow-hidden`}
              >
                {/* Background soft ambient gradient */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${srv.accentColor} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-rose-900/30 flex items-center justify-center text-rose-400 group-hover:text-white group-hover:bg-rose-500 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-rose-300">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-rose-950/30 space-y-2">
                  {srv.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
