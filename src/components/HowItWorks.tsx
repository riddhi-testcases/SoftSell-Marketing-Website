import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-primary-600 dark:text-primary-500" />,
    title: 'Upload License',
    description: 'Submit your software license details through our secure portal. We support all major vendors including Microsoft, Adobe, and Autodesk.'
  },
  {
    icon: <DollarSign className="w-10 h-10 text-primary-600 dark:text-primary-500" />,
    title: 'Get Valuation',
    description: 'Receive a competitive market valuation within 24 hours. Our AI-powered pricing engine ensures you get the best price for your licenses.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary-600 dark:text-primary-500" />,
    title: 'Get Paid',
    description: 'Once you accept our offer, receive payment through your preferred method - direct deposit, PayPal, or crypto. Payment within 3 business days.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Selling your unused software licenses has never been easier.
            Follow these three simple steps to convert your digital assets into cash.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 reveal-group">
          {steps.map((step, index) => (
            <div key={index} className="reveal">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 dark:text-gray-600">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a href="#contact" className="btn btn-primary py-3 px-6">
            Start the Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;