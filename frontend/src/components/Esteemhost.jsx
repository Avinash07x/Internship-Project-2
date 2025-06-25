import React from "react";
import Hero60 from "../assets/hero60.jpg"; // जब current file src/components/ में हो


const Esteemhost = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={Hero60}
            alt="EsteemHost"
            className="w-full max-w-md rounded-xl shadow-lg object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Welcome to EsteemHost
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-6 leading-relaxed">
            Your Partner for Reliable Digital Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-light">
            At <span className="font-medium text-gray-800">EsteemHost</span>, we redefine the way businesses power their digital presence. Whether you're just starting out, scaling up, or already an established company — we deliver solutions designed just for you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Esteemhost;
