
const Testimonials = () => {
  const testimonials = [
    {
      quote: "OnCode transformed our product development process. Their team didn't just build our platform—they became strategic partners who understood our vision and helped us scale faster than we thought possible.",
      author: "Sarah Chen",
      position: "CEO at TechFlow",
      initials: "SC",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "The Artemis talent vetting system is game-changing. We went from months of interviewing to finding the perfect senior developer in just two weeks. The quality of candidates was exceptional.",
      author: "Marcus Rodriguez",
      position: "CTO at GrowthLabs",
      initials: "MR", 
      color: "from-purple-500 to-pink-500"
    },
    {
      quote: "OnCode's dedicated team extension felt like having seasoned colleagues from day one. They integrated seamlessly with our workflow and delivered features that exceeded our expectations.",
      author: "Emma Thompson",
      position: "Head of Product at InnovateCorp",
      initials: "ET",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by startups and enterprises who need reliable tech solutions and exceptional talent
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-blue-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-400 mb-8">Trusted by innovative companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-slate-800 p-6 rounded-lg w-full flex items-center justify-center h-16 border border-gray-600">
              <span className="text-white font-bold">TechFlow</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg w-full flex items-center justify-center h-16 border border-gray-600">
              <span className="text-white font-bold">GrowthLabs</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg w-full flex items-center justify-center h-16 border border-gray-600">
              <span className="text-white font-bold">InnovateCorp</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg w-full flex items-center justify-center h-16 border border-gray-600">
              <span className="text-white font-bold">StartupXYZ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
