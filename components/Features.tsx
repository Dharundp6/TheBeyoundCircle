import React from 'react';
import { Users, TrendingUp, Briefcase, Zap, Globe, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-brand-red" />,
    title: "High-Caliber Network",
    desc: "Connect with vetted creators earning 7+ figures. No beginners, just builders."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-orange" />,
    title: "Premium Brand Deals",
    desc: "Direct access to high-ticket sponsorships with global brands, bypassing agencies."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-red" />,
    title: "Growth Blueprints",
    desc: "Copy-paste strategies from creators who have scaled to 1M+ followers recently."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-orange" />,
    title: "Offline Summits",
    desc: "Quarterly retreats and meetups in Goa, Bangalore, and Mumbai."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    title: "Legal & Tax Support",
    desc: "Dedicated CA and legal team to help you manage IP and finances efficiently."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    title: "Crisis Management",
    desc: "PR support when things go wrong. We have your back when it matters most."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-wide uppercase text-sm mb-3">Why Join The Circle?</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Everything you need to go from <br/>
            <span className="text-brand-red">Creator to Founder</span>
          </h3>
          <p className="text-xl text-gray-600">
            We are not just a Discord server. We are an ecosystem designed to scale your personal brand into a business empire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};