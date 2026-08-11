import { Activity, Target, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Activities() {
  return (
    <div className="flex-grow flex flex-col gap-20 pb-20">
       <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden bg-surface py-16">
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto text-primary">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">Neler Yapıyoruz?</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Faaliyetlerimiz</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Eğitim, istihdam, ve sektör dayanışması ekseninde yürüttüğümüz temel çalışmalar.</p>
        </div>
      </section>

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
    </div>
  );
}
