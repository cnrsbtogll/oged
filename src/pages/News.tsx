import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "2024 Yılı İlk Yarıyıl Eğitim Değerlendirme Raporu Yayınlandı",
      date: "15 Haziran 2024",
      excerpt: "Derneğimiz tarafından düzenlenen özel güvenlik eğitimlerinin ilk yarıyıl analiz sonuçları, sektör paydaşları ile paylaşıldı. Eğitim kalitesindeki artış dikkat çekti.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtXh9xQzN54B_2sZ9Lw218_B54J9nK8H_34V2s58hZ9c5n3V_3c6X_kG1B_h5mP8Q9x4K_ZzQ1K9X4V_ZzQ1K9X4V_ZzQ1K9X4V_ZzQ1K9X4V_ZzQ1K9X4V"
    },
    {
      id: 2,
      title: "Kadın Güvenlik Görevlileri İçin Yeni İstihdam Protokolü İmzalandı",
      date: "02 Mayıs 2024",
      excerpt: "Sektörde kadın istihdamını desteklemek amacıyla, önde gelen kurumlarla yeni bir protokol imzaladık. Hedef: %50 kadın istihdamı.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9rjeD56jxxJldYpuG3VpWBbduxR17nAFpMzmcij6u_Yq0nzQ0j9HkXDmbcpoJAe4hPasjTgIyhLVbS4DLd0NIVaZp5koYdm6F0pGrFLoDv5S0aAiFR7MfleWalNvmEAX7CNONIPJ88TPRbhb1qIhd4EW1YyWufemNi3LsTHpFlk8RkluG6COty5UP3t7sa3HmYeJul3OgPCR6WpTs8aZcLHG1TJs0V8dTZl33WtGjDwcONiAgBBZQ4vVOlbhQB5V9"
    },
    {
      id: 3,
      title: "Bahar Dönemi Dayanışma Yemeğinde Buluştuk",
      date: "20 Nisan 2024",
      excerpt: "Geleneksel bahar dayanışma yemeğimiz, 500'ü aşkın üyemizin katılımıyla Ankara'da gerçekleşti. Sektörün güncel sorunları konuşuldu.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6qeWPnG3h7VtrL133HdrHklC78nBMLT3jZbS87bF1llT3i9Dtm80vFHVDbaZCEsI0cUVuPDnNSiVE2pDpga644XL40XD3_0dC2Os4OD7WB8J9gFRNOKnV4OTSFaNSMARipUBDOAaoyYSXSgzLcPneMYFslRTSpbf0pbIHrHkHpnAXbDkeTVLLCqa3OPknjyGC32tVE1NuJqBTX9L0iK0mTihdeAYdHXb7ykAgPGc2kmnqGN8OmPA"
    }
  ];

  return (
    <div className="flex-grow flex flex-col gap-12 pb-20 pt-12">
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold text-primary mb-2">Haberler ve Duyurular</h1>
            <p className="text-base text-on-surface-variant">ÖGED'den en güncel gelişmeler, etkinlik duyuruları ve sektör haberleri.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-variant shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-video bg-surface-variant overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary/40 font-display font-bold">ÖGED HABER</span>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-3">
                  <Calendar size={16} />
                  <time>{news.date}</time>
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-tertiary-fixed transition-colors">
                  {news.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-3">
                  {news.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Devamını Oku <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
