import React, { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(1); // Start with second question open

  const faqData = [
    {
      question: "What makes BudgetHive different from other financial management tools?",
      answer: "BudgetHive combines AI-powered insights, automated tracking, and an intuitive interface to simplify financial management - no expertise needed."
    },
    {
      question: "Do I need technical skills to use BudgetHive?",
      answer: "Not at all! BudgetHive is built for ease of use, making financial tracking and budget management simple for everyone."
    },
    {
      question: "Is my financial data secure on BudgetHive?",
      answer: "100%! We prioritize security with encrypted data storage, ensuring your business finances remain private and protected."
    },
    {
      question: "Does BudgetHive generate financial reports?",
      answer: "Yes! BudgetHive automatically creates structured monthly reports, giving you a clear overview of your finances."
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4">
        <span>Frequently Asked </span>
          <span className="relative inline-flex">
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0 rounded-lg"></span>
            <span className="relative text-black font-bold"> Questions</span>
          </span>
        </h1>

        <p className="text-center text-gray-600 mb-12">
        Clear Answers, Smarter Finances – Everything You Need to Know!
        </p>

        {/* FAQ Items with Glow Effect */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="relative">
              {/* Concentrated Glow Effect */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl opacity-70" />
              </div>

              {/* FAQ Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6">
                    {openIndex === index ? (
                      <MinusIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Plus Icon Component
const PlusIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M12 4v16m8-8H4" 
    />
  </svg>
);

// Minus Icon Component
const MinusIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M20 12H4" 
    />
  </svg>
);

export default FAQPage;
