import React from 'react';
import { 
  Eye, 
  Flag, 
  Target, 
  Award, 
  Users, 
  FileCheck, 
  BrainCircuit, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { FoundersSection } from '../components/FoundersSection';
import { BOARD_IMAGE } from '../data/ogedData';

export default function About() {
  const coreValues = [
    {
      icon: Award,
      title: 'Eğitim ve Kalite',
      description: 'Nitelikli özel güvenlik hizmetinin temelinin kaliteli ve sürdürülebilir eğitim olduğuna inanırız.',
    },
    {
      icon: Users,
      title: 'Dayanışma',
      description: 'Özel güvenlik eğitim kurumları, eğiticiler ve eğitim paydaşları arasında güçlü iletişim ve dayanışmayı destekleriz.',
    },
    {
      icon: FileCheck,
      title: 'Mevzuata Bağlılık',
      description: '5188 sayılı Kanun ve ilgili mevzuat doğrultusunda hareket etmeyi temel ilke kabul ederiz.',
    },
    {
      icon: BrainCircuit,
      title: 'Ortak Akıl',
      description: 'Özel Güvenlik Denetleme Başkanlığımız başta olmak üzere ilgili kurumlarla istişare ve iş birliği içerisinde eğitim alanındaki ihtiyaçlara çözüm geliştirmeyi önemseriz.',
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'Eğitim programlarının, eğitim materyallerinin ve eğiticilerin güncel ihtiyaçlar doğrultusunda sürekli gelişimini destekleriz.',
    },
    {
      icon: Lightbulb,
      title: 'Yenilikçilik',
      description: 'Teknoloji, dijitalleşme ve çağdaş eğitim yöntemlerinin özel güvenlik eğitimlerine kazandırılmasını önemseriz.',
    },
  ];

  const objectives = [
    'Özel Güvenlik Denetleme Başkanlığımızın eğitim alanındaki çalışmalarına ve hedeflerine katkı sağlamak.',
    'Özel güvenlik eğitimlerinin kalite ve standardizasyonunun geliştirilmesini desteklemek.',
    'Eğitim kurumları ve eğiticiler arasındaki dayanışmayı güçlendirmek.',
    'Eğitim alanında karşılaşılan sorunları ve ihtiyaçları belirleyerek çözüm önerileri geliştirmek.',
    'Beceri ve uygulama temelli eğitim yaklaşımlarını desteklemek.',
    'Eğiticilerin mesleki gelişimine katkı sağlayacak çalışmalar gerçekleştirmek.',
    'Eğitim materyalleri, yayınlar, araştırmalar ve projeler geliştirmek.',
    'Seminer, panel, çalıştay ve eğitim faaliyetleri düzenlemek.',
    'Kamu kurumları, üniversiteler ve ilgili eğitim paydaşlarıyla eğitim odaklı iş birlikleri geliştirmek.',
    'Özel güvenlik eğitiminde iyi uygulamaların paylaşılmasına ve yaygınlaştırılmasına katkı sağlamak.',
  ];

  return (
    <div className="flex-grow flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[320px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-90 z-10"></div>
        <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto text-on-primary">
          <span className="text-xs md:text-sm font-semibold text-tertiary-fixed uppercase tracking-widest mb-4 block">Hakkımızda</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Özel Güvenlik Eğitim ve Dayanışma Derneği (ÖGED)
          </h1>
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-tertiary-fixed font-bold text-base md:text-xl shadow-lg">
            “Eğitimde Gelişim, Meslekte Dayanışma.”
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <FoundersSection isSummary={false} />

      {/* Approach & Mission / Vision Grid */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        {/* ÖGED'in Yaklaşımı Hero Banner */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-primary pointer-events-none">
            <BookOpen size={240} />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={16} /> ÖGED’in Yaklaşımı
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-primary mb-4">
              Özel Güvenlik Eğitiminde Rehberlik ve Ortak Akıl
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-medium max-w-4xl">
              ÖGED; Özel Güvenlik Denetleme Başkanlığımızın önderliği ve rehberliğinde, özel güvenlik eğitimlerinin geliştirilmesine katkı sağlamak, eğitim kurumları ve eğiticiler arasındaki dayanışmayı güçlendirmek ve eğitimde ortak akıl kültürünü yaygınlaştırmak amacıyla çalışmalarını sürdürür.
            </p>
          </div>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Misyonumuz */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-secondary/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Flag size={32} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                Misyonumuz
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
                Özel Güvenlik Denetleme Başkanlığımızın önderliği ve rehberliğinde, 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun ve ilgili mevzuat doğrultusunda; özel güvenlik eğitimlerinin niteliğinin artırılmasına katkı sağlamak, eğitim kurumları ve eğiticiler arasında bilgi, deneyim, iş birliği ve dayanışmayı güçlendirmek temel misyonumuzdur.
              </p>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Özel güvenlik eğitiminde kalite standartlarının geliştirilmesini, eğitim süreçlerinin güncel ihtiyaçlara uygun hale getirilmesini, eğiticilerin mesleki gelişimini ve eğitim alanında karşılaşılan sorunlara ortak akılla çözüm üretilmesini destekleriz.
              </p>
            </div>
          </div>

          {/* Vizyonumuz */}
          <div className="bg-primary text-on-primary p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-tertiary-fixed flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-on-primary mb-4">
                Vizyonumuz
              </h3>
              <p className="text-sm md:text-base text-on-primary/90 leading-relaxed mb-4">
                Özel Güvenlik Denetleme Başkanlığımızın ortaya koyduğu hedef ve çalışmalar doğrultusunda; özel güvenlik eğitiminde kalitenin, standardizasyonun ve sürekli gelişimin güçlendirilmesine katkı sağlayan, eğitim kurumları ve eğiticiler arasında güçlü bir dayanışma kültürü oluşturan etkin ve saygın bir sivil toplum kuruluşu olmak.
              </p>
              <p className="text-sm md:text-base text-on-primary/80 leading-relaxed">
                Değişen güvenlik ihtiyaçlarını, teknolojik gelişmeleri ve çağdaş eğitim yöntemlerini takip ederek; beceri ve uygulama temelli eğitim anlayışının geliştirilmesine, bilgi ve tecrübenin paylaşılmasına ve özel güvenlik eğitiminin geleceğe hazırlanmasına katkı sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">İlke ve Değerler</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Temel Değerlerimiz
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-surface p-7 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Objectives Section */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-md">
          <div className="flex items-center gap-3 mb-8 border-b border-outline-variant/20 pb-4">
            <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
              <Target size={28} />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                Amaçlarımız
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant">Sektörel eğitimde kalite ve standardizasyonu hedefleyen 10 temel amacımız.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-background border border-outline-variant/20 hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-primary font-medium leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Board */}
      <section className="px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 block">Liderlik Kadromuz</span>
          <h2 className="font-display text-3xl font-bold text-primary">Yönetim Kurulu</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Board Photo & Roster */}
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          <div className="w-full xl:w-2/3 rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 relative group">
            <img 
              src={BOARD_IMAGE} 
              alt="ÖGED Yönetim Kurulu Üyeleri" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-16">
              <p className="text-white text-sm font-semibold">ÖGED Yönetim Kurulu Toplantısı</p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
              <span className="text-xs font-bold text-secondary uppercase block mb-1">Yönetim Kurulu Başkanı</span>
              <h3 className="font-display text-xl font-bold text-primary">Dilek ORAN</h3>
              <p className="text-xs text-on-surface-variant mt-1">ÖGED Yönetim Kurulu Başkanı & TOBB Sektör Meclisi Temsilcisi</p>
            </div>

            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 text-xs text-on-surface-variant leading-relaxed">
              ÖGED Yönetim Kurulu, derneğimizin tüzüğü ve mevzuat doğrultusunda Özel Güvenlik Denetleme Başkanlığımızın rehberliğinde sektörün eğitim standartlarını yükseltmek için özveriyle çalışmaktadır.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
