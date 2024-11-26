import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white tracking-wider">
              VISUAL PUSH
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <a href="#services" className="text-white hover-line">SERVICES</a>
              <a href="#work" className="text-white hover-line">WORK</a>
              <a href="#about" className="text-white hover-line">ABOUT</a>
              <a href="#contact" className="px-6 py-2 border border-white text-white hover:bg-white/10 transition-colors">
                CONTACT
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#services" className="block px-3 py-2 text-white hover:bg-white/10">SERVICES</a>
            <a href="#work" className="block px-3 py-2 text-white hover:bg-white/10">WORK</a>
            <a href="#about" className="block px-3 py-2 text-white hover:bg-white/10">ABOUT</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:bg-white/10">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
};