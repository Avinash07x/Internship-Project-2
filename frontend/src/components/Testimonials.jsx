import React, { useState, useEffect } from 'react';

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "JULIA GREEN",
      quote: "User experience, security, storage choice flexibility and large scale deployment were critical requirements for this project. Syncplicity was the company that best fulfilled these requirements.",
      avatar: "JG"
    },
    {
      id: 2,
      name: "JOSEPH LISBOU",
      quote: "We use CloudMe to share the sheet music and audio practice files for our chorus. I can practice along to audio in the car using the mobile app, print the sheet music from my desktop, etc.",
      avatar: "JL"
    },
    {
      id: 3,
      name: "WILBERT GREGORY",
      quote: "I love it when life gets easier. CloudMe is the easiest way to use your otherwise unused Cloud storage space for syncing files between your computers. CloudMe does is remarkably simple.",
      avatar: "WG"
    },
    {
      id: 4,
      name: "SARAH MITCHELL",
      quote: "The seamless integration across all platforms has transformed how our team collaborates. File sharing has never been this intuitive and secure. It's exactly what we needed for our growing business.",
      avatar: "SM"
    },
    {
      id: 5,
      name: "ALEX JOHNSON",
      quote: "The performance improvements and reliability of this platform exceeded our expectations. Our team productivity has increased by 40% since implementing this solution. It's been a game-changer for our workflow.",
      avatar: "AJ"
    },
    {
      id: 6,
      name: "MARIA RODRIGUEZ",
      quote: "Customer support is outstanding and the learning curve was minimal. We were up and running within hours, not days. The intuitive interface makes complex tasks feel simple.",
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our valued team members about their experience with our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 bg-white p-12 text-center"
                >
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 border-4 border-blue-100 shadow-lg flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-xl">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 tracking-wide">
                      {testimonial.name}
                    </h3>
                  </div>

                  <div className="relative max-w-2xl mx-auto">
                    <div className="absolute -top-4 -left-4 text-blue-200 text-6xl font-serif">"</div>
                    <p className="text-gray-600 leading-relaxed text-lg italic px-8 shadow-sm">
                      {testimonial.quote}
                    </p>
                    <div className="absolute -bottom-8 -right-4 text-blue-200 text-6xl font-serif rotate-180">"</div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
