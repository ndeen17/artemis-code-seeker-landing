
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
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Start Your Project Today
            </h3>
            <p className="text-gray-300 mb-8 text-center leading-relaxed">
              Whether you need a custom product built, top talent vetted, or a dedicated team assembled, 
              we're here to help you succeed. Book a discovery call to explore possibilities.
            </p>
            <div className="text-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book a Discovery Call
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-white font-semibold text-lg">Email Us</h3>
              </div>
              <p className="text-gray-300">sales@artemishiring.co.uk</p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-4">
                <Phone className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-white font-semibold text-lg">Call Us</h3>
              </div>
              <p className="text-gray-300">+44 (0) 20 1234 5678</p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-white font-semibold text-lg">Visit Us</h3>
              </div>
              <p className="text-gray-300">
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
