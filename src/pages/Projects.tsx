import { FolderKanban, Users, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectsList = [
    {
      id: 'kadin-istihdami',
      title: 'Kadın İstihdamı Projesi',
      category: 'Sosyal Sorumluluk & İstihdam',
      description: 'Özel güvenlik sektöründe fırsat eşitliğini savunuyor, kadınların bu alanda daha güçlü ve etkin roller üstlenmesi için özel eğitim ve istihdam projeleri yürütüyoruz.',
      stats: '%50 Hedeflenen Oran',
      icon: Users,
      badge: 'Aktif Proje'
    },
    {
      id: 'mesleki-egitim',
      title: 'Sertifikalı Mesleki Gelişim Projesi',
      category: 'Eğitim & Gelişim',
      description: 'Sektör çalışanlarının uluslararası standartlarda uzmanlaşmasını sağlayan ileri seviye güvenlik, kriz yönetimi ve ilkyardım eğitim modülleri programı.',
      stats: '5000+ Eğitilen Üye',
      icon: GraduationCap,
      badge: 'Sürekli Proje'
    },
    {
      id: 'dayanisma-agi',
      title: 'ÖGED Dijital Dayanışma Ağı',
      category: 'Teknoloji & Dayanışma',
      description: 'Dernek üyelerimizin sektör içi bilgi paylaşımı, hukuki destek talepleri ve yardımlaşma süreçlerini dijitalleştiren topluluk platformu.',
      stats: '81 İlde Erişim',
      icon: ShieldCheck,
      badge: 'Yeni'
    }
  ];

  return (
    <div className="flex-grow flex flex-col gap-16 pb-20">
      {/* Header Banner */}
      <section className="relative w-full min-h-[360px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#2C4159] z-10 opacity-90"></div>
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-10 max-w-[800px] mx-auto text-on-primary">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed mb-6">
            <FolderKanban size={32} />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Projelerimiz</h1>
          <p className="text-lg text-on-primary/90 leading-relaxed">
            Özel güvenlik sektörünü ileriye taşımak, üyelerimize değer katmak ve toplumsal fayda sağlamak amacıyla hayata geçirdiğimiz projelerimiz.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="bg-surface rounded-2xl p-8 border border-outline-variant/30 shadow-sm hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary-fixed/20 text-tertiary font-display">
                      {project.badge}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">{project.title}</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-surface-container-low px-3 py-1.5 rounded-lg">
                    {project.stats}
                  </span>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors">
                    Detaylar <ArrowRight size={16} />
                  </Link>
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
