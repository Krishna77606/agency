import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: 'web', label: 'Web Development', price: 'Starting from $2,999' },
  { id: 'ui', label: 'UI/UX Design', price: 'Starting from $1,999' },
  { id: 'social', label: 'Social Media Management', price: 'Starting from $999/month' },
  { id: 'seo', label: 'SEO & Marketing', price: 'Starting from $1,499/month' }
];

interface ProjectRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectRequestModal = ({ isOpen, onClose }: ProjectRequestModalProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:gokarnkark06@gmail.com?subject=Project Request - ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ABudget: ${formData.budget}%0D%0ASelected Services: ${selectedServices.join(', ')}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = mailtoLink;
    onClose();
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-black border border-white/10 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Select Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map(service => (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 border cursor-pointer transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-white text-white'
                          : 'border-white/10 text-white/60'
                      }`}
                    >
                      <h4 className="font-semibold mb-2">{service.label}</h4>
                      <p className="text-sm opacity-60">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-white/5 border border-white/10 text-white p-3 focus:border-white/20 focus:ring-0"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/5 border border-white/10 text-white p-3 focus:border-white/20 focus:ring-0"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-white/5 border border-white/10 text-white p-3 focus:border-white/20 focus:ring-0"
                  value={formData.company}
                  onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Budget Range"
                  className="bg-white/5 border border-white/10 text-white p-3 focus:border-white/20 focus:ring-0"
                  value={formData.budget}
                  onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>

              <textarea
                placeholder="Project Details"
                rows={4}
                required
                className="w-full bg-white/5 border border-white/10 text-white p-3 focus:border-white/20 focus:ring-0"
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-8 hover:bg-white/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};