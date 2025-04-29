import React from 'react';
import { motion } from "framer-motion"
import { Building2, Target, Users, Award } from "lucide-react"

const OurJourneyAndValues = () => {
  const values = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, ensuring the highest quality standards.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do, and we're committed to their success.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge solutions in the real estate industry.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-[#141414] py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-[#A685FA]/10 filter blur-[100px]"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#A685FA]/5 filter blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Journey & Values
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            At Estatein, we believe in building lasting relationships and creating value through our core principles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1E1E1E] rounded-xl p-6 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#A685FA]/30"
            >
              <div className="w-12 h-12 rounded-full bg-[#A685FA]/10 flex items-center justify-center mb-6">
                <div className="text-[#A685FA]">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {value.description}
              </p>
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
  );
};

export default OurJourneyAndValues;
