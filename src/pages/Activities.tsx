import { Activity, Target, ShieldCheck, HeartHandshake, Tv, Play, Clock } from 'lucide-react';
import { WorkshopsTimeline } from '../components/WorkshopsTimeline';
import { GallerySection } from '../components/GallerySection';

export default function Activities() {
  return (
    <div className="flex-grow flex flex-col gap-12 pb-20">
      <section className="relative w-full min-h-[250px] flex items-center justify-center overflow-hidden bg-primary text-on-primary py-16">
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
          <span className="text-sm font-semibold text-tertiary-fixed uppercase tracking-widest mb-4 block">Neler Yapıyoruz?</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Faaliyetlerimiz & Çalıştaylarımız</h1>
          <p className="text-lg text-on-primary/80 max-w-2xl mx-auto">Eğitim, istihdam, ve sektör dayanışması ekseninde yürüttüğümüz temel çalışmalar ve etkinlik takvimimiz.</p>
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

      {/* Faaliyetler Video Yayını (30-57. Dakika Arası) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-surface-variant shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4 text-xs md:text-sm font-semibold">
              <Tv size={16} />
              <span className="flex items-center gap-1.5">
                Faaliyet Yayını
                <span className="bg-secondary/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold flex items-center gap-1">
                  <Clock size={12} /> 30:00 - 57:00
                </span>
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
              ÖGED Faaliyetler & Etkinlik Özel Yayını
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Dernek faaliyetlerimiz ve sektör çalışmalarımız hakkında detaylı sunum ve görüşmelerin yer aldığı yayın kesiti (30. - 57. dakikalar arası).
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-black relative">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0lI2HGi4LLI?start=1800&end=3420&rel=0"
                title="ÖGED Faaliyetler Özel Yayını (30-57. dk)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-container/50 border border-surface-variant">
            <span className="text-xs md:text-sm text-on-surface-variant text-center sm:text-left">
              * Video varsayılan olarak 30. dakikadan başlar ve 57. dakikada tamamlanır.
            </span>
            <a
              href="https://www.youtube.com/watch?v=0lI2HGi4LLI&t=1800s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-secondary/90 transition-colors flex-shrink-0"
            >
              <Play size={14} /> YouTube'da İzle (30:00'dan İtibaren)
            </a>
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
