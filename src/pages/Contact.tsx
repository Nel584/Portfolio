import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowLeft, Clock, Github, Linkedin, Instagram } from 'lucide-react';
import { profile } from '@/data/portfolio';

type ContactProps = {
  onNavigate: (path: string) => void;
};

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const whatsappLink = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <div className="bg-slate-950 pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Travaillons ensemble</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Une idee, un projet, une question ? Je vous reponds sous 24 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-red-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Appel</p>
                <p className="text-white font-semibold">{profile.phone}</p>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-green-400/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">WhatsApp</p>
                <p className="text-white font-semibold">{profile.whatsapp}</p>
              </div>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-red-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Email</p>
                <p className="text-white font-semibold">{profile.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Localisation</p>
                <p className="text-white font-semibold">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Disponibilite</p>
                <p className="text-white font-semibold">Lundi au vendredi : 9h - 18h</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              <MessageCircle size={20} /> Discuter sur WhatsApp
            </a>

            <div className="pt-2">
              <p className="text-slate-400 text-sm mb-3">Retrouvez-moi aussi sur :</p>
              <div className="flex gap-3">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-slate-300 hover:text-red-500 hover:border-red-500/30 transition-all text-sm font-medium">
                  <Github size={18} /> Nel584
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-slate-300 hover:text-red-500 hover:border-red-500/30 transition-all text-sm font-medium">
                  <Linkedin size={18} /> Sylas EHOUAN
                </a>
                <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-slate-300 hover:text-red-500 hover:border-red-500/30 transition-all text-sm font-medium">
                  <Instagram size={18} /> Sylas_dev
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="De quoi voulez-vous parler ?"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                  placeholder="Decrivez votre projet en quelques lignes..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-red-500 to-red-700 text-slate-950 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5'
                }`}
              >
                {sent ? (
                  <>Message envoye !</>
                ) : (
                  <>Envoyer le message <Send size={18} /></>
                )}
              </button>
              {sent && (
                <p className="text-center text-green-400 text-sm">
                  Merci ! Je vous reponds sous 24h.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pb-12">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-red-500 text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Retour a l'accueil
          </button>
        </div>
      </section>
    </div>
  );
}
