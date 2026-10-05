import { CheckCircle2, Award } from 'lucide-react';
import { profile, stats, skills, webDevelopment, tools, otherSkills, languages, interests } from '@/data/portfolio';
import { useState, useEffect, useRef } from 'react';

type AboutProps = {
  onNavigate: (path: string) => void;
};

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value);
    const duration = 2000;
    const steps = 60;
    const stepValue = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-slate-950 pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">A propos de moi</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Qui suis-je ?</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionne par le code et le design, je cree des experiences digitales qui marquent.
          </p>
        </div>
      </section>

      {/* Bio + image */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-red-700/20 rounded-3xl blur-2xl" />
            <img
              src={profile.aboutImage}
              alt="Workspace"
              className="relative rounded-3xl object-cover w-full aspect-[4/3] border border-white/10"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Développeur Web Full Stack 
            </h2>
            <p className="text-red-500 font-semibold mb-6">
              {profile.name}
            </p>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Curieux, motivé et animé par l'envie constante de progresser, je me suis formé au développement web en partant des bases (HTML, CSS, JavaScript) jusqu'à des technologies plus avancées comme PHP, Laravel et React. Cette formation initiale, complétée par des certifications en développement web et en cloud computing, m'a permis de construire une base technique solide.
              </p>
              <p>
                Avec le temps, cette progression s'est traduite par une expérience concrète : j'ai accompagné plus de 30 clients — du freelance à la PME — dans la réalisation de leurs projets digitaux, qu'il s'agisse de sites web ou d'applications mobiles.
              </p>
              <p>
                Mon parcours dans la vente et le conseil client m'a appris à écouter attentivement les besoins et à comprendre les attentes avant de proposer une solution. J'applique aujourd'hui cette même approche au développement web : comprendre un besoin avant de concevoir une solution simple, utile et adaptée. Cette rigueur technique s'allie à un sens du design et à une écoute réelle du client, pour livrer des produits qui répondent à de vrais besoins.
              </p>
              <p>
                Je travaille principalement avec React, TypeScript, Node.js, Laravel et Supabase, tout en restant capable de m'adapter rapidement à toute nouvelle technologie. Ma priorité : des applications rapides, accessibles et faciles à maintenir.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-slate-950 font-semibold hover:shadow-lg hover:shadow-red-600/30 transition-all"
              >
                Travaillons ensemble
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const numericValue = stat.value.replace('+', '');
            const suffix = stat.value.includes('+') ? '+' : '';
            return (
              <div
                key={stat.label}
                className="text-center bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/10 animate-[fadeIn_0.6s_ease-out]"
                style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <AnimatedCounter value={numericValue} suffix={suffix} />
                <p className="text-slate-400 text-sm mt-2">{stat.label as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Compétences</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mes technologies (niveau de maîtrise)</h2>
        </div>

        {/* Main skills with progress bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto mb-12">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-red-500 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">Développement web</h3>
            <ul className="space-y-2">
              {webDevelopment.map((skill) => (
                <li key={skill} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">Outils</h3>
            <ul className="space-y-2">
              {tools.map((skill) => (
                <li key={skill} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">Autres</h3>
            <ul className="space-y-2">
              {otherSkills.map((skill) => (
                <li key={skill} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Langues</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Langues parlées</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {languages.map((lang) => (
            <div key={lang.name} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-red-500/20 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{lang.name}</h3>
                <span className="text-red-500 font-semibold">{lang.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Loisirs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Centres d'intérêt</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {interests.map((interest) => (
            <div key={interest} className="bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 hover:border-red-500/20 transition-all">
              <span className="text-white font-medium">{interest}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Ma methode</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Comment je travaille</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: '01', title: 'Discovery', desc: 'Je comprends vos besoins, vos objectifs et vos utilisateurs cibles.' },
            { num: '02', title: 'Design', desc: 'Je cree des wireframes et prototypes pour valider l’experience.' },
            { num: '03', title: 'Developpement', desc: 'Je code avec des technologies modernes et des tests continus.' },
            { num: '04', title: 'Lancement', desc: 'Je deploie, monitor et assure le suivi apres la mise en ligne.' },
          ].map((step) => (
            <div key={step.num} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-red-500/20 transition-all">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-red-500/40 to-red-600/40 bg-clip-text text-transparent">
                {step.num}
              </span>
              <h3 className="text-white font-bold text-lg mt-3 mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: 'check', title: 'Qualite du code', desc: 'Code propre, documente et test. Je ne livre jamais du code qui ne me rend pas fier.' },
            { icon: 'check', title: 'Communication', desc: 'Mises a jour regulieres, transparence totale sur l’avancement et les defis.' },
            { icon: 'check', title: 'Livraison a temps', desc: 'Je respecte les delais convenus. Si un risque apparait, je le signale immediatement.' },
          ].map((value) => (
            <div key={value.title} className="flex items-start gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-6">
              <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={22} />
              <div>
                <h3 className="text-white font-bold mb-1">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('/certificates')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Award size={18} /> Voir mes certifications
          </button>
        </div>
      </section>
    </div>
  );
}
