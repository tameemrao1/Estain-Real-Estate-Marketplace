import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Building2, MapPin, ArrowLeft } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching property data
    const fetchProperty = async () => {
      try {
        // In a real app, you would fetch from an API
        const mockProperty = {
          id: parseInt(id),
          title: "Seaside Serenity Villa",
          image: "https://images.unsplash.com/photo-1688851164809-8b4f12e672c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. This property features modern amenities, a spacious backyard, and breathtaking ocean views.",
          bedrooms: "4",
          bathrooms: "3",
          type: "Villa",
          price: "550,000",
          location: "Miami Beach, FL",
          features: [
            "Ocean View",
            "Private Pool",
            "Modern Kitchen",
            "Smart Home System",
            "Garage Parking",
            "Garden"
          ]
        };
        setProperty(mockProperty);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#A685FA]"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Property Not Found</h2>
          <Link to="/properties" className="text-[#A685FA] hover:underline">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#141414] py-20 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <Link
          to="/properties"
          className="inline-flex items-center text-[#A685FA] hover:text-[#9672e8] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{property.location}</span>
            </div>

            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>{property.type}</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-400">{property.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <div className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-[#A685FA]"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1E1E1E] p-6 rounded-xl">
              <p className="text-gray-400 mb-2">Price</p>
              <p className="text-3xl font-bold">${property.price}</p>
              <button className="w-full mt-4 bg-[#A685FA] hover:bg-[#9672e8] text-white font-medium py-3 rounded-lg transition-colors">
                Contact Agent
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails; 