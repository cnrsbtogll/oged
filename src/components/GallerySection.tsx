import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/ogedData';
import { Calendar, Image as ImageIcon, X, ZoomIn, FileSignature } from 'lucide-react';

interface GallerySectionProps {
  limit?: number;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'Hepsi' || item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <ImageIcon size={16} />
            Fotoğraf Galerisi
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Etkinlik ve Buluşmalarımızdan Kareler
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Derneğimizin düzenlediği ve katılım sağladığı çalıştay, seminer ve organizasyonlara ait fotoğraf arşivimiz.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-on-surface/5">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <ZoomIn size={24} />
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-secondary mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {item.date}
                    </span>
                    <span className="flex items-center gap-1 text-on-surface-variant">
                      <FileSignature size={14} /> {item.signature}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>İmza: {item.signature}</span>
                  <span className="group-hover:translate-x-1 transition-transform">Büyüt →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-surface rounded-2xl overflow-hidden max-w-4xl w-full border border-outline-variant/30 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-semibold text-secondary mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {selectedImage.date}
                  </span>
                  <span>İmza: {selectedImage.signature}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
