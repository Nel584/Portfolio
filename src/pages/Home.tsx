import { ArrowRight, Download, Sparkles, Code, Smartphone, Palette } from 'lucide-react';
import { profile, stats, services, projects, testimonials } from '@/data/portfolio';

type HomeProps = {
  onNavigate: (path: string) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={profile.heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-red-950/80" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium mb-6 animate-[fadeIn_0.6s_ease]">
              <Sparkles size={14} />
              Disponible pour de nouveaux projets
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Bonjour, je suis <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              {profile.title}. {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-slate-950 font-semibold hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all"
              >
                Voir mes projets <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Me contacter
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-red-700/20 rounded-3xl blur-2xl" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative rounded-3xl object-cover w-full aspect-[4/5] border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Full-Stack</p>
                    <p className="text-slate-400 text-xs">React • Node • Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Mes expertises</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ce que je peux faire pour vous</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              De l\u2019idee au deploiement, je couvre l\u2019ensemble du cycle de vie de votre projet digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Voir tous les services <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Projets recents</h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all"
            >
              Tous les projets <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.title} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-red-500/30 transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Temoignages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ce que disent mes clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-red-500/20 transition-all">
                <p className="text-slate-300 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-red-600/10 to-red-700/10 border border-red-500/20 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <Smartphone size={20} className="text-red-500" />
                <Palette size={20} className="text-red-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Un projet en tete ?</h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Parlons-en. Je vous reponds sous 24h avec un plan d'action concret pour votre projet.
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-slate-950 font-semibold hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all"
              >
                Demarrer mon projet <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
