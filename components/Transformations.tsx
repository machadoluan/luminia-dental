import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { TRANSFORMATIONS } from '../constants';

const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="py-24 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Resultados Reais</span>
          <h2 className="text-4xl font-bold text-secondary mt-2">Transformações Incríveis</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Arraste o cursor para ver o "antes e depois" de alguns dos nossos tratamentos. Cada sorriso conta uma história de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSFORMATIONS.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              beforeImage={item.before}
              afterImage={item.after}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;