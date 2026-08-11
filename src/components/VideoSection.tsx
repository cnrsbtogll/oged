import React from 'react';
import { Play, Tv, Users } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-primary/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4 text-sm font-semibold">
            <Tv size={16} />
            Tanıtım Videosu
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Dernek Üyelerimizin Tanıtım Videosu
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            ÖGED üyeleri ve dernek faaliyetlerimiz hakkında detaylı bilgi edinmek için tanıtım videomuzu izleyebilirsiniz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-black relative group">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Jx1OkUtNww0?rel=0"
              title="ÖGED Dernek Üyeleri Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-primary text-base">Üye Tanıtım & Bilgilendirme</h4>
              <p className="text-xs text-on-surface-variant">Sektördeki meslektaşlarımızın ve kurucu ekibimizin mesajları.</p>
            </div>
          </div>
          <a
            href="https://youtu.be/Jx1OkUtNww0?si=okGOWDoz4Awkb1kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-secondary/90 transition-colors"
          >
            <Play size={14} /> YouTube'da İzle
          </a>
        </div>
      </div>
    </section>
  );
};
