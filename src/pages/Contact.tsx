import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle2, Globe, Send } from 'lucide-react';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="flex-grow flex flex-col pb-20 pt-12">
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">İletişim</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Bize Ulaşın</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Sorularınız, üyelik talepleriniz veya iş birliği projeleriniz için iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold text-primary">İletişim Bilgileri</h3>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Genel Merkez Adresi</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  ÖGED Özel Güvenlik Eğitim ve Dayanışma Derneği<br />
                  Atatürk Mahallesi Lale Caddesi No: 1/7<br />
                  Sincan / Ankara, Türkiye
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Telefon Hatlarımız</h4>
                <div className="flex flex-col gap-1 text-sm font-semibold text-secondary">
                  <a href="tel:+905309916433" className="hover:underline">0 (530) 991 64 33 (GSM / WhatsApp)</a>
                  <a href="tel:+903126235142" className="hover:underline">0 (312) 623 51 42 (Santral)</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">E-Posta Adreslerimiz</h4>
                <div className="flex flex-col gap-1 text-sm font-semibold text-secondary">
                  <a href="mailto:ogedguvenlikdernegi@gmail.com" className="hover:underline">ogedguvenlikdernegi@gmail.com</a>
                  <a href="mailto:ozelguvenlikegitimdernegi@gmail.com" className="hover:underline">ozelguvenlikegitimdernegi@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Çalışma Saatleri</h4>
                <p className="text-sm text-on-surface-variant">Pazartesi - Cumartesi: 09:00 - 18:00<br />Pazar günleri kapalıdır.</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 bg-primary text-on-primary rounded-2xl shadow-md">
              <h4 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <Globe size={20} /> Sosyal Medya Hesaplarımız
              </h4>
              <p className="text-xs text-on-primary/80 mb-4">Dernek duyurularımız ve faaliyetlerimizi sosyal mecralardan takip edebilirsiniz.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/ogeddernegi?igsi=eG5remV0YXBsbGxq&utm_source=qr" target="_blank" rel="noreferrer" className="px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors">Instagram</a>
                <a href="https://www.facebook.com/share/14q7n3SAoFA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors">Facebook</a>
                <a href="https://www.youtube.com/@OGEDDernegi" target="_blank" rel="noreferrer" className="px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col justify-center">
            {isSent ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">Mesajınız Alındı!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
                  İletişim talebiniz temsilcilerimize ulaştırılmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-container transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">İletişim Formu</h3>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-primary">Adınız Soyadınız *</label>
                      <input required type="text" id="name" className="px-4 py-3 rounded-xl border border-outline-variant/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ahmet Yılmaz" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-primary">Telefon Numaranız *</label>
                      <input required type="tel" id="phone" className="px-4 py-3 rounded-xl border border-outline-variant/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-primary">E-Posta Adresiniz *</label>
                    <input required type="email" id="email" className="px-4 py-3 rounded-xl border border-outline-variant/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="ornek@email.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-primary">Konu</label>
                    <input type="text" id="subject" className="px-4 py-3 rounded-xl border border-outline-variant/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Mesajınızın konusu" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-primary">Mesajınız *</label>
                    <textarea required id="message" rows={5} className="px-4 py-3 rounded-xl border border-outline-variant/40 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="Lütfen mesajınızı buraya yazın..."></textarea>
                  </div>
                  <button type="submit" className="bg-primary text-on-primary py-3.5 rounded-xl font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm mt-2">
                    <Send size={16} /> Mesajı Gönder
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
