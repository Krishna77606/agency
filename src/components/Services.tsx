import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Globe, Paintbrush, Share2, Search } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites that convert visitors into customers with modern technologies and best practices.'
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media',
    description: 'Strategic social media management to build your brand and engage your audience.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Marketing',
    description: 'Data-driven digital marketing strategies to increase your online visibility.'
  }
];

export const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const servicesRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.from('.service-card', {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }, servicesRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section id="services" ref={ref} className="py-24 bg-black">
      <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">SERVICES</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-8 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:border-white/40 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};