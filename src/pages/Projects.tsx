import { ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/portfolio';

type ProjectsProps = {
  onNavigate: (path: string) => void;
};

export default function Projects({ onNavigate }: ProjectsProps) {
  const completedProjects = projects.slice(0, 3);
  const upcomingProjects = projects.slice(3);

  return (
    <div className="bg-slate-950 pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Mon portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Mes projets</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Une selection de realisations - sites web, applications mobiles et plateformes sur mesure.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Projets réalisés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-500 text-xs font-semibold">
                  {project.category}
                </span>
                <span className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-red-500 text-sm font-bold">
                  0{index + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Voir le projet <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-slate-500 text-sm font-semibold">
                    Projet non disponible
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Projets en cours / à venir</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => {
              const statusText = index === 0 ? 'En préparation' : 'À venir';
              return (
                <article
                  key={project.title}
                  className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all hover:-translate-y-1"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-500 text-xs font-semibold">
                      Projet personnel — {statusText}
                    </span>
                    <span className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center text-yellow-500 text-sm font-bold">
                      0{completedProjects.length + index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-yellow-500 text-sm font-semibold">
                      {statusText}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {projects.length === 0 && (
          <p className="text-center text-slate-400 py-20">Aucun projet pour le moment.</p>
        )}

        {/* CTA */}
        <div className="text-center mt-16 pb-12">
          <p className="text-slate-400 mb-6">Vous voulez un projet comme ceux-ci ?</p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-slate-950 font-semibold hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all"
          >
            Discutons de votre projet
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
