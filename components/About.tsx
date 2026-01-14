import React from 'react';
import { Shield, Users, Clock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Shield size={32} />,
    title: "Tecnologia de Ponta",
    desc: "Equipamentos modernos e técnicas minimamente invasivas para tratamentos seguros e precisos.",
    details: ["Raio-X Digital", "Câmera Intraoral"]
  },
  {
    icon: <Users size={32} />,
    title: "Atendimento Humanizado",
    desc: "Nossa equipe prioriza seu conforto e bem-estar, em um ambiente acolhedor e relaxante.",
    details: ["Acessibilidade Total", "Ambiente Climatizado"]
  },
  {
    icon: <Clock size={32} />,
    title: "Horários Estendidos",
    desc: "Sabemos que sua rotina é corrida. Oferecemos horários flexíveis, inclusive aos sábados.",
    details: ["Segunda a Sábado", "Agendamento Online"]
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a Lumina?</h2>
          <p className="text-cyan-100 text-lg">
            Excelência técnica e cuidado pessoal em cada detalhe. 
            Nossa missão é promover saúde bucal e autoestima para toda a sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white text-secondary rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-cyan-900/20"
            >
              <div className="w-14 h-14 bg-cyan-50 text-primary rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {feature.desc}
              </p>
              
              <div className="border-t border-gray-100 pt-4 mt-auto">
                {feature.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm font-semibold text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;