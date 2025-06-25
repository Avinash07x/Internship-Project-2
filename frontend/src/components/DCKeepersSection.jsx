import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const DCKeepersSection = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "We know what it takes to provide the best service, and we are here to help you in every step."
    },
    {
      title: "Customized Solutions",
      description: "Your business is unique, so are your needs. We offer solutions designed to fit your requirements."
    },
    {
      title: "Affordable Pricing",
      description: "We believe in offering pocket-friendly & excellent services with no hidden fees."
    },
    {
      title: "Innovative Technology",
      description: "We always try to evolve and bring you the latest technology to keep your business ahead of your competitors."
    },
    {
      title: "Reliable Support",
      description: "Our support team is always ready to assist you and solve your issues."
    }
  ];

  return (
    <div className="w-full bg-blue-200 py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto bg-green-200 rounded-2xl p-12 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-blue-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Esteemhost?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DCKeepersSection;



// import React from 'react';

// export default function DCKeepersSection() {
//   const features = [
//     {
//       title: "Experienced Team",
//       description: "We know what it takes to provide the best service, and we are here to help you in every step."
//     },
//     {
//       title: "Customized Solutions", 
//       description: "Your business is unique, so are your needs. We offer solutions designed to fit your requirements."
//     },
//     {
//       title: "Affordable Pricing",
//       description: "We believe in offering pocket friendly & excellent services with No hidden fees."
//     },
//     {
//       title: "Innovative Technology",
//       description: "We always try to evolve and bring you the latest technology to keep your business ahead of your competitors."
//     },
//     {
//       title: "Reliable Support",
//       description: "Our support team is always ready to assist you and solve your issues."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-blue-200 from-cyan-100 via-teal-50 to-cyan-200 p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-block mb-6">
//             <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-transparent mb-4">
//               Why Choose Esteemhost?
//             </h1>
//             <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
//           </div>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//             Discover what makes us the perfect partner for your business growth and success
//           </p>
//         </div>
        
//         {/* Features List */}
//         <div className="space-y-8">
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-cyan-200/50"
//             >
//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
//                 {feature.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
              
//               {/* Decorative Element */}
//               <div className="mt-6 h-1 w-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full group-hover:w-full transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }