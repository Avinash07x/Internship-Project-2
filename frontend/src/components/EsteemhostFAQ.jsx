import { useState } from 'react';

export default function EsteemhostFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What makes Esteemhost different from other hosting providers?",
      answer: "At Esteemhost, we offer the customized plans according to the client business goals. Support team will always be available to resolve your queries."
    },
    {
      question: "How do I know which hosting service is right for my business?",
      answer: "Choosing the right hosting service or plan depends on your business needs. If you are an entrepreneur shared hosting might be a good option for you, if you're scaling up or a giant enterprise the you can proceed with Cloud or VPS hosting solutions. Our team can help you to choose the specific plan according to your needs."
    },
    {
      question: "Do you offer support if I run into technical issues?",
      answer: "Yes, Our support team is available 24/7 to help with any technical issues or queries related to the services. Support team will help you with setting up your hosting or facing issues after set-up."
    },
    {
      question: "Are your services secure?",
      answer: "Yes, Security is a our top priority at Esteemhost. We use latest technologies and best practices to protect your data/websites and make sure that your services are safe with us & from online threats."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments through credit cards, PayPal & UPI. If you need any other payment option, feel free to contact us."
    },
    {
      question: "Can I migrate my existing website to Esteemhost?",
      answer: "Yes, we do offer website migration services from cPanel/Plesk panel. Our team will be working with you to ensure the minimal downtime while migrating the website. If you have any other panel or queries related to migration please feel free contact us."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-200 via-white to-teal-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
         
        </div>
        
        {/* FAQ Items - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:ring-inset"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200 flex-1">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-4">
                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}