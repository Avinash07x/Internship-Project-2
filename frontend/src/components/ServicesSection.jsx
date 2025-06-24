import React from 'react';
import {
  Globe,
  Server,
  Cloud,
  Mail,
  Network,
  Palette,
  Code2,
  TrendingUp,
  Shield,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Web Hosting",
      description: "Fast, dependable, and scalable hosting that keeps your website up and running smoothly around the clock.",
      bgGradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      shadowColor: "shadow-blue-500/30",
      hoverShadow: "group-hover:shadow-blue-500/50"
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      title: "VPS Hosting",
      description: "Secure and flexible Virtual Private Servers to handle your projects with ease and reliability.",
      bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/30",
      hoverShadow: "group-hover:shadow-emerald-500/50"
    },
    {
      icon: <Cloud className="w-10 h-10 text-white" />,
      title: "Cloud Hosting",
      description: "Future-proof your business with our reliable cloud hosting services that grow alongside you.",
      bgGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      shadowColor: "shadow-cyan-500/30",
      hoverShadow: "group-hover:shadow-cyan-500/50"
    },
    {
      icon: <Mail className="w-10 h-10 text-white" />,
      title: "Email Marketing Servers",
      description: "Run effective email campaigns with our dedicated servers, built for precision and reliability.",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      shadowColor: "shadow-orange-500/30",
      hoverShadow: "group-hover:shadow-orange-500/50"
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Dedicated /24IP Solution",
      description: "Take control with customized IP blocks tailored to meet your specific needs.",
      bgGradient: "bg-gradient-to-br from-violet-500 to-purple-600",
      shadowColor: "shadow-violet-500/30",
      hoverShadow: "group-hover:shadow-violet-500/50"
    },
    {
      icon: <Palette className="w-10 h-10 text-white" />,
      title: "Website Design",
      description: "Impress your audience with stunning, modern, and mobile-friendly designs crafted to reflect your brand perfectly.",
      bgGradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      shadowColor: "shadow-pink-500/30",
      hoverShadow: "group-hover:shadow-pink-500/50"
    },
    {
      icon: <Code2 className="w-10 h-10 text-white" />,
      title: "Python Hosting",
      description: "Hosting made for developers! Run your Python apps on fast, secure, and optimized platforms.",
      bgGradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
      shadowColor: "shadow-indigo-500/30",
      hoverShadow: "group-hover:shadow-indigo-500/50"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Forex/Trading Servers",
      description: "Gain an edge in trading with ultra-fast and highly secure servers built for the financial market.",
      bgGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/30",
      hoverShadow: "group-hover:shadow-green-500/50"
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Proxy Servers",
      description: "Protect your online presence with high-performance proxy solutions that enhance privacy and security.",
      bgGradient: "bg-gradient-to-br from-slate-500 to-gray-600",
      shadowColor: "shadow-slate-500/30",
      hoverShadow: "group-hover:shadow-slate-500/50"
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {/* Icon Circle with Creative Effects */}
      <div className={`relative w-28 h-28 ${service.bgGradient} rounded-full flex items-center justify-center mb-6 shadow-2xl ${service.shadowColor} ${service.hoverShadow} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden`}>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-3 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-5 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
          <div className="absolute bottom-4 left-2 w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 bg-white rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Rotating Border */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-500"></div>

        {/* Glowing Ring Effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* Icon Container */}
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
          <div className="absolute top-1/3 left-2 w-1 h-1 bg-white rounded-full animate-ping delay-400"></div>
        </div>
      </div>

      {/* Title with Gradient Effect */}
      <h3 className="text-xl font-bold text-gray-700 mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-xs group-hover:text-gray-700 transition-colors duration-300">
        {service.description}
      </p>

      {/* Hover Underline Effect */}
      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 group-hover:w-16 transition-all duration-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of services to help your business succeed online:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
