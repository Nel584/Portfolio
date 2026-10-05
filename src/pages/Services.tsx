import { Code, Smartphone, Palette, Server, Rocket, Search, Check, ArrowLeft } from 'lucide-react';
import { services } from '@/data/portfolio';

type ServicesProps = {
  onNavigate: (path: string) => void;
};

const iconMap: Record<string, typeof Code> = {
  Code,
  Smartphone,
  Palette,
  Server,
  Rocket,
  Search,
};

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="bg-slate-950 pt-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Mes services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Ce que je propose</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Des services complets, de la conception au deploiement, pour donner vie a vos idees digitales.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code;
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/20 transition-all ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className="h-64 lg:h-80 overflow-hidden [direction:ltr]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 [direction:ltr]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-700/20 border border-red-500/20 flex items-center justify-center text-red-500 mb-5">
                    <Icon size={26} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                        <Check size={16} className="text-red-500 shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Tarifs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Des offres transparentes</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Chaque projet est unique. Voici des fourchettes indicatives - le devis final depend de vos besoins precis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '150 000 FCFA',
                desc: 'Pour un site vitrine ou une landing page.',
                features: ['Site 1-5 pages', 'Design responsive', 'Formulaire de contact', 'Optimisation SEO de base', 'Livraison en 1-2 semaines'],
                highlighted: false,
              },
              {
                name: 'Business',
                price: '500 000 FCFA',
                desc: 'Pour une application web ou mobile.',
                features: ['Application sur mesure', 'Authentification utilisateurs', 'Base de donnees', 'Tableau de bord admin', 'Support 3 mois', 'Livraison en 3-6 semaines'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Sur devis',
                desc: 'Pour un projet complexe ou long terme.',
                features: ['Architecture scalable', 'CI/CD & DevOps', 'Multi-plateforme', 'Equipe dediee', 'Support 12 mois', 'Maintenance continue'],
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-red-600/10 to-red-700/10 border-red-500/30 lg:-translate-y-4'
                    : 'bg-slate-900/50 border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-slate-950 text-xs font-bold">
                    LE PLUS POPULAIRE
                  </span>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <p className="text-3xl font-extrabold text-white mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check size={16} className="text-red-500 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('/contact')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-red-500 to-red-700 text-slate-950 hover:shadow-lg hover:shadow-red-600/30'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Demander un devis
                </button>
              </div>
            ))}
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
