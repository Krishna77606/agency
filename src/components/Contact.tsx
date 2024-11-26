import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.from('.contact-item', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }, formRef);

      return () => ctx.revert();
    }
  }, [inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:gokarnkark06@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Contact Form Submission'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-black relative">
      <div ref={formRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">GET IN TOUCH</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: <Mail />, title: 'Email', content: 'gokarnkark06@gmail.com' },
              { icon: <Phone />, title: 'Phone', content: '+1 (555) 123-4567' },
              { icon: <MapPin />, title: 'Location', content: 'New York, NY 10012' }
            ].map((item, index) => (
              <div key={index} className="contact-item flex items-start space-x-4">
                <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="contact-item">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/20 focus:ring-0 rounded-none"
              />
            </div>
            <div className="contact-item">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/20 focus:ring-0 rounded-none"
              />
            </div>
            <div className="contact-item">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/20 focus:ring-0 rounded-none"
              />
            </div>
            <div className="contact-item">
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/20 focus:ring-0 rounded-none"
              />
            </div>
            <button 
              type="submit"
              className="contact-item w-full px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};