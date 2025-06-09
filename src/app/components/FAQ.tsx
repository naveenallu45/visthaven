'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'What is the process for buying a property?',
    answer:
      'The process involves selecting the right property, negotiating terms with the agent, signing the contract, and completing the payment. Our professional agents will guide you through every step to ensure a smooth experience.',
  },
  {
    question: 'How do I determine how much I can afford?',
    answer:
      'We recommend consulting with a mortgage specialist who can evaluate your income, expenses, and credit score to provide tailored advice.',
  },
  {
    question: 'What documents are required for renting a property?',
    answer:
      'Typically, you will need to provide identification, proof of income (e.g., pay stubs or bank statements), and rental history. Some landlords may also require a security deposit.',
  },
  {
    question: 'Can I terminate a lease agreement early?',
    answer:
      'This depends on the terms of your lease agreement. We recommend reviewing the early termination clauses before signing and discussing options with your landlord or agent.',
  },
  {
    question: 'What are the risks of investing in real estate?',
    answer:
      'Real estate investment risks may include market fluctuations, maintenance costs, and inconsistent occupancy rates. We offer professional market analysis to help you minimize these risks.',
  },
  {
    question: 'How do I choose the right property to invest in?',
    answer:
      'Based on your budget, target returns, and the growth potential of the area, we provide tailored property recommendations and detailed analysis reports.',
  },
  {
    question: 'Do high-end properties support virtual tours?',
    answer:
      'Yes, most of our luxury listings include virtual tour options, allowing you to conveniently explore property details online.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12">
     
        <div className="md:w-1/3">
          <button className="px-4 py-1 rounded-full border text-sm bg-gray-100  text-gray-800 mb-4">
            Help Center
          </button>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            FREQUENTLY <br /> ASKED QUESTIONS
          </h1>
        </div>

       
        <div className="md:w-2/3 divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h2>
                <div className="mt-1 text-gray-400">
                  {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && faq.answer && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 mt-2 pr-6"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
