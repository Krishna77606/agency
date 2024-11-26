import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Users, Rocket, Award } from 'lucide-react';

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const statsRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.from('.stat-item', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }, statsRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section id="about" ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">ABOUT US</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Pushing boundaries in digital creativity since 2024
          </p>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Happy Clients' },
            { icon: <Rocket className="w-8 h-8" />, number: '100+', label: 'Projects Completed' },
            { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Awards Won' }
          ].map((stat, index) => (
            <div key={index} className="stat-item p-8 border border-white/10 backdrop-blur-sm bg-white/5">
              <div className="w-16 h-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/60 mb-6">
              To empower businesses with cutting-edge digital solutions that drive growth and create meaningful connections with their audience.
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/60">
              To be the leading creative force in digital transformation, setting new standards in design, technology, and innovation.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};