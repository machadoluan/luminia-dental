import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Especialidades</span>
          <h2 className="text-4xl font-bold text-secondary mt-2">Tratamentos Completos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                
                <button className="flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform mt-auto">
                  Saiba mais <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;