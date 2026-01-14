import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
              <p className="text-gray-400 text-lg">
                Estamos prontos para cuidar do seu sorriso. Visite-nos ou entre em contato para agendar sua avaliação.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-gray-400">Av. Paulista, 1000 - Conj. 123<br/>Bela Vista, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefones</h4>
                  <p className="text-gray-400">WhatsApp: (11) 99999-9999</p>
                  <p className="text-gray-400">Fixo: (11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 08:00 - 19:00</p>
                  <p className="text-gray-400">Sábado: 08:00 - 13:00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 bg-primary rounded-full hover:bg-cyan-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-primary rounded-full hover:bg-cyan-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:contato@luminaodonto.com.br" className="p-3 bg-primary rounded-full hover:bg-cyan-700 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/5511999999999" className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full bg-gray-700 rounded-2xl overflow-hidden shadow-2xl border border-gray-600">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098169222401!2d-46.65401692383169!3d-23.564917461723146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
              className="filter grayscale opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Lumina Odontologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;