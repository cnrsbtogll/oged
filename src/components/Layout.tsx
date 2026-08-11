import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Globe, Users, Share2 } from 'lucide-react';

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
    { name: 'Kadın İstihdamı', path: '/women-employment' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto h-[88px]">
        <Link to="/" onClick={closeMenu} className="text-2xl font-display font-bold text-primary flex items-center gap-2">
          ÖGED
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-gutter items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive
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
        <div className="md:hidden absolute top-[88px] left-0 w-full bg-surface border-t border-surface-variant shadow-lg flex flex-col p-margin-mobile gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-sm font-semibold py-2 px-4 rounded-md ${
                location.pathname === link.path ? 'bg-surface-container-low text-secondary' : 'text-on-surface'
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
    <footer className="bg-primary text-on-primary pt-16 pb-8 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-tertiary-fixed">ÖGED</span>
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
            <ul className="flex flex-col gap-3 text-base opacity-80">
              <li className="flex items-start gap-2">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                info@oged.com.tr
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                Ankara, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium opacity-70">
            © 2024 ÖGED Özel Güvenlik Eğitim ve Dayanışma Derneği. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors"><Globe size={20} /></a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors"><Users size={20} /></a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-colors"><Share2 size={20} /></a>
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
