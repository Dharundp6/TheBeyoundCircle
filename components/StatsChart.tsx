import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { period: 'Q1', member: 15000, standard: 5000 },
  { period: 'Q2', member: 28000, standard: 5500 },
  { period: 'Q3', member: 45000, standard: 6000 },
  { period: 'Q4', member: 72000, standard: 7500 },
];

export const StatsChart: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract background shape for depth */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-brand-yellow uppercase bg-brand-yellow/10 rounded-full">
              Growth Metrics
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Escaping the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Ad-Revenue Trap</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Most creators rely on volatile ad revenue. The Beyond Circle framework helps you diversify into high-ticket consulting, digital products, and equity-based brand partnerships.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-5xl font-black text-white tracking-tighter">3.5x</p>
                <p className="text-brand-yellow font-medium text-sm mt-1 uppercase tracking-wide">Deal Size Multiplier</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tighter">60<span className="text-3xl">%</span></p>
                <p className="text-brand-yellow font-medium text-sm mt-1 uppercase tracking-wide">Recurring Revenue</p>
              </div>
            </div>
            
            <button className="group text-white font-semibold border-b border-brand-yellow pb-1 hover:text-brand-yellow transition-colors flex items-center w-fit">
              View the 2024 Impact Report 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>

          {/* Chart Component */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
             <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50 relative">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="font-bold text-white text-lg">Quarterly Business Valuation</h3>
                        <p className="text-gray-400 text-xs">Projected growth based on Batch 2 data</p>
                    </div>
                    <div className="flex gap-4 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-brand-orange"></span>
                            <span className="text-gray-300">Beyond</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                            <span className="text-gray-500">Industry Avg</span>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorMember" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                      <XAxis 
                        dataKey="period" 
                        stroke="#4B5563" 
                        tick={{fill: '#9CA3AF', fontSize: 12}} 
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis 
                        stroke="#4B5563" 
                        tick={{fill: '#9CA3AF', fontSize: 12}} 
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `$${value/1000}k`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#F3F4F6' }}
                        itemStyle={{ color: '#F3F4F6' }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Valuation']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="member" 
                        stroke="#F59E0B" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorMember)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="standard" 
                        stroke="#4B5563" 
                        strokeWidth={2}
                        fill="transparent" 
                        strokeDasharray="4 4"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};