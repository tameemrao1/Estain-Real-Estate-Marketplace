"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What sets Estatein apart from other real estate agencies?",
    answer:
      "Estatein stands out with our personalized approach, cutting-edge technology, and unparalleled market expertise. We offer a seamless, client-focused experience that goes beyond just buying and selling properties.",
  },
  {
    question: "How does the property valuation process work?",
    answer:
      "Our valuation process combines advanced market analytics, on-site evaluations, and insights from our experienced agents. We consider factors like location, property condition, market trends, and comparative sales to provide an accurate and competitive valuation.",
  },
  {
    question: "Can Estatein help with property management services?",
    answer:
      "We offer comprehensive property management services, including tenant screening, rent collection, maintenance coordination, and regular property inspections. Our goal is to maximize your investment while minimizing your stress.",
  },
  {
    question: "What types of properties does Estatein deal with?",
    answer:
      "Estatein has expertise in a wide range of properties, including residential homes, luxury estates, commercial buildings, and investment properties. Whether you're looking for a cozy apartment or a large industrial space, we've got you covered.",
  },
  {
    question: "How can I get started with buying or selling a property through Estatein?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call. One of our expert agents will be in touch promptly to discuss your needs and guide you through the next steps in your real estate journey.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#141414] border-[#1E1E1E] border-b-4 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12">
          Find quick answers to common questions about Estatein's services and processes.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-[#242424] rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-[#A685FA]/30"
            >
              <motion.button
                whileHover={{ backgroundColor: 'rgba(106, 76, 255, 0.1)' }}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#6A4CFF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6A4CFF]" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="px-8 py-3 font-medium bg-[#703BF7] rounded-md text-center hover:opacity-90 transition-all text-white focus:outline-none inline-block"
          >
            Browse Properties
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FAQSection
