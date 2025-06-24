import React, { useState, useEffect } from 'react';

const Plans = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [animatedElements, setAnimatedElements] = useState({});

  useEffect(() => {
    // Stagger animation for cards
    const timer = setTimeout(() => {
      setAnimatedElements({ cardsVisible: true });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      name: "Shared Hosting",
      price: "$2",
      icon: "🌐",
      gradient: "from-purple-900 via-blue-900 to-indigo-900",
      glowColor: "shadow-purple-500/20",
      features: [
        { text: "1 Website", icon: "🖥" },
        { text: "1 Cpanel account", icon: "⚙" },
        { text: "2 GB Storage", icon: "💾" },
        { text: "5GB Bandwidth", icon: "📊" },
        { text: "5 Email Accounts", icon: "📧" },
        { text: "3 Sub Domains", icon: "🔗" },
        { text: "1 Mysql Database", icon: "🗄" }
      ],
      isPopular: false,
      badge: "STARTER"
    },
    {
      name: "Reseller Hosting",
      price: "$8",
      icon: "🚀",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900",
      glowColor: "shadow-emerald-500/20",
      features: [
        { text: "Unlimited Websites", icon: "∞", special: true },
        { text: "Unlimited Cpanel Accounts", icon: "⚙", special: true },
        { text: "25 GB Storage", icon: "💾" },
        { text: "Unlimited Bandwidth", icon: "📊", special: true },
        { text: "Unlimited Email Accounts", icon: "📧", special: true },
        { text: "Unlimited Sub Domains", icon: "🔗", special: true },
        { text: "Unlimited Mysql Database", icon: "🗄", special: true }
      ],
      isPopular: false,
      badge: "BUSINESS"
    },
    {
      name: "Cloud VPS",
      price: "$17",
      icon: "☁",
      gradient: "from-orange-900 via-red-900 to-pink-900",
      glowColor: "shadow-orange-500/30",
      features: [
        { text: "2 CPU Cores", icon: "🔥" },
        { text: "4 GB RAM", icon: "⚡" },
        { text: "50 GB Hard Disk-SSD", icon: "💎" },
        { text: "1TB Bandwidth", icon: "🌊" },
        { text: "1 IP Addresses", icon: "🎯" },
        { text: "Free CentOS WP-Cpanel", icon: "🎁", special: true },
        { text: "99.9% Uptime Guarantee", icon: "🛡" }
      ],
      isPopular: true,
      badge: "MOST POPULAR",
      sparkles: true
    },
    {
      name: "Dedicated Servers",
      price: "$40",
      icon: "🏆",
      gradient: "from-violet-900 via-purple-900 to-fuchsia-900",
      glowColor: "shadow-violet-500/20",
      features: [
        { text: "Intel Core i5-3470 4 Cores", icon: "💻" },
        { text: "3.2Ghz", icon: "⚡" },
        { text: "8 GB DDR5", icon: "🔋" },
        { text: "240 GB SSD", icon: "💎" },
        { text: "2000 GBPS Bandwidth", icon: "🚄" },
        { text: "1 IP Address", icon: "🎯" },
        { text: "99.9% Uptime Guarantee", icon: "🛡" }
      ],
      isPopular: false,
      badge: "ENTERPRISE"
    }
  ];

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-200 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with Animations */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              
            </div>
            <h2 className="text-6xl font-black text-black bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
              Most Popular Hosting Plans
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-cyan-300 text-xl font-medium tracking-wide">
              ✨ Cheap Dedicated Server Hosting provider in India ✨
            </p>
          </div>

          {/* Plans Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group transform transition-all duration-700 ${
                  animatedElements.cardsVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                } ${
                  plan.isPopular 
                    ? 'scale-110 z-20' 
                    : hoveredPlan === index 
                      ? 'scale-105 z-10' 
                      : 'hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-gradient-to-br ${plan.gradient} rounded-2xl p-1 ${plan.glowColor} shadow-2xl`}>
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 h-full">
                    
                    {/* Popular Badge */}
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          ⭐ {plan.badge} ⭐
                        </div>
                      </div>
                    )}

                    {!plan.isPopular && (
                      <div className="absolute -top-3 left-4">
                        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {plan.badge}
                        </div>
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="text-center mb-6 mt-4">
                      <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                        {plan.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-sm text-cyan-300 uppercase tracking-widest font-semibold">
                          Starting From
                        </span>
                      </div>
                      <div className="relative">
                        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {plan.price}
                        </span>
                        {plan.sparkles && (
                          <div className="absolute -top-2 -right-2 text-yellow-400 animate-spin">✨</div>
                        )}
                      </div>
                      <div className="text-sm text-cyan-300 uppercase tracking-widest font-semibold mt-2">
                        Per Month
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                            feature.special
                              ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30'
                              : 'bg-white/5 hover:bg-white/10'
                          } group-hover:transform group-hover:translate-x-1`}
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <span className="text-lg mr-3">{feature.icon}</span>
                          <span className={`text-sm font-medium ${
                            feature.special 
                              ? 'text-emerald-300' 
                              : 'text-gray-200'
                          }`}>
                            {feature.text}
                          </span>
                          {feature.special && (
                            <span className="ml-auto text-emerald-400 text-xs">✨</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 px-6 rounded-xl font-bold text-white uppercase tracking-wide text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 shadow-orange-500/25'
                        : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 shadow-slate-500/25'
                    }`}>
                      🚀 Compare Plans
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
              <span className="text-2xl">🛡</span>
              <p className="text-cyan-300 font-medium">
                All plans include 24/7 customer support and 30-day money-back guarantee
              </p>
              <span className="text-2xl">💎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;


// import React, { useState } from 'react';

// const Plans = () => {
//   const [billingPeriod, setBillingPeriod] = useState('yearly');

//   const plans = {
//     special: {
//       name: 'Special',
//       monthly: 99.99,
//       yearly: 99.99,
//       description: 'Secure file sharing and collaboration. Ideal for small teams.',
//       storage: '10TB',
//       downloadTraffic: '10TB',
//       buttonText: 'SIGN UP',
//       buttonStyle: 'secondary'
//     },
//     premium: {
//       name: 'Premium',
//       monthly: 144.99,
//       yearly: 144.99,
//       description: 'Core sync and share capabilities, advanced security, customisation and reporting.',
//       storage: '20TB',
//       downloadTraffic: '20TB',
//       buttonText: 'TRY IT',
//       buttonStyle: 'primary',
//       popular: true
//     },
//     exclusive: {
//       name: 'Exclusive',
//       monthly: 199.99,
//       yearly: 199.99,
//       description: 'Content management with premier account and content security and workflow automation.',
//       storage: 'Free',
//       downloadTraffic: 'Unlimited',
//       buttonText: 'TRY IT',
//       secondaryButtonText: 'BUY IT',
//       buttonStyle: 'dual'
//     }
//   };

//   const PlanCard = ({ plan, planKey }) => {
//     const price = billingPeriod === 'yearly' ? plan.yearly : plan.monthly;
    
//     return (
//       <div className={`bg-white rounded-lg shadow-lg p-8 relative transition-all duration-300 hover:shadow-xl hover:scale-105 ${
//         plan.popular ? 'ring-2 ring-blue-500' : ''
//       }`}>
//         {plan.popular && (
//           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//             Most Popular
//           </div>
//         )}
        
//         <div className="text-center mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
          
//           <div className="mb-6">
//             <span className="text-4xl font-bold text-orange-500">${price}</span>
//             <span className="text-gray-500 ml-1">/{billingPeriod === 'yearly' ? 'YEAR' : 'MONTH'}</span>
//           </div>
          
//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             {plan.description}
//           </p>
//         </div>
        
//         <div className="space-y-3 mb-8">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700 font-medium">{plan.storage}</span>
//             <span className="text-gray-500">Storage</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700 font-medium">{plan.downloadTraffic}</span>
//             <span className="text-gray-500">Download link traffic</span>
//           </div>
//         </div>
        
//         <div className="space-y-3">
//           {plan.buttonStyle === 'dual' ? (
//             <>
//               <button className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
//                 {plan.buttonText}
//               </button>
//               <button className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200">
//                 {plan.secondaryButtonText}
//               </button>
//             </>
//           ) : (
//             <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
//               plan.buttonStyle === 'primary' 
//                 ? 'bg-gray-800 text-white hover:bg-gray-900' 
//                 : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
//             }`}>
//               {plan.buttonText}
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <span className="text-gray-400 mr-2">CHOOSE YOUR</span>
//             <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">PLAN</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
//             Choose a plan that's right for you
//           </h1>
          
//           {/* Billing Toggle */}
//           <div className="inline-flex bg-white rounded-full p-1 shadow-md">
//             <button
//               onClick={() => setBillingPeriod('monthly')}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 billingPeriod === 'monthly'
//                   ? 'bg-gray-200 text-gray-800 shadow-sm'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               MONTHLY
//             </button>
//             <button
//               onClick={() => setBillingPeriod('yearly')}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 billingPeriod === 'yearly'
//                   ? 'bg-cyan-400 text-white shadow-sm'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               YEARLY
//             </button>
//           </div>
//         </div>
        
//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {Object.entries(plans).map(([key, plan]) => (
//             <PlanCard key={key} plan={plan} planKey={key} />
//           ))}
//         </div>
        
//         {/* Additional Info */}
//         <div className="text-center mt-12">
//           <p className="text-gray-500 text-sm">
//             All plans include 24/7 customer support and 30-day money-back guarantee
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Plans;