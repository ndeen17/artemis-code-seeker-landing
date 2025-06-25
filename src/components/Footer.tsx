
const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Artemis <span className="text-purple-400">by Oncode</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Revolutionizing software engineer recruitment through AI-powered code analysis and skill assessment.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Accessibility</h3>
            <p className="text-gray-300">
              We're committed to making our platform accessible to everyone.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            ©2025 BY ONCODE DIGITAL SOLUTIONS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
