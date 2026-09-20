import React, { useState } from 'react';
import { Calculator, MessageCircle, ShieldCheck, Clock, Check, Sparkles } from 'lucide-react';
import { ServicePackage, BusinessConfig } from '../types';

interface PriceCalculatorProps {
  packages: ServicePackage[];
  business: BusinessConfig;
}

type SessionType = 'single' | 'six' | 'eight' | 'vip';

interface Addon {
  id: string;
  name: string;
  price: number;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ packages, business }) => {
  const [selectedSessionType, setSelectedSessionType] = useState<SessionType>('six');
  const [selectedPackageId, setSelectedPackageId] = useState<string>(packages[0]?.id || 'hydrafacial');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['eye-collagen']);

  const addons: Addon[] = [
    { id: 'eye-collagen', name: 'Göz Çevresi Yoğun Kolajen Bakımı', price: 400 },
    { id: 'lip-care', name: 'Dudak Dolgunlaştırıcı & Nemlendirici Maske', price: 300 },
    { id: 'decollete-care', name: 'Boyun & Dekolte Gençleştirici Serum', price: 500 },
    { id: 'hand-paraffin', name: 'Sıcak Parafinli El & Tırnak Bakımı', price: 350 },
  ];

  const currentPackage = packages.find((p) => p.id === selectedPackageId) || packages[0];

  const getPackageBasePrice = (pkg: ServicePackage, session: SessionType) => {
    switch (session) {
      case 'single':
        return pkg.priceSingle;
      case 'six':
        return pkg.priceSixSessions;
      case 'eight':
        return pkg.priceEightSessions;
      case 'vip':
        return pkg.priceVipPackage;
      default:
        return pkg.priceSixSessions;
    }
  };

  const basePrice = getPackageBasePrice(currentPackage, selectedSessionType);
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const found = addons.find((a) => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const totalPrice = basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const sessionNames: Record<SessionType, string> = {
    single: 'Tek Seans Deneme & Tanışma',
    six: '6 Seanslık Ekonomik Paket (%20 İndirimli)',
    eight: '8 Seanslık Tam Bakım Paketi (%30 İndirimli)',
    vip: 'VIP Full Paket (Tüm Ekstralar Dahil)',
  };

  const selectedAddonNames = selectedAddons
    .map((id) => addons.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Merhaba ${business.name}, web sitenizdeki akıllı hesaplayıcıdan randevu oluşturmak istiyorum:
🌸 Uygulama: ${currentPackage.title}
✨ Paket Türü: ${sessionNames[selectedSessionType]}
💆 Ekstra Bakımlar: ${selectedAddonNames || 'Ekstra seçilmedi'}
⏱️ Tahmini Seans Süresi: ${currentPackage.duration}
📜 Garanti / Kalite: ${currentPackage.warranty}
💰 Hesaplanan Tutar: ${totalPrice.toLocaleString('tr-TR')} TL

Müsait olduğunuz en yakın randevu gün ve saatini öğrenebilir miyim?`;

  return (
    <section id="hesaplayici" className="py-24 bg-[#090808] border-t border-rose-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Şeffaf Seans Fiyatları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Akıllı Paket & Randevu Hesaplayıcı
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            İhtiyacınız olan bakımı ve seans sayısını seçin; sürpriz masraf olmadan avantajlı paket tutarını anında hesaplayın.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-6 sm:p-8">
            
            {/* Step 1: Session Package */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 flex items-center justify-between">
                <span>1. Adım: Seans Seçeneğinizi Belirleyin</span>
                <span className="text-xs text-rose-400 font-normal">Paketlerde Ek İndirim</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'single', label: 'Tek Seans', sub: 'Deneme & Tanışma' },
                  { id: 'six', label: '6 Seans', sub: 'En Çok Tercih Edilen' },
                  { id: 'eight', label: '8 Seans', sub: 'Maksimum Sonuç' },
                  { id: 'vip', label: 'VIP Paket', sub: 'Full Bakım Konsepti' },
                ].map((ses) => (
                  <button
                    key={ses.id}
                    onClick={() => setSelectedSessionType(ses.id as SessionType)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedSessionType === ses.id
                        ? 'bg-rose-500/20 border-rose-400 text-white shadow-lg shadow-rose-500/20'
                        : 'bg-zinc-800/60 border-zinc-700/70 text-zinc-400 hover:text-white hover:border-zinc-600'
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{ses.label}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{ses.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Service Package */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                2. Adım: Uygulanacak Bakımı Seçin
              </label>
              <div className="space-y-3">
                {packages.map((pkg) => {
                  const price = getPackageBasePrice(pkg, selectedSessionType);
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-rose-500/15 border-rose-400 shadow-md shadow-rose-950/30'
                          : 'bg-zinc-800/40 border-zinc-700/60 hover:border-zinc-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-rose-400 bg-rose-400' : 'border-zinc-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{pkg.title}</span>
                            {pkg.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/40 font-mono">
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{pkg.description}</p>
                        </div>
                      </div>

                      <div className="text-right sm:shrink-0 pl-8 sm:pl-0">
                        <div className="text-base font-black text-rose-300">
                          {price.toLocaleString('tr-TR')} TL
                        </div>
                        <div className="text-[11px] text-zinc-400">{pkg.duration}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Addons */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                3. Adım: İsteğe Bağlı Ekstra Bakımlar (Opsiyonel)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs font-medium ${
                        isChecked
                          ? 'bg-rose-950/50 border-rose-500/50 text-white'
                          : 'bg-zinc-800/30 border-zinc-700/60 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'border-rose-400 bg-rose-400' : 'border-zinc-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-rose-300 font-bold">
                        +{addon.price.toLocaleString('tr-TR')} TL
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Quote Summary & Direct WhatsApp Booking */}
          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-rose-950/40 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-5 border-b border-rose-950/40">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Randevu Özeti</span>
                  <h3 className="text-lg font-black text-white mt-0.5">Seçilen Güzellik Paketi</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Breakdown */}
              <div className="py-5 space-y-3.5 text-sm border-b border-rose-950/40">
                <div className="flex justify-between text-zinc-300">
                  <span>Paket Türü:</span>
                  <span className="font-semibold text-white capitalize">{sessionNames[selectedSessionType].split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Uygulama:</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">{currentPackage.title}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Temel Tutar:</span>
                  <span className="font-mono text-zinc-200">{basePrice.toLocaleString('tr-TR')} TL</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-zinc-300">
                    <span>Ekstra Bakımlar ({selectedAddons.length}):</span>
                    <span className="font-mono text-rose-300">+{addonsTotal.toLocaleString('tr-TR')} TL</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-zinc-400 text-xs pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    Seans Süresi:
                  </span>
                  <span className="text-white font-medium">{currentPackage.duration}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                    Hijyen & Orijinallik:
                  </span>
                  <span className="text-white font-medium">{currentPackage.warranty}</span>
                </div>
              </div>

              {/* Total Price Big Display */}
              <div className="pt-6 pb-6 text-center">
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  Toplam Paket Tutarı
                </div>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200">
                  {totalPrice.toLocaleString('tr-TR')} TL
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  İlk seansta ücretsiz cilt ve kıl analizi dahildir.
                </div>
              </div>

              {/* Action Button: WhatsApp Pre-filled */}
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/50 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp ile Bu Pakete Randevu Al</span>
              </a>

              <p className="text-[11px] text-zinc-400 text-center mt-3">
                Tıkladığınızda seçimleriniz Ahuten WhatsApp hattına mesaj olarak otomatik aktarılır.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
