import React, { useState } from 'react';

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly');

  const plans = {
    special: {
      name: 'Special',
      monthly: 99.99,
      yearly: 99.99,
      description: 'Secure file sharing and collaboration. Ideal for small teams.',
      storage: '10TB',
      downloadTraffic: '10TB',
      buttonText: 'SIGN UP',
      buttonStyle: 'secondary'
    },
    premium: {
      name: 'Premium',
      monthly: 144.99,
      yearly: 144.99,
      description: 'Core sync and share capabilities, advanced security, customisation and reporting.',
      storage: '20TB',
      downloadTraffic: '20TB',
      buttonText: 'TRY IT',
      buttonStyle: 'primary',
      popular: true
    },
    exclusive: {
      name: 'Exclusive',
      monthly: 199.99,
      yearly: 199.99,
      description: 'Content management with premier account and content security and workflow automation.',
      storage: 'Free',
      downloadTraffic: 'Unlimited',
      buttonText: 'TRY IT',
      secondaryButtonText: 'BUY IT',
      buttonStyle: 'dual'
    }
  };

  const PlanCard = ({ plan, planKey }) => {
    const price = billingPeriod === 'yearly' ? plan.yearly : plan.monthly;
    
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 relative transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        plan.popular ? 'ring-2 ring-blue-500' : ''
      }`}>
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        )}
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
          
          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-500">${price}</span>
            <span className="text-gray-500 ml-1">/{billingPeriod === 'yearly' ? 'YEAR' : 'MONTH'}</span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {plan.description}
          </p>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">{plan.storage}</span>
            <span className="text-gray-500">Storage</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">{plan.downloadTraffic}</span>
            <span className="text-gray-500">Download link traffic</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {plan.buttonStyle === 'dual' ? (
            <>
              <button className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                {plan.buttonText}
              </button>
              <button className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200">
                {plan.secondaryButtonText}
              </button>
            </>
          ) : (
            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
              plan.buttonStyle === 'primary' 
                ? 'bg-gray-800 text-white hover:bg-gray-900' 
                : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
            }`}>
              {plan.buttonText}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-400 mr-2">CHOOSE YOUR</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">PLAN</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Choose a plan that's right for you
          </h1>
          
          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-gray-200 text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-cyan-400 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              YEARLY
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <PlanCard key={key} plan={plan} planKey={key} />
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include 24/7 customer support and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;