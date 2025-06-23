import React, { useState, useEffect } from "react";
import Hero10 from "../assets/hero50.jpg";
import Hero20 from "../assets/hero10.png";
import Hero30 from "../assets/hero20.png";
import Share from "../assets/share.jpg";
import Coll from "../assets/coll.jpg";
import Setting from "../assets/setting.jpg";
import CloudImage from "../assets/cloud.jpg"; 

import {
    Apple,
    Play,
    ShoppingCart,
    Mail,
    Phone,
    ChevronUp,
    MessageCircle,
    Cloud as CloudIcon,
    SquareLibrary,
    Cylinder,
    Settings
} from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides = [
        {
            id: 1,
            heading: "File sharing & storage made simple",
            paragraph: "All of your photos, videos, music and documents - everywhere with you",
            image: Hero10,
            showButton: true,
            imagePosition: "right",
        },
        {
            id: 2,
            heading: "Smart cloud solutions",
            paragraph: "All of your photos, videos, music and documents - everywhere with you",
            image: Hero20,
            showButton: false,
            imagePosition: "bottom",
        },
        {
            id: 3,
            heading: "Secure cloud storage for your files",
            paragraph: "All of your photos, videos, music and documents - everywhere with you",
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

    const benefits = [
        {
            icon: <CloudIcon className="w-8 h-8" />,
            title: "Anonymous file exchange"
        },
        {
            icon: <Play className="w-8 h-8" />,
            title: "Playing files online"
        },
        {
            icon: <Cylinder className="w-8 h-8" />,
            title: "No size limits"
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Setting password for file transfer"
        },
        {
            icon: <SquareLibrary className="w-8 h-8" />,
            title: "Triple backups"
        }
    ];

    const features = [
        {
            id: 1,
            title: "Share",
            description: "Share through email, link, or social network. Unlimited downloads. No wait times.",
            icon: <div className="w-20 h-16 flex items-center justify-center"><img src={Share} alt="Share" /></div>
        },
        {
            id: 2,
            title: "Collaborate",
            description: "Store and share any file type. Share folders of project files. Easily email large files.",
            icon: <div className="w-20 h-16 flex items-center justify-center"><img src={Coll} alt="Collaborate" /></div>
        },
        {
            id: 3,
            title: "Store",
            description: "10GB for free. Up to 50GB free with bonuses. Store all your photos, audio, and videos.",
            icon: <div className="w-20 h-16 flex items-center justify-center"><img src={CloudImage} alt="Store" /></div>
        },
        {
            id: 4,
            title: "Access",
            description: "Always have your important files with you. Never forget your work at home files with you.",
            icon: <div className="w-20 h-16 flex items-center justify-center"><img src={Setting} alt="Access" /></div>
        }
    ];

    return (
        <section id="home" className="relative bg-white min-h-[500px] overflow-hidden">

            {/* Slideshow */}
            <div className="container bg-white mx-auto px-6 h-full relative z-10">
                <div className="relative w-full h-full flex items-center min-h-[500px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${index === currentSlide ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}
                        >
                            {slide.imagePosition === "right" ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                                    <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1 text-center lg:text-left">
                                        <h1 className="text-4xl font-bold text-black">{slide.heading}</h1>
                                        <p className="text-lg text-black text-opacity-90">{slide.paragraph}</p>
                                        {slide.showButton && (
                                            <div className="flex justify-center lg:justify-start">
                                                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                                                    FREE SIGN UP
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
                                        <img src={slide.image} alt={slide.heading} className="w-full h-auto object-contain" loading="lazy" />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-center items-center h-full text-center space-y-8">
                                    <h1 className="text-5xl font-bold text-black">{slide.heading}</h1>
                                    <p className="text-xl text-black text-opacity-90 max-w-2xl">{slide.paragraph}</p>
                                    <img src={slide.image} alt={slide.heading} className="w-full max-w-xl h-auto object-contain" loading="lazy" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits */}
            <div className="min-h-screen bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-4">OUR BENEFITS</p>
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">More than just sharing and storage</h2>
                    <p className="text-gray-600 text-lg mb-16">We are more than just sharing and storage. Take a look at the top features to make your life simple and easy.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-teal-400 hover:bg-teal-500 w-20 h-20 rounded-full mx-auto flex items-center justify-center transition-transform transform group-hover:scale-110">
                                    {benefit.icon}
                                </div>
                                <h3 className="mt-4 text-gray-800 font-semibold">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg">FREE SIGN UP</button>
                </div>
            </div>

            {/* Features */}
            <div className="min-h-screen bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-blue-400 uppercase text-sm font-semibold mb-4">POWERFUL AND SIMPLE</p>
                    <h2 className="text-5xl font-bold text-gray-800 mb-8">Handles all of your file needs</h2>
                    <p className="text-gray-500 text-lg max-w-4xl mx-auto mb-16">File storage made easy – including powerful features you won't find anywhere else. Whether you're sharing photos, videos, audio, or docs, MediaFire can simplify your workflow.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((feature) => (
                            <div key={feature.id} className="text-center group">
                                <div className="mb-6 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-500 mb-6">{feature.description}</p>
                                <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                                    {feature.id}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
        </section>
    );
};

export default Hero;
