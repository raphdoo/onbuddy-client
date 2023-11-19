import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const FaqSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const questions = [
    {
      question: 'What is Onbuddy?',
      answer:
        'Onbuddy is a platform that helps you find answers to your questions.',
    },
    {
      question: 'How can I get started with Onbuddy?',
      answer:
        'To get started with Onbuddy, simply sign up and create an account.',
    },
    {
      question: 'Is Onbuddy free to use?',
      answer: 'Yes, Onbuddy offers a free basic plan for users.',
    },
    {
      question: 'Can I upgrade to a premium plan?',
      answer: 'Yes, you can upgrade to a premium plan for additional features.',
    },
  ]

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(index)
    }
  }

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-[#EBF4FE] mt-40" id="faq">
      <div className="p-6 rounded-lg max-w-3xl m-auto shadow-lg">
        <div className="faq-head mb-[3rem] flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold uppercase md:text-4xl">
            How <span className="text-[#309CFF]">Onbuddy</span> can help you
          </h2>
          <p className="text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="faq-questions flex flex-col justify-center gap-5 items-start">
          {questions.map((item, index) => (
            <div
              key={index}
              className="faq-question font-semibold flex flex-col w-full"
            >
              <button
                className="faq-question-button md:text-xl w-full flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <FiChevronDown
                  className={`transition-transform transform ${
                    openQuestion === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {openQuestion === index && (
                <div className="faq-answer text-gray-700 mt-2">
                  {item.answer}
                </div>
              )}

              <div className="border-t border-gray-300 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
