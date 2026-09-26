import logoPng from '../../assets/logo.png';
import dilekOranImg from '../../assets/founders/dilek_oran.jpeg';
import mehtapKamalakImg from '../../assets/founders/mehtap_kamalak.jpeg';
import founder3Img from '../../assets/founders/kadir_gozalan.jpeg';
import founder4Img from '../../assets/founders/yahya_demirtekin.jpeg';
import founder5Img from '../../assets/founders/omer-celalettin-yilmaz.jpeg';
import founder6Img from '../../assets/founders/mehmet_gunal_boyraz.jpeg'; 
import groupImg from '../../assets/founders/group.jpeg';
import yonetimKuruluImg from '../../assets/founders/yonetim-kurulu.jpeg';

export interface Founder {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
}

export interface WorkshopEvent {
  id: string;
  date: string;
  year: string;
  title: string;
  location: string;
  category: 'Çalıştay' | 'Toplantı' | 'Seminer' | 'Sertifika' | 'Eğitim' | 'Kurs';
  description: string;
  image?: string;
  participantsCount?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  date: string;
  signature: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const FOUNDER_GROUP_IMAGE = groupImg;
export const BOARD_IMAGE = yonetimKuruluImg;

export const FOUNDERS_DATA: Founder[] = [
  {
    id: '0',
    name: 'Dilek ORAN',
    title: 'Dernek Başkanı',
    role: 'ÖGED Yönetim Kurulu Başkanı',
    image: dilekOranImg,
    bio: 'TOBB Özel Güvenlik Sektör Meclisi Eğitim ve Kalite Kontrol Çalışma Grubu Temsilcisi | SDK Özel Güvenlik YK Başkanı',
  },
  {
    id: '1',
    name: 'Avukat Mehtap KAMALAK',
    title: 'Kurucu Üye',
    role: 'Hukuk Danışmanı / Avukat',
    image: mehtapKamalakImg,
    bio: 'Özel güvenlik mevzuatı, çalışan hakları ve hukuki danışmanlık alanlarında derneğimize öncülük etmektedir.',
  },
  {
    id: '2',
    name: 'Kadir GÖZALAN',
    title: 'Kurucu Üye',
    role: 'Emekli Başpolis',
    image: founder3Img,
    bio: 'Emniyet teşkilatındaki zengin saha tecrübesi ile özel güvenlik eğitim standartlarının geliştirilmesine katkı sağlamaktadır.',
  },
  {
    id: '3',
    name: 'Mehmet Günal BOYRAZ',
    title: 'Kurucu Üye',
    role: 'Emekli Polis Memuru',
    image: founder6Img,
    bio: 'Güvenlik operasyonları ve saha uygulamaları hususunda mesleki bilgi birikimini dernek üyelerine aktarmaktadır.',
  },
  {
    id: '4',
    name: 'Yahya DEMİRTEKİN',
    title: 'Kurucu Üye',
    role: 'Psikolog',
    image: founder4Img,
    bio: 'Özel güvenlik personelinin psikolojik dayanıklılığı, stres yönetimi ve etkili iletişim eğitimlerini koordine etmektedir.',
  },
  {
    id: '5',
    name: 'Ömer Celalettin YILMAZ',
    title: 'Kurucu Üye',
    role: 'Eğitim Kurumu Sahibi',
    image: founder5Img,
    bio: 'Özel güvenlik eğitim kurumları işletmeciliği ve sektörel eğitim programlarının niteliğinin artırılmasında öncü rol üstlenmektedir.',
  },
];

export const TIMELINE_EVENTS: WorkshopEvent[] = [
  {
    id: 'e24',
    date: '13-16 Nisan 2026',
    year: '2026',
    title: 'Özel Güvenlik ve ÖGNET İşlemleri Eğitimi',
    location: 'Ankara',
    category: 'Eğitim',
    description: 'Yüz yüze formatta gerçekleştirilen Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) ve mevzuat işlem süreçleri eğitimi.',
  },
  {
    id: 'e23',
    date: '12 Mayıs 2026',
    year: '2026',
    title: 'Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) Bilgilendirme Eğitimi',
    location: '81 İl (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'Türkiye genelinde 81 ildeki eğitim kurumları ve paydaşların katılımıyla düzenlenen akıllı sınıf bilgilendirme eğitimi.',
  },
  {
    id: 'e22',
    date: '16-18 Aralık 2025',
    year: '2025',
    title: 'Özel Güvenlik ve ÖGNET İşlemleri Eğitimi',
    location: 'Ankara',
    category: 'Eğitim',
    description: 'Sektörel bildirimler, sınav işlemleri ve dijital otomasyon süreçlerinin ele alındığı yüz yüze eğitim programı.',
  },
  {
    id: 'e21',
    date: '12 Kasım 2025',
    year: '2025',
    title: 'Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) Bilgilendirme',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'Emniyet Genel Müdürlüğü Özel Güvenlik Denetleme Başkanlığı koordinesinde gerçekleştirilen akıllı sınıf bilgilendirme oturumu.',
  },
  {
    id: 'e20',
    date: '10-14 Kasım 2025',
    year: '2025',
    title: 'Özel Güvenlik Hizmetlerini Geliştirme Çalıştayı',
    location: 'İzmir',
    category: 'Çalıştay',
    description: 'Özel güvenlik hizmetlerinin kalitesini artırmak, sektör standartlarını belirlemek ve eğitim altyapısını güçlendirmek amacıyla düzenlenen kapsamlı çalıştay.',
  },
  {
    id: 'e19',
    date: '27-31 Ekim 2025',
    year: '2025',
    title: 'Güvenlik Cihazları Kullanma Eğitici Yetiştirme Kursu',
    location: 'Antalya',
    category: 'Sertifika',
    description: 'X-Ray, kapı tipi ve el tipi metal detektörleri gibi güvenlik cihazlarının kullanımı ve eğitici yetkinliklerinin kazandırıldığı sertifikalı kurs.',
  },
  {
    id: 'e18',
    date: '17-19 Eylül 2025',
    year: '2025',
    title: 'Özel Güvenlik ve ÖGNET İşlemleri Eğitimi',
    location: 'Ankara',
    category: 'Eğitim',
    description: 'Eğitim kurumları yöneticileri ve personeline yönelik yüz yüze ÖGNET operasyonel süreç eğitimi.',
  },
  {
    id: 'e17',
    date: '21-23 Temmuz 2025',
    year: '2025',
    title: 'Özel Güvenlik ve ÖGNET İşlemleri Eğitimi',
    location: 'Ankara',
    category: 'Eğitim',
    description: 'Sektörel mevzuat güncellemeleri ve ÖGNET sistemi üzerinden yürütülen idari işlemler eğitim serisi.',
  },
  {
    id: 'e16',
    date: '28-30 Mayıs 2025',
    year: '2025',
    title: 'Özel Güvenlik Meslek Yüksekokulları ve Sınav Soru Hazırlama Çalıştayı',
    location: 'İzmir',
    category: 'Çalıştay',
    description: 'MYO müfredat standartlarının uyumlaştırılması, sınav soru bankası hazırlama ve ölçme-değerlendirme kriterlerinin belirlendiği çalıştay.',
  },
  {
    id: 'e15',
    date: '28 Nisan 2025',
    year: '2025',
    title: 'Eğitim Kitapları ve Dijital Eğitim Platformu (DİEP) Tanıtım Toplantısı',
    location: 'Ankara',
    category: 'Toplantı',
    description: 'Özel güvenlik temel ve branş eğitim kitapları ile Dijital Eğitim Platformu (DİEP) sisteminin resmi tanıtım toplantısı.',
  },
  {
    id: 'e14',
    date: '17-19 Mart 2025',
    year: '2025',
    title: 'Özel Güvenlik ve ÖGNET İşlemleri Eğitimi',
    location: 'Ankara',
    category: 'Eğitim',
    description: 'ÖGNET sistemi operasyonel standartları ve kurumlar arası veri entegrasyonu konulu yüz yüze eğitim.',
  },
  {
    id: 'e13',
    date: '15-18 Ocak 2025',
    year: '2025',
    title: '5188 Sayılı Kanunun 20. Yılı ve Özel Güvenliğin Dünü Bugünü Yarını Çalıştayı',
    location: 'İzmir',
    category: 'Çalıştay',
    description: '5188 Sayılı Kanunun 20 yıllık kazanımları, mevcut durumu ve geleceğe dönük vizyon projelerinin masaya yatırıldığı tarihi çalıştay.',
  },
  {
    id: 'e12',
    date: '07 Şubat 2025',
    year: '2025',
    title: 'Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) Bilgilendirme',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'Yeni dönem dijital bildirim süreçleri ve sistem yenilikleri hakkında akıllı sınıf üzerinden bilgilendirme oturumu.',
  },
  {
    id: 'e11',
    date: '30 Ekim 2024',
    year: '2024',
    title: 'Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) Eğitimi',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'ÖGNET otomasyonu kapsamında eğitim kurumlarının dikkat etmesi gereken idari ve teknik konuların aktarıldığı eğitim.',
  },
  {
    id: 'e10',
    date: '24-26 Mayıs 2024',
    year: '2024',
    title: 'Özel Güvenlik Eğitimlerini Geliştirme ve Alan/Branş Eğitimleri (ÖZGE) Çalıştayı',
    location: 'Aydın',
    category: 'Çalıştay',
    description: 'ÖZGE Projesi kapsamında branşlaşma, modüler eğitim ve uzmanlık alanlarının belirlendiği II. Faz çalıştayı.',
  },
  {
    id: 'e9',
    date: '20 Mayıs 2024',
    year: '2024',
    title: 'Özel Güvenlik Bilgi Sistemi Otomasyonu (ÖGNET) Eğitimi',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'Özel Güvenlik Denetleme Başkanlığı akıllı sınıfında gerçekleştirilen kapsamlı ÖGNET uygulama eğitimi.',
  },
  {
    id: 'e8',
    date: '25-28 Aralık 2023',
    year: '2023',
    title: 'Özel Güvenlik Eğitim Semineri',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Seminer',
    description: 'Eğitim kurumları temsilcileri ve eğiticilerin katılımıyla gerçekleştirilen 4 günlük yoğun eğitim semineri programı.',
  },
  {
    id: 'e7',
    date: '04 Aralık 2023',
    year: '2023',
    title: 'Özel Güvenlik Denetleme Başkanlığı & TOBB Özel Güvenlik Sektör Meclisi Toplantısı',
    location: 'İzmir',
    category: 'Toplantı',
    description: 'TOBB Sektör Meclisi ve Derneğimiz temsilcilerinin katılımıyla sektörün güncel sorunları ve çözüm önerilerinin değerlendirildiği üst düzey toplantı.',
  },
  {
    id: 'e6',
    date: '30 Kasım 2023',
    year: '2023',
    title: 'Özel Güvenlik Görevlilerinin Kıyafet Kullanımı İle İlgili Bilgilendirme Eğitimi',
    location: 'Çevrimiçi',
    category: 'Seminer',
    description: 'Mevzuata uygun üniforma ve teçhizat kullanımı, kılık-kıyafet yönergeleri üzerine çevrimiçi bilgilendirme eğitimi.',
  },
  {
    id: 'e5',
    date: '08-12 Kasım 2023',
    year: '2023',
    title: 'Özel Güvenlik Eğitimlerini Geliştirme ve Alan/Branş Eğitimleri (ÖZGE) Çalıştayı',
    location: 'Antalya',
    category: 'Çalıştay',
    description: 'Özel Güvenlik Denetleme Başkanlığı öncülüğünde ÖZGE projesinin temellerinin atıldığı 5 günlük geniş katılımlı çalıştay.',
  },
  {
    id: 'e4',
    date: '20 Nisan 2023',
    year: '2023',
    title: 'Özel Güvenlik Eğitim Bildirimleri ve Başvuruları Eğitimi',
    location: 'Çevrimiçi',
    category: 'Eğitim',
    description: 'Eğitim kurumlarının bildirim süreçlerinde usul ve esaslara dair çevrimiçi bilgilendirme eğitimi.',
  },
  {
    id: 'e3',
    date: '15 Mart 2023',
    year: '2023',
    title: 'Özel Güvenlik Alanında SGK Bildirimleri Eğitimi',
    location: 'Ankara (Çevrimiçi / Zoom)',
    category: 'Seminer',
    description: 'Özel güvenlik personeli istihdamı, SGK işe giriş-çıkış bildirimleri ve özlük hakları konulu uzman eğitimi.',
  },
  {
    id: 'e2',
    date: '05 Eylül 2022',
    year: '2022',
    title: 'ÖGNET Sistemi Eğitimi',
    location: 'Ankara (Akıllı Sınıf)',
    category: 'Eğitim',
    description: 'ÖGNET otomasyon sisteminin devreye alınması ve eğitim kurumlarının sisteme adaptasyonu amacıyla düzenlenen akıllı sınıf eğitimi.',
  },
  {
    id: 'e1',
    date: '14-16 Haziran 2022',
    year: '2022',
    title: 'GÜSOD Sektör Çalıştayı',
    location: 'Bolu',
    category: 'Çalıştay',
    description: 'Özel güvenlik sektör paydaşları, dernekler ve federasyon temsilcilerinin katılımıyla Bolu’da düzenlenen geniş kapsamlı sektör çalıştayı.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'I. Ulusal Çalıştay Açılış Oturumu',
    date: '15 Kasım 2024',
    signature: 'ÖGED Yönetim Kurulu',
    description: 'Özel Güvenlik Eğitim ve Dayanışma Derneği 1. Ulusal Çalıştay açılış konuşmaları ve plaket takdimi.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    category: 'Çalıştay',
  },
  {
    id: 'g2',
    title: 'Kurucu Üyeler Strateji İstişare Toplantısı',
    date: '02 Ekim 2024',
    signature: 'Kurucular Heyeti',
    description: 'Dernek tüzüğünün kabulü ve ilk dönem çalışma hedeflerinin belirlendiği kurucular toplantısı.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    category: 'Toplantı',
  },
  {
    id: 'g3',
    title: 'Kadın İstihdamı Paneli ve İmza Töreni',
    date: '28 Aralık 2024',
    signature: 'Kadın Çalışma Grubu',
    description: 'Sektörde kadın varlığını güçlendirecek iş birliği protokolünün imzalandığı panel oturumu.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80',
    category: 'İstihdam',
  },
  {
    id: 'g4',
    title: 'Sertifika Takdim Töreni',
    date: '18 Nisan 2025',
    signature: 'Eğitim Komisyonu',
    description: 'Kriz yönetimi ve teknik güvenlik eğitimini başarıyla tamamlayan kursiyerlere sertifika dağıtımı.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    category: 'Sertifika',
  },
  {
    id: 'g5',
    title: 'Bölge Temsilcileri İstişare Yemeği',
    date: '15 Mayıs 2025',
    signature: 'Genel Merkez Temsilcileri',
    description: 'Türkiye genelindeki bölge temsilcilerimizin katılımıyla gerçekleştirilen yıllık değerlendirme buluşması.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    category: 'Buluşma',
  },
  {
    id: 'g6',
    title: 'Akademik Danışma Kurulu Semineri',
    date: '20 Haziran 2025',
    signature: 'Akademik Heyet',
    description: 'Sektörün akademik boyutu ve uluslararası eğitim standartlarının tartışıldığı seminer programı.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    category: 'Seminer',
  },
];
