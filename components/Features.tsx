
import React from 'react';
import { Database, ShieldCheck, Globe, Dna, ArrowRight, Star } from 'lucide-react';

const Features: React.FC = () => {
  const featuredPlants = [
    {
      id: 1,
      name: "Prunus Africana",
      scientific: "Rosaceae family",
      region: "Montagnes (Cameroun)",
      use: "Santé Prostate",
      status: "Validé",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400",
      delay: "delay-100"
    },
    {
      id: 2,
      name: "Aloe Vera Bio",
      scientific: "Asphodelaceae",
      region: "Zones Arides",
      use: "Dermatologie",
      status: "Validé",
      img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400",
      delay: "delay-200"
    },
    {
      id: 3,
      name: "Artemisia Annua",
      scientific: "Asteraceae",
      region: "Afrique Centrale",
      use: "Antipaludique",
      status: "En cours",
      img: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400",
      delay: "delay-300"
    }
  ];

  return (
    <section id="wiki" className="py-32 bg-[#003d29] text-white relative overflow-hidden bg-tiled">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="w-20 h-20 bg-emerald-950 text-[#a3e635] rounded-[2rem] flex items-center justify-center text-3xl shadow-2xl mx-auto mb-10 border border-[#a3e635]/20 animate-pulse reveal">
             <Dna />
          </div>
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter text-reveal-mask">
            Encyclopédie <span className="text-[#a3e635]">Forest</span>
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto leading-relaxed reveal delay-200">
            Découvrez des siècles de sagesse médicinale africaine. Chaque fiche est compilée par des experts et croisée avec la littérature pharmacologique mondiale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {featuredPlants.map(plant => (
            <div 
              key={plant.id} 
              className={`reveal ${plant.delay} group bg-emerald-950/40 backdrop-blur-sm rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#a3e635]/30 transition-all duration-500 cursor-pointer shadow-2xl`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={plant.img} 
                  alt={plant.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d29] via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                   <div className="bg-[#a3e635]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-[#003d29] flex items-center shadow-lg">
                      <Globe className="w-3 h-3 mr-2" />
                      {plant.region}
                   </div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-black text-white group-hover:text-[#a3e635] transition-colors">
                     {plant.name}
                   </h3>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] shadow-lg border-2 ${
                     plant.status === 'Validé' ? 'bg-[#a3e635]/10 border-[#a3e635] text-[#a3e635]' : 'bg-orange-500/10 border-orange-500 text-orange-500'
                   }`}>
                     {plant.status === 'Validé' ? <ShieldCheck className="w-4 h-4" /> : '...'}
                   </div>
                </div>
                <p className="text-gray-400 italic text-sm mb-6">{plant.scientific}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">{plant.use}</span>
                   <ArrowRight className="w-5 h-5 text-[#a3e635] transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-12 bg-emerald-950/60 p-12 rounded-[50px] border border-white/5 backdrop-blur-xl">
          <div className="space-y-10">
            <h3 className="text-3xl font-black flex items-center gap-4">
              <Star className="text-[#a3e635] w-8 h-8 fill-[#a3e635]/20" />
              Pourquoi nous faire confiance ?
            </h3>
            <div className="grid gap-8">
              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-[#a3e635]/10 rounded-2xl flex items-center justify-center text-[#a3e635] border border-[#a3e635]/20 group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                  <Database className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 tracking-widest">Base de Données Hybride</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Fusionne les données ethnobotaniques ancestrales et les analyses pharmacologiques modernes.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-[#a3e635]/10 rounded-2xl flex items-center justify-center text-[#a3e635] border border-[#a3e635]/20 group-hover:bg-[#a3e635] group-hover:text-[#003d29] transition-all">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 tracking-widest">Protocoles Certifiés</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Chaque remède passe un triple check : praticiens aînés, botanistes et labos partenaires.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#a3e635] text-[#003d29] p-10 rounded-[40px] shadow-2xl flex flex-col justify-center reveal-right">
            <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">Sauvons ensemble le savoir de nos aînés</h4>
            <p className="font-bold mb-10 opacity-80 leading-relaxed">
              En numérisant ces connaissances, nous luttons contre le charlatanisme et préservons l'âme de notre forêt.
            </p>
            <button className="w-full py-5 bg-[#003d29] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
              Contribuer au Savoir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
