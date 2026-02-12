
import React, { useState, useEffect } from 'react';
import { Home, Book, Search, Network, Users, UserCircle, Leaf, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'accueil', label: 'ACCUEIL', icon: <Home className="w-4 h-4" /> },
    { id: 'wiki', label: 'WIKI', icon: <Book className="w-4 h-4" /> },
    { id: 'analyse', label: 'ANALYSE', icon: <Search className="w-4 h-4" /> },
    { id: 'reseau', label: 'RÉSEAU', icon: <Network className="w-4 h-4" /> },
    { id: 'communaute', label: 'COMMUNAUTÉ', icon: <Users className="w-4 h-4" /> },
    { id: 'expert', label: 'DEVENIR EXPERT', icon: <UserCircle className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-[1000] bg-[#002b1d]/90 backdrop-blur-lg text-white px-4 md:px-10 py-4 shadow-2xl border-b border-emerald-900/30">
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#a3e635] shadow-[0_0_10px_#a3e635]" style={{ width: `${scrollProgress}%` }}></div>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <a href="#accueil" className="flex items-center group cursor-pointer">
            <div className="relative w-10 h-10 mr-3 md:w-12 md:h-12 md:mr-4">
              <div className="absolute inset-0 bg-[#a3e635] rounded-xl md:rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-[#a3e635]/20"></div>
              <div className="absolute inset-0 bg-[#003d29] rounded-xl md:rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500 flex items-center justify-center border border-[#a3e635]/30">
                 <Leaf className="text-[#a3e635] w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 group-hover:rotate-12 transition-all" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black text-xl md:text-2xl tracking-tighter leading-none transition-colors group-hover:text-[#a3e635]">Forest<span className="text-[#a3e635] group-hover:text-white transition-colors">Apothecary</span></h1>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-6 md:w-8 h-px bg-[#a3e635]/50 group-hover:w-full transition-all"></span>
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#a3e635] font-black">Patrimoine Médicinal</p>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center bg-emerald-950/40 px-6 py-2 rounded-2xl border border-white/5 backdrop-blur-sm space-x-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.id}
                id={item.id}
                icon={item.icon} 
                label={item.label} 
                active={activeSection === item.id} 
              />
            ))}
          </div>

          {/* Mobile Menu Trigger & User Icon */}
          <div className="flex items-center space-x-3">
            <div className="relative group hidden sm:block">
              <div className="absolute -inset-1 bg-[#a3e635] rounded-full opacity-10 group-hover:opacity-40 transition blur"></div>
              <div className="relative bg-[#002b1d] p-2 rounded-full border border-white/10 group-hover:scale-110 transition-transform cursor-pointer">
                <UserCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="xl:hidden p-2 bg-[#a3e635]/10 rounded-xl text-[#a3e635] hover:bg-[#a3e635]/20 hover:scale-110 transition-all"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[2000] xl:hidden transition-all duration-500 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
        <div className={`absolute top-0 right-0 w-80 h-full bg-[#002b1d] shadow-2xl transition-transform duration-500 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-black text-xl text-[#a3e635]">Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all ${activeSection === item.id ? 'bg-[#a3e635] text-[#003d29] scale-105' : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:translate-x-2'}`}
                >
                  <span className={activeSection === item.id ? 'text-[#003d29]' : 'text-[#a3e635]'}>{item.icon}</span>
                  <span className="font-black tracking-widest text-xs uppercase">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 text-center">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">Forest Apothecary v1.0</p>
              <button className="w-full py-4 bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#a3e635] hover:text-[#003d29] transition-all">
                Mon Compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; id: string; active?: boolean }> = ({ icon, label, id, active }) => (
  <a href={`#${id}`} className="relative group px-4 py-2 cursor-pointer transition-all">
    <div className={`flex items-center space-x-2 ${active ? 'text-[#a3e635] scale-105' : 'text-gray-400 group-hover:text-white group-hover:-translate-y-0.5'}`}>
      <span className="transition-transform group-hover:rotate-12">{icon}</span>
      <span className="text-[11px] font-black tracking-widest uppercase">{label}</span>
    </div>
    {active && (
      <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#a3e635] rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
    )}
  </a>
);

export default Navbar;
