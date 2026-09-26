import { FolderKanban, Users, ShieldCheck, ArrowRight, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectsList = [
    {
      id: 'ozge-projesi',
      title: 'ÖZGE Projesi',
      category: 'Eğitim & Standardizasyon',
      description: 'Özel Güvenlik Gelişim ve Eğitim (ÖZGE) Projesi; sektördeki eğitim standartlarının yükseltilmesi, mesleki yetkinliklerin belgelendirilmesi ve kalitenin kurumsallaşması amacıyla yürütülmektedir.',
      stats: 'Öncü Vizyon Projesi',
      icon: ShieldCheck,
      badge: '1. Öncelikli Proje',
      hasPdf: true,
      pdfUrl: '#', // Kullanıcıdan gelecek PDF buraya bağlanacak
      linkText: 'Proje Detay PDF (Eklenecek)'
    },
    {
      id: 'kadin-istihdami',
      title: 'Kadın İstihdamı Projesi',
      category: 'Sosyal Sorumluluk & Fırsat Eşitliği',
      description: 'Özel güvenlik sektöründe fırsat eşitliğini savunuyor, kadınların bu alanda daha güçlü ve etkin roller üstlenmesi için özel eğitim ve istihdam projeleri yürütüyoruz.',
      stats: '%50 Hedeflenen İstihdam',
      icon: Users,
      badge: 'Aktif Proje',
      hasPdf: false,
      internalLink: '/women-employment',
      linkText: 'Proje Sayfasını İncele'
    }
  ];

  return (
    <div className="flex-grow flex flex-col gap-16 pb-20">
      {/* Header Banner */}
      <section className="relative w-full min-h-[340px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#2C4159] z-10 opacity-90"></div>
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-10 max-w-[800px] mx-auto text-on-primary">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed mb-6">
            <FolderKanban size={32} />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projelerimiz</h1>
          <p className="text-base md:text-lg text-on-primary/90 leading-relaxed">
            Özel güvenlik sektörünü ileriye taşımak, üyelerimize değer katmak ve toplumsal fayda sağlamak amacıyla hayata geçirdiğimiz projelerimiz.
          </p>
        </div>
      </section>

      {/* Projects Grid (2'li Gösterim Yapısı) */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-surface rounded-3xl p-8 md:p-10 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-inner">
                      <Icon size={32} />
                    </div>
                    <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-tertiary-fixed/20 text-tertiary font-display">
                      {project.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-on-surface-variant leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs font-bold text-primary bg-surface-container-low px-3.5 py-2 rounded-xl">
                    {project.stats}
                  </span>

                  {project.hasPdf ? (
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-xl">
                      <FileText size={16} />
                      <span>PDF Detayı (Bekleniyor)</span>
                    </div>
                  ) : (
                    <Link
                      to={project.internalLink || '/contact'}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
                    >
                      {project.linkText} <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Projelerimizde Yer Almak İster misiniz?</h2>
            <p className="text-on-primary/80 text-lg">ÖGED çatısı altında yürütülen projelere katkı sağlamak veya iş birliği yapmak için bizimle iletişime geçin.</p>
          </div>
          <Link to="/contact" className="whitespace-nowrap bg-tertiary-fixed text-on-tertiary-fixed text-base font-semibold px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim transition-all shadow-md">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
