"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { colors, spacing, typography, animations } from "../styles/designSystem"

const Exp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("navigating-experience")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We start with a detailed discussion to understand your property needs, preferences, and budget.",
      icon: <Check className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      number: "02",
      title: "Property Search",
      description:
        "Our team searches for properties that match your criteria, presenting you with the best options.",
      icon: <Check className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      number: "03",
      title: "Viewing Properties",
      description:
        "We arrange property viewings at your convenience, providing expert insights during each visit.",
      icon: <Check className="w-6 h-6" />,
      color: "from-pink-600 to-rose-600",
    },
    {
      number: "04",
      title: "Making an Offer",
      description:
        "Once you find your ideal property, we guide you through the offer process and negotiations.",
      icon: <Check className="w-6 h-6" />,
      color: "from-rose-600 to-red-600",
    },
    {
      number: "05",
      title: "Due Diligence",
      description:
        "We conduct thorough property checks and help you with all necessary legal documentation.",
      icon: <Check className="w-6 h-6" />,
      color: "from-red-600 to-orange-600",
    },
    {
      number: "06",
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
      icon: <Check className="w-6 h-6" />,
      color: "from-orange-600 to-amber-600",
    },
  ]

  return (
    <section
      id="navigating-experience"
      className="bg-[#141414] border-[#242424] border-t-4 text-white py-12 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-4">
            Navigating the Estatein Experience
          </h2>
          <p className="text-gray-400 text-base">
            At Estatein, we've designed a straightforward process to help you find and purchase your dream property with
            ease. Here's a step-by-step guide to how it all works.
          </p>
        </motion.div>

        <motion.div
          variants={animations.stagger.container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={animations.stagger.item}
              className="bg-[#1E1E1E] rounded-xl p-6 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#A685FA]/30"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}

export default Exp
