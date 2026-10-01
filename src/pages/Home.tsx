import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, GraduationCap, Handshake, Briefcase, UserPlus, Volume2, VolumeX } from 'lucide-react';
import logoPng from '../../assets/logo.png';
import logoVideo from '../../assets/logo video.mp4';
import panelBasariImg from '../../assets/documents/PANEL BAŞARI BELGESİ_page-0001.jpg';
import { BOARD_IMAGE } from '../data/ogedData';
import { FoundersSection } from '../components/FoundersSection';
import { WorkshopsTimeline } from '../components/WorkshopsTimeline';
import { GallerySection } from '../components/GallerySection';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      // 1. Önce sesli oynatmayı dene
      video.play().then(() => {
        setIsMuted(false);
      }).catch(() => {
        // 2. Tarayıcı politikası sesli otoyürütmeyi engellerse, görüntünün donmaması için sessiz başlat
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      if (isMuted) {
        video.muted = false;
        video.currentTime = 0;
        video.play().catch(() => {});
        setIsMuted(false);
      } else {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

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
          <div
            onClick={toggleMute}
            className="mb-8 relative bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-[2.5rem] border border-white/20 shadow-2xl transition-transform hover:scale-105 cursor-pointer group"
            title={isMuted ? "Sesi açmak için tıklayın" : "Sesi kapatmak için tıklayın"}
          >
            <video
              ref={videoRef}
              src={logoVideo}
              autoPlay
              playsInline
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl bg-black shadow-inner"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute bottom-8 right-8 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all flex items-center gap-1.5 text-xs font-semibold px-3"
            >
              {isMuted ? (
                <>
                  <VolumeX size={16} className="text-tertiary-fixed" />
                  <span>Sesi Aç</span>
                </>
              ) : (
                <>
                  <Volume2 size={16} className="text-tertiary-fixed" />
                  <span>Sesi Kapat</span>
                </>
              )}
            </button>
          </div>

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed border border-tertiary-fixed/40 mb-8 text-sm font-bold shadow-md backdrop-blur-sm">
            <Shield size={18} className="text-tertiary-fixed" />
            Güvenli Gelecek İçin Birlikteyiz
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-primary max-w-5xl mb-6 font-bold leading-tight">
            Eğitimle Güçlenen <span className="text-tertiary-fixed">Özel Güvenlik</span>, Dayanışmayla Güçlenen <span className="text-tertiary-fixed">Sektör</span>.
          </h1>

          <p className="text-lg md:text-xl text-on-primary/80 max-w-2xl mb-8 leading-relaxed">
            Özel güvenlik sektörünün gelişimine katkı sağlamak, eğitim ve istihdamı desteklemek ve sektör çalışanları arasında dayanışmayı güçlendirmek için çalışıyoruz.
          </p>

          {/* Tanıtım Videosu (YouTube) */}
          <div className="w-full max-w-3xl mb-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/80 backdrop-blur-md p-1.5 sm:p-2">
            <div className="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vx84I3Oh3jg?rel=0"
                title="ÖGED Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Panel Başarı Belgesi */}
          <div className="w-full max-w-3xl mb-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md p-2 sm:p-3">
            <img
              src={panelBasariImg}
              alt="Özel Güvenlik Denetleme Başkanlığı Panel Başarı Belgesi"
              className="w-full h-auto rounded-xl md:rounded-2xl object-contain shadow-inner"
            />
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
