import { CheckCircle } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    "We build with a clear understanding of your goals",
    "We match you with top-tier technical talent", 
    "We create systems that scale",
    "We stay involved long after launch"
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Tech That Moves Your Business Forward
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 text-left p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;