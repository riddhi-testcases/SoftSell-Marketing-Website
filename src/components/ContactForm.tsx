import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const licenseTypes = [
  "Microsoft Office/365",
  "Adobe Creative Cloud",
  "Autodesk",
  "Oracle",
  "SAP",
  "VMware",
  "IBM Software",
  "Other"
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <h2 className="section-title">Ready to Sell Your Licenses?</h2>
            <p className="section-description">
              Fill out the form to get a free valuation of your software licenses.
              Our team will contact you within 24 hours with a competitive offer.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">No obligation valuation</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Get a market-rate offer with no commitment to sell
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Privacy guaranteed</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your information is secure and will never be shared
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Expert consultation</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Our software license experts will guide you through the process
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 reveal">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your message has been received. Our team will contact you within 24 hours 
                  with a valuation for your software licenses.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.company 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    License Type*
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.licenseType 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  >
                    <option value="">Select license type</option>
                    {licenseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.licenseType && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.licenseType}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Number of licenses, versions, etc."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn btn-primary py-3 px-4 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Get Your Free Valuation
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;