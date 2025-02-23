import React from 'react';
import { motion } from 'framer-motion';

// Icon Components
const PhoneIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      lines: ['+1-316-555-0116', '+1-446-526-0117']
    },
    {
      icon: EmailIcon,
      lines: ['contact@example.com', 'hr@example.com']
    },
    {
      icon: LocationIcon,
      lines: ['8502 Preston Rd. Ingle, Maine', '98380, USA']
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4"><span className="relative inline-flex">
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0 rounded-lg"></span>
            <span className="relative text-black font-bold"> Contact Us</span>
          </span></h1>
        <p className="text-gray-600 max-w-xl mx-auto">
        Have Questions? We're Here to Help – Reach Out Anytime!
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-nowrap gap-8 overflow-x-auto w-full max-w-7xl justify-center px-4">
        {contactInfo.map((info, index) => (
          <div 
            key={index}
            className="relative bg-white rounded-xl p-8 flex flex-col items-center text-center min-w-[300px] shadow-sm border-2 border-gray-300"  // Added border class here
          >
            <div className="mb-6">
              <info.icon className="w-8 h-8 text-gray-400" />
            </div>
            {info.lines.map((line, lineIndex) => (
              <p 
                key={lineIndex} 
                className={`text-gray-900 ${lineIndex === 0 ? 'mb-2' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
