import React, { useState, useEffect } from 'react';

const AnimatedDashboard = () => {
  const [counts, setCounts] = useState({
    servers: 0,
    clients: 0,
    uptime: 0,
    resellers: 0
  });

  const [progress, setProgress] = useState({
    servers: 0,
    clients: 0,
    uptime: 0,
    resellers: 0
  });

  const [animationKey, setAnimationKey] = useState(0); // for re-triggering animation

  const stats = [
    {
      id: 'servers',
      label: 'Deployed Servers',
      target: 2745,
      maxProgress: 85,
      color: 'text-red-400',
      strokeColor: '#f87171'
    },
    {
      id: 'clients',
      label: 'Total Clients',
      target: 600,
      suffix: '+',
      maxProgress: 75,
      color: 'text-green-400',
      strokeColor: '#34d399'
    },
    {
      id: 'uptime',
      label: 'Server Uptime',
      target: 99.99,
      suffix: '%',
      maxProgress: 95,
      color: 'text-yellow-400',
      strokeColor: '#facc15',
      isPercentage: true
    },
    {
      id: 'resellers',
      label: 'Happy Resellers',
      target: 1616,
      maxProgress: 80,
      color: 'text-blue-400',
      strokeColor: '#60a5fa'
    }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        let allComplete = true;

        stats.forEach(stat => {
          const increment = stat.target / steps;
          if (newCounts[stat.id] < stat.target) {
            newCounts[stat.id] = Math.min(
              newCounts[stat.id] + increment,
              stat.target
            );
            allComplete = false;
          }
        });

        if (allComplete) clearInterval(timer);

        return newCounts;
      });

      setProgress(prev => {
        const newProgress = { ...prev };
        stats.forEach(stat => {
          const increment = stat.maxProgress / steps;
          if (newProgress[stat.id] < stat.maxProgress) {
            newProgress[stat.id] = Math.min(
              newProgress[stat.id] + increment,
              stat.maxProgress
            );
          }
        });
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [animationKey]);

  const formatNumber = (num, isPercentage = false, suffix = '') => {
    if (isPercentage) return num.toFixed(2) + suffix;
    return Math.floor(num).toLocaleString() + suffix;
  };

  const CircularProgress = ({ progress, children, strokeColor }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-44 h-44 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-lg scale-110 group-hover:scale-125 transition-transform duration-500"></div>

        <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#bgGradient)"
            strokeWidth="3"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-100 ease-out drop-shadow-lg"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-white/30">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map(stat => (
            <div key={stat.id} className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <CircularProgress
                progress={progress[stat.id]}
                strokeColor={stat.strokeColor}
              >
                <div className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {formatNumber(counts[stat.id], stat.isPercentage, stat.suffix || '')}
                  </div>
                </div>
              </CircularProgress>
              <p className="mt-6 text-slate-600 text-center font-semibold text-lg tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setCounts({ servers: 0, clients: 0, uptime: 0, resellers: 0 });
              setProgress({ servers: 0, clients: 0, uptime: 0, resellers: 0 });
              setAnimationKey(prev => prev + 1);
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Reset Animation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDashboard;
