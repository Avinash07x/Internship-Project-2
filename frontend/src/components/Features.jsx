import React from "react";
import Share from "../assets/share.jpg";
import Coll from "../assets/coll.jpg";
import Setting from "../assets/setting.jpg";
import CloudImage from "../assets/cloud.jpg";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Share",
      description:
        "Share through email, link, or social network. Unlimited downloads. No wait times.",
      icon: (
        <div className="w-20 h-16 flex items-center justify-center">
          <img src={Share} alt="Share" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Collaborate",
      description:
        "Store and share any file type. Share folders of project files. Easily email large files.",
      icon: (
        <div className="w-20 h-16 flex items-center justify-center">
          <img src={Coll} alt="Collaborate" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Store",
      description:
        "10GB for free. Up to 50GB free with bonuses. Store all your photos, audio, and videos.",
      icon: (
        <div className="w-20 h-16 flex items-center justify-center">
          <img src={CloudImage} alt="Store" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Access",
      description:
        "Always have your important files with you. Never forget your work at home files with you.",
      icon: (
        <div className="w-20 h-16 flex items-center justify-center">
          <img src={Setting} alt="Access" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-blue-400 uppercase text-sm font-semibold mb-4">
          POWERFUL AND SIMPLE
        </p>
        <h2 className="text-5xl font-bold text-gray-800 mb-8">
          Handles all of your file needs
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto mb-16">
          File storage made easy – including powerful features you won't find
          anywhere else. Whether you're sharing photos, videos, audio, or docs,
          MediaFire can simplify your workflow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-6">{feature.description}</p>
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                {feature.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
