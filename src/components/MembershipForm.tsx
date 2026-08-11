import React, { useState } from 'react';
import { CheckCircle2, UserPlus, Send, ShieldAlert } from 'lucide-react';

export const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    tcNo: '',
    phone: '',
    email: '',
    occupation: '',
    city: '',
    notes: '',
    kvkkApproved: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Ad Soyad alanı zorunludur.';
    if (!formData.tcNo.trim() || formData.tcNo.length !== 11) newErrors.tcNo = '11 haneli T.C. Kimlik Numarası giriniz.';
    if (!formData.phone.trim()) newErrors.phone = 'Telefon numarası zorunludur.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    if (!formData.city.trim()) newErrors.city = 'Şehir seçiniz.';
    if (!formData.kvkkApproved) newErrors.kvkkApproved = 'KVKK metnini onaylamanız gerekmektedir.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <UserPlus size={16} />
            Aramıza Katılın
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            ÖGED Üyelik Başvuru Formu
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Özel güvenlik sektörünü birlikte güçlendirmek ve dayanışma ağımıza katılmak için başvuru formunu doldurun.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-surface p-10 rounded-3xl border border-outline-variant/30 shadow-xl text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-3">
              Üyelik Başvurunuz Alındı!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mb-8 leading-relaxed">
              Sayın <strong>{formData.fullName}</strong>, ÖGED üyelik başvurunuz başarıyla tarafımıza iletilmiştir. Yönetim kurulumuz evraklarınızı inceledikten sonra belirttiğiniz iletişim adresleri üzerinden sizinle irtibata geçecektir.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  tcNo: '',
                  phone: '',
                  email: '',
                  occupation: '',
                  city: '',
                  notes: '',
                  kvkkApproved: false,
                });
              }}
              className="bg-primary text-on-primary font-semibold px-8 py-3 rounded-xl hover:bg-primary-container transition-colors"
            >
              Yeni Başvuru Yap
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-lg flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">Ad Soyad *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ahmet Yılmaz"
                  className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.fullName ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.fullName}</p>}
              </div>

              {/* TC No */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">T.C. Kimlik Numarası *</label>
                <input
                  type="text"
                  name="tcNo"
                  maxLength={11}
                  value={formData.tcNo}
                  onChange={handleChange}
                  placeholder="12345678901"
                  className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.tcNo ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.tcNo && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.tcNo}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">Telefon Numarası *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0555 123 4567"
                  className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">E-Posta Adresi *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ahmet@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.email}</p>}
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">Meslek / Görev Unvanı</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Özel Güvenlik Görevlisi / Amir"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold text-primary mb-2">Yaşadığınız Şehir *</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.city ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                >
                  <option value="">Şehir Seçiniz</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Diğer">Diğer</option>
                </select>
                {errors.city && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.city}</p>}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-primary mb-2">Ek Mesaj / Notlar</label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Dernekten beklentileriniz veya belirtmek istediğiniz hususlar..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            {/* KVKK approval */}
            <div>
              <label className="flex items-start gap-3 text-xs text-on-surface-variant cursor-pointer">
                <input
                  type="checkbox"
                  name="kvkkApproved"
                  checked={formData.kvkkApproved}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-outline-variant text-primary focus:ring-primary"
                />
                <span>
                  ÖGED Üyelik Sözleşmesini ve Kişisel Verilerin Korunması (KVKK) Aydınlatma Metnini okudum, kabul ediyorum. *
                </span>
              </label>
              {errors.kvkkApproved && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.kvkkApproved}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-semibold py-4 rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Send size={18} /> Başvuruyu Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
