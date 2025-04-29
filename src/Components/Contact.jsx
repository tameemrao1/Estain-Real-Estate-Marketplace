import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="min-h-screen bg-[#141414] py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-[#A685FA]/10 filter blur-[100px]"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#A685FA]/5 filter blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Have questions or want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A685FA]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#A685FA]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-gray-400">123 Real Estate Avenue, Suite 100</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A685FA]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#A685FA]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A685FA]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#A685FA]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <p className="text-gray-400">info@estatein.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1E1E1E] p-8 rounded-xl border border-[rgba(255,255,255,0.1)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A685FA] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A685FA] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A685FA] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#A685FA] transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#A685FA] hover:bg-[#8B6CD9] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
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

export default Contact 