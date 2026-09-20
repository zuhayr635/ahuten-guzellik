import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ContactSectionProps {
  business: BusinessConfig;
  onAddLead: (lead: { name: string; phone: string; service: string; note: string }) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ business, onAddLead }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'HydraFacial Cilt Bakımı',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    onAddLead(formData);
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 bg-[#090808] border-t border-rose-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Salonumuzu Ziyaret Edin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            İletişim & Randevu Merkezi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Salonumuzda ücretsiz cilt analizi yaptırabilir, sıcak bir kahve eşliğinde uzman estetisyenlerimizle size en uygun bakım programını planlayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Location Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Salon Adresi</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{business.address}</p>
              </div>

              <div className="bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Çalışma Saatleri</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{business.workingHours}</p>
              </div>

              <div className="bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">WhatsApp Randevu</h4>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline font-semibold"
                >
                  +{business.whatsapp} (Hızlı Yanıt)
                </a>
              </div>

              <div className="bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Telefon Numarası</h4>
                <a
                  href={`tel:${business.phone.replace(/\s+/g, '')}`}
                  className="text-xs text-rose-300 hover:underline font-semibold"
                >
                  {business.phone}
                </a>
              </div>

            </div>

            {/* Map Card */}
            <div className="relative rounded-3xl overflow-hidden border border-rose-950/40 bg-zinc-900 h-64 p-6 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xl bg-black/80 text-rose-300 border border-rose-900/40 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{business.city}, {business.district}</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-2">{business.name}</h4>
                <p className="text-xs text-zinc-400 max-w-sm mt-1">{business.address}</p>
              </div>

              <div className="relative z-10 flex gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name + ' ' + business.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-rose-950/40"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Haritalar'da Aç</span>
                </a>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Merhaba, salonunuza gelmek istiyorum konum atabilir misiniz?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Konum İste</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Callback & Booking Form */}
          <div className="lg:col-span-6 bg-zinc-900/70 border border-rose-950/40 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Hızlı Randevu & Bilgi Formu</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Bilgilerinizi bırakın, uzman estetisyenimiz müsait seans saatlerini ve indirimli paket seçeneklerini görüşmek için sizinle iletişime geçsin.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Randevu Talebiniz Alındı!</h4>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Ahuten uzmanımız en kısa sürede <strong>{formData.phone}</strong> numaranızdan size dönüş sağlayacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  Yeni Talep Oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Adınız ve Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ayşe Demir"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Örn: 0555 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-white text-sm focus:outline-none focus:border-rose-400"
                    >
                      <option value="HydraFacial Cilt Bakımı">HydraFacial Cilt Bakımı</option>
                      <option value="Buz Başlıklı Lazer Epilasyon">Buz Başlıklı Lazer Epilasyon</option>
                      <option value="G5 Bölgesel İncelme">G5 Bölgesel İncelme</option>
                      <option value="Microblading Kaş Tasarımı">Microblading Kaş Tasarımı</option>
                      <option value="Dudak Renklendirme">Dudak Renklendirme</option>
                      <option value="Protez Tırnak & İpek Kirpik">Protez Tırnak & İpek Kirpik</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Notunuz veya Tercih Ettiğiniz Gün / Saat
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Örn: Hafta içi öğleden sonra için randevu oluşturmak istiyorum."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 hover:from-rose-400 hover:to-amber-300 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Randevu & Bilgi Talebini Gönder</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
