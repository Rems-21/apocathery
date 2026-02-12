
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Features from './components/Features';
import Personas from './components/Personas';
import MarketOpportunity from './components/MarketOpportunity';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import NetworkSection from './components/NetworkSection';
import { MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#002b1d] text-white selection:bg-[#a3e635] selection:text-[#003d29] relative">
      <Navbar />
      <main className="flex-grow">
        <div id="accueil"><Hero /></div>
        <MissionVision />
        <div id="wiki"><Features /></div>
        <div id="analyse"><MarketOpportunity /></div>
        <div id="reseau"><NetworkSection /></div>
        <div id="communaute"><Personas /></div>
        <div id="expert"><Pricing /></div>
      </main>
      <Footer />

      {/* Fixed Button: Locate Botanists */}
      <div className="fixed bottom-12 sm:bottom-16 right-6 sm:right-8 z-[500] group">
        <div className="absolute -inset-1 bg-[#a3e635] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <button 
          onClick={() => {
            const el = document.getElementById('reseau');
            if(el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative flex items-center space-x-3 bg-[#a3e635] text-[#003d29] px-5 py-3.5 sm:px-6 sm:py-4 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          <span className="hidden sm:inline">Botanistes à proximité</span>
          <span className="sm:hidden">Localiser</span>
        </button>
      </div>
    </div>
  );
};

export default App;
