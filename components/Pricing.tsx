
import React from 'react';
import { Check, Info, Zap, Crown, Globe } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="expert" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#003d29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 uppercase tracking-tight text-reveal-mask">
            Accès & <span className="text-[#a3e635]">Valorisation</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] reveal delay-200">
            Un modèle éthique pour un impact durable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Découverte */}
          <div className="reveal delay-100 bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[50px] flex flex-col hover:bg-white/10 transition-all duration-500 group">
            <div className="mb-8">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                 <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
               </div>
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase mb-2">Découverte</h3>
               <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">Libre</p>
               <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Base de données publique</p>
            </div>
            
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10 flex-grow">
              <PricingFeature label="Wiki de base illimité" />
              <PricingFeature label="Recherche par plantes" />
              <PricingFeature label="Identification standard" />
            </ul>
            
            <button className="w-full py-3 sm:py-4 lg:py-5 rounded-2xl sm:rounded-3xl bg-white/10 text-white font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] hover:bg-white/20 transition-all">
              Explorer
            </button>
          </div>

          {/* Premium */}
          <div className="reveal delay-200 bg-[#a3e635] text-[#003d29] p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[50px] shadow-2xl shadow-[#a3e635]/20 relative transform lg:scale-105 lg:scale-110 lg:z-10 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#003d29] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl">
              Plus Populaire
            </div>
            <div className="mb-8">
               <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#003d29] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-[#a3e635] shadow-lg">
                 <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
               </div>
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase mb-2">Premium</h3>
               <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 leading-none">1500 <span className="text-sm sm:text-base lg:text-xl">FCFA</span></p>
               <p className="opacity-60 text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-widest">Par Mois / Accès Complet</p>
            </div>
            
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12 flex-grow">
              <PricingFeature label="Mode hors-ligne complet" theme="dark" />
              <PricingFeature label="Dosages & Posologies" theme="dark" />
              <PricingFeature label="Recettes complexes validées" theme="dark" />
              <PricingFeature label="Alertes de toxicité" theme="dark" />
            </ul>
            
            <button className="w-full py-3 sm:py-4 lg:py-5 rounded-2xl sm:rounded-3xl bg-[#003d29] text-[#a3e635] font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-sm hover:scale-105 transition-all shadow-xl">
              S'abonner Maintenant
            </button>
          </div>

          {/* Pro */}
          <div className="reveal delay-300 bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[50px] flex flex-col hover:bg-white/10 transition-all duration-500 group">
            <div className="mb-8">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                 <Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
               </div>
               <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase mb-2">Expertise</h3>
               <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">Sur Devis</p>
               <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Labs & Instituts</p>
            </div>
            
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10 flex-grow">
              <PricingFeature label="API & Accès Data" />
              <PricingFeature label="Support Prioritaire" />
              <PricingFeature label="Certification Praticiens" />
              <PricingFeature label="Dashboard Analytics" />
            </ul>
            
            <button className="w-full py-3 sm:py-4 lg:py-5 rounded-2xl sm:rounded-3xl border-2 border-white/10 text-white font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] hover:border-[#a3e635] hover:text-[#a3e635] transition-all">
              Contact Pro
            </button>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 reveal bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 bg-[#a3e635]/10 rounded-2xl sm:rounded-3xl text-[#a3e635]">
            <Info className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-sm sm:text-base mb-1 tracking-widest">Engagement Éthique</h4>
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              Les revenus générés servent à financer la recherche ethnobotanique et à rémunérer les gardiens du savoir local qui valident notre contenu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingFeature: React.FC<{ label: string; theme?: 'light' | 'dark' }> = ({ label, theme = 'light' }) => (
  <li className="flex items-center gap-4">
    <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-[#003d29] text-[#a3e635]' : 'bg-[#a3e635] text-[#003d29]'}`}>
      <Check className="w-4 h-4" />
    </div>
    <span className={`text-sm font-bold ${theme === 'dark' ? 'text-[#003d29]' : 'text-gray-300'}`}>{label}</span>
  </li>
);

export default Pricing;
