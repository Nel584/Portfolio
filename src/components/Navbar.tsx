import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

type NavbarProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('/')}
          className="text-xl font-bold text-white tracking-tight flex items-center gap-2 group"
        >
          <img
            // @ts-ignore
            src={profile.logo}
            alt="Logo"
            className="w-9 h-9 rounded-lg object-cover group-hover:scale-110 transition-transform"
          />
          <span className="hidden sm:inline">{profile.name}</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => handleNavigate(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPath === link.path
                    ? 'text-red-500 bg-red-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavigate('/contact')}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-slate-950 text-sm font-semibold hover:shadow-lg hover:shadow-red-600/30 transition-all"
        >
          Me contacter
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10 mt-3">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => handleNavigate(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    currentPath === link.path
                      ? 'text-red-500 bg-red-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
