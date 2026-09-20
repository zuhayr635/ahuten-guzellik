import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, Columns, SplitSquareVertical } from 'lucide-react';
import { BeforeAfterItem } from '../types';

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[];
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex] || items[0];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [viewMode]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="karsilastirma" className="py-24 bg-[#090808] border-t border-b border-rose-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Klinik & Estetik Sonuçlar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Öncesi ve Sonrası: Canlı Bakım Karşılaştırması
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Uygulamalarımızın ciltteki gerçek değişimini kaydırıcıyı çekerek veya fotoğrafları yan yana koyarak canlı olarak inceleyebilirsiniz.
          </p>

          {/* View Mode & Scenario Selector Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            
            {/* Scenarios */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeIndex === idx
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-950/50'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-rose-950/40 shrink-0">
              <button
                onClick={() => setViewMode('slider')}
                className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'slider' ? 'bg-rose-500 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
                title="İnteraktif Kaydırıcı"
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>Kaydırıcı</span>
              </button>
              <button
                onClick={() => setViewMode('sideBySide')}
                className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'sideBySide' ? 'bg-rose-500 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
                title="Yan Yana Karşılaştırma"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Yan Yana</span>
              </button>
            </div>

          </div>

          {/* Active Case Context Summary */}
          <div className="pt-2 max-w-2xl mx-auto text-center animate-fadeIn">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30 mb-2 shadow-sm">
              {activeItem.category}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* View Mode 1: Interactive Split Slider */}
        {viewMode === 'slider' ? (
          <div className="max-w-4xl mx-auto">
            <div
              ref={containerRef}
              className="relative h-[340px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden select-none cursor-ew-resize border-2 border-rose-950/50 shadow-2xl shadow-black/80"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
            >
              {/* After Image (Background, Right Side) */}
              <img
                src={activeItem.afterImage}
                alt="Sonrası: Canlı ve Işıltılı Görünüm"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              
              {/* Label SONRASI */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-xl bg-rose-950/85 backdrop-blur-md border border-rose-400/50 text-rose-200 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span>SONRASI: Işıltılı Sonuç</span>
              </div>

              {/* Before Image (Clipped Left Side with matched width) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt="Öncesi: Bakım Öncesi Durum"
                  className="absolute top-0 left-0 h-full object-cover max-w-none"
                  style={{ width: `${containerWidth}px` }}
                />
                
                {/* Label ÖNCESİ */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-zinc-500" />
                  <span>ÖNCESİ: Uygulama Öncesi</span>
                </div>
              </div>

              {/* Slider Dividing Bar & Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(244,63,94,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-rose-400 text-rose-300 flex items-center justify-center shadow-xl shadow-rose-500/50">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Helper Hint at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300 text-xs font-medium pointer-events-none flex items-center gap-2">
                <ArrowLeftRight className="w-3.5 h-3.5 text-rose-400" />
                <span>Kaydırmak için sürükleyin veya dokunun</span>
              </div>
            </div>

            {/* Details Bar below Comparison */}
            <div className="mt-6 bg-zinc-900/80 border border-rose-950/40 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeItem.improvementHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* View Mode 2: Side-by-Side Dual Photo Cards */
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Before Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-xl group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={activeItem.beforeImage}
                    alt="Öncesi Durum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-zinc-500" />
                  <span>ÖNCESİ (Uygulama Öncesi)</span>
                </div>
                <div className="p-4 bg-zinc-950/90 border-t border-zinc-800">
                  <p className="text-xs text-zinc-400">{activeItem.description.split('.')[0] || activeItem.description}.</p>
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-rose-500/50 bg-zinc-900 shadow-xl shadow-rose-950/30 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={activeItem.afterImage}
                    alt="Sonrası Durum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-rose-950/90 backdrop-blur-md border border-rose-400 text-rose-200 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                  <span>SONRASI (Ahuten Bakım Sonrası)</span>
                </div>
                <div className="p-4 bg-zinc-950/90 border-t border-rose-950/40">
                  <p className="text-xs text-rose-300 font-medium">✨ Seans sonrası pürüzsüz, yenilenmiş ve ışıltılı görünüm.</p>
                </div>
              </div>

            </div>

            {/* Highlights */}
            <div className="bg-zinc-900/80 border border-rose-950/40 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeItem.improvementHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
