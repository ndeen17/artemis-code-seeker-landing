
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Regions from '@/components/Regions';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Services />
      <WhyChoose />
      <Regions />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
