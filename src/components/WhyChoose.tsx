import { ArrowRight, Circle } from 'lucide-react';

const WhyChoose = () => {
  const journeySteps = [
    {
      step: "01",
      title: "Understand Your Goals",
      description: "We build with a clear understanding of your goals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Match Top Talent",
      description: "We match you with top-tier technical talent",
      color: "from-cyan-500 to-green-500"
    },
    {
      step: "03",
      title: "Create Scalable Systems", 
      description: "We create systems that scale",
      color: "from-green-500 to-purple-500"
    },
    {
      step: "04",
      title: "Long-term Partnership",
      description: "We stay involved long after launch",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Journey With You
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From understanding your vision to delivering lasting results - here's how we move your business forward
          </p>
        </div>
        
        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 to-purple-500"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    {/* Step Circle */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 relative z-10`}>
                      {step.step}
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-slate-800 p-6 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-y-2">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow between steps (except last one) */}
                  {index < journeySteps.length - 1 && (
                    <ArrowRight className="absolute top-20 -right-4 w-8 h-8 text-gray-400 hidden xl:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800 p-6 rounded-lg border border-blue-400/20">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connecting line for mobile (except last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-gray-600 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;