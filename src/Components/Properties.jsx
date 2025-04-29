import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Search, MapPin, Home, DollarSign, Maximize, Calendar, ChevronDown, X, Filter, Sparkles } from "lucide-react"
import FeaturedProperties from "./FeaturedProperties"
const Properties = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [activeFilter, setActiveFilter] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    propertySize: "",
    buildYear: "",
  })
  const [filtersApplied, setFiltersApplied] = useState(false)

  const sectionRef = useRef(null)
  const searchRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveFilter(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  const handleFilterSelect = (filter, value) => {
    setSelectedFilters({ ...selectedFilters, [filter]: value })
    setActiveFilter(null)
    setFiltersApplied(true)
  }

  const clearFilters = () => {
    setSelectedFilters({
      location: "",
      propertyType: "",
      priceRange: "",
      propertySize: "",
      buildYear: "",
    })
    setFiltersApplied(false)
  }

  const filterOptions = {
    location: ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Seattle"],
    propertyType: ["Apartment", "House", "Villa", "Condo", "Townhouse", "Land"],
    priceRange: ["$100k - $200k", "$200k - $500k", "$500k - $1M", "$1M - $2M", "$2M+"],
    propertySize: ["< 1000 sq ft", "1000-2000 sq ft", "2000-3000 sq ft", "3000-5000 sq ft", "> 5000 sq ft"],
    buildYear: ["Before 1990", "1990 - 2000", "2000 - 2010", "2010 - 2020", "After 2020"],
  }

  const filterIcons = {
    location: <MapPin className="w-4 h-4" />,
    propertyType: <Home className="w-4 h-4" />,
    priceRange: <DollarSign className="w-4 h-4" />,
    propertySize: <Maximize className="w-4 h-4" />,
    buildYear: <Calendar className="w-4 h-4" />,
  }

  const filterLabels = {
    location: "Location",
    propertyType: "Property Type",
    priceRange: "Pricing Range",
    propertySize: "Property Size",
    buildYear: "Build Year",
  }

  return (
    <section ref={sectionRef} className="bg-[#141414] py-20 px-4 md:px-8 relative overflow-hidden" id="property-search">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-[#A685FA]/10 filter blur-[100px]"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#A685FA]/5 filter blur-[120px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Find Your Dream Property</h2>
          <p className="text-gray-400">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your life. With
            categories to suit every dreamer, your journey begins here.
          </p>
        </motion.div>

        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div
            className={`relative bg-[#1E1E1E] rounded-xl transition-all duration-300 ${
              isSearchFocused ? "ring-2 ring-[#A685FA]/50" : "ring-1 ring-gray-800"
            }`}
          >
            <div className="flex items-center">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search For A Property"
                  className="w-full bg-transparent text-white px-5 py-4 focus:outline-none"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setSearchValue("")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button className="bg-[#A685FA] hover:bg-[#9672e8] text-white font-medium px-6 py-4 rounded-r-xl transition-all duration-300 flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Find Property</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 p-4 border-t border-gray-800">
              {Object.keys(filterLabels).map((filter) => (
                <div key={filter} className="relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      selectedFilters[filter]
                        ? "bg-[#A685FA]/20 text-white"
                        : "bg-[#1A1A1A] text-gray-300 hover:bg-[#252525]"
                    } ${activeFilter === filter ? "ring-2 ring-[#A685FA]/50" : ""}`}
                    onClick={() => toggleFilter(filter)}
                  >
                    {filterIcons[filter]}
                    <span>{selectedFilters[filter] ? selectedFilters[filter] : filterLabels[filter]}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeFilter === filter ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeFilter === filter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-2 w-56 bg-[#1E1E1E] rounded-lg shadow-lg border border-gray-800 py-2"
                      >
                        {filterOptions[filter].map((option) => (
                          <button
                            key={option}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#252525] transition-colors ${
                              selectedFilters[filter] === option ? "text-[#A685FA]" : "text-gray-300"
                            }`}
                            onClick={() => handleFilterSelect(filter, option)}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {filtersApplied && (
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#2A2A2A] text-gray-300 hover:bg-[#353535] transition-all duration-200"
                  onClick={clearFilters}
                >
                  <X className="w-4 h-4" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-between items-center"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Filter className="w-4 h-4" />
            <span>
              {filtersApplied
                ? `${Object.values(selectedFilters).filter(Boolean).length} filters applied`
                : "No filters applied"}
            </span>
          </div>

          <button className="flex items-center gap-2 text-[#A685FA] text-sm font-medium hover:text-[#9672e8] transition-colors">
            <Sparkles className="w-4 h-4" />
            <span>Discover Featured Properties</span>
          </button>
        </motion.div>
      </div>
                <FeaturedProperties />
      {/* CSS for background grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}

export default Properties
