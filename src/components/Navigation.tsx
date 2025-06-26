import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              {/* Dot pattern logo */}
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-white">
                Artemis <span className="text-blue-400">by Oncode</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#product" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Product
              </a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#partners" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Partners
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Product
            </a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              About
            </a>
            <a href="#partners" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Partners
            </a>
            <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-base font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
