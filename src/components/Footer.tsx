import React from 'react';
import { Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                SoftSell
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The premier marketplace for buying and selling software licenses at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">License Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Valuation Calculator</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <a href="mailto:info@softsell.com" className="text-gray-400 hover:text-white transition-colors">
                  info@softsell.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="text-gray-400">
                <p>42 Tech Park, Whitefield</p>
                <p>Bangalore, Karnataka 560066</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell, Inc. Made by Riddhi Chakraborty. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;