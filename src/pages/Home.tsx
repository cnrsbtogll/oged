import { Link } from 'react-router-dom';
import { Shield, GraduationCap, Handshake, Briefcase, UserPlus } from 'lucide-react';
import logoPng from '../../assets/logo.png';
import { BOARD_IMAGE } from '../data/ogedData';
import { FoundersSection } from '../components/FoundersSection';
import { WorkshopsTimeline } from '../components/WorkshopsTimeline';
import { GallerySection } from '../components/GallerySection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-20 pb-32">
        {/* Background container with overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 z-0"></div>
          {/* Subtle pattern background for hero */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-[2.5rem] border border-white/20 shadow-2xl transition-transform hover:scale-105">
            <img src={logoPng} alt="ÖGED Logosu" className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-3xl bg-white p-4 md:p-6 shadow-inner" />
          </div>

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed border border-tertiary-fixed/40 mb-8 text-sm font-bold shadow-md backdrop-blur-sm">
            <Shield size={18} className="text-tertiary-fixed" />
            Güvenli Gelecek İçin Birlikteyiz
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-on-primary max-w-4xl mb-6 font-bold leading-tight">
            Özel Güvenlik Sektöründe <span className="text-tertiary-fixed">Eğitim</span>, <span className="text-tertiary-fixed">Dayanışma</span> ve Güçlü Gelecek
          </h1>

          <p className="text-lg md:text-xl text-on-primary/80 max-w-2xl mb-8 leading-relaxed">
            Özel güvenlik sektörünün gelişimine katkı sağlamak, eğitim ve istihdamı desteklemek ve sektör çalışanları arasında dayanışmayı güçlendirmek için çalışıyoruz.
          </p>

          {/* Tanıtım Videosu (YouTube) */}
          <div className="w-full max-w-3xl mb-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/80 backdrop-blur-md p-1.5 sm:p-2">
            <div className="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Jx1OkUtNww0?rel=0"
                title="ÖGED Dernek Üyeleri Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/membership" className="bg-tertiary-fixed text-on-tertiary-fixed text-sm font-semibold px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(255,225,109,0.3)] text-center flex items-center justify-center gap-2">
              <UserPlus size={18} /> ÖGED Üyesi Olun
            </Link>
            <Link to="/about" className="bg-transparent text-on-primary border border-on-primary/30 text-sm font-semibold px-8 py-4 rounded-full hover:bg-on-primary/10 hover:-translate-y-1 transition-all duration-300 text-center">
              ÖGED'i Tanıyın
            </Link>
          </div>
        </div>

        {/* Decorative Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-margin-mobile md:px-margin-desktop z-30">
          <div className="max-w-[1000px] mx-auto bg-surface rounded-2xl shadow-2xl border border-outline-variant/40 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">20+</div>
              <div className="text-xs md:text-sm font-semibold text-on-surface-variant">Yıllık Tecrübe</div>
            </div>
            <div className="p-2 border-l border-outline-variant/20">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">5000+</div>
              <div className="text-xs md:text-sm font-semibold text-on-surface-variant">Eğitim Alan Üye</div>
            </div>
            <div className="p-2 md:border-l border-outline-variant/20">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">%50</div>
              <div className="text-xs md:text-sm font-semibold text-on-surface-variant">Kadın İstihdam Hedefi</div>
            </div>
            <div className="p-2 border-l border-outline-variant/20">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">81</div>
              <div className="text-xs md:text-sm font-semibold text-on-surface-variant">İlde Faaliyet</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">ÖGED Kimdir?</h2>
              <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
                Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED), güvenlik sektöründeki standartları yükseltmek, çalışanların mesleki gelişimlerini desteklemek ve toplumsal huzura katkıda bulunmak amacıyla kurulmuştur.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Sektörün ihtiyaç duyduğu nitelikli insan kaynağını yetiştirirken, aynı zamanda üyelerimiz arasında güçlü bir dayanışma ağı oluşturmayı hedefliyoruz.
              </p>
            </div>
            <div className="flex-1 relative w-full">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-outline-variant/20">
                <img
                  src={BOARD_IMAGE}
                  alt="ÖGED Yönetim Kurulu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-1 transition-transform shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">Eğitim</h3>
              <p className="text-sm text-on-surface-variant">Sürekli mesleki gelişim için güncel eğitim programları ve seminerler düzenliyoruz.</p>
            </div>
            <div className="bg-surface rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-1 transition-transform shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Handshake size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">Dayanışma</h3>
              <p className="text-sm text-on-surface-variant">Sektör çalışanları arasında güçlü bağlar kurarak sosyal ve mesleki yardımlaşmayı sağlıyoruz.</p>
            </div>
            <div className="bg-primary rounded-xl p-8 shadow-lg hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-white/5">
                <Briefcase size={120} strokeWidth={1} />
              </div>
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed/20 flex items-center justify-center text-tertiary-fixed mb-4 relative z-10">
                <Briefcase size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-on-primary mb-2 relative z-10">İstihdam</h3>
              <p className="text-sm text-on-primary/80 relative z-10">Özellikle kadınların sektörde daha fazla yer alması için özel istihdam projeleri yürütüyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Founders Section (Summary Block) */}
      <FoundersSection isSummary={true} />

      {/* 2. Workshops & Meetings Timeline Preview */}
      <WorkshopsTimeline limit={3} />

      {/* 4. Photo Gallery Preview */}
      <GallerySection limit={3} />

      {/* Membership CTA */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Siz de ÖGED Gücüne Katılın</h2>
          <p className="text-base text-on-primary/80 mb-8 leading-relaxed">
            Mesleki standartlarınızı yükseltmek, sürekli eğitimlerimizden yararlanmak ve güçlü dayanışma ağımızda yerinizi almak için üyelik başvurusu yapın.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed text-sm font-semibold px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim transition-colors shadow-lg"
          >
            <UserPlus size={18} /> Hemen Üye Olun
          </Link>
        </div>
      </section>
    </>
  );
}
