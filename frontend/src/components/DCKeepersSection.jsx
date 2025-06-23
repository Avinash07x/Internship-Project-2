import React from 'react';

export default function DCKeepersSection() {
  return (
    <div className="bg-ustom-gradient p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-700 text-center mb-12">
          Why Choose Esteemhost ?
        </h1>
        
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <div className="flex items-start">
            <span className="text-gray-700 mr-4 mt-1">•</span>
            <p>
              <span className="font-semibold">Experienced Team</span> - We know what it takes to 
              provide the best service, and we are here to help you 
              in every step.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-700 mr-4 mt-1">•</span>
            <p>
              <span className="font-semibold">Customized Solutions</span> - Your business is unique, so 
              are your needs. We offer solutions designed to fit your 
              requirements.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-700 mr-4 mt-1">•</span>
            <p>
              <span className="font-semibold">Affordable Pricing</span> - We believe in offering pocket 
              friendly & excellent services with No hidden fees.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-700 mr-4 mt-1">•</span>
            <p>
              <span className="font-semibold">Innovative Technology</span> - We always try to evolve 
              and bring you the latest technology to keep your 
              business ahead of your competitors.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-700 mr-4 mt-1">•</span>
            <p>
              <span className="font-semibold">Reliable Support</span> - Our support team is always 
              ready to assist you and solve your issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}