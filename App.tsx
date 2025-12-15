import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { StatsChart } from './components/StatsChart';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <div className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 font-medium mb-6 uppercase tracking-widest text-xs">Trusted by Creators From</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <h3 className="text-2xl font-bold text-gray-400">YouTube</h3>
               <h3 className="text-2xl font-bold text-gray-400">Instagram</h3>
               <h3 className="text-2xl font-bold text-gray-400">LinkedIn</h3>
               <h3 className="text-2xl font-bold text-gray-400">Spotify</h3>
               <h3 className="text-2xl font-bold text-gray-400">Substack</h3>
            </div>
          </div>
        </div>
        <Features />
        <StatsChart />
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">Don't take our word for it</h2>
              <p className="text-xl text-gray-600">Hear from members who changed their lives.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                   <div className="flex items-center space-x-4 mb-6">
                      <img src={`https://picsum.photos/60/60?random=${i+20}`} alt="User" className="w-12 h-12 rounded-full" />
                      <div>
                        <h5 className="font-bold text-gray-900">Alex Rivera</h5>
                        <span className="text-sm text-gray-500">Tech Reviewer (1.2M Subs)</span>
                      </div>
                   </div>
                   <p className="text-gray-600 italic">"I was stuck at a plateau for 2 years. Joining The Beyond Circle gave me the exact contacts I needed to sign my first 6-figure annual contract. Best investment ever."</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;