import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, UserCheck, Users, User, Target } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "Product & App Development",
      headline: "Build Products That Matter",
      description: "We design and develop digital products that are scalable, intuitive, and aligned with your business goals. From web platforms to mobile apps and internal tools, we turn your ideas into reliable, user-focused software.",
      cta: "Start a Project"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-cyan-400" />,
      title: "Artemis (Talent Vetting Tool)",
      headline: "Hire With Confidence",
      description: "Artemis is our in-house platform that evaluates technical skills objectively. It helps you avoid bad hires, speed up recruitment, and ensure every candidate meets your standards.",
      cta: "Learn More About Artemis"
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Team Extension",
      headline: "Dedicated Teams for Faster Execution",
      description: "Add engineers, designers, or product managers who integrate seamlessly with your internal team. Perfect for scaling new features, accelerating delivery, or taking on larger initiatives.",
      cta: "Extend Your Team"
    },
    {
      icon: <User className="w-12 h-12 text-purple-400" />,
      title: "Single Specialist Staffing",
      headline: "Specialists On Demand",
      description: "When you need a single expert—an engineer, UX designer, or product lead—we provide top-level professionals ready to contribute from day one.",
      cta: "Hire a Specialist"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-400" />,
      title: "In-House Product Support",
      headline: "Founder-Level Product Direction",
      description: "We provide hands-on product strategy, roadmap planning, and ongoing support usually reserved for in-house startup teams. Ideal for founders and lean teams that need senior product leadership.",
      cta: "Get Product Support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Product development, team building, and technical staffing—designed for businesses that want to grow intelligently.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="mb-16 bg-slate-800 rounded-2xl p-8 border border-blue-400/20"
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {service.headline}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  {service.description}
                </p>
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px] max-w-[300px] mx-auto">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;