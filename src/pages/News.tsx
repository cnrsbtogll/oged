import { useState } from 'react';
import { Calendar, ArrowRight, ExternalLink, Megaphone, Newspaper, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import news2Pdf from '../../assets/documents/2nci haber özel güvenlik denetleme başkanlığı 2026.pdf';

export default function News() {
  const [activeTab, setActiveTab] = useState<'news' | 'press'>('news');

  const newsItems = [
    {
      id: 1,
      title: "Okul Güvenliğinde “Bahçe Görevlisi” Tartışması: ÖGED’den Yetki ve Sorumluluk Uyarısı",
      date: "14 Ağustos 2024",
      excerpt: "Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED), okullarda güvenlik hizmetlerinin yetkisiz 'bahçe görevlisi' unvanlarıyla yürütülmeye çalışılmasının 5188 sayılı kanuna aykırılık teşkil ettiği ve güvenlik zaafiyeti oluşturabileceği hususunda yetki ve sorumluluk uyarısında bulundu.",
      imageUrl: "https://ozelguvenliktv.com/wp-content/uploads/2026/08/IMG_20260814_143315.jpg",
      externalUrl: "https://ozelguvenliktv.com/okul-guvenliginde-bahce-gorevlisi-tartismasi-ogedden-yetki-ve-sorumluluk-uyarisi.html",
      hasPdf: false,
    },
    {
      id: 2,
      title: "EGM Özel Güvenlik Denetleme Başkanlığı 2026 Eğitim Hizmetleri ve ÖZGE Sunumu",
      date: "2026",
      excerpt: "Özel Güvenlik Denetleme Başkanlığı tarafından hazırlanan; ÖZGE Projesi, beceri temelli modüler eğitim modeli, uzmanlık alanları ve Dijital Eğitim Platformu (DİEP) kapsamındaki 33 sayfalık kapsamlı resmi sunum.",
      hasPdf: true,
      pdfUrl: news2Pdf,
      pdfLabel: "ÖZGE Raporu (PDF İncele - 33 Sayfa)"
    },
    {
      id: 3,
      title: "Kadın Güvenlik Görevlileri İçin Yeni İstihdam Protokolü İmzalandı",
      date: "02 Mayıs 2024",
      excerpt: "Sektörde kadın istihdamını desteklemek amacıyla, önde gelen kurumlarla yeni bir protokol imzaladık. Hedef: %50 kadın istihdamı.",
      hasPdf: false,
    }
  ];

  const PRESS_EXTERNAL_URL = "https://ozelguvenliktv.com/index.php?s=D%C4%B0LEK+ORAN&post_type=post";

  const handlePressTabClick = () => {
    setActiveTab('press');
    window.open(PRESS_EXTERNAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex-grow flex flex-col gap-12 pb-20 pt-12">
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-surface-variant pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-2 block">
              GÜNCEL GELİŞMELER & DUYURULAR
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary mb-3">
              Haberler & Basın Açıklamaları
            </h1>
            <p className="text-base text-on-surface-variant max-w-2xl">
              ÖGED'den en güncel gelişmeler, sektör analizleri ve kamuoyu basın açıklamaları.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-surface-variant w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('news')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'news'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              <Newspaper size={18} />
              <span>Haberler</span>
            </button>

            <button
              type="button"
              onClick={handlePressTabClick}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'press'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              <Megaphone size={18} />
              <span>Basın Açıklamaları</span>
              <ExternalLink size={14} className="opacity-75" />
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'news' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-variant shadow-sm flex flex-col group hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-primary/10 relative overflow-hidden flex items-center justify-center">
                    {news.imageUrl ? (
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-primary/40 font-display font-bold text-lg">ÖGED HABER</span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs text-secondary font-semibold">
                        <Calendar size={15} />
                        <time>{news.date}</time>
                      </div>
                      {news.hasPdf && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-secondary/15 text-secondary">
                          <FileText size={12} /> Resmi PDF Eki
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>

                    {news.hasPdf ? (
                      <a
                        href={news.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-sm font-bold text-on-secondary bg-secondary px-4 py-2.5 rounded-xl hover:bg-secondary/90 transition-all shadow-xs"
                      >
                        <Download size={16} />
                        <span>{news.pdfLabel || 'PDF İncele'}</span>
                      </a>
                    ) : news.externalUrl ? (
                      <a
                        href={news.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                      >
                        Haberi Oku <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                      >
                        Devamını Oku <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* Press Release Tab Content */
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-[#2C4159] text-on-primary rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="w-16 h-16 rounded-2xl bg-white/10 text-tertiary-fixed flex items-center justify-center mb-6 shadow-inner">
                  <Megaphone size={32} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed mb-2">
                  Özel Güvenlik TV & Medya Arşivi
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">
                  Dilek Oran & ÖGED Basın Açıklamaları
                </h2>
                <p className="text-base sm:text-lg text-on-primary/90 max-w-2xl mb-8 leading-relaxed">
                  ÖGED Yönetim Kurulu Başkanı Dilek Oran'ın ve derneğimizin sektörel yayın organlarında yer alan tüm basın açıklamaları, röportajları ve demeçleri Özel Güvenlik TV arşivinde yayınlanmaktadır.
                </p>

                <a
                  href={PRESS_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-tertiary-fixed-dim hover:scale-105 transition-all shadow-lg"
                >
                  <span>Özel Güvenlik TV'de Tüm Açıklamaları İncele</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-variant flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Resmi Basın Bildirileri ve PDF Dokümanları
                </span>
              </div>
              <span className="text-xs text-on-surface-variant bg-surface px-3 py-1.5 rounded-full border border-surface-variant">
                Arşivleniyor
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
