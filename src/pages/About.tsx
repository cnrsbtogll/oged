import { History, Eye, Flag } from 'lucide-react';

export default function About() {
  return (
    <div className="flex-grow flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-90 z-10"></div>
        <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto text-on-primary">
          <span className="text-sm font-semibold text-tertiary-fixed uppercase tracking-widest mb-4 block">Hakkımızda</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">Özel Güvenlik Eğitim ve Dayanışma Derneği</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">Sektörde 20 yıllık tecrübe, başarılar ve gelecek vizyonu ile güvenliğin standartlarını belirliyoruz.</p>
        </div>
      </section>

      {/* History & Mission/Vision Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* History Block */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl ambient-shadow p-6 md:p-10 border border-surface-variant flex flex-col gap-6">
            <div className="flex items-center gap-4 text-primary">
              <History size={40} className="text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">Tarihçemiz</h2>
            </div>
            <div className="text-base text-on-surface-variant space-y-4 leading-relaxed">
              <p>Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED), özel güvenlik sektöründe eğitim kalitesini artırmak, sektör çalışanları arasında dayanışmayı güçlendirmek ve mesleki standartları uluslararası seviyeye taşımak amacıyla kurulmuştur.</p>
              <p>20 yıllık köklü geçmişimizle, sektörün en güvenilir ve öncü sivil toplum kuruluşlarından biri olmanın gururunu yaşıyoruz. Kuruluşumuzdan bu yana on binlerce özel güvenlik görevlisinin eğitimine katkı sağladık, mesleki haklarının savunucusu olduk ve sektörün gelişimine yön veren sayısız projeye imza attık.</p>
              <p>Bugün, gelişen teknoloji ve değişen güvenlik ihtiyaçları doğrultusunda, modern eğitim yaklaşımları ve güçlü bir dayanışma ağı ile yolumuza devam ediyoruz.</p>
            </div>
          </div>

          {/* Vision & Mission Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Vision */}
            <div className="bg-surface-container-low rounded-xl p-8 border-l-4 border-secondary flex-grow flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-secondary">
                <Eye size={32} />
                <h3 className="font-display text-xl font-bold">Vizyonumuz</h3>
              </div>
              <p className="text-base text-on-surface-variant">Özel güvenlik sektöründe ulusal ve uluslararası düzeyde referans kabul edilen, yenilikçi, güvenilir ve sürdürülebilir eğitim ile dayanışma modelleri geliştiren öncü bir dernek olmak.</p>
            </div>

            {/* Mission */}
            <div className="bg-primary-container text-on-primary-container rounded-xl p-8 border-l-4 border-tertiary-fixed flex-grow flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-tertiary-fixed">
                <Flag size={32} />
                <h3 className="font-display text-xl font-bold text-white">Misyonumuz</h3>
              </div>
              <p className="text-base text-inverse-primary">Üyelerimizin ve sektör çalışanlarının mesleki gelişimlerini desteklemek, haklarını korumak, etik değerlere bağlı, yüksek nitelikli güvenlik profesyonelleri yetiştirilmesine katkı sağlamak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Board */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full pt-12">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary tracking-widest uppercase mb-2 block">Liderlik</span>
          <h2 className="font-display text-3xl font-bold text-primary">Yönetim Kurulu</h2>
          <div className="w-24 h-1 bg-tertiary-container mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Board Photo & Roster */}
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          <div className="w-full xl:w-2/3 rounded-xl overflow-hidden ambient-shadow border border-surface-variant relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6qeWPnG3h7VtrL133HdrHklC78nBMLT3jZbS87bF1llT3i9Dtm80vFHVDbaZCEsI0cUVuPDnNSiVE2pDpga644XL40XD3_0dC2Os4OD7WB8J9gFRNOKnV4OTSFaNSMARipUBDOAaoyYSXSgzLcPneMYFslRTSpbf0pbIHrHkHpnAXbDkeTVLLCqa3OPknjyGC32tVE1NuJqBTX9L0iK0mTihdeAYdHXb7ykAgPGc2kmnqGN8OmPA" 
              alt="ÖGED Yönetim Kurulu Üyeleri" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-16">
              <p className="text-white text-sm font-semibold">2024 Dönemi Yönetim Kurulu Toplantısı</p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 flex flex-col gap-4">
            {[
              { title: "Yönetim Kurulu Başkanı", name: "Ahmet Yılmaz" },
              { title: "Başkan Yardımcısı", name: "Ayşe Demir" },
              { title: "Genel Sekreter", name: "Mehmet Kaya" },
              { title: "Sayman", name: "Fatma Şahin" },
              { title: "Yönetim Kurulu Üyesi", name: "Mustafa Çelik" }
            ].map((member, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <h4 className="text-sm font-semibold text-secondary mb-1">{member.title}</h4>
                <p className="font-display text-xl font-bold text-primary">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
