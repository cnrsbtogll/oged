import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/ogedData';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  limit?: number;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const displayItems = limit ? GALLERY_ITEMS.slice(0, limit) : GALLERY_ITEMS;

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

        {/* Pure Photo Grid (Yazılar Gizli, Yalnızca Görseller) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-on-surface/5 border border-outline-variant/30"
            >
              <img
                src={item.imageUrl}
                alt="ÖGED Etkinlik Fotoğrafı"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn size={24} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative bg-black flex items-center justify-center border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors backdrop-blur-sm shadow-md"
                title="Kapat"
              >
                <X size={24} />
              </button>

              <img
                src={selectedImage.imageUrl}
                alt="ÖGED Etkinlik Fotoğrafı"
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
