"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    title: "Exceptional Service!",
    content:
      "Estatein provided an exceptional service in finding our dream home. Their attention to detail and personalized approach made all the difference.",
    author: "Emma Thompson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Smooth Transaction",
    content:
      "The team at Estatein ensured a smooth and stress-free property transaction. Their expertise and professionalism are unmatched.",
    author: "Michael Chen",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Highly Recommended!",
    content:
      "I couldn't be happier with the service provided by Estatein. They truly go above and beyond for their clients. Highly recommended!",
    author: "Sarah Johnson",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const scrollToTestimonial = (index) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth
      const itemWidth = scrollWidth / testimonials.length
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
    setCurrentIndex(index)
  }

  const nextTestimonial = () => {
    scrollToTestimonial((currentIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    scrollToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#141414] border-[#1E1E1E] border-b-4 border-t-4 text-white py-16">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Read the success stories and experiences of our valued clients who have found their dream properties through
          Estatein.
        </p>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full sm:w-[90%] flex-shrink-0 snap-center px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination and View All Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
          <span className="text-gray-400 mb-4 sm:mb-0">
            {String(currentIndex + 1).padStart(2, "0")} of {String(testimonials.length).padStart(2, "0")}
          </span>
          <button className="font-medium border border-[#242424] rounded-md text-center hover:bg-[#262626] transition-all text-white focus:outline-none py-2 px-6">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(166, 133, 250, 0.1)' }}
    className="bg-[#141414] border border-[#242424] p-6 rounded-xl transition-all duration-300"
  >
    <motion.div className="flex gap-1 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </motion.div>
      ))}
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-lg font-semibold text-white mb-2"
    >
      {testimonial.title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-300 text-sm mb-4"
    >
      {testimonial.content}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={testimonial.avatar || "/placeholder.svg"}
        alt={testimonial.author}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white font-medium"
        >
          {testimonial.author}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 text-xs"
        >
          {testimonial.location}
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
)

export default TestimonialsSection

