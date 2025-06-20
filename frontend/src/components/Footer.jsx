import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  Monitor, 
  Server, 
  Users, 
  Folder, 
  Shield, 
  RotateCcw,
  ShoppingCart,
  Smartphone,
  Globe,
  Zap,
  Calendar,
  Cloud,
  Info,
  Settings,
  DollarSign,
  BookOpen,
  Database,
  Code,
  Share2,
  GitBranch,
  Archive,
  Key,
  Gift,
  CreditCard,
  Globe2,
  Mail,
  HardDrive,
  RefreshCw,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 2000);
    }
  };

  const services = [
    { name: 'Web Development', icon: Code },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'Cloud Services', icon: Cloud },
    { name: 'Support', icon: HelpCircle }
  ];

  const company = [
    { name: 'About Us', icon: Users },
    { name: 'Careers', icon: Info },
    { name: 'Contact', icon: Mail },
    { name: 'Blog', icon: BookOpen }
  ];

  const resources = [
    { name: 'Documentation', icon: FileText },
    { name: 'Tutorials', icon: Monitor },
    { name: 'Community', icon: GitBranch },
    { name: 'Help Center', icon: Shield }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  const FooterSection = ({ title, items }) => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-sm"
              >
                <IconComponent className="w-3 h-3 mr-2 text-gray-400 group-hover:text-white transition-colors duration-200" />
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Services */}
          <div>
            <FooterSection title="Services" items={services} />
          </div>

          {/* Company */}
          <div>
            <FooterSection title="Company" items={company} />
          </div>

          {/* Resources */}
          <div>
            <FooterSection title="Resources" items={resources} />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates.
            </p>
            
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                  isSubscribed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-md'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Follow Us</h4>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-slate-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-400 text-xs">
              © 2025 <span className="font-semibold text-white">YourCompany</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;