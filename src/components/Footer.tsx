import { Github, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

type FooterProps = {
  onNavigate: (path: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={() => onNavigate('/')}
              className="text-xl font-bold text-white flex items-center gap-3 mb-4"
            >
              <span className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-sm font-extrabold text-white shadow-lg shadow-slate-950/50">
                ES
              </span>
              <span>{profile.name}</span>
            </button>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              {profile.title} base a {profile.location}. Je vous accompagne dans la creation de
              vos projets digitaux, du design au deploiement.
            </p>
            <div className="flex gap-3">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-slate-300 hover:text-red-500 transition-all">
                <Github size={18} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-slate-300 hover:text-red-500 transition-all">
                <Linkedin size={18} />
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-slate-300 hover:text-red-500 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button onClick={() => onNavigate(link.path)} className="text-slate-400 hover:text-red-500 transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>{profile.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>{profile.email}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-red-500" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {profile.name}. Tous droits reserves.
          </p>
          <p className="text-slate-500 text-sm">
            Concu et developpe avec passion au Benin.
          </p>
        </div>
      </div>
    </footer>
  );
}
