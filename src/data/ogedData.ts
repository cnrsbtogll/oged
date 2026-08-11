import logoPng from '../../assets/logo.png';

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
  category: 'Çalıştay' | 'Toplantı' | 'Seminer' | 'Sertifika';
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

export const FOUNDERS_DATA: Founder[] = [
  {
    id: '1',
    name: 'ÖGED Kurucu Yönetim Kurulu',
    title: 'Özel Güvenlik Eğitim ve Dayanışma Derneği',
    role: 'Kurucu Heyet',
    image: logoPng,
    bio: 'Özel güvenlik sektöründe standartları yükseltmek, nitelikli eğitimi yaygınlaştırmak ve sektör çalışanları arasında güçlü dayanışma köprüleri kurmak amacıyla kurulmuştur.',
  },
];

export const TIMELINE_EVENTS: WorkshopEvent[] = [
  {
    id: 'e1',
    date: '15 Kasım 2024',
    year: '2024',
    title: 'I. Ulusal Özel Güvenlik ve Eğitim Çalıştayı',
    location: 'Ankara',
    category: 'Çalıştay',
    description: 'Sektör temsilcileri, akademisyenler ve emniyet yetkililerinin katılımıyla özel güvenlik eğitim müfredatının güncellenmesi ve kalite standartları ele alındı.',
    participantsCount: 250,
  },
  {
    id: 'e2',
    date: '28 Aralık 2024',
    year: '2024',
    title: 'Kadın İstihdamı ve Güvenlik Sektöründe Fırsat Eşitliği Paneli',
    location: 'İstanbul',
    category: 'Seminer',
    description: 'Kadın özel güvenlik görevlilerinin sektördeki oranını artırmak ve çalışma koşullarını iyileştirmek üzere stratejik eylem planı açıklandı.',
    participantsCount: 180,
  },
  {
    id: 'e3',
    date: '10 Şubat 2025',
    year: '2025',
    title: 'Sektörel Mevzuat ve Hukuki Haklar Toplantısı',
    location: 'İzmir',
    category: 'Toplantı',
    description: '5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun çerçevesinde çalışan hakları ve hukuki sorumluluklar değerlendirildi.',
    participantsCount: 120,
  },
  {
    id: 'e4',
    date: '18 Nisan 2025',
    year: '2025',
    title: 'İleri Seviye Güvenlik Teknolojileri ve Kriz Yönetimi Eğitimi',
    location: 'Bursa',
    category: 'Sertifika',
    description: 'Elektronik güvenlik sistemleri, kriz yönetimi ve ilk yardım konularında uygulama ağırlıklı sertifika programı gerçekleştirildi.',
    participantsCount: 300,
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
