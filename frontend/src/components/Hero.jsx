import React, { useState, useEffect, useRef } from "react";
import Hero10 from "../assets/hero30.png";
import Hero20 from "../assets/hero10.png";
import Hero30 from "../assets/hero20.png";
import { Pause, Play } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    {
      id: 1,
      heading: "Affordable Pricing",
      paragraph: "Your partner for Reliable Digital Solutions",
      image: Hero10,
      showButton: true,
      imagePosition: "right",
    },
    {
      id: 2,
      heading: "Experienced Team",
      paragraph: "We know what it takes to provide the best service",
      image: Hero20,
      showButton: false,
      imagePosition: "bottom",
    },
    {
      id: 3,
      heading: "Reliable Support",
      paragraph: "24/7/365 server support",
      image: Hero30,
      showButton: true,
      imagePosition: "right",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-white via-blue-100 to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 relative flex items-center justify-center min-h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-10 z-0"
            }`}
          >
            {slide.imagePosition === "right" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                {/* Text */}
                <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {slide.heading}
                  </h1>
                  <p className="text-md text-gray-600">{slide.paragraph}</p>
                  {slide.showButton && (
                    <div className="flex justify-center lg:justify-start">
                      <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:scale-105 transition-transform text-sm">
                        FREE SIGN UP
                      </button>
                    </div>
                  )}
                </div>
                {/* Image */}
                <div className="flex justify-center order-1 lg:order-2">
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full max-w-[300px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center space-y-5 px-4">
                <h1 className="text-4xl font-bold text-gray-800">
                  {slide.heading}
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  {slide.paragraph}
                </p>
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full max-w-sm object-contain"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {/* Indicator Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-400"
              } transition-all`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
