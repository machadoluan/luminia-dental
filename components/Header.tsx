import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Star } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs sm:text-sm py-2 text-center flex items-center justify-center gap-2 font-medium z-50 relative">
        <Star size={14} className="fill-yellow-400 text-yellow-400" />
        <span>Excelência em Odontologia Estética e Reabilitadora</span>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 mt-0' : 'bg-white py-5 mt-8'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              L
            </div>
            <span className="text-secondary font-bold text-lg tracking-tight">
              Lumina<span className="text-primary">Odonto</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-secondary text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
        
            <a 
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-cyan-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-secondary hover:text-primary p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in">
          <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-right">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-bold text-xl text-primary">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-lg font-medium text-secondary hover:text-primary flex justify-between items-center py-2 border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span className="text-gray-300">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-green-600 transition-colors"
              >
                <Phone size={18} /> WhatsApp
              </a>
              <button className="w-full py-3 border-2 border-primary text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
                <Calendar size={18} /> Agendar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;