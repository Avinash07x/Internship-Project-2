import React, { useState } from 'react';

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
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-700 text-center mb-12">
          Esteemhost FAQ
        </h1>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 px-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-8">
                  {faq.question}
                </h3>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 py-6 bg-white border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}