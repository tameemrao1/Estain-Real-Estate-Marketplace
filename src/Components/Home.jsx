import React from 'react';
import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import TestimonialsSection from './testmonials';
import FAQSection from './faqs';
import Services from './Services';
import Exp from './Exp';
function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Exp />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}

export default Home
