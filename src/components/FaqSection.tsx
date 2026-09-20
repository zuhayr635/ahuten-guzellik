import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FaqItem, BusinessConfig } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
  business: BusinessConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, business }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-zinc-400 text-sm">
            Danışanlarımızın seans öncesinde en çok merak ettiği konuları şeffaflıkla yanıtladık.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/90 border-rose-500/40 shadow-xl shadow-rose-950/20'
                    : 'bg-zinc-900/40 border-rose-950/30 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-rose-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-rose-500 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-rose-950/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-rose-950/30 border border-rose-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Başka bir sorunuz veya endişeniz mi var?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Uzman estetisyenimiz sorularınızı WhatsApp üzerinden anında yanıtlasın.</p>
          </div>

          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Merhaba ${business.name}, bir konuda bilgi almak ve danışmak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-950/40 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Uzmana WhatsApp'tan Sor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
