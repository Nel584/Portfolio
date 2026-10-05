import { Award, Calendar, Building2, ArrowLeft, ExternalLink } from 'lucide-react';
import { certificates } from '@/data/portfolio';

type CertificatesProps = {
  onNavigate: (path: string) => void;
};

export default function Certificates({ onNavigate }: CertificatesProps) {
  return (
    <div className="bg-slate-950 pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-6">
            <Award size={14} /> Certifications
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Mes certificats</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Je me forme en continu pour maitriser les meilleures technologies du moment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all hover:-translate-y-1 mb-6"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center shrink-0">
                  <Award size={32} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} className="text-red-500" /> {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-500" /> {cert.date}
                    </span>
                  </div>
                  {cert.instructor && (
                    <p className="text-slate-500 text-sm">
                      Formateur : {cert.instructor}
                    </p>
                  )}
                </div>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all text-sm"
                >
                  Consulter le certificat <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Education timeline */}
        <div className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">Mon parcours</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-600/30 to-transparent md:-translate-x-1/2" />
            {[
              { year: '2025', title: 'Conseiller de vente', org: 'Boutique de produits cosmétiques', desc: 'Conseil aux clients et vente de produits cosmétiques.' },
              { year: '2026', title: 'Premier projet freelance', org: 'Auto-entrepreneur', desc: 'Developpement de sites vitrines pour des TPE locales.' },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex md:items-center gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-red-500 ring-4 ring-slate-950 md:-translate-x-1/2 z-10" />
                <div className="md:w-1/2" />
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-red-500/20 transition-all">
                    <span className="text-red-500 font-bold text-sm">{item.year}</span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.org}</p>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 pb-12">
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-slate-950 font-semibold hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all"
          >
            Collaborer avec moi
          </button>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-red-500 text-sm transition-colors"
            >
              <ArrowLeft size={16} /> Retour a l'accueil
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
