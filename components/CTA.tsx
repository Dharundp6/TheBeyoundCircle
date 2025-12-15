import React from 'react';
import { BackgroundPattern } from './BackgroundPattern';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-brand-orange to-amber-500 overflow-hidden">
      <BackgroundPattern opacity={0.1} color="#ffffff" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Ready to go Beyond?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          We accept only 50 new members per quarter to maintain quality. Applications are reviewed on a rolling basis.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-orange text-xl font-black rounded-xl shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
            Apply for Access
          </button>
          <span className="text-white/80 font-medium text-sm sm:text-base">
            No credit card required for application
          </span>
        </div>
      </div>
    </section>
  );
};