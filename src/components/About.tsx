
import { Circle, Square, Triangle, ArrowRight } from 'lucide-react';

const About = () => {
  const aboutItems = [
    {
      title: 'Our Mission',
      description: 'Turning Technology Into a Growth Tool. Many businesses struggle with tech—not because they lack ideas, but because they lack the right people or clear execution. Our mission is to change that.',
      icon: <Circle className="w-6 h-6 text-white" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Our Approach',
      description: 'We take time to understand your goals, workflows, and customer experience. From there, we assemble the right team, develop the right solution, and refine it continuously after launch.',
      icon: <Square className="w-6 h-6 text-white" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'What Makes Us Different',
      description: 'Human-Centered Execution, Right Talent Every Time, and Long-Term Partnership. We don\'t disappear after launch—we stay to support growth and improvements.',
      icon: <Triangle className="w-6 h-6 text-white" />,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            OnCode is a tech partnership firm focused on building better products, stronger teams, and smoother digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-700 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer min-w-[180px] w-full sm:w-auto max-w-[300px]">
            Work With Us
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
