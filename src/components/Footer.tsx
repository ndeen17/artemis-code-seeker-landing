import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900/50 backdrop-blur-lg border-t border-blue-400/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-white">
                OnCode
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Building better products, stronger teams, and smoother digital experiences for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Product Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Artemis Talent Vetting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Team Extension</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Specialist Staffing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Get in Touch</a></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left">Book a Discovery Call</button></li>
              <li><a href="mailto:sales@artemishiring.co.uk" className="text-gray-300 hover:text-white transition-colors">sales@artemishiring.co.uk</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            ©2025 OnCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
