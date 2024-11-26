import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">VISUAL PUSH</h3>
            <p className="text-white/60">
              Creating exceptional digital experiences that push boundaries and drive results.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-white transition-colors">Web Development</li>
              <li className="hover:text-white transition-colors">UI/UX Design</li>
              <li className="hover:text-white transition-colors">Digital Marketing</li>
              <li className="hover:text-white transition-colors">Social Media</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li className="hover:text-white transition-colors">About Us</li>
              <li className="hover:text-white transition-colors">Portfolio</li>
              <li className="hover:text-white transition-colors">Careers</li>
              <li className="hover:text-white transition-colors">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Visual Push. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};