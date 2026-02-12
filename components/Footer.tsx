
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Globe, ShieldCheck, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#002b1d] text-white pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Newsletter Section Integrated */}
        <div className="mb-16 sm:mb-20 lg:mb-32">
          <div className="relative bg-[#a3e635] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl shadow-[#a3e635]/20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 group">
            <div className="absolute top-0 right-0 p-8 sm:p-12 text-[#003d29]/5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
               <Mail className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80" />
            </div>
            
            <div className="max-w-xl text-center lg:text-left relative z-10 w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#003d29] mb-4 sm:mb-6 leading-tight tracking-tighter">
                Rejoignez le bulletin <br className="hidden sm:block" /> de la Forêt
              </h2>
              <p className="text-[#003d29]/70 text-sm sm:text-base lg:text-lg font-bold">
                Recevez les dernières validations scientifiques et découvertes botaniques en exclusivité chaque mois.
              </p>
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Inscription réussie !'); setEmail(''); }}
              className="w-full max-w-md relative z-10"
            >
              <div className="bg-[#002b1d]/5 backdrop-blur-sm p-3 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] flex flex-col sm:flex-row gap-3 sm:gap-4 border border-[#003d29]/10">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#003d29]/10 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-[1.5rem] sm:rounded-2xl lg:rounded-3xl text-[#003d29] placeholder-[#003d29]/40 focus:outline-none font-bold text-sm sm:text-base lg:text-lg"
                  required
                />
                <button type="submit" className="bg-[#003d29] text-[#a3e635] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-[1.5rem] sm:rounded-2xl lg:rounded-3xl font-black uppercase text-[10px] sm:text-xs tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">S'inscrire</span>
                  <span className="sm:hidden">Go</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#a3e635] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl rotate-3">
                 <ShieldCheck className="text-[#003d29] w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9" />
              </div>
              <div>
                <h3 className="font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-none">Forest Apothecary</h3>
                <p className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#a3e635] font-black mt-1 sm:mt-2">
                  Patrimoine Médicinal Africain
                </p>
              </div>
            </div>
            <p className="text-gray-500 max-w-md text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              Une alliance pionnière entre savoirs ancestraux et validation biomoléculaire. Nous archivons l'âme de la forêt pour les générations de demain.
            </p>
            <div className="flex space-x-3 sm:space-x-5">
              <SocialIcon icon={<Instagram className="w-4 h-4 sm:w-5 sm:h-5" />} />
              <SocialIcon icon={<Facebook className="w-4 h-4 sm:w-5 sm:h-5" />} />
              <SocialIcon icon={<Twitter className="w-4 h-4 sm:w-5 sm:h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="font-black text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-[#a3e635] uppercase tracking-widest">Exploration</h4>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-gray-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest">
              <li><a href="#wiki" className="hover:text-[#a3e635] transition-colors">Encyclopédie</a></li>
              <li><a href="#reseau" className="hover:text-[#a3e635] transition-colors">Réseau Praticiens</a></li>
              <li><a href="#analyse" className="hover:text-[#a3e635] transition-colors">Identification IA</a></li>
              <li><a href="#expert" className="hover:text-[#a3e635] transition-colors">Certification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-[#a3e635] uppercase tracking-widest">Contact Direct</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
              <li className="flex items-center gap-3 sm:gap-4 text-gray-500 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                   <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-gray-500 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                   <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold break-all">remspc53@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-gray-500 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                   <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold">+237 693 29 01 35</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-gray-600">
          <p className="text-center sm:text-left">© 2023-2026 Forest Apothecary. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center sm:justify-end">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">RGPD (Loi 2010/012)</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-8 h-8 sm:w-10 sm:h-12 lg:w-12 lg:h-12 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#a3e635] hover:text-[#003d29] transition-all group">
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
  </div>
);

export default Footer;
