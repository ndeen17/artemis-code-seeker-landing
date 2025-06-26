
const Testimonials = () => {
  return (
    <section id="partners" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        {/* Partner logos moved above testimonial */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* VELO CITY with geometric design */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 text-center hover:bg-blue-500/20 transition-all duration-300 border border-blue-400/20 flex items-center justify-center min-h-[120px] relative">
            <div className="text-white relative">
              {/* Geometric shape for Velo City */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-white rotate-45 opacity-80"></div>
              <div className="text-2xl sm:text-3xl font-bold tracking-wider">VELO</div>
              <div className="text-xl sm:text-2xl font-bold tracking-wider mt-1">CITY</div>
            </div>
          </div>
          
          {/* Pomegranate with leaf design */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 text-center hover:bg-blue-500/20 transition-all duration-300 border border-blue-400/20 flex items-center justify-center min-h-[120px] relative">
            <div className="text-white relative">
              {/* Leaf shape for Pomegranate */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-8 bg-white rounded-full transform rotate-45 opacity-80"></div>
                <div className="w-3 h-4 bg-white rounded-full transform -rotate-12 absolute top-1 right-0 opacity-60"></div>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1 mt-2">Pome</div>
              <div className="text-xl sm:text-2xl font-bold">granate</div>
            </div>
          </div>
          
          {/* MIKRON with circle design */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 text-center hover:bg-blue-500/20 transition-all duration-300 border border-blue-400/20 flex items-center justify-center min-h-[120px]">
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold tracking-wider flex items-center justify-center">
                MIKR
                <span className="inline-block w-4 h-4 bg-white rounded-full mx-1 relative">
                  <span className="absolute inset-1 bg-blue-600 rounded-full"></span>
                </span>
                N
              </div>
            </div>
          </div>
        </div>
        
        {/* Rebecca's testimonial moved below partners */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border border-blue-400/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-white flex-shrink-0">
              RH
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 leading-relaxed italic">
                "Artemis has been instrumental in our talent acquisition journey. Their platform has enabled us to identify and engage with exceptional software engineering talent, driving our technological advancements."
              </blockquote>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">Rebecca Hudson</div>
                <div className="text-blue-400 text-sm sm:text-base">CTO at Velocity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
