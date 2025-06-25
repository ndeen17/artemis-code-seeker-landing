
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Platforms from '@/components/Platforms';
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
      <Platforms />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
