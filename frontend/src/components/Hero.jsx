import React, { useState, useEffect } from "react";
import Hero10 from "../assets/hero30.png";
import Hero20 from "../assets/hero100.jpg";
import Hero30 from "../assets/hero20.png";
import { MessageCircle, ChevronUp } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
      paragraph: "We Know What it takes to provide the best service",
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

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isAutoPlay]);

  return (
    <div className="container bg-blue-300 mx-auto px-6 h-full relative z-10">
      <div className="relative w-full h-full flex items-center min-h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            {slide.imagePosition === "right" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1 text-center lg:text-left">
                  <h1 className="text-4xl font-bold text-black">
                    {slide.heading}
                  </h1>
                  <p className="text-lg text-black text-opacity-90">
                    {slide.paragraph}
                  </p>
                  {slide.showButton && (
                    <div className="flex justify-center lg:justify-start">
                      <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                        FREE SIGN UP
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-full text-center space-y-8">
                <h1 className="text-5xl font-bold text-black">
                  {slide.heading}
                </h1>
                <p className="text-xl text-black text-opacity-90 max-w-2xl">
                  {slide.paragraph}
                </p>
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full max-w-xl h-auto object-contain"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
            {/* Presale Chat */}
      <div className="fixed bottom-6 left-6 z-20">
        <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Presale Chat</span>
        </div>
      </div>

      {/* Back to top */}
      <button className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg z-20">
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Hero;

