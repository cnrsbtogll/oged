import { ShieldCheck, Play, Download, ExternalLink, ArrowLeft, Video, BookOpen, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import ozgeRollupPdf from '../../assets/documents/ÖZGEKampüs Roll-up.pdf';

interface VideoItem {
  id: string;
  number: number;
  title: string;
  badge: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
}

const ozgeVideos: VideoItem[] = [
  {
    id: '7S8zuVjsoE4',
    number: 1,
    title: 'ÖZGE Projesi - Tanıtım & Vizyon',
    badge: '1. Bölüm',
    description: 'Yeni çıkan kitaplarla %100 uyumlu nörobilimsel ders anlatım programı ve ÖZGE Kampüs vizyonu.',
    embedUrl: 'https://www.youtube.com/embed/7S8zuVjsoE4?rel=0',
    watchUrl: 'https://youtu.be/7S8zuVjsoE4'
  },
  {
    id: 'mRgdZzoy-oY',
    number: 2,
    title: 'Modüler Eğitim & Branşlaşma Modeli',
    badge: '2. Bölüm',
    description: 'Kursiyerlerin öğrenme sürecini kolaylaştıran, sınav başarı oranlarını yükselten modüler yapı.',
    embedUrl: 'https://www.youtube.com/embed/mRgdZzoy-oY?rel=0',
    watchUrl: 'https://youtu.be/mRgdZzoy-oY'
  }
];

export default function OzgeProject() {
  return (
    <div className="flex-grow flex flex-col gap-16 pb-20">
      {/* Header Banner */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#2C4159] z-10 opacity-90"></div>
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-10 max-w-[960px] mx-auto text-on-primary">
          <div className="inline-flex items-center gap-2 mb-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-on-primary transition-colors"
            >
              <ArrowLeft size={14} /> Tüm Projelere Dön
            </Link>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed font-display">
              1. Öncelikli Vizyon Projesi
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            ÖZGE Projesi (ÖZGE Kampüs)
          </h1>

          <p className="text-base sm:text-lg text-on-primary/95 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            ÖZGE KAMPÜS, yeni çıkan kitaplarla %100 uyumlu nörobilimsel ders anlatım programı ve sınıf içi dijital araçlarıyla özel güvenlik eğitiminde verimliliği artıran yenilikçi bir platformdur.
          </p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={ozgeRollupPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-on-secondary bg-secondary px-5 py-3 rounded-xl hover:bg-secondary/90 transition-all shadow-md"
            >
              <Download size={18} />
              <span>ÖZGE Kampüs Tanıtım PDF (İncele)</span>
            </a>
            <a
              href="https://www.ozgekampus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-on-primary bg-white/15 hover:bg-white/25 px-5 py-3 rounded-xl transition-all border border-white/20 backdrop-blur-xs"
            >
              <span>ozgekampus.com</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ÖGED Açıklaması / Duyuru Kartı */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full -mt-6 sm:-mt-10 relative z-30">
        <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-outline-variant/40 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
                <Quote size={18} className="text-secondary flex-shrink-0" />
                <span>ÖGED Yönetim Kurulu Mesajı</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                Özel Güvenlik Eğitiminde Dijital Dönüşüm
              </h2>
              <div className="text-base text-on-surface-variant leading-relaxed space-y-3">
                <p>
                  Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED) iş birliğiyle geliştirilen <strong className="text-primary font-semibold">ÖZGE KAMPÜS</strong>, kursiyerlerin öğrenme sürecini kolaylaştırırken eğitim kurumlarının sınav başarı oranlarını yükseltmeyi hedefler.
                </p>
                <p>
                  ÖGED olarak eğitim kitaplarımızı teknolojiyle buluşturarak örnek olayların ağırlıkta olduğu ÖZGE Kampüs yazılımını hayata geçirdik. Tüm derslerimizi ve sektörümüzde karşılaşılan konuları içeren bu platformu incelemenizi rica ediyoruz.
                </p>
                <p className="font-medium text-primary pt-1">
                  Derneğimizin öncülüğünde hazırladığımız projenin tüm sektörümüze hayırlı olmasını diliyor, desteklerinizi bekliyoruz. Birlikte gelişiyor, eğitimin geleceğini birlikte şekillendiriyoruz.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col gap-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Öne Çıkan Özellikler
              </span>
              <ul className="space-y-3">
                {[
                  "Yeni kitaplarla %100 tam uyum",
                  "Nörobilimsel ders anlatım programı",
                  "Sınıf içi interaktif dijital araçlar",
                  "Örnek olay ve vaka analizleri",
                  "Sınav başarı oranlarını artırma hedefi"
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                    <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Bölümü (Yan Yana 2 Video) */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              <Video size={16} />
              <span>Görsel Anlatım & Tanıtımlar</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">
              ÖZGE Projesi Videoları
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-1">
              Platformun modüllerini ve dijital eğitim altyapısını tanıtan video serisi.
            </p>
          </div>
          <span className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-surface-container-low text-primary self-start md:self-auto border border-outline-variant/20">
            Toplam 2 Video
          </span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ozgeVideos.map((video) => (
            <div
              key={video.id}
              className="bg-surface rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Metin & Detay Alanı */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-secondary/10 text-secondary">
                      {video.badge}
                    </span>
                    <span className="text-xs text-on-surface-variant font-medium">
                      Bölüm #{video.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <Play size={14} /> YouTube'da İzle
                  </a>
                  <span className="text-[11px] text-on-surface-variant">HD Oynatıcı</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alt CTA */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              ÖZGE Kampüs'ü İnceleyin ve İletişime Geçin
            </h2>
            <p className="text-on-primary/80 text-base md:text-lg">
              Eğitim kurumunuzda ÖZGE Kampüs altyapısını kullanmak veya proje hakkında detaylı sunum talep etmek için bize ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.ozgekampus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-white text-primary text-base font-semibold px-7 py-4 rounded-full hover:bg-white/90 transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>ozgekampus.com</span>
              <ExternalLink size={16} />
            </a>
            <Link
              to="/contact"
              className="whitespace-nowrap bg-tertiary-fixed text-on-tertiary-fixed text-base font-semibold px-7 py-4 rounded-full hover:bg-tertiary-fixed-dim transition-all shadow-md"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
