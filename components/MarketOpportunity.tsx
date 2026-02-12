
import React, { useState, useRef } from 'react';
import { Camera, ShieldAlert, Wand2, Zap, Microscope, Search } from 'lucide-react';

const MarketOpportunity: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setLoading(true);
    setAnalysis(null);
    setTimeout(() => {
      setAnalysis("RÉSULTAT DU SÉQUENÇAGE :\n\nPlante identifiée : Artemisia Annua\nIndice de confiance : 98.4%\n\nPROPRIÉTÉS MÉDICINALES :\nContient de l'artémisinine, utilisé traditionnellement contre la fièvre et les parasites. \n\nPRÉCAUTIONS :\nNe pas utiliser chez la femme enceinte sans avis d'un herboriste certifié Forest Apothecary.");
      setLoading(false);
    }, 2500);
  };

  return (
    <section id="analyse" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#002b1d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1 rounded-full bg-white/5 border border-white/10 reveal">
            <Wand2 className="w-4 h-4 text-[#a3e635]" />
            <span className="text-[#a3e635] font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px]">Diagnostic Intelligent</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 sm:mb-8 uppercase tracking-tighter text-reveal-mask">
            Diagnostic <span className="text-[#a3e635]">Visuel IA</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed reveal delay-200">
            Capturez n'importe quelle partie d'une plante pour débloquer des millénaires de savoir médicinal instantanément.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Camera View */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 reveal-left">
            <div 
              onClick={() => !loading && fileInputRef.current?.click()}
              className={`relative aspect-square rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 cursor-pointer transition-all duration-500 shadow-2xl group ${image ? 'border-white' : 'border-[#a3e635]/20 border-dashed bg-white/5 hover:bg-white/10'}`}
            >
              {image ? (
                <>
                  <img src={image} alt="Target" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest text-[8px] sm:text-xs lg:text-sm">Changer l'image</span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#a3e635] text-[#003d29] rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 shadow-2xl animate-pulse">
                     <Camera className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-2 sm:mb-4">Activer la Caméra</h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs font-bold leading-relaxed max-w-xs">Placez la plante sous une lumière claire pour une précision optimale (Moteur P-AFR-2025)</p>
                </div>
              )}

              {loading && (
                <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-10">
                  <div className="relative mb-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-[#a3e635]/20 rounded-full"></div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-[#a3e635] border-t-transparent rounded-full animate-spin absolute inset-0"></div>
                    <Microscope className="absolute inset-0 m-auto text-[#a3e635] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <p className="text-[#a3e635] font-black uppercase tracking-widest text-xs sm:text-sm mb-2">Analyse du Génome...</p>
                  <p className="text-gray-500 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">IA SÉQUENÇAGE EN COURS</p>
                </div>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
            
            <div className="bg-white/5 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex items-center gap-3 sm:gap-4 lg:gap-5">
               <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                 <ShieldAlert />
               </div>
               <p className="text-[10px] sm:text-xs font-bold text-gray-400">
                 <span className="text-orange-500 uppercase font-black block mb-1">Avertissement de Sécurité</span>
                 Toutes les analyses doivent être confirmées par un praticien certifié avant consommation.
               </p>
            </div>
          </div>

          {/* AI Result View */}
          <div className="lg:col-span-7 flex flex-col bg-white/5 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-white/10 backdrop-blur-3xl relative overflow-hidden h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] reveal-right">
            <div className="absolute top-0 right-0 p-6 sm:p-8 lg:p-12 opacity-[0.03] pointer-events-none">
               <Microscope className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
            </div>

            <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-12 relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#a3e635] text-[#003d29] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                Cerveau Botanique IA
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-green-500 uppercase tracking-widest">En Ligne</span>
              </div>
            </div>

            <div className="flex-1 relative z-10">
              {analysis ? (
                <div className="bg-emerald-950/60 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/5 shadow-inner animate-fade-in">
                  <pre className="whitespace-pre-wrap font-medium text-sm sm:text-base lg:text-lg text-emerald-50 leading-relaxed font-sans">
                    {analysis}
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 sm:py-16 lg:py-20 opacity-20">
                   <Search className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-6 sm:mb-8 lg:mb-10" />
                   <p className="text-base sm:text-lg lg:text-xl font-light italic max-w-sm">Le moteur d'intelligence attend un échantillon visuel pour démarrer le séquençage biomoléculaire.</p>
                </div>
              )}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-wrap gap-2 sm:gap-3 lg:gap-4 relative z-10">
              {['Hautes Terres', 'Forêt Dense', 'Savane'].map(region => (
                <div key={region} className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-[8px] sm:text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
