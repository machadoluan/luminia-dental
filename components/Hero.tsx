import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-light">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
              Sorria com confiança e <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                saúde plena.
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Na Lumina Odontologia, unimos tecnologia avançada e atendimento humanizado para transformar o seu sorriso. Cuidamos de você com o carinho que você merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-700 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-secondary border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">10+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Anos de Exp.</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">5k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Sorrisos</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="Consultório Odontológico Moderno" 
              className="relative w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/5]"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce hidden sm:flex">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <div>
                <p className="font-bold text-gray-800">5 Estrelas</p>
                <p className="text-xs text-gray-500">Google Avaliações</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;