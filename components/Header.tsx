
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#curso', label: 'El Curso' },
    { href: '#coach', label: 'Tu Coach' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-emerald-600">Vida Activa</a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">{link.label}</a>
          ))}
        </nav>
        
        <a href="#precio" className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">Inscríbete</a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>{link.label}</a>
            ))}
            <a href="#precio" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-full transition duration-300" onClick={() => setIsOpen(false)}>Inscríbete</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
