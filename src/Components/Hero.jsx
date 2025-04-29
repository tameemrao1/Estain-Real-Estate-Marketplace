import React from "react";
import heroImage from "../assets/Images/hero.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] text-white border border-[#1E1E1E] border-b-4">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-8 h-full">
          {/* Left Content Section */}
          <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-[#999999] mb-6 font-medium text-lg">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that
              matches your dreams.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#"
                className="px-8 py-3 font-medium border border-[#262626] rounded-md text-center hover:bg-[#262626] transition-all text-white focus:outline-none"
              >
                Learn More
              </a>
              <a
                href="properties"
                className="px-8 py-3 font-medium bg-[#703BF7] rounded-md text-center hover:opacity-90 transition-all text-white focus:outline-none"
              >
                Browse Properties
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-[#262626] bg-[#1A1A1A]">
                <h3 className="text-3xl text-white font-bold mb-2">200+</h3>
                <p className="text-[#999999] font-medium">Happy Customers</p>
              </div>
              <div className="p-4 rounded-lg border border-[#262626] bg-[#1A1A1A]">
                <h3 className="text-3xl text-white font-bold mb-2">10k+</h3>
                <p className="text-[#999999] font-medium">Properties For Clients</p>
              </div>
              <div className="p-4 col-span-2 text-center rounded-lg border border-[#262626] bg-[#1A1A1A]">
                <h3 className="text-3xl text-white font-bold mb-2">16+</h3>
                <p className="text-[#999999] font-medium">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative md:w-1/2 md:h-[85vh] h-[60vh]">
            <img
              src={heroImage}
              alt="Modern blue-tinted building"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
