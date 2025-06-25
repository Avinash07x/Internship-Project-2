import { useState } from 'react';

export default function EsteemhostFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What makes Esteemhost different from other hosting providers?",
      answer: "At Esteemhost, we offer customized plans based on business goals. Our support team is always available to resolve your queries.",
    },
    {
      question: "How do I know which hosting service is right for my business?",
      answer: "It depends on your business needs. Entrepreneurs might prefer shared hosting, while larger businesses may benefit from Cloud or VPS solutions. Our team helps you choose the best fit.",
    },
    {
      question: "Do you offer support if I run into technical issues?",
      answer: "Yes! Our 24/7 support team assists with setup, troubleshooting, and ongoing service-related queries.",
    },
    {
      question: "Are your services secure?",
      answer: "Absolutely. Security is a top priority. We use the latest technologies and follow best practices to protect your data and websites.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and UPI. For other options, feel free to contact us.",
    },
    {
      question: "Can I migrate my existing website to Esteemhost?",
      answer: "Yes, we offer migration from cPanel/Plesk with minimal downtime. Contact us for other panel types or queries.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-teal-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ List - Single Column */}
        <div className="flex flex-col gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4 focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200 flex-1">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Animated Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                  }`}
                >
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

