import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black tracking-tight leading-none text-gray-900 mb-4">
              THE <br />
              <span className="text-brand-red text-3xl">Beyond</span> CIRCLE<span className="text-brand-red">.</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Empowering the next generation of digital entrepreneurs to build sustainable, scalable, and impactful businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-brand-red">Membership</a></li>
              <li><a href="#" className="hover:text-brand-red">Events</a></li>
              <li><a href="#" className="hover:text-brand-red">Masterclasses</a></li>
              <li><a href="#" className="hover:text-brand-red">Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-brand-red"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red"><Linkedin size={20} /></a>
            </div>
            <a href="mailto:hello@beyondcircle.in" className="flex items-center text-gray-600 hover:text-brand-red">
              <Mail size={16} className="mr-2" /> hello@beyondcircle.in
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Beyond Circle. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};