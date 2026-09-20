import React, { useState } from 'react';
import {
  X,
  KeyRound,
  Building,
  DollarSign,
  Users,
  MessageSquare,
  Save,
  Check,
  Copy,
  Phone,
  MessageCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { BusinessConfig, ServicePackage, AppointmentLead } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: BusinessConfig;
  onUpdateBusiness: (newConfig: BusinessConfig) => void;
  packages: ServicePackage[];
  onUpdatePackages: (newPackages: ServicePackage[]) => void;
  leads: AppointmentLead[];
  onUpdateLeadStatus: (leadId: string, status: 'bekliyor' | 'onaylandi' | 'tamamlandi') => void;
  onResetToDefaults: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  business,
  onUpdateBusiness,
  packages,
  onUpdatePackages,
  leads,
  onUpdateLeadStatus,
  onResetToDefaults,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'prices' | 'leads' | 'campaign'>('info');

  // Form states
  const [tempBusiness, setTempBusiness] = useState<BusinessConfig>({ ...business });
  const [tempPackages, setTempPackages] = useState<ServicePackage[]>([...packages]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  React.useEffect(() => {
    setTempBusiness({ ...business });
  }, [business]);

  React.useEffect(() => {
    setTempPackages([...packages]);
  }, [packages]);

  if (!isOpen) return null;

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (password === 'admin' || password === '1234') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleQuickDemoLogin = () => {
    setPassword('admin');
    setIsAuthenticated(true);
    setAuthError(false);
  };

  const handleSaveBusiness = () => {
    onUpdateBusiness(tempBusiness);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handlePackagePriceChange = (
    pkgId: string,
    field: 'priceSingle' | 'priceSixSessions' | 'priceEightSessions' | 'priceVipPackage',
    value: number
  ) => {
    setTempPackages((prev) =>
      prev.map((pkg) => (pkg.id === pkgId ? { ...pkg, [field]: value } : pkg))
    );
  };

  const handleSavePackages = () => {
    onUpdatePackages(tempPackages);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  // WhatsApp Campaign Template tailored for Ahuten Güzellik Salonu
  const campaignTemplate = `🌸✨ *${tempBusiness.name} — YENİ SEZON ÖZEL GÜZELLİK KAMPANYASI* ✨🌸

Değerli Danışanlarımız,
Kendinize hak ettiğiniz değeri verme ve pürüzsüz bir ışıltıya kavuşma zamanı!

💖 *Bu Aya Özel Fırsatlar:*
• *Tüm Vücut Acısız Buz Lazer Epilasyon* paketinde *1 Seans HydraFacial Cilt Bakımı HEDİYE!*
• *HydraFacial Medikal Cilt Yenileme* paketinde *Göz Çevresi Kolajen Terapisi ÜCRETSİZ!*

📍 *Salonumuz:* ${tempBusiness.address}
📞 *Randevu Hattı:* ${tempBusiness.phone}
💬 *WhatsApp Randevu:* https://wa.me/${tempBusiness.whatsapp}
🌐 *Online Vitrinimiz & Randevu:* (Web sitemizden kolayca seans fiyatlarını hesaplayabilirsiniz)`;

  const handleCopyCampaign = () => {
    navigator.clipboard.writeText(campaignTemplate);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-rose-950/60 rounded-3xl shadow-2xl shadow-rose-950/40 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-rose-950/40 bg-zinc-900/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{tempBusiness.name} Yönetim Paneli</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800 font-mono">
                  Canlı Demo
                </span>
              </h3>
              <p className="text-[11px] text-zinc-400">
                Fiyatları, seans paketlerini ve gelen randevuları buradan yönetebilirsiniz.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login View */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border-2 border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
              <KeyRound className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-black text-white">Yönetici Girişi</h4>
              <p className="text-xs text-zinc-400 mt-1">
                İşletme sahibi olarak paneli test etmek için şifre girebilir veya tek tıkla hızlı giriş yapabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Yönetici Şifresi (Varsayılan: admin)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-700 text-white text-center text-sm focus:outline-none focus:border-rose-400 placeholder-zinc-500"
                />
                {authError && (
                  <p className="text-xs text-red-400 mt-1.5">
                    Hatalı şifre. (Hızlı giriş butonuna tıklayabilirsiniz)
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs border border-zinc-700"
                >
                  Şifre ile Giriş Yap
                </button>

                {/* Direct Demo Login */}
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Tek Tıkla Hızlı Demo Girişi</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div>
            {/* Nav Tabs */}
            <div className="flex border-b border-rose-950/40 bg-zinc-900/50 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeTab === 'info'
                    ? 'border-rose-400 text-rose-400'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Salon Bilgileri</span>
              </button>

              <button
                onClick={() => setActiveTab('prices')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeTab === 'prices'
                    ? 'border-rose-400 text-rose-400'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>Seans & Paket Fiyatları</span>
              </button>

              <button
                onClick={() => setActiveTab('leads')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeTab === 'leads'
                    ? 'border-rose-400 text-rose-400'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Gelen Randevular ({leads.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('campaign')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeTab === 'campaign'
                    ? 'border-rose-400 text-rose-400'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Kampanya Metni</span>
              </button>
            </div>

            {/* Notification alert on save */}
            {saveSuccess && (
              <div className="bg-emerald-500/15 border-b border-emerald-500/30 px-6 py-2.5 text-xs text-emerald-400 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Değişiklikler başarıyla kaydedildi ve web sitesine anında yansıtıldı!</span>
              </div>
            )}

            {/* Tab Contents */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
              
              {/* TAB 1: Business Information */}
              {activeTab === 'info' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Salon Adı
                      </label>
                      <input
                        type="text"
                        value={tempBusiness.name}
                        onChange={(e) => setTempBusiness({ ...tempBusiness, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Slogan / Tanıtım
                      </label>
                      <input
                        type="text"
                        value={tempBusiness.tagline}
                        onChange={(e) => setTempBusiness({ ...tempBusiness, tagline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Telefon Numarası
                      </label>
                      <input
                        type="text"
                        value={tempBusiness.phone}
                        onChange={(e) => setTempBusiness({ ...tempBusiness, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        WhatsApp Randevu No (Ülke koduyla: 905550000000)
                      </label>
                      <input
                        type="text"
                        value={tempBusiness.whatsapp}
                        onChange={(e) => setTempBusiness({ ...tempBusiness, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Şehir ve İlçe
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={tempBusiness.city}
                          onChange={(e) => setTempBusiness({ ...tempBusiness, city: e.target.value })}
                          placeholder="Şehir"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                        />
                        <input
                          type="text"
                          value={tempBusiness.district}
                          onChange={(e) => setTempBusiness({ ...tempBusiness, district: e.target.value })}
                          placeholder="İlçe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Çalışma Saatleri
                      </label>
                      <input
                        type="text"
                        value={tempBusiness.workingHours}
                        onChange={(e) => setTempBusiness({ ...tempBusiness, workingHours: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Açık Salon Adresi
                    </label>
                    <input
                      type="text"
                      value={tempBusiness.address}
                      onChange={(e) => setTempBusiness({ ...tempBusiness, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:border-rose-400"
                    />
                  </div>

                  {/* Announcement Banner Controls */}
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-rose-950/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Üst Kampanya & Duyuru Şeridi</span>
                        </h4>
                        <p className="text-[11px] text-zinc-400">Web sitesinin en üstünde renkli duyuru ve indirim şeridi gösterin.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={tempBusiness.announcementActive}
                          onChange={(e) => setTempBusiness({ ...tempBusiness, announcementActive: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-500"></div>
                      </label>
                    </div>

                    {tempBusiness.announcementActive && (
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                          Kampanya Duyuru Metni
                        </label>
                        <input
                          type="text"
                          value={tempBusiness.announcementText}
                          onChange={(e) => setTempBusiness({ ...tempBusiness, announcementText: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:border-rose-400"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <button
                      onClick={onResetToDefaults}
                      className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Varsayılanlara Sıfırla</span>
                    </button>

                    <button
                      onClick={handleSaveBusiness}
                      className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-950/40"
                    >
                      <Save className="w-4 h-4" />
                      <span>Bilgileri Kaydet & Güncelle</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: Packages & Prices */}
              {activeTab === 'prices' && (
                <div className="space-y-6">
                  <p className="text-xs text-zinc-400">
                    Burada yapacağınız tüm fiyat değişiklikleri web sitesindeki hem paket kartlarına hem de akıllı randevu hesaplayıcıya anında yansır.
                  </p>

                  <div className="space-y-4">
                    {tempPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="bg-zinc-900/60 border border-rose-950/30 rounded-2xl p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-white">{pkg.title}</h4>
                          <span className="text-[11px] text-rose-400 font-mono">{pkg.duration}</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                          <div>
                            <label className="block text-[11px] text-zinc-400 mb-1">
                              Tek Seans (TL)
                            </label>
                            <input
                              type="number"
                              value={pkg.priceSingle}
                              onChange={(e) =>
                                handlePackagePriceChange(pkg.id, 'priceSingle', Number(e.target.value))
                              }
                              className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] text-zinc-400 mb-1">
                              6 Seanslık Paket (TL)
                            </label>
                            <input
                              type="number"
                              value={pkg.priceSixSessions}
                              onChange={(e) =>
                                handlePackagePriceChange(pkg.id, 'priceSixSessions', Number(e.target.value))
                              }
                              className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] text-zinc-400 mb-1">
                              8 Seanslık Paket (TL)
                            </label>
                            <input
                              type="number"
                              value={pkg.priceEightSessions}
                              onChange={(e) =>
                                handlePackagePriceChange(pkg.id, 'priceEightSessions', Number(e.target.value))
                              }
                              className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] text-zinc-400 mb-1">
                              VIP Paket (TL)
                            </label>
                            <input
                              type="number"
                              value={pkg.priceVipPackage}
                              onChange={(e) =>
                                handlePackagePriceChange(pkg.id, 'priceVipPackage', Number(e.target.value))
                              }
                              className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-zinc-800">
                    <button
                      onClick={handleSavePackages}
                      className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-950/40"
                    >
                      <Save className="w-4 h-4" />
                      <span>Fiyat Değişikliklerini Kaydet</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: Leads & Inquiries */}
              {activeTab === 'leads' && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400">
                    Web sitesindeki teklif formundan ve hesaplayıcıdan gelen danışan randevu başvuruları burada listelenir.
                  </p>

                  <div className="space-y-3">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-zinc-900 border border-rose-950/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="font-bold text-sm text-white">{lead.customerName}</span>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                                lead.status === 'onaylandi'
                                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                  : lead.status === 'tamamlandi'
                                  ? 'bg-blue-950 text-blue-400 border border-blue-800'
                                  : 'bg-amber-950 text-amber-400 border border-amber-800'
                              }`}
                            >
                              {lead.status}
                            </span>
                          </div>

                          <div className="text-xs text-zinc-300 mt-1">
                            <strong className="text-rose-400">{lead.serviceRequested}</strong> ({lead.sessionType}) — {lead.notes}
                          </div>

                          <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-3">
                            <span>Tarih: {lead.preferredDate}</span>
                            <span>Tutar: {lead.estimatedPrice.toLocaleString('tr-TR')} TL</span>
                            <span>Başvuru: {lead.createdAt}</span>
                          </div>
                        </div>

                        {/* Status Controls */}
                        <div className="flex items-center gap-2 shrink-0">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              onUpdateLeadStatus(
                                lead.id,
                                e.target.value as 'bekliyor' | 'onaylandi' | 'tamamlandi'
                              )
                            }
                            className="px-3 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700 text-xs text-white"
                          >
                            <option value="bekliyor">Bekliyor</option>
                            <option value="onaylandi">Onaylandı</option>
                            <option value="tamamlandi">Tamamlandı</option>
                          </select>

                          <a
                            href={`https://wa.me/9${lead.phone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white"
                            title="WhatsApp'tan Yanıtla"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>

                          <a
                            href={`tel:${lead.phone}`}
                            className="p-2 rounded-xl bg-rose-600/20 text-rose-300 border border-rose-500/30 hover:bg-rose-600 hover:text-white"
                            title="Hemen Ara"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: WhatsApp Campaign Generator */}
              {activeTab === 'campaign' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">
                      Tek Tıkla WhatsApp Kampanya Metni Üretici
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Danışan listenize veya WhatsApp durumunuza tek tıkla kopyalayıp paylaşabileceğiniz, salon bilgilerinizle otomatik hazırlanmış mesaj şablonu:
                    </p>
                  </div>

                  <div className="relative">
                    <pre className="p-4 rounded-2xl bg-zinc-900 border border-rose-950/40 text-xs text-zinc-200 font-sans whitespace-pre-wrap leading-relaxed select-all">
                      {campaignTemplate}
                    </pre>

                    <button
                      onClick={handleCopyCampaign}
                      className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      {copiedText ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Kopyalandı!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Metni Kopyala</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-rose-950/40 text-xs text-zinc-400">
                    💡 <strong>İpucu:</strong> Bu kampanya metnini WhatsApp durumunuzda veya danışan gruplarınızda paylaşarak doğrudan web siteniz üzerinden yeni randevular toplayabilirsiniz.
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
