import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ReviewsSectionProps {
  business: BusinessConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ business }) => {
  const reviews = [
    {
      name: 'Büşra Korkmaz',
      location: 'Gaziantep Şahinbey',
      service: 'Buz Lazer Epilasyon',
      rating: 5,
      date: '1 hafta önce',
      comment: 'Buz lazer seanslarına burada başladım ve gerçekten sıfır acı! Daha 3. seansta inanılmaz bir dökülme oldu. Salon çok temiz, çalışanlar güler yüzlü ve ilgili. Yeşilvadi civarında gönül rahatlığıyla gidebileceğiniz en iyi salon.',
    },
    {
      name: 'Dilek Yılmaz',
      location: 'Gaziantep Karataş',
      service: 'HydraFacial Medikal Cilt Bakımı',
      rating: 5,
      date: '3 hafta önce',
      comment: 'Cildim çok mat ve tıkalıydı, ilk seanstan sonra yüzüme resmen aydınlık geldi. Siyah noktalar tamamen temizlendi. Kullanılan serumlar kaliteli, asla kızarıklık yapmadı. Kesinlikle tavsiye ediyorum.',
    },
    {
      name: 'Selin Şahin',
      location: 'Gaziantep Şehitkamil',
      service: 'Microblading Kaş Tasarımı',
      rating: 5,
      date: 'Geçen ay',
      comment: 'Kaşlarımdaki boşluklar yüzünden çok tedirgindim ama altın oran çizimiyle yüzüme tam oturan, çok doğal bir kaş yaptılar. Kimse kalıcı makyaj olduğunu anlamıyor. Ellerinize sağlık.',
    },
  ];

  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Google & Gerçek Danışan Deneyimleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Güzelliğini Bize Emanet Edenlerin Yorumları
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {business.name}, Gaziantep'te %100 danışan memnuniyeti ve 5.0 ⭐ tam puanla hizmet vermektedir.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-rose-950/40 rounded-3xl p-6 flex flex-col justify-between hover:border-rose-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <div className="text-[11px] text-zinc-400">{rev.location}</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-rose-300">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
