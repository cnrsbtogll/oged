import React from 'react';
import { FOUNDERS_DATA } from '../data/ogedData';
import { Award, Calendar, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FoundersSectionProps {
  isSummary?: boolean;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ isSummary = false }) => {
  return (
    <section className={`py-16 px-margin-mobile md:px-margin-desktop ${isSummary ? 'bg-surface-container-lowest' : 'bg-background'}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <Calendar size={16} />
            Kuruluş & Vizyonumuz
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Kuruluş Tarihimiz ve Kurucularımız
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            ÖÖGED (Özel Güvenlik Eğitim ve Dayanışma Derneği), sektör çalışanlarının dayanışmasını güçlendirmek ve mesleki eğitim kalitesini standartlaştırmak amacıyla 2024 yılında kurulmuştur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface p-6 flex flex-col justify-center items-center text-center group">
              <div className="w-32 h-32 mb-6 rounded-2xl bg-white p-3 shadow-md border border-outline-variant/20 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={FOUNDERS_DATA[0].image}
                  alt={FOUNDERS_DATA[0].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                {FOUNDERS_DATA[0].name}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">
                {FOUNDERS_DATA[0].title}
              </p>
              <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
                {FOUNDERS_DATA[0].bio}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-outline-variant/30 shadow-sm">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary mb-1">Mesleki Standartlar ve Güvence</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Özel güvenlik personelinin mesleki haklarını savunmak ve eğitim standartlarını uluslararası düzeye taşımak temel hedefimizdir.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-outline-variant/30 shadow-sm">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Users size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary mb-1">Güçlü Dayanışma Ağı</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Üyelerimiz arasında sosyal, hukuki ve mesleki yardımlaşmayı kurumsallaştıran geniş bir temsilcilik ağı sunuyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-outline-variant/30 shadow-sm">
              <div className="p-3 rounded-lg bg-tertiary-fixed/30 text-primary">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary mb-1">Sürekli Eğitim & Gelişim</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Çalıştaylar, seminerler ve uygulamalı eğitim modülleri ile güncel sektör ihtiyaçlarına hızlı çözümler geliştiriyoruz.
                </p>
              </div>
            </div>

            {isSummary && (
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm"
                >
                  Detaylı Kuruluş Hikayemiz & Hakkımızda
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
