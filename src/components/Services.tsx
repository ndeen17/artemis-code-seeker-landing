import { Code, Users, UserCheck, User, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Product & App Development",
      description: "We build custom products, web apps, mobile apps, and internal systems."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-cyan-400" />,
      title: "Artemis — Talent Vetting",
      description: "Our proprietary tool ensures you hire only qualified technical talent."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Extension (Dedicated Teams)",
      description: "Designers, engineers, and product managers working directly with your business."
    },
    {
      icon: <User className="w-8 h-8 text-purple-400" />,
      title: "Single Specialist Staffing",
      description: "Individual experts who join your team to deliver focused results."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "In-House Product Support",
      description: "Founder-level guidance and ongoing product direction."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
            Solutions Designed for Growth
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Services
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-900 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;