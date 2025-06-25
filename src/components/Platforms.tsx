
const Platforms = () => {
  const platforms = [
    { name: 'GitHub', logo: '🐱' },
    { name: 'Visual Studio', logo: '💻' },
    { name: 'GitLab', logo: '🦊' },
    { name: 'BitBucket', logo: '🪣' },
    { name: 'Azure DevOps', logo: '☁️' },
    { name: 'CodeCommit', logo: '📝' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Supported Platforms
          </h2>
          <p className="text-gray-300 text-lg">
            Seamlessly integrate with your existing development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-4xl mb-4">{platform.logo}</div>
              <h3 className="text-white font-semibold">{platform.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-purple-400 font-semibold">+20 more platforms supported</p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
