import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Globe, Users, Share2 } from 'lucide-react';
import logoPng from '../../assets/logo.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Faaliyetlerimiz', path: '/activities' },
    { name: 'Haberler', path: '/news' },
    { name: 'Projeler', path: '/projects' },
    { name: 'Basın Açıklaması', path: '/press-release' },
    { name: 'Üyelik', path: '/membership' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 w-full mx-auto h-[116px]">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group flex-shrink-0">
          <img src={logoPng} alt="ÖGED Logo" className="h-20 md:h-24 lg:h-28 w-auto max-h-[84px] md:max-h-[96px] lg:max-h-[108px] object-contain rounded-xl transition-transform group-hover:scale-105 drop-shadow-md" />
          <div className="flex flex-col justify-center">
            <span className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-primary tracking-wide leading-none">ÖGED</span>
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold text-on-surface-variant/90 tracking-normal leading-tight mt-1 max-w-[170px] sm:max-w-none">
              Özel Güvenlik Eğitim ve Dayanışma Derneği
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-gutter items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${isActive
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex bg-primary text-on-primary text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-container transition-colors shadow-sm"
        >
          İletişime Geç
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[116px] left-0 w-full bg-surface border-t border-surface-variant shadow-lg flex flex-col p-margin-mobile gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-sm font-semibold py-2 px-4 rounded-md ${location.pathname === link.path ? 'bg-surface-container-low text-secondary' : 'text-on-surface'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-primary text-on-primary text-center text-sm font-semibold px-4 py-3 rounded-lg mt-2"
          >
            İletişime Geç
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-16 pb-8 px-4 sm:px-6 md:px-10 mt-auto">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img src={logoPng} alt="ÖGED Logo" className="h-20 md:h-24 w-auto object-contain bg-white p-2 rounded-xl shadow-md transition-transform group-hover:scale-105" />
              <span className="text-3xl font-display font-bold text-tertiary-fixed tracking-wide">ÖGED</span>
            </Link>
            <p className="text-base opacity-80 max-w-md mb-6 leading-relaxed">
              Özel Güvenlik Eğitim ve Dayanışma Derneği. Güvenli bir gelecek için eğitim, dayanışma ve kaliteyi standartlaştırıyoruz.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tertiary-fixed font-display">Hızlı Bağlantılar</h4>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              <li><Link to="#" className="opacity-70 hover:text-tertiary-fixed hover:opacity-100 transition-all">KVKK</Link></li>
              <li><Link to="#" className="opacity-70 hover:text-tertiary-fixed hover:opacity-100 transition-all">Gizlilik Politikası</Link></li>
              <li><Link to="/contact" className="opacity-70 hover:text-tertiary-fixed hover:opacity-100 transition-all">İletişim</Link></li>
              <li><Link to="/about" className="opacity-70 hover:text-tertiary-fixed hover:opacity-100 transition-all">Hakkımızda</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tertiary-fixed font-display">İletişim</h4>
            <ul className="flex flex-col gap-2.5 text-xs opacity-90">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-tertiary-fixed" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:ogedguvenlikdernegi@gmail.com" className="hover:underline">ogedguvenlikdernegi@gmail.com</a>
                  <a href="mailto:ozelguvenlikegitimdernegi@gmail.com" className="hover:underline">ozelguvenlikegitimdernegi@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-tertiary-fixed" />
                <span>Atatürk Mh. Lale Cd. No:1/7 Sincan / Ankara</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-tertiary-fixed text-xs">GSM:</span>
                <a href="tel:+905309916433" className="hover:underline">0 (530) 991 64 33</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium opacity-70">
            © 2026 ÖGED Özel Güvenlik Eğitim ve Dayanışma Derneği. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ogeddernegi?igsi=eG5remV0YXBsbGxq&utm_source=qr" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors text-xs font-semibold">Instagram</a>
            <a href="https://www.facebook.com/share/14q7n3SAoFA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors text-xs font-semibold">Facebook</a>
            <a href="https://www.youtube.com/@OGEDDernegi" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors text-xs font-semibold">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background font-sans pt-[88px]">
      <NavBar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
