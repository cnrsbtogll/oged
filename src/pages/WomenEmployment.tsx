import { Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export default function WomenEmployment() {
  return (
    <div className="flex-grow flex flex-col gap-20 pb-20">
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#2C4159] z-10 opacity-90"></div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto text-on-primary">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed mb-6">
            <Users size={32} />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Kadın İstihdamı Projesi</h1>
          <p className="text-lg text-on-primary/90 leading-relaxed">Güvenlik sektöründe fırsat eşitliğini savunuyor, kadınların bu alanda daha güçlü ve etkin roller üstlenmesi için özel istihdam projeleri geliştiriyoruz.</p>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl font-bold text-primary">Neden Önemli?</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">Özel güvenlik sektörü geleneksel olarak erkek egemen bir yapıya sahip olsa da, modern güvenlik anlayışı iletişim, empati, kriz yönetimi ve detay odaklılık gibi kadınların güçlü olduğu becerilere büyük ihtiyaç duymaktadır.</p>
            <p className="text-base text-on-surface-variant leading-relaxed">ÖGED olarak kadın istihdamını sadece bir sosyal sorumluluk değil, sektörün gelişiminde kritik bir stratejik adım olarak görüyoruz.</p>
            
            <div className="space-y-4 mt-4">
              {[
                "İletişim ve uzlaşma odaklı kriz çözümü",
                "Özel alanlarda (kadın arama, sağlık kurumları) zaruri ihtiyaç",
                "Ekip dinamiklerinde denge ve farklı bakış açıları",
                "Toplumsal cinsiyet eşitliğine doğrudan katkı"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-surface rounded-xl p-8 border border-outline-variant/30 ambient-shadow text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <TrendingUp size={32} />
                </div>
                <div className="font-display text-4xl font-bold text-primary mb-2">%50</div>
                <div className="text-sm font-semibold text-on-surface-variant">İstihdam Hedefi</div>
             </div>
             <div className="bg-surface rounded-xl p-8 border border-outline-variant/30 ambient-shadow text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-tertiary-fixed/20 flex items-center justify-center text-tertiary-fixed mb-4">
                  <Award size={32} />
                </div>
                <div className="font-display text-4xl font-bold text-primary mb-2">1200+</div>
                <div className="text-sm font-semibold text-on-surface-variant">Sertifikalı Kadın Üye</div>
             </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
         <div className="bg-primary-container rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg border border-primary/20">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-on-primary-container mb-4">Projeye Katılmak İster misiniz?</h2>
              <p className="text-on-primary-container/80 text-lg">Özel güvenlik alanında kariyer yapmak isteyen veya kurumlarında kadın istihdamını artırmak isteyen kurumları projemize davet ediyoruz.</p>
            </div>
            <button className="whitespace-nowrap bg-primary text-on-primary text-base font-semibold px-8 py-4 rounded-xl hover:bg-primary-container hover:text-on-primary-container hover:border-primary border border-transparent transition-all shadow-md">
              Detaylı Bilgi Alın
            </button>
         </div>
      </section>
    </div>
  );
}
