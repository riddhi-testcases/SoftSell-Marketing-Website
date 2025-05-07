import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SoftSell helped us recover over $50,000 from unused Adobe and Microsoft licenses after our company downsized. Their valuation was higher than competitors, and payment was processed within days.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Vertex Innovations",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "As a software procurement manager, I've used several license resale services. SoftSell consistently provides the best rates and fastest processing times. Their platform is now our go-to solution for license management.",
    author: "Michael Chen",
    role: "Procurement Director",
    company: "Global Systems Inc.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Don't just take our word for it. Hear from businesses that have
            successfully monetized their unused software licenses through SoftSell.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-group">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 relative reveal"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 dark:text-gray-700" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join over 2,000+ companies who have trusted SoftSell with their software assets
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 text-gray-400 dark:text-gray-600 font-bold text-2xl">MICROSOFT</div>
            <div className="h-8 text-gray-400 dark:text-gray-600 font-bold text-2xl">ADOBE</div>
            <div className="h-8 text-gray-400 dark:text-gray-600 font-bold text-2xl">AUTODESK</div>
            <div className="h-8 text-gray-400 dark:text-gray-600 font-bold text-2xl">ORACLE</div>
            <div className="h-8 text-gray-400 dark:text-gray-600 font-bold text-2xl">IBM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;