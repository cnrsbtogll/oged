import { useState } from 'react';
import { Activity, Target, ShieldCheck, HeartHandshake, Tv, Play, Clock, Calendar, Video } from 'lucide-react';
import { WorkshopsTimeline } from '../components/WorkshopsTimeline';
import { GallerySection } from '../components/GallerySection';

export default function Activities() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const activityVideos = [
    {
      id: 'Chew5tiDbto',
      title: 'ÖGED Özel Güvenlik Eğitim ve Tanıtım Yayını',
      date: 'Eylül 2024',
      badge: 'Tanıtım & Vizyon',
      embedUrl: 'https://www.youtube.com/embed/Chew5tiDbto?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=Chew5tiDbto',
      desc: 'ÖGED Yönetim Kurulu ve dernek çalışmalarımızın tanıtıldığı bilgilendirici yayın.'
    },
    {
      id: '0lI2HGi4LLI',
      title: 'ÖGED Faaliyetler & Etkinlik Özel Yayını',
      date: 'Mayıs 2024',
      badge: '30:00 - 57:00 Kesiti',
      embedUrl: 'https://www.youtube.com/embed/0lI2HGi4LLI?start=1800&end=3420&rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=0lI2HGi4LLI&t=1800s',
      desc: 'Dernek faaliyetlerimiz ve sektör çalışmalarımız hakkında detaylı sunum ve görüşmelerin yer aldığı yayın kesiti (30. - 57. dakikalar arası).'
    },
    {
      id: 'Jx1OkUtNww0',
      title: 'ÖGED Dernek Üyeleri ve Dayanışma Buluşması',
      date: 'Haziran 2023',
      badge: 'Kuruluş & Dayanışma',
      embedUrl: 'https://www.youtube.com/embed/Jx1OkUtNww0?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=Jx1OkUtNww0',
      desc: 'Dernek üyelerimizin ve kurucu kadromuzun sektörel değerlendirmeleri ve röportajları.'
    }
  ];

  const currentVideo = activityVideos[selectedVideoIndex];

  return (
    <div className="flex-grow flex flex-col gap-12 pb-20">
      <section className="relative w-full min-h-[250px] flex items-center justify-center overflow-hidden bg-primary text-on-primary py-16">
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
          <span className="text-sm font-semibold text-tertiary-fixed uppercase tracking-widest mb-4 block">Neler Yapıyoruz?</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Faaliyetlerimiz & Çalıştaylarımız</h1>
          <p className="text-lg text-on-primary/80 max-w-2xl mx-auto">Eğitim, istihdam ve sektör dayanışması ekseninde yürüttüğümüz temel çalışmalar ve etkinlik takvimimiz.</p>
        </div>
      </section>

      {/* Core Activities Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Activity,
              title: "Meslek İçi Eğitim Seminerleri",
              desc: "Güvenlik personelinin yetkinliklerini güncel tutmak amacıyla, kriz yönetimi, ilk yardım, etkili iletişim ve yasal mevzuat güncellemeleri konularında periyodik eğitimler düzenliyoruz."
            },
            {
              icon: Target,
              title: "İstihdam Projeleri",
              desc: "Sektördeki nitelikli eleman ihtiyacını karşılamak ve iş arayan güvenlik personeline destek olmak için özel istihdam köprüleri kuruyoruz."
            },
            {
              icon: ShieldCheck,
              title: "Sertifikasyon Programları",
              desc: "Uzmanlık gerektiren özel güvenlik alanlarında (örneğin; kalabalık yönetimi, VIP koruma, X-Ray operatörlüğü) ileri düzey sertifika programları organize ediyoruz."
            },
            {
              icon: HeartHandshake,
              title: "Dayanışma Etkinlikleri",
              desc: "Sektör çalışanlarının bir araya geldiği, tecrübe paylaşımında bulunduğu sosyal sorumluluk projeleri ve dayanışma etkinlikleri gerçekleştiriyoruz."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant shadow-sm hover:border-secondary transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <item.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faaliyetler Video Galerisi (Tarih Sıralı) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-surface-variant shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4 text-xs md:text-sm font-semibold">
              <Video size={16} />
              <span>ÖGED Video Arşivi</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
              Faaliyet ve Etkinlik Videolarımız
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Dernek başkanımız Dilek Oran'ın, derneğimizin düzenlediği eğitim seminerleri, çalıştaylar, televizyon yayınları ve üye buluşmaları video kayıtları.
            </p>
          </div>

          {/* Active Video Player */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-black relative">
              <div className="aspect-video w-full">
                <iframe
                  key={currentVideo.id}
                  className="w-full h-full"
                  src={currentVideo.embedUrl}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container/50 border border-surface-variant">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-secondary/10 text-secondary">
                    {currentVideo.badge}
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                    <Calendar size={13} /> {currentVideo.date}
                  </span>
                </div>
                <h4 className="font-display font-bold text-primary text-base md:text-lg">
                  {currentVideo.title}
                </h4>
                <p className="text-xs md:text-sm text-on-surface-variant mt-1">
                  {currentVideo.desc}
                </p>
              </div>

              <a
                href={currentVideo.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold hover:bg-secondary/90 transition-colors flex-shrink-0"
              >
                <Play size={14} /> YouTube'da İzle
              </a>
            </div>
          </div>

          {/* Video Selector Cards */}
          <div className="max-w-4xl mx-auto">
            <h5 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4">
              Tüm Faaliyet Videoları ({activityVideos.length})
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activityVideos.map((video, idx) => {
                const isSelected = idx === selectedVideoIndex;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setSelectedVideoIndex(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${isSelected
                        ? 'bg-primary text-on-primary border-primary shadow-md scale-[1.02]'
                        : 'bg-surface hover:bg-surface-container border-surface-variant text-on-surface'
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${isSelected
                              ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                              : 'bg-secondary/10 text-secondary'
                            }`}
                        >
                          {video.badge}
                        </span>
                        <span
                          className={`text-[11px] font-medium flex items-center gap-1 ${isSelected ? 'text-on-primary/80' : 'text-on-surface-variant'
                            }`}
                        >
                          <Calendar size={12} /> {video.date}
                        </span>
                      </div>
                      <h6 className="font-display font-bold text-sm line-clamp-2 mb-2">
                        {video.title}
                      </h6>
                    </div>
                    <span
                      className={`text-xs font-semibold flex items-center gap-1.5 mt-2 ${isSelected ? 'text-tertiary-fixed' : 'text-primary'
                        }`}
                    >
                      <Play size={12} /> {isSelected ? 'Oynatılıyor' : 'İzle'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <WorkshopsTimeline />

      {/* Full Photo Gallery */}
      <GallerySection />
    </div>
  );
}
