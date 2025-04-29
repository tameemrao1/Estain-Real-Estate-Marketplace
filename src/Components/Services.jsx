import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart2,
  Calculator,
  Settings,
  PieChart,
  Users,
  PenTool as Tool,
  DollarSign,
  Shield,
  Target,
  MessageSquare,
  Award,
} from "lucide-react"

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      },
    },
  }

  const sections = [
    {
      title: "Unlock Property Value",
      description:
        "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.",
      services: [
        {
          icon: <BarChart2 className="w-5 h-5" />,
          title: "Valuation Mastery",
          description: "Discover the true worth of your property with our expert valuation services.",
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Strategic Marketing",
          description: "Selling a property requires more than just listing it. It demands a strategic marketing approach.",
        },
        {
          icon: <MessageSquare className="w-5 h-5" />,
          title: "Negotiation Wizardry",
          description: "Negotiating the best deal is an art, and our negotiation experts are masters at it.",
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Closing Success",
          description: "A successful sale is not complete until the closing. We guide you through the entire closing process.",
        },
      ],
      ctaTitle: "Unlock the Value of Your Property Today",
      ctaDescription: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
    },
    {
      title: "Effortless Property Management",
      description:
        "Owning a property should be effortless, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.",
      services: [
        {
          icon: <Users className="w-5 h-5" />,
          title: "Tenant Harmony",
          description: "Our Tenant Management services ensure that your tenants have a smooth and relaxing experience.",
        },
        {
          icon: <Tool className="w-5 h-5" />,
          title: "Maintenance Ease",
          description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
        },
        {
          icon: <DollarSign className="w-5 h-5" />,
          title: "Financial Peace of Mind",
          description: "Managing a property's finances can be complex. Our financial experts take care of rent collection.",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Legal Guardian",
          description: "Stay compliant with property laws and regulations effortlessly.",
        },
      ],
      ctaTitle: "Experience Effortless Property Management",
      ctaDescription: "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    },
    {
      title: "Smart Investments, Informed Decisions",
      description:
        "Building a robust portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investment decisions across various real estate categories.",
      services: [
        {
          icon: <BarChart2 className="w-5 h-5" />,
          title: "Market Insight",
          description: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.",
        },
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "ROI Assessment",
          description: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.",
        },
        {
          icon: <Settings className="w-5 h-5" />,
          title: "Customized Strategies",
          description: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.",
        },
        {
          icon: <PieChart className="w-5 h-5" />,
          title: "Diversification Mastery",
          description: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.",
        },
      ],
      ctaTitle: "Unlock Your Investment Potential",
      ctaDescription: "Explore our Investment Advisory Service categories and make informed decisions to grow your portfolio strategically.",
    },
  ]

  return (
    <section className="bg-[#141414] py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-[#A685FA]/10 filter blur-[100px]"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#A685FA]/5 filter blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-24">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {section.title}
              </h2>
              <p className="text-gray-400 text-base">
                {section.description}
              </p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {section.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#1E1E1E] rounded-xl p-6 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[#A685FA]/30"
                >
                  <div className="w-12 h-12 rounded-full bg-[#A685FA]/10 flex items-center justify-center mb-6">
                    <div className="text-[#A685FA]">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1E1E1E] rounded-xl p-8 border border-[rgba(255,255,255,0.1)]"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {section.ctaTitle}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-2xl">
                    {section.ctaDescription}
                  </p>
                </div>
                <button className="bg-[#A685FA] hover:bg-[#9672e8] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        ))}
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

export default Services
