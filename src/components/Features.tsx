
const Features = () => {
  const features = [
    {
      number: '01',
      title: 'Global Talent Pool',
      description: 'Our platform gives you access to a diverse and skilled talent pool of software engineers, ensuring fast and agile recruitment processes.',
      icon: '🌍'
    },
    {
      number: '02',
      title: 'Skill-Level Insights',
      description: 'Gain real-time insights into the skill levels of software engineers through our analytics tools, helping you make informed recruitment decisions.',
      icon: '📊'
    },
    {
      number: '03',
      title: 'Customized Testing',
      description: 'Take it a step forward and allow us design the tests that identify the precise skills you need based on your job description.',
      icon: '🎯'
    }
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Access Skilled Engineers
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Revolutionize your recruitment process with AI-powered code analysis and comprehensive skill assessment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <div className="text-blue-400 font-bold text-lg mb-4">{feature.number}.</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enhance Your Recruitment Process
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Artemis offers a demo of our platform, providing you with a firsthand experience of the advanced tools 
              and features designed to enhance your software engineering recruitment process.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
