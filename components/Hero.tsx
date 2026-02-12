
import React from 'react';
import { BookOpen, Camera, Sprout, Zap, Microscope, ShieldCheck } from 'lucide-react';
import NaturalBackground from './NaturalBackground';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Programmatic Background */}
      <NaturalBackground />

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20 pointer-events-none hidden lg:block">
        <Zap className="w-12 h-12 text-[#a3e635]" />
      </div>
      <div className="absolute bottom-1/3 right-20 animate-float opacity-20 pointer-events-none hidden lg:block" style={{ animationDelay: '2s' }}>
        <Microscope className="w-16 h-16 text-[#a3e635]" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-20 pointer-events-none hidden lg:block" style={{ animationDelay: '4s' }}>
        <ShieldCheck className="w-10 h-10 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-emerald-950/40 border border-[#a3e635]/30 backdrop-blur-2xl shadow-2xl reveal">
          <Sprout className="w-4 h-4 text-[#a3e635] mr-3 animate-pulse" />
          <span className="text-[#a3e635] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            Patrimoine Numérique Africain • P-AFR-2025
          </span>
        </div>

        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 md:mb-10 leading-[1.2] sm:leading-[1.1] md:leading-[1] tracking-tighter text-reveal-mask">
          La Sagesse de <br />
          <span className="text-[#a3e635] relative inline-block">
            la Nature
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#a3e635]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </span>, <br />
          <span className="text-white/90">Validée par la Science</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 font-medium leading-relaxed opacity-90 reveal delay-200">
          Identifiez instantanément les plantes médicinales et accédez à des remèdes ancestraux certifiés par nos ethnobotanistes grâce à notre IA de diagnostic visuel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 lg:mb-12 reveal delay-300">
          <button 
            onClick={() => document.getElementById('wiki')?.scrollIntoView({behavior: 'smooth'})}
            className="group relative flex items-center space-x-3 sm:space-x-4 bg-[#a3e635] hover:bg-[#bef264] text-[#003d29] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black transition-all transform hover:scale-105 hover:-rotate-1 shadow-2xl shadow-[#a3e635]/30"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Explorer le Wiki</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('analyse')?.scrollIntoView({behavior: 'smooth'})}
            className="group flex items-center space-x-3 sm:space-x-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-bold backdrop-blur-xl transition-all border-b-4 border-white/10 active:border-b-0 active:translate-y-1 hover:scale-105"
          >
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#a3e635] group-hover:scale-110 transition-transform" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Identification IA</span>
          </button>
        </div>

        {/* Stats Section Integrated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-6 sm:pt-8 md:pt-10 border-t border-white/5 reveal delay-500">
          {[
            { label: 'Remèdes Validés', value: '100+', color: 'text-[#a3e635]' },
            { label: 'Praticiens Certifiés', value: '50', color: 'text-white' },
            { label: 'Analyses IA / mois', value: '12k+', color: 'text-[#a3e635]' },
            { label: 'Espèces Réf.', value: '450+', color: 'text-white' },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black ${stat.color} mb-1 group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-300`}>{stat.value}</p>
              <p className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black text-gray-500 group-hover:text-white transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Corner Foliage */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-10 animate-float">
        <svg width="250" height="250" viewBox="0 0 100 100" className="text-[#a3e635]">
           <path fill="currentColor" d="M100 0 L100 60 Q70 60 40 30 Q10 0 10 0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
