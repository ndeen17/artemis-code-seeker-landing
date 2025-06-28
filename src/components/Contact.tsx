
import { ExternalLink, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Connect with us
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Schedule a consultation with one of our recruitment specialists to explore how Artemis can elevate your software engineering team.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-400/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Book Your Demo
            </h3>
            <p className="text-gray-300 mb-8 text-center">
              Ready to see Artemis in action? Schedule a personalized demo with our team to discover how our AI-powered platform can transform your engineering recruitment process.
            </p>
            <div className="text-center">
              <a
                href="https://calendly.com/artemis-hiringuk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo Call
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-400/20">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-white font-semibold text-lg">EMAIL</h3>
              </div>
              <p className="text-gray-300">SALES@ARTEMIS.DIGITAL</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-400/20">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 w-6 h-6 mr-3" />
                <h3 className="text-white font-semibold text-lg">ADDRESS</h3>
              </div>
              <p className="text-gray-300">FORTUNES DOCK<br />1 JAM LANE,<br />LONDON<br />E16 1GT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
