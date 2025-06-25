import React from 'react';
import {
  Globe, Server, Cloud, Mail, Network, Palette,
  Code2, TrendingUp, Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Web Hosting",
    description: "Fast, dependable, and scalable hosting that keeps your website up and running smoothly around the clock.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: <Server className="w-8 h-8 text-white" />,
    title: "VPS Hosting",
    description: "Secure and flexible Virtual Private Servers to handle your projects with ease and reliability.",
    color: "from-teal-500 to-emerald-500"
  },
  {
    icon: <Cloud className="w-8 h-8 text-white" />,
    title: "Cloud Hosting",
    description: "Future-proof your business with our reliable cloud hosting services that grow alongside you.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Mail className="w-8 h-8 text-white" />,
    title: "Email Marketing Servers",
    description: "Run effective email campaigns with our dedicated servers, built for precision and reliability.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Network className="w-8 h-8 text-white" />,
    title: "Dedicated /24IP Solution",
    description: "Take control with customized IP blocks tailored to meet your specific needs.",
    color: "from-violet-500 to-indigo-500"
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Website Design",
    description: "Stunning, modern, and mobile-friendly designs crafted to reflect your brand perfectly.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Code2 className="w-8 h-8 text-white" />,
    title: "Python Hosting",
    description: "Run your Python apps on fast, secure, and optimized developer-focused platforms.",
    color: "from-indigo-500 to-sky-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Forex/Trading Servers",
    description: "Gain an edge in trading with ultra-fast and highly secure servers built for finance.",
    color: "from-green-500 to-lime-500"
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Proxy Servers",
    description: "Protect your online presence with high-performance proxy solutions.",
    color: "from-slate-600 to-gray-700"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="flex gap-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-transparent hover:border-gray-200"
  >
    <div className={`min-w-[64px] min-h-[64px] rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg`}>
      {service.icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">What We Offer</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a wide range of services to help your business succeed online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

