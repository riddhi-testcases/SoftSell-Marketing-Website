import React from 'react';
import { Shield, Clock, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-500" />,
    title: 'Best Market Rates',
    description: 'Our unique market pricing algorithm ensures you get up to 70% of the original license value - the highest in the industry.'
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-600 dark:text-primary-500" />,
    title: 'Secure Transactions',
    description: 'End-to-end encryption and escrow service protects both buyers and sellers throughout the entire transaction process.'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-600 dark:text-primary-500" />,
    title: 'Fast Processing',
    description: 'From valuation to payment in as little as 72 hours. Our streamlined process eliminates unnecessary delays.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary-600 dark:text-primary-500" />,
    title: 'Dedicated Support',
    description: 'Our team of license experts is available 24/7 to answer questions and guide you through the selling process.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Why Choose SoftSell</h2>
          <p className="section-description">
            We've revolutionized the software resale market by creating a platform
            that prioritizes security, speed, and maximum value for sellers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-group">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 reveal"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-gray-800 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-600 dark:bg-primary-700 rounded-xl p-8 lg:p-12 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Unlock the Value of Your Software Assets?
              </h3>
              <p className="text-primary-100">
                Join thousands of businesses that have earned back millions on their software investments.
              </p>
            </div>
            <div className="lg:text-right">
              <a href="#contact" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-6">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;