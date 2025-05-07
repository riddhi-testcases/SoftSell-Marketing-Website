import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Turn Unused Software
              <span className="text-primary-600 dark:text-primary-500 block">
                Into Cash
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              SoftSell helps businesses sell their unused software licenses for the best price. Simple, secure, and transparent transactions guaranteed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary py-3 px-6 text-lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="btn btn-secondary py-3 px-6 text-lg"
              >
                How It Works
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              No upfront fees. Only pay when your licenses sell.
            </div>
          </div>
          
          <div className="relative lg:h-[500px] reveal">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Licenses Ready to Sell</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Adobe Creative Cloud</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise • 5 Licenses</p>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-bold">$3,499</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Microsoft Office 365</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Business • 10 Licenses</p>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-bold">$1,249</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Autodesk AutoCAD</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Professional • 2 Licenses</p>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-bold">$2,899</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-gray-600 transition-colors">
                View All Licenses
              </button>
            </div>
            
            <div className="absolute w-64 h-64 bg-secondary-300 dark:bg-secondary-900 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-20"></div>
            <div className="absolute w-48 h-48 bg-primary-400 dark:bg-primary-700 rounded-full -top-12 -left-12 -z-10 blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;