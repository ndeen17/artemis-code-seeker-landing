
const Testimonials = () => {
  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-300 text-lg">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
              RH
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
                "Artemis has been instrumental in our talent acquisition journey. Their platform has enabled us to identify and engage with exceptional software engineering talent, driving our technological advancements."
              </blockquote>
              <div>
                <div className="font-bold text-white text-lg">Rebecca Hudson</div>
                <div className="text-purple-400">CTO at Velocity</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {['TechCorp', 'InnovateLab', 'CodeForge', 'DevStream'].map((company, index) => (
            <div
              key={company}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{company.charAt(0)}</span>
              </div>
              <h3 className="text-white font-semibold">{company}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
