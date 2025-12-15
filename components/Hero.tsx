import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { BackgroundPattern } from './BackgroundPattern';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 overflow-hidden">
      {/* Background Pattern overlay */}
      <BackgroundPattern opacity={0.15} color="#7c2d12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1.5 text-sm font-bold text-gray-900 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
              <span>Waitlist closing soon for Batch 3</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              India's First <br />
              <span className="text-white drop-shadow-md">Premium Community</span> <br />
              for <span className="text-brand-red underline decoration-4 decoration-white/30 underline-offset-4">Creatorpreneurs</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop playing the algorithm game alone. Join the top 1% of creators building sustainable 7-figure businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 transform hover:-translate-y-1">
                <span>Apply for Membership</span>
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-gray-900 rounded-xl font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center">
                View Member Stories
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/100/100?random=${i + 10}`} 
                    alt="Member" 
                    className="w-10 h-10 rounded-full border-2 border-amber-400"
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-900">
                <div className="flex text-yellow-900">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                500+ Top Creators Joined
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img src="https://picsum.photos/400/500?random=1" className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20" alt="Creator 1" />
                <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-brand-red">
                  <p className="font-bold text-gray-900 text-lg">"3x Revenue in 3 months"</p>
                  <p className="text-sm text-gray-500 mt-1">@tech_guru</p>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-brand-red p-6 rounded-2xl shadow-xl text-white">
                  <p className="font-bold text-xl mb-2">Exclusive Deals</p>
                  <p className="text-white/80 text-sm">Access to premium brand collaborations not public elsewhere.</p>
                </div>
                <img src="https://picsum.photos/400/500?random=2" className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20" alt="Creator 2" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};