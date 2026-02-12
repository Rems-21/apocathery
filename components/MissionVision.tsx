
import React from 'react';
import { Target, Eye, Leaf } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-32 relative bg-[#002b1d]">
      {/* Subtle botanical accent */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" className="text-[#a3e635]">
           <path fill="currentColor" d="M100 0 C70 30 30 70 0 100 L100 100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="reveal-left bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 relative overflow-hidden group hover:border-[#a3e635]/30 transition-all duration-500">
            <div className="absolute -top-10 -right-10 p-8 text-[#a3e635]/5 group-hover:text-[#a3e635]/10 transition-colors">
              <Target className="w-48 h-48" />
            </div>
            <div className="bg-[#a3e635] text-[#003d29] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#a3e635]/20">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-white text-4xl font-black mb-6 uppercase tracking-tight">
               Notre <span className="text-[#a3e635]">Mission</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl font-medium">
              Cataloguer, valider scientifiquement et démocratiser l'accès aux remèdes traditionnels africains via une plateforme numérique collaborative, préservant ainsi un patrimoine inestimable.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal-right bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 relative overflow-hidden group hover:border-[#a3e635]/30 transition-all duration-500">
             <div className="absolute -top-10 -right-10 p-8 text-[#a3e635]/5 group-hover:text-[#a3e635]/10 transition-colors">
              <Eye className="w-48 h-48" />
            </div>
            <div className="bg-[#a3e635] text-[#003d29] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#a3e635]/20">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-white text-4xl font-black mb-6 uppercase tracking-tight">
              Notre <span className="text-[#a3e635]">Vision</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl font-medium">
              Devenir la référence mondiale de la pharmacopée traditionnelle validée, créant un pont de confiance entre la sagesse ancestrale de la forêt et la médecine moderne.
            </p>
          </div>
        </div>

        <div className="mt-32 text-center max-w-4xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20">
            <Leaf className="w-4 h-4 text-[#a3e635]" />
            <span className="text-[#a3e635] font-bold uppercase tracking-widest text-[10px]">Origines et Histoire</span>
          </div>
          <h4 className="text-4xl font-black text-white mb-8">Née au Coeur de Douala</h4>
          <p className="text-gray-400 leading-relaxed text-lg font-medium">
            Forest Apothecary est née d'un constat alarmant : la perte progressive des savoirs médicinaux ancestraux face à l'urbanisation. Fondée par des passionnés de botanique et de technologie, nous numérisons l'âme de la forêt pour les générations de demain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
