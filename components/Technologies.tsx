import React from 'react';
import { TECHNOLOGIES } from '../constants';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Inovação</span>
            <h2 className="text-4xl font-bold text-secondary mt-2">Nossa Tecnologia</h2>
          </div>
          <p className="text-gray-500 max-w-md text-right md:text-left">
            Investimos no que há de mais moderno na odontologia digital para garantir diagnósticos precisos e tratamentos mais rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNOLOGIES.map((tech, index) => (
            <div key={tech.id} className={`group relative rounded-3xl overflow-hidden h-[400px] cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
              <img 
                src={tech.image} 
                alt={tech.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;