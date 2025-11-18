
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Curso Vida Activa</h3>
        <p className="mb-6">Transformando vidas, un hábito a la vez.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vida Activa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
