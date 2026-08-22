import { FileText, Calendar, Download, Share2, Megaphone } from 'lucide-react';

export default function PressRelease() {
  const releases = [
    {
      id: 1,
      date: '15 Ağustos 2024',
      title: 'ÖGED Güvenlik Sektöründe Eğitim Standartlarının Yükseltilmesi Hakkında Basın Açıklaması',
      summary: 'Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED), sektör çalışanlarının mesleki niteliklerini ve çalışma koşullarını geliştirmeye yönelik hazırladığı 2024 Eylem Planı raporunu kamuoyuna sundu.',
      pdfUrl: '#'
    },
    {
      id: 2,
      date: '28 Temmuz 2024',
      title: 'Özel Güvenlik Sektöründe Kadın İstihdamı ve Fırsat Eşitliği Bildirisi',
      summary: 'ÖGED Yönetim Kurulu tarafından yapılan açıklamada, sektörde kadın istihdam oranının %50 seviyesine çıkarılması hedefi ve bu doğrultuda başlatılan teşvik projeleri açıklandı.',
      pdfUrl: '#'
    },
    {
      id: 3,
      date: '10 Haziran 2024',
      title: 'ÖGED 1. Olağan Genel Kurul Sonuç Bildirgesi',
      summary: 'Derneğimizin kuruluşunun ardından gerçekleştirilen ilk genel kurul toplantısında alınan kararlar, yeni yönetim organları ve stratejik hedefler kamuoyuyla paylaşıldı.',
      pdfUrl: '#'
    }
  ];

  return (
    <div className="flex-grow flex flex-col gap-16 pb-20">
      {/* Header Banner */}
      <section className="relative w-full min-h-[360px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#2C4159] z-10 opacity-90"></div>
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-10 max-w-[800px] mx-auto text-on-primary">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed mb-6">
            <Megaphone size={32} />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Basın Açıklamaları</h1>
          <p className="text-lg text-on-primary/90 leading-relaxed">
            ÖGED'in kamuoyunu, medyayı ve sektör temsilcilerini bilgilendirmek amacıyla yayınladığı resmi basın duyuruları ve açıklamalar.
          </p>
        </div>
      </section>

      {/* Press Releases List */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1000px] mx-auto w-full">
        <div className="flex flex-col gap-8">
          {releases.map((release) => (
            <article key={release.id} className="bg-surface rounded-2xl p-8 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary mb-3">
                <Calendar size={16} />
                <span>{release.date}</span>
                <span className="mx-2">•</span>
                <span className="bg-secondary/10 px-2.5 py-0.5 rounded-full">Resmi Açıklama</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4 leading-snug">
                {release.title}
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                {release.summary}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-outline-variant/20">
                <a
                  href={release.pdfUrl}
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm"
                >
                  <FileText size={16} /> Tam Metni İncele
                </a>
                <a
                  href={release.pdfUrl}
                  className="inline-flex items-center gap-2 bg-surface-container-low text-primary px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-surface-container transition-colors"
                >
                  <Download size={16} /> PDF İndir
                </a>
                <button
                  onClick={() => navigator.clipboard?.writeText(window.location.href)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors ml-auto"
                >
                  <Share2 size={16} /> Paylaş
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Media Contact Info */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1000px] mx-auto w-full">
        <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">Basın & Medya İletişim</h3>
            <p className="text-sm text-on-surface-variant">Basın mensupları röportaj ve bilgi talepleri için dernek iletişim birimimizle irtibata geçebilirler.</p>
          </div>
          <a
            href="mailto:basin@oged.com.tr"
            className="bg-primary text-on-primary text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
          >
            basin@oged.com.tr
          </a>
        </div>
      </section>
    </div>
  );
}
