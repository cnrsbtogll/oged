import React from 'react';
import { FOUNDERS_DATA, FOUNDER_GROUP_IMAGE } from '../data/ogedData';
import { Calendar, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FoundersSectionProps {
  isSummary?: boolean;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ isSummary = false }) => {
  return (
    <section className={`py-16 px-4 sm:px-6 md:px-10 ${isSummary ? 'bg-surface-container-lowest' : 'bg-background'}`}>
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <Calendar size={16} />
            Kuruluş & Vizyonumuz
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            ÖGED Kurucular Heyeti
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            ÖGED (Özel Güvenlik Eğitim ve Dayanışma Derneği), sektör çalışanlarının dayanışmasını güçlendirmek ve mesleki eğitim kalitesini standartlaştırmak amacıyla 2024 yılında kurulmuştur.
          </p>
        </div>

        {/* Group Photo Showcase */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 relative max-w-4xl mx-auto group">
          <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] w-full relative bg-primary/10">
            <img
              src={FOUNDER_GROUP_IMAGE}
              alt="ÖGED Kurucular Heyeti Toplu Fotoğrafı"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-6 md:p-8">
              <div className="text-on-primary">
                <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold rounded-lg mb-2">
                  Kurucu Heyet
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold">ÖGED Kurucular Heyeti</h3>
                <p className="text-xs md:text-sm text-on-primary/80">Sektörde birlik ve geleceğe yön veren vizyoner kurucu kadromuz.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FOUNDERS_DATA.map((founder) => (
            <div
              key={founder.id}
              className="bg-surface rounded-2xl p-6 border border-outline-variant/30 shadow-sm hover:-translate-y-1.5 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-36 h-44 mb-5 rounded-xl overflow-hidden shadow-md border border-outline-variant/20 bg-white relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-1">
                {founder.name}
              </h3>
              <div className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
                {founder.role}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>

        {isSummary && (
          <div className="text-center pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-primary-container transition-colors shadow-md"
            >
              <Users size={18} /> Detaylı Kuruluş Hikayemiz & Hakkımızda
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
