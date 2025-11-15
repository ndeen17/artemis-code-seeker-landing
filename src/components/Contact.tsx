
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project, team needs, or how OnCode can help accelerate your tech goals. 
            Our experts are ready to turn your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-blue-400/20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
              Start Your Project Today
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-center leading-relaxed text-sm sm:text-base">
              Whether you need a custom product built, top talent vetted, or a dedicated team assembled, 
              we're here to help you succeed. Book a discovery call to explore possibilities.
            </p>
            <div className="text-center">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px] max-w-[350px] mx-auto">
                Book a Discovery Call
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-3 sm:mb-4">
                <Mail className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <h3 className="text-white font-semibold text-base sm:text-lg">Email Us</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base break-all">sales@artemishiring.co.uk</p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-3 sm:mb-4">
                <Phone className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <h3 className="text-white font-semibold text-base sm:text-lg">Call Us</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">+44 7760 901565</p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-3 sm:mb-4">
                <MapPin className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <h3 className="text-white font-semibold text-base sm:text-lg">Visit Us</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Tech Hub London<br />
                123 Innovation Street<br />
                London EC2A 4BX<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
