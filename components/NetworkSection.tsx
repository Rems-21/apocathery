
import React from 'react';
import { Network, Map as MapIcon, Users, Compass, MapPin } from 'lucide-react';

const NetworkSection: React.FC = () => {
  return (
    <section id="reseau" className="py-24 bg-[#002b1d] relative overflow-hidden border-t border-white/5 bg-africa">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20">
              <Compass className="w-4 h-4 text-[#a3e635]" />
              <span className="text-[#a3e635] font-black uppercase tracking-widest text-[10px]">Réseau Praticiens</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tight leading-none text-reveal-mask">
              Trouvez un <span className="text-[#a3e635]">Expert</span> <br />près de chez vous
            </h2>
            <p className="text-gray-400 text-lg font-medium mb-10 leading-relaxed reveal delay-200">
              Nous avons certifié plus de 200 botanistes et tradipraticiens à travers l'Afrique centrale pour vous garantir un accompagnement sûr et authentique.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <MapIcon />, title: "Géolocalisation Précise", text: "Accédez aux herboristeries vérifiées en temps réel.", delay: "delay-100" },
                { icon: <Users />, title: "Experts Certifiés", text: "Tous nos membres passent un test de validation rigoureux.", delay: "delay-200" },
                { icon: <Network />, title: "Communauté Active", text: "Partagez vos expériences avec d'autres utilisateurs.", delay: "delay-300" }
              ].map((item, i) => (
                <div key={i} className={`flex gap-5 group reveal ${item.delay}`}>
                  <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#a3e635] border border-white/10 group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase text-sm mb-1 tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="absolute -inset-4 bg-[#a3e635]/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 p-4 rounded-[40px] border border-white/10 backdrop-blur-sm overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-[#a3e635]">
                  <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M10 10 L90 10 L90 90 L10 90 Z" />
                  <circle cx="30" cy="40" r="2" fill="currentColor" className="animate-pulse" />
                  <circle cx="70" cy="60" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}} />
                  <circle cx="50" cy="20" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                  <path d="M30 40 L70 60 L50 20 Z" fill="currentColor" fillOpacity="0.05" />
                </svg>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#a3e635] text-[#003d29] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
                  <MapPin className="w-10 h-10" />
                </div>
                <h4 className="text-white font-black text-2xl mb-4">Carte Interactive</h4>
                <p className="text-gray-400 text-sm mb-8">Activez votre position pour voir les herboristeries certifiées les plus proches.</p>
                <button className="bg-[#a3e635] text-[#003d29] px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all">
                  Ouvrir la Carte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
