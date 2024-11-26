import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { ProjectRequestModal } from './ProjectRequestModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      gsap.from('.hero-image', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="hero-image absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="hero-text text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              VISUAL
              <span className="block">PUSH</span>
            </h1>
            <p className="hero-text text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              We create digital experiences that leave lasting impressions
            </p>
            <div className="hero-text flex justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors flex items-center gap-2 group"
              >
                Start Project 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors">
                View Work
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12">
          <p className="text-white/60 text-sm tracking-wider">EST. 2024</p>
        </div>
        
        <div className="absolute bottom-12 right-12">
          <p className="text-white/60 text-sm tracking-wider">CREATIVE AGENCY</p>
        </div>
      </div>

      <ProjectRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};