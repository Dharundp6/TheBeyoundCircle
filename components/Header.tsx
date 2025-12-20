import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-3 shadow-md">
              <div className="text-white text-sm font-black leading-tight">
                Beyond<br />
                Circle
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Benefits</a>
            <a href="#mentors" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Mentors</a>
            <a href="#roi" className="text-gray-700 hover:text-brand-red font-medium transition-colors">ROI</a>
            <a href="#hubs" className="text-gray-700 hover:text-brand-red font-medium transition-colors">Hubs</a>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Apply for Membership
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Benefits</a>
          <a href="#mentors" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Mentors</a>
          <a href="#roi" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">ROI</a>
          <a href="#hubs" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Hubs</a>
          <button className="bg-gray-900 text-white w-full py-3 rounded-xl font-bold">
            Apply for Membership
          </button>
        </div>
      )}
    </nav>
  );
};