
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Artemis
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Pioneering the future of software engineering recruitment through AI-powered code analysis
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
