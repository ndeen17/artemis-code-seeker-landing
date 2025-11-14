import { Globe } from 'lucide-react';

const Regions = () => {
  const regions = ["UK", "US", "Canada", "Australia", "UAE"];

  return (
    <section className="py-16 sm:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Global Partnership, Local Insight
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with companies across the UK, US, Canada, Australia, and the UAE.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                {region}
              </span>
            ))}
          </div>

          <div className="bg-slate-900 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something That Works
            </h3>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;