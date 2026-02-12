
import React from 'react';

const NaturalBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#002b1d]">
      {/* Deep forest gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d29] via-[#002b1d] to-[#011a12]"></div>
      
      {/* Primary Grid / Tiled Pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #a3e635 1px, transparent 1px),
            linear-gradient(to bottom, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px' 
        }}>
      </div>

      {/* Secondary Finer Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #a3e635 1px, transparent 1px),
            linear-gradient(to bottom, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px' 
        }}>
      </div>

      {/* Random Glowing "Tiles" */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-[#a3e635]/5 border border-[#a3e635]/10 animate-pulse"
            style={{
              width: '60px',
              height: '60px',
              top: (Math.floor(Math.random() * 15) * 60) + 'px',
              left: (Math.floor(Math.random() * 25) * 60) + 'px',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>
      
      {/* Stylized Leaf Pattern 1 */}
      <svg className="absolute -top-20 -left-20 w-96 h-96 text-[#a3e635]/5 opacity-20 transform -rotate-12 animate-float" viewBox="0 0 100 100">
        <path fill="currentColor" d="M50 0 C70 30 100 50 50 100 C0 50 30 30 50 0" />
      </svg>

      {/* Stylized Leaf Pattern 2 */}
      <svg className="absolute top-1/2 -right-20 w-[500px] h-[500px] text-emerald-900/20 opacity-30 transform rotate-45 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 100 100">
        <path fill="currentColor" d="M50 10 C80 40 90 90 50 100 C10 90 20 40 50 10" />
      </svg>

      {/* Abstract Botanical Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Dynamic Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px] animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[150px] animate-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Particles (Enhanced) */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-[#a3e635]/40 rounded-full blur-[1px] animate-float"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: Math.random() * 10 + 10 + 's',
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}

      {/* Light Beams */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-transparent via-[#a3e635]/5 to-transparent rotate-12 transform-gpu"></div>
      </div>
    </div>
  );
};

export default NaturalBackground;
