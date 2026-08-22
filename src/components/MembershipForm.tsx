import React, { useState } from 'react';
import { CheckCircle2, UserPlus, Send, ShieldAlert, FileText, Building2, User, Phone } from 'lucide-react';

export const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    tcNo: '',
    birthDate: '',
    birthPlace: '',
    educationLevel: '',
    motherName: '',
    fatherName: '',
    companyName: '',
    jobTitle: '',
    companyTaxNumber: '',
    email: '',
    phone: '',
    interests: '',
    residenceCityDistrict: '',
    statuteAccepted: false,
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
    if (!formData.phone.trim()) newErrors.phone = 'İletişim telefonu (GSM) zorunludur.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    if (!formData.residenceCityDistrict.trim()) newErrors.residenceCityDistrict = 'İkametgah İl/İlçe bilgisi zorunludur.';
    if (!formData.statuteAccepted) newErrors.statuteAccepted = 'Dernek Tüzüğü ve üyelik taahhüdünü kabul etmeniz gerekmektedir.';
    if (!formData.kvkkApproved) newErrors.kvkkApproved = 'KVKK açık rıza onayını vermeniz gerekmektedir.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-background">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <UserPlus size={16} />
            Resmi Üyelik Başvurusu
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
            ÖGED Üyelik Başvuru Formu
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Ankara Valiliği İl Dernekler Müdürlüğü <strong>06-149-009</strong> kütük nolu ÖGED üyelik kayıt işlemlerinizi resmi üyelik formunu doldurarak başlatabilirsiniz.
          </p>
        </div>

        {/* Declaration Notice Box */}
        <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20 mb-8 text-xs md:text-sm text-primary leading-relaxed shadow-sm">
          <div className="flex flex-col gap-1 mb-4 text-primary border-b border-primary/10 pb-3">
            <h4 className="font-display font-extrabold text-base md:text-lg tracking-wide uppercase">
              ÖZEL GÜVENLİK EĞİTİM VE DAYANIŞMA DERNEĞİ (ÖGED) YÖNETİM KURULU’NA
            </h4>
            <span className="font-bold text-secondary text-sm">ANKARA</span>
          </div>
          <p className="text-on-surface-variant leading-relaxed font-medium">
            Ankara Valiliği İl Dernekler Müdürlüğü’nce <strong>06-149-009</strong> Kütük numarası ile kaydı yapılarak kurulmuş bulunan Atatürk Mh. Lale Cd. No:1/7 Sincan-Ankara adresinde olan Öged Özel Güvenlik Eğitim ve Dayanışma Derneği’ne üye olmak istiyorum. Mevcut Dernek Tüzüğü tarafımca okunmuş ve aşağıdaki bilgiler tarafımca doldurulmuş olup, Genel Kurula çağrı ve dernek duyurularına ilişkin tüm resmi bildirimlerin aşağıdaki iletişim bilgilerim kanalıyla yapılmasını kabul ve taahhüt ediyorum.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-surface p-10 rounded-3xl border border-outline-variant/30 shadow-xl text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-3">
              Resmi Üyelik Başvurunuz Alındı!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Sayın <strong>{formData.fullName}</strong>, T.C. <strong>{formData.tcNo}</strong> ile oluşturduğunuz üyelik başvurunuz kayıtlara geçmiştir. Yönetim kurulumuz evrak incelemesini tamamladıktan sonra iletişim bilgileriniz üzerinden tarafınızla irtibata geçecektir.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  tcNo: '',
                  birthDate: '',
                  birthPlace: '',
                  educationLevel: '',
                  motherName: '',
                  fatherName: '',
                  companyName: '',
                  jobTitle: '',
                  companyTaxNumber: '',
                  email: '',
                  phone: '',
                  interests: '',
                  residenceCityDistrict: '',
                  statuteAccepted: false,
                  kvkkApproved: false,
                });
              }}
              className="bg-primary text-on-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-container transition-colors shadow-md"
            >
              Yeni Başvuru Doldur
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface p-6 sm:p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-lg flex flex-col gap-8">
            
            {/* Section 1: Personal Details */}
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                <User size={20} className="text-secondary" /> 1. Kişisel Bilgiler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Adı Soyadı *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Adınız ve Soyadınız"
                    className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.fullName ? 'border-red-500' : 'border-outline-variant/40'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.fullName}</p>}
                </div>

                {/* TC Kimlik No */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">T.C. Kimlik No *</label>
                  <input
                    type="text"
                    name="tcNo"
                    maxLength={11}
                    value={formData.tcNo}
                    onChange={handleChange}
                    placeholder="11 haneli T.C. No"
                    className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.tcNo ? 'border-red-500' : 'border-outline-variant/40'
                    }`}
                  />
                  {errors.tcNo && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.tcNo}</p>}
                </div>

                {/* Birth Date */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Doğum Tarihi</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Birth Place */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Doğum Yeri</label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    placeholder="Örn: Ankara / Sincan"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Education Level */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Eğitim Durumu</label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seçiniz</option>
                    <option value="İlköğretim">İlköğretim</option>
                    <option value="Ortaöğretim (Lise)">Ortaöğretim (Lise)</option>
                    <option value="Ön Lisans">Ön Lisans</option>
                    <option value="Lisans">Lisans</option>
                    <option value="Yüksek Lisans / Doktora">Yüksek Lisans / Doktora</option>
                  </select>
                </div>

                {/* Mother Name & Father Name */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Anne Adı / Baba Adı</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="Anne Adı"
                      className="w-full px-3 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Baba Adı"
                      className="w-full px-3 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Professional Details */}
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                <Building2 size={20} className="text-secondary" /> 2. Kurumsal & Mesleki Bilgiler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Görev Aldığınız Firma Adı</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Çalıştığınız Güvenlik / Kurum Adı"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Mesleki Unvanı – Mevcut Ünvanınız</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Özel Güvenlik Görevlisi / Eğitmen / Amir"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Company Tax Number */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">Firma Vergi Numarası</label>
                  <input
                    type="text"
                    name="companyTaxNumber"
                    value={formData.companyTaxNumber}
                    onChange={handleChange}
                    placeholder="Firma Vergi No (Opsiyonel)"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">İlgi Konularınız (Dersler)</label>
                  <input
                    type="text"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="İlkyardım, Kriz Yönetimi, Silah Bilgisi vb."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-outline-variant/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Contact & Address */}
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                <Phone size={20} className="text-secondary" /> 3. İletişim & İkametgah Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">İletişim Tel (GSM) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05XX XXX XX XX"
                    className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? 'border-red-500' : 'border-outline-variant/40'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1.5">E-Posta *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-outline-variant/40'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.email}</p>}
                </div>

                {/* Residence City / District */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-primary mb-1.5">Yerleşim Yeri (İkametgah) İl / İlçe *</label>
                  <input
                    type="text"
                    name="residenceCityDistrict"
                    value={formData.residenceCityDistrict}
                    onChange={handleChange}
                    placeholder="Örn: Ankara / Sincan"
                    className={`w-full px-4 py-3 rounded-xl bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.residenceCityDistrict ? 'border-red-500' : 'border-outline-variant/40'
                    }`}
                  />
                  {errors.residenceCityDistrict && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.residenceCityDistrict}</p>}
                </div>
              </div>
            </div>

            {/* Section 4: Declarations & KVKK Consent */}
            <div className="flex flex-col gap-4 pt-2 border-t border-outline-variant/20">
              {/* Statute Declaration */}
              <div>
                <label className="flex items-start gap-3 text-xs text-on-surface-variant cursor-pointer">
                  <input
                    type="checkbox"
                    name="statuteAccepted"
                    checked={formData.statuteAccepted}
                    onChange={handleChange}
                    className="mt-1 rounded border-outline-variant text-primary focus:ring-primary flex-shrink-0"
                  />
                  <span className="leading-relaxed">
                    Mevcut Dernek Tüzüğü tarafımca okunmuş ve yukarıdaki bilgiler tarafımca doldurulmuş olup, Genel Kurula çağrı ve dernek duyurularına ilişkin tüm resmi bildirimlerin verdiğim iletişim bilgileri kanalıyla yapılmasını kabul ve taahhüt ediyorum. *
                  </span>
                </label>
                {errors.statuteAccepted && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><ShieldAlert size={12}/>{errors.statuteAccepted}</p>}
              </div>

              {/* KVKK Consent */}
              <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
                <label className="flex items-start gap-3 text-xs text-on-surface-variant cursor-pointer">
                  <input
                    type="checkbox"
                    name="kvkkApproved"
                    checked={formData.kvkkApproved}
                    onChange={handleChange}
                    className="mt-1 rounded border-outline-variant text-primary focus:ring-primary flex-shrink-0"
                  />
                  <span className="leading-relaxed">
                    <strong className="block text-primary text-xs uppercase mb-1 font-bold">KİŞİSEL VERİLERİN KULLANILMASI ONAYI:</strong>
                    6698 sayılı Kişisel Verilerin Korunması Kanunu’nun ilgili hükümleri gereğince, yukarıda verdiğim kişisel bilgilerin ÖGED Özel Güvenlik Eğitim ve Dayanışma Derneği tarafından kendi sistem ve kayıtlarına işlenmesi, dernek faaliyetlerinin duyurulması amacıyla kullanılması, sms veya mail yoluyla bilgilendirme yapılması ve derneğin bilgi vermekle yükümlü olduğu resmi kurumlarla paylaşması konusunda açık izin ve onay veriyorum. *
                  </span>
                </label>
                {errors.kvkkApproved && <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><ShieldAlert size={12}/>{errors.kvkkApproved}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-base"
            >
              <Send size={20} /> Üyelik Başvurusunu Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
