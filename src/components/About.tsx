
const About = () => {
  const aboutItems = [
    {
      title: 'Our Story',
      description: 'Artemis was founded with the vision of revolutionizing the software engineer recruitment industry. Our journey is driven by the commitment to provide innovative solutions for connecting businesses with top-tier engineering talent.',
      icon: '📖'
    },
    {
      title: 'Our Vision',
      description: 'Our vision is to create a global platform that simplifies and optimizes the process of identifying, assessing, and recruiting software engineering professionals, ultimately shaping the future of tech talent acquisition.',
      icon: '🔮'
    },
    {
      title: 'Our Technology',
      description: 'We continuously invest in cutting-edge technology to develop tools that streamline the evaluation and recruitment of software engineers, ensuring high efficiency and accuracy.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Artemis
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Pioneering the future of software engineering recruitment through AI-powered code analysis
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
