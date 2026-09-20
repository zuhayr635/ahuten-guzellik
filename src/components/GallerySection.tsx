import React, { useState } from 'react';
import { Camera, Sparkles, X } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tüm Uygulamalar' },
    { id: 'Cilt Bakımı', label: 'Cilt Bakımı' },
    { id: 'Lazer Epilasyon', label: 'Lazer Epilasyon' },
    { id: 'Kalıcı Makyaj', label: 'Kalıcı Makyaj' },
    { id: 'Tırnak Tasarımı', label: 'Tırnak & Estetik' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 bg-[#090808] border-t border-rose-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-rose-400" />
            <span>Salonumuz & Uygulama Vitrini</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Estetik, Zarafet ve Hijyen Bir Arada
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ahuten Güzellik Salonu'nda danışanlarımızın konforu için dizayn edilmiş modern uygulama odalarımızdan ve seanslarımızdan kareler.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-950/40'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-rose-950/40 cursor-pointer shadow-lg hover:shadow-2xl hover:border-rose-500/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 px-2 py-0.5 rounded bg-black/60 border border-rose-900/50">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1.5 group-hover:text-rose-200 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-zinc-950 border border-rose-950/60 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-zinc-900 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase">{selectedImage.category}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedImage.title}</h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                {selectedImage.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
