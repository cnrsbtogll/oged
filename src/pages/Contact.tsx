import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex-grow flex flex-col pb-20 pt-12">
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">İletişim</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Bize Ulaşın</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Sorularınız, önerileriniz veya işbirliği talepleriniz için iletişim kanallarımızdan bize ulaşabilirsiniz.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold text-primary">İletişim Bilgileri</h3>
            
            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/5 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Adres</h4>
                <p className="text-on-surface-variant">ÖGED Merkez Ofisi<br />Atatürk Bulvarı No: 123/4<br />Kızılay, Çankaya / Ankara</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/5 rounded-lg text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Telefon</h4>
                <p className="text-on-surface-variant">+90 (312) 555 00 00<br />+90 (532) 555 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/5 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">E-Posta</h4>
                <p className="text-on-surface-variant">info@oged.com.tr<br />iletisim@oged.com.tr</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm hover:border-secondary/50 transition-colors">
              <div className="p-3 bg-primary/5 rounded-lg text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Çalışma Saatleri</h4>
                <p className="text-on-surface-variant">Pazartesi - Cuma: 09:00 - 18:00<br />Hafta sonu kapalıdır.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl shadow-sm border border-outline-variant/30">
            <h3 className="font-display text-2xl font-bold text-primary mb-6">İletişim Formu</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Adınız Soyadınız</label>
                  <input type="text" id="name" className="px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="Ahmet Yılmaz" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-primary">Telefon Numaranız</label>
                  <input type="tel" id="phone" className="px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="05XX XXX XX XX" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-primary">E-Posta Adresiniz</label>
                <input type="email" id="email" className="px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="ornek@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-primary">Konu</label>
                <input type="text" id="subject" className="px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="Mesajınızın konusu" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary">Mesajınız</label>
                <textarea id="message" rows={5} className="px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-y" placeholder="Lütfen mesajınızı buraya yazın..."></textarea>
              </div>
              <button type="submit" className="bg-primary text-on-primary py-4 rounded-xl font-semibold hover:bg-primary-container transition-colors shadow-sm mt-2">
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
