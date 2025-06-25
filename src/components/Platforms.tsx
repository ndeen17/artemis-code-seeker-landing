
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Supported Platforms
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Seamlessly integrate with your existing development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 text-center hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{platform.logo}</div>
              <h3 className="text-white font-semibold text-sm sm:text-base">{platform.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-blue-400 font-semibold text-sm sm:text-base">+20 more platforms supported</p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
