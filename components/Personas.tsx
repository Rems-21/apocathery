
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Plus, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const Personas: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const categories = ['Tout', 'Discussion', 'Astuce', 'Solution', 'Question'];

  const posts = [
    {
      id: 1,
      author: 'Dr. Mamadou',
      role: 'Expert Certifié',
      avatar: 'https://picsum.photos/seed/mamadou/100/100',
      category: 'Solution',
      title: 'Traitement complémentaire pour le Paludisme',
      content: "L'association de l'Artemisia avec une alimentation riche en vitamine C améliore significativement le temps de récupération. Il est recommandé de consommer du Baobab...",
      likes: 24,
      comments: 12,
      time: 'Il y a 2h',
      delay: 'delay-100'
    },
    {
      id: 2,
      author: 'Herboriste_67',
      role: 'Praticien',
      avatar: 'https://picsum.photos/seed/herb67/100/100',
      category: 'Astuce',
      title: 'Conservation optimale des feuilles de Moringa',
      content: "Pour garder toutes les propriétés nutritionnelles, faites sécher les feuilles à l'ombre dans un endroit ventilé, jamais au soleil direct. Une fois sèches...",
      likes: 56,
      comments: 8,
      time: 'Il y a 5h',
      delay: 'delay-200'
    },
    {
      id: 3,
      author: 'Sophie M.',
      role: 'Membre Passionné',
      avatar: 'https://picsum.photos/seed/sophie/100/100',
      category: 'Question',
      title: 'Dosage du Gingembre pour enfant de 5 ans ?',
      content: "Bonjour à tous, je souhaite savoir quel est le dosage recommandé pour une infusion légère de gingembre pour apaiser une petite toux chez un enfant...",
      likes: 12,
      comments: 15,
      time: 'Il y a 8h',
      delay: 'delay-300'
    }
  ];

  const filteredPosts = activeCategory === 'Tout' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <section id="communaute" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#002b1d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full bg-white/5 border border-white/10 reveal">
              <Sparkles className="w-4 h-4 text-[#a3e635]" />
              <span className="text-[#a3e635] font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px]">Espace Collaboratif</span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 uppercase tracking-tighter text-reveal-mask">
              Communauté <span className="text-[#a3e635]">Forest</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed reveal delay-200">
              Un espace d'échange sécurisé entre experts, praticiens et passionnés de la pharmacopée traditionnelle.
            </p>
          </div>
          <button className="group flex items-center space-x-2 sm:space-x-3 bg-[#a3e635] hover:bg-[#bef264] text-[#003d29] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl shadow-[#a3e635]/10 text-[10px] sm:text-xs uppercase tracking-widest reveal delay-300">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform" />
            <span className="hidden sm:inline">Nouveau Partage</span>
          </button>
        </div>

        {/* Categories Filter */}
        <div className="flex overflow-x-auto pb-6 sm:pb-8 mb-3 sm:mb-4 gap-2 sm:gap-3 scrollbar-hide reveal delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeCategory === cat 
                  ? 'bg-[#a3e635] text-[#003d29] border-[#a3e635]' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#a3e635]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 lg:space-y-6">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className={`reveal ${post.delay} bg-white/5 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 hover:border-[#a3e635]/40 transition-all duration-500 group cursor-pointer shadow-2xl`}
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-8">
                  <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      {post.category === 'Solution' && (
                        <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 bg-[#a3e635] text-[#003d29] p-0.5 sm:p-1 rounded-lg border-2 border-[#002b1d]">
                          <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-black text-white text-sm sm:text-base lg:text-lg tracking-tight group-hover:text-[#a3e635] transition-colors">{post.author}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">{post.time}</p>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#a3e635] font-black uppercase tracking-widest">{post.role}</p>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest ${
                    post.category === 'Solution' ? 'bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20' : 
                    post.category === 'Astuce' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                    'bg-white/5 text-gray-400 border border-white/10'
                  }`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tighter leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-6 sm:mb-8 lg:mb-10 line-clamp-2">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-4 sm:pt-6 lg:pt-8 border-t border-white/5">
                  <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-10">
                    <button className="flex items-center space-x-3 text-gray-500 hover:text-red-400 transition-colors group/btn">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:fill-red-400 transition-all" />
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-3 text-gray-500 hover:text-[#a3e635] transition-colors">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-3 text-gray-500 hover:text-white transition-colors">
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <button className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#a3e635] flex items-center group/more">
                    <span>Rejoindre la discussion</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover/more:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Community Stats Card */}
            <div className="reveal-right delay-200 bg-emerald-950 text-white p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-6 sm:p-8 lg:p-12 text-[#a3e635]/5 pointer-events-none">
                <MessageSquare className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" />
              </div>
              <h4 className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#a3e635] mb-6 sm:mb-8 lg:mb-10">Dashboard Communauté</h4>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
                <div className="flex justify-between items-end">
                  <span className="text-gray-500 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest">Membres Actifs</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter">2.4k</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-500 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest">Solutions Validées</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter">856</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-500 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest">Botanistes Pro</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter">124</span>
                </div>
              </div>
              <button className="w-full mt-6 sm:mt-8 lg:mt-12 py-3 sm:py-4 lg:py-5 bg-[#a3e635] text-[#003d29] rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] shadow-2xl hover:scale-105 transition-all">
                Devenir Praticien Certifié
              </button>
            </div>

            {/* Trending Topics */}
            <div className="reveal-right delay-400 bg-white/5 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-[#a3e635] w-4 h-4 sm:w-5 sm:h-5" />
                <h4 className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">Sujets Tendance</h4>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { tag: '#MoringaPower', posts: 156 },
                  { tag: '#DetoxTraditionnelle', posts: 89 },
                  { tag: '#ValidationAFR', posts: 124 },
                  { tag: '#DoualaSante', posts: 45 }
                ].map((item) => (
                  <a key={item.tag} href="#" className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl border border-transparent hover:border-[#a3e635]/30 hover:bg-white/10 transition-all group">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{item.tag}</span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-gray-600">{item.posts} posts</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personas;
