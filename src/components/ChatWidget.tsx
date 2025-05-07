import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const SAMPLE_RESPONSES: Record<string, string> = {
  'how do i sell my license': 'To sell your software license through SoftSell:\n1. Fill out our contact form with your license details\n2. Receive a valuation within 24 hours\n3. Accept the offer and get paid within 3 business days',
  'what types of licenses': 'We accept various software licenses including:\n- Microsoft Office/365\n- Adobe Creative Cloud\n- Autodesk\n- Oracle\n- SAP\n- VMware\n- IBM Software',
  'how much can i get': 'License values vary based on type, version, and market demand. Generally, you can expect 50-70% of the original purchase price. Contact us for a specific valuation.',
  'is it legal': 'Yes, reselling unused software licenses is legal in most jurisdictions. We ensure all transactions comply with relevant software licensing agreements and transfer policies.',
  'how long does it take': 'Our process is quick:\n- Valuation: Within 24 hours\n- Offer acceptance: Immediate\n- Payment processing: 1-3 business days',
  'payment methods': 'We offer multiple payment options:\n- Direct bank transfer\n- Wire transfer\n- PayPal\nAll transactions are secure and guaranteed.',
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hi! I\'m here to help you sell your software licenses. What would you like to know?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const userQuestion = inputValue.toLowerCase();
      let botResponse = 'I apologize, but I\'m not sure about that. Please contact our support team for more specific information.';

      // Check for matching responses
      for (const [key, value] of Object.entries(SAMPLE_RESPONSES)) {
        if (userQuestion.includes(key)) {
          botResponse = value;
          break;
        }
      }

      const botMessage: Message = {
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 transition-all duration-300 ${
        isMinimized ? 'w-72 h-14' : 'w-96 h-[32rem]'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mr-3">
            <span className="text-white font-bold">S</span>
          </div>
          <div>
            <h3 className="font-semibold">SoftSell Support</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
          >
            {isMinimized ? (
              <Maximize2 className="w-5 h-5 text-gray-500" />
            ) : (
              <Minimize2 className="w-5 h-5 text-gray-500" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[calc(32rem-8rem)] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        message.type === 'user'
                          ? 'text-primary-100'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
                rows={1}
                style={{ minHeight: '40px', maxHeight: '120px' }}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWidget;