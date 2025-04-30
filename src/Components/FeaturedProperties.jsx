import { useState } from "react"
import { ChevronLeft, ChevronRight, Bed, Bath, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const properties = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    image:
       "https://images.unsplash.com/photo-1688851164809-8b4f12e672c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedrooms: "4",
    bathrooms: "3",
    type: "Villa",
    price: "550,000",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    image:
      "https://plus.unsplash.com/premium_photo-1723669629708-0de9b27820b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A chic and fully furnished 2-bedroom apartment with panoramic city views...",
    bedrooms: "2",
    bathrooms: "2",
    type: "Villa",
    price: "550,000",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    image:
      "https://images.unsplash.com/photo-1613225948418-75203137b5db?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    bedrooms: "3",
    bathrooms: "2.5",
    type: "Villa",
    price: "550,000",
  },
]

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProperties = 60

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
  }

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
  }

  const PropertyCard = ({ property }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#141414] rounded-xl p-4 flex flex-col transition-all border border-[#242424] hover:border-[#A685FA]/30 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#A685FA]/5"
    >
      <div className="relative aspect-[4/3] mb-4 border-[#4D4D4D] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
      <p className="text-gray-400 text-sm mb-4">
        {property.description}
        <Link to={`/properties/${property.id}`} className="text-white ml-1 hover:underline">Read More</Link>
      </p>
      <div className="flex gap-4 mb-4">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Bed className="w-5 h-5" />
          <span className="text-sm">{property.bedrooms}-Bedroom</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Bath className="w-5 h-5" />
          <span className="text-sm">{property.bathrooms}-Bathroom</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          <span className="text-sm">{property.type}</span>
        </motion.div>
      </div>
      <div className="mt-auto">
        <div className="mb-3">
          <p className="text-sm text-gray-400">Price</p>
          <p className="text-xl font-semibold">${property.price}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#7B3FE4] py-3 rounded-md hover:opacity-90 transition-all"
        >
          <Link to={`/properties/${property.id}`} className="block w-full">
            View Property Details
          </Link>
        </motion.button>
      </div>
    </motion.div>
  )

  return (
    <section className="bg-[#141414] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-400">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
              homes and investments available through Estatein.
            </p>
          </div>
          <Link to="/properties" className="mt-4 md:mt-0 px-6 py-3 font-medium border border-[#242424] rounded-md text-center hover:bg-[#262626] transition-all text-white focus:outline-none">
            View All Properties
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden mb-8">
          <PropertyCard property={properties[currentIndex]} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} of {String(totalProperties).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button onClick={prevProperty} className="p-4 rounded-full border border-[#242424] hover:bg-[#262626] transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextProperty} className="p-4 rounded-full border border-[#242424] hover:bg-[#262626] transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
