import React, { useState } from 'react';
import { RotateCcw, Check, MessageCircle, HeartPulse, UserCheck } from 'lucide-react';
import { BusinessConfig } from '../types';

interface SkinAnalysisQuizProps {
  business: BusinessConfig;
}

export const SkinAnalysisQuiz: React.FC<SkinAnalysisQuizProps> = ({ business }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('');
  const [selectedExperience, setSelectedExperience] = useState<string>('');

  const goals = [
    { id: 'lazer', label: 'Pürüzsüz Cilt & Kalıcı Epilasyon', sub: 'İstenmeyen tüylerden acısız kurtulma' },
    { id: 'cilt', label: 'Derin Gözenek & Siyah Nokta Temizliği', sub: 'HydraFacial ışıltısı ve nem takviyesi' },
    { id: 'kas', label: 'Doğal Kaş & Dudak Renklendirme', sub: 'Altın oran microblading kalıcı makyaj' },
    { id: 'incelme', label: 'Bölgesel Sıkılaşma & Selülit Giderme', sub: 'G5 masajı ve lenf drenaj incelme' },
  ];

  const skinTypes = [
    { id: 'hassas', label: 'Hassas & Kızarıklığa Yatkın Cilt', sub: 'Nazik ve yatıştırıcı bakım gerektirir' },
    { id: 'yagli', label: 'Karma / Yağlı & Parlayan Cilt', sub: 'Gözenek sıkılaştırma ve sebum dengeleme' },
    { id: 'kuru', label: 'Kuru & Gergin / Nemsiz Cilt', sub: 'Yoğun hyaluronik asit ve nem ihtiyacı' },
    { id: 'normal', label: 'Normal Cilt (Önleyici Koruma)', sub: 'Canlılık, parlaklık ve bakım odaklı' },
  ];

  const experiences = [
    { id: 'ilk', label: 'İlk Defa Deneyeceğim', sub: 'Uzman eşliğinde detaylı ön analiz istiyorum' },
    { id: 'deneyimli', label: 'Daha Önce Seans Aldım', sub: 'Yeni teknoloji buz lazer / medikal bakım arıyorum' },
  ];

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedGoal('');
    setSelectedSkinType('');
    setSelectedExperience('');
  };

  const getRecommendation = () => {
    if (selectedGoal === 'lazer') {
      return {
        title: 'Buz Başlıklı Hibrit Lazer Epilasyon',
        sessions: '6 - 8 Seanslık Protokol',
        reason: 'Hassas soğutma teknolojisi ile acı hissettirmeden kalıcı pürüzsüzlük sağlar.',
        complimentary: '15. Gün Ücretsiz Kontrol Seansı',
      };
    } else if (selectedGoal === 'cilt') {
      return {
        title: 'HydraFacial Vortex Medikal Cilt Bakımı',
        sessions: 'Aylık Düzenli Periyot (3-6 Seans)',
        reason: 'Vakum teknolojisi cildi soymadan siyah noktaları temizler ve hyaluronik asitle parlatır.',
        complimentary: 'LED Işık Kolajen Terapisi Hediyeli',
      };
    } else if (selectedGoal === 'incelme') {
      return {
        title: 'G5 Masajı & Selülit Sıkılaşma Kürü',
        sessions: '8 Seanslık Yoğun Bölgesel Protokol',
        reason: 'Hedeflenen basen/göbek bölgesindeki bağ dokuyu toparlar ve selülit görünümünü yok eder.',
        complimentary: 'Her Seansta Milimetrik Ölçüm Takibi',
      };
    } else {
      return {
        title: 'Altın Oran Kıl Tekniği Kaş Tasarımı (Microblading)',
        sessions: '1 Ana Seans + 1 Ay Sonra Sabitleme Rötuşu',
        reason: 'Yüz hattınıza tam oturan doğal kıl çizgileriyle kaşlarınızı dolgunlaştırır.',
        complimentary: 'Kişiye Özel Renk & Kumpas Simetri Çizimi',
      };
    }
  };

  const recommendation = getRecommendation();

  const whatsappQuizMessage = `Merhaba ${business.name}, web sitenizdeki Cilt & İhtiyaç Analiz Testini tamamladım:
🌸 Temel Hedefim: ${goals.find(g => g.id === selectedGoal)?.label || selectedGoal}
✨ Cilt Yapım: ${skinTypes.find(s => s.id === selectedSkinType)?.label || selectedSkinType}
💆 Deneyimim: ${experiences.find(e => e.id === selectedExperience)?.label || selectedExperience}
🎯 Test Sonucu Önerilen Bakım: ${recommendation.title} (${recommendation.sessions})

Bana özel indirimli seans randevusu oluşturmak istiyorum. Müsaitlik durumunuz nedir?`;

  return (
    <section className="py-24 bg-[#0c0a09] border-t border-rose-950/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span>Kişiselleştirilmiş Cilt & İhtiyaç Sihirbazı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            30 Saniyede Size En Uygun Bakımı Belirleyin
          </h2>
          <p className="text-zinc-400 text-sm">
            3 kısa soruyu yanıtlayın; cilt yapınıza ve hedefinize en uygun bakım programını anında görün.
          </p>

          {/* Progress step indicators */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentStep === step
                    ? 'w-10 bg-gradient-to-r from-rose-500 to-pink-500'
                    : currentStep > step
                    ? 'w-6 bg-rose-400/50'
                    : 'w-4 bg-zinc-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quiz Container Box */}
        <div className="bg-zinc-900/70 border border-rose-950/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-rose-950/30 relative overflow-hidden">
          
          {/* STEP 1: Main Goal */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400">1. Soru / 3</span>
                <span className="text-xs text-zinc-500">Hedef Belirleme</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Salonumuza başvuru amacınız veya öncelikli hedefiniz nedir?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {goals.map((g) => (
                  <div
                    key={g.id}
                    onClick={() => {
                      setSelectedGoal(g.id);
                      setCurrentStep(2);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      selectedGoal === g.id
                        ? 'bg-rose-500/20 border-rose-400 text-white'
                        : 'bg-zinc-800/50 border-zinc-700/60 hover:border-rose-500/40 text-zinc-300'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full border border-rose-400 mt-0.5 flex items-center justify-center shrink-0">
                      {selectedGoal === g.id && <Check className="w-3.5 h-3.5 text-rose-400" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{g.label}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{g.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Skin Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400">2. Soru / 3</span>
                <span className="text-xs text-zinc-500">Cilt / Tüy Yapısı</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Cilt yapınızı ve hassasiyet durumunuzu nasıl tanımlarsınız?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {skinTypes.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => {
                      setSelectedSkinType(st.id);
                      setCurrentStep(3);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      selectedSkinType === st.id
                        ? 'bg-rose-500/20 border-rose-400 text-white'
                        : 'bg-zinc-800/50 border-zinc-700/60 hover:border-rose-500/40 text-zinc-300'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full border border-rose-400 mt-0.5 flex items-center justify-center shrink-0">
                      {selectedSkinType === st.id && <Check className="w-3.5 h-3.5 text-rose-400" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{st.label}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{st.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  ← Önceki Soruya Dön
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Experience */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400">3. Soru / 3</span>
                <span className="text-xs text-zinc-500">Geçmiş Deneyim</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Daha önce benzer bir profesyonel bakım veya lazer seansı aldınız mı?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => {
                      setSelectedExperience(exp.id);
                      setCurrentStep(4);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      selectedExperience === exp.id
                        ? 'bg-rose-500/20 border-rose-400 text-white'
                        : 'bg-zinc-800/50 border-zinc-700/60 hover:border-rose-500/40 text-zinc-300'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full border border-rose-400 mt-0.5 flex items-center justify-center shrink-0">
                      {selectedExperience === exp.id && <Check className="w-3.5 h-3.5 text-rose-400" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{exp.label}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{exp.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  ← Önceki Soruya Dön
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results & Recommendation Card */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Analiziniz Tamamlandı</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Size Özel Önerilen Bakım: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
                    {recommendation.title}
                  </span>
                </h3>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  {recommendation.reason}
                </p>
              </div>

              <div className="bg-zinc-950/80 border border-rose-950/60 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider font-mono">Tavsiye Edilen Süreç:</span>
                  <div className="text-white font-bold text-sm mt-0.5">{recommendation.sessions}</div>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider font-mono">Salon İçi Ayrıcalık:</span>
                  <div className="text-rose-300 font-bold text-sm mt-0.5">{recommendation.complimentary}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappQuizMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Bu Analizle Ahuten'den Randevu Al</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Testi Baştan Başlat</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
