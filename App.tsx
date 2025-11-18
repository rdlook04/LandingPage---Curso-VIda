
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';
import FAQItem from './components/FAQItem';
import { DumbbellIcon, AppleIcon, HeartPulseIcon } from './components/IconComponents';
import type { Testimonial, FAQ } from './types';

const testimonials: Testimonial[] = [
  {
    quote: "Este curso cambió mi vida. No solo perdí peso, sino que gané una confianza y energía que no sabía que tenía. ¡Totalmente recomendado!",
    name: 'Ana García',
    title: 'Participante del curso',
    imageUrl: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: "Las rutinas son desafiantes pero divertidas, y el plan de nutrición es fácil de seguir. La coach es increíblemente motivadora.",
    name: 'Carlos Martínez',
    title: 'Participante del curso',
    imageUrl: 'https://picsum.photos/id/238/100/100',
  },
  {
    quote: "Pensé que nunca disfrutaría del ejercicio, pero este curso me demostró lo contrario. Me siento más fuerte y saludable que nunca.",
    name: 'Sofía Rodríguez',
    title: 'Participante del curso',
    imageUrl: 'https://picsum.photos/id/239/100/100',
  },
];

const faqs: FAQ[] = [
  {
    question: '¿Necesito experiencia previa en ejercicio?',
    answer: 'No, el curso está diseñado para todos los niveles, desde principiantes absolutos hasta personas con más experiencia. Adaptamos las rutinas a tu capacidad.'
  },
  {
    question: '¿Qué equipamiento necesito?',
    answer: 'La mayoría de los ejercicios se pueden hacer con tu propio peso corporal. Recomendamos tener un par de mancuernas ligeras y una esterilla, pero no es indispensable para empezar.'
  },
  {
    question: '¿Cómo funciona el plan de nutrición?',
    answer: 'Recibirás una guía de nutrición flexible con recetas deliciosas y fáciles de preparar. No se trata de dietas restrictivas, sino de aprender a comer de forma saludable y sostenible.'
  },
  {
    question: '¿Cuánto tiempo al día debo dedicar?',
    answer: 'Las rutinas de ejercicio duran entre 30 y 45 minutos. Recomendamos dedicar ese tiempo de 4 a 5 días por semana para obtener los mejores resultados.'
  }
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img src="https://picsum.photos/id/431/1920/1080" alt="Mujer haciendo ejercicio" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">Transforma tu Cuerpo y Mente</h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">Únete a nuestro curso de 8 semanas y descubre la mejor versión de ti misma con rutinas efectivas y un plan de vida saludable.</p>
            <a href="#precio" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              ¡Empieza Hoy!
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="curso" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-2">¿Qué obtendrás con este curso?</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Un programa integral diseñado para darte resultados reales y sostenibles.</p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 rounded-full p-6 mb-4">
                  <DumbbellIcon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rutinas Personalizadas</h3>
                <p className="text-gray-600">Entrenamientos efectivos que puedes hacer en casa, adaptados a tu nivel y objetivos.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 rounded-full p-6 mb-4">
                  <AppleIcon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guía de Nutrición</h3>
                <p className="text-gray-600">Aprende a comer saludable sin dietas estrictas. Recetas deliciosas y planes flexibles.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-emerald-100 rounded-full p-6 mb-4">
                  <HeartPulseIcon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comunidad y Apoyo</h3>
                <p className="text-gray-600">Acceso a un grupo privado donde compartirás tu progreso y recibirás motivación constante.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="coach" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img src="https://picsum.photos/id/1027/400/400" alt="Instructora del curso" className="rounded-full shadow-2xl mx-auto"/>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Conoce a tu Coach, Valentina</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "Con más de 10 años de experiencia como entrenadora personal certificada y nutricionista, mi pasión es ayudar a las personas a descubrir su potencial y a vivir una vida más plena y saludable. He creado este curso para darte todas las herramientas que necesitas, con un enfoque práctico y lleno de energía positiva. No se trata solo de cambiar tu cuerpo, sino de fortalecer tu mente y enamorarte del proceso. ¡Estoy aquí para guiarte en cada paso!"
                </p>
                <p className="font-semibold text-emerald-600">Valentina Ríos, Fundadora de Vida Activa</p>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros miembros</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precio" className="py-20 bg-emerald-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Únete a la Transformación</h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">Acceso de por vida al curso completo por un único pago.</p>
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-12 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Curso Vida Activa</h3>
              <p className="text-5xl font-extrabold mb-4">$49<span className="text-lg font-normal text-gray-500">.99</span></p>
              <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-emerald-500 mr-3">✔</span>Acceso de por vida</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-3">✔</span>8 Módulos de Entrenamiento</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-3">✔</span>Guía Completa de Nutrición</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-3">✔</span>Comunidad de Apoyo Privada</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-3">✔</span>Actualizaciones Futuras</li>
              </ul>
              <a href="#" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 inline-block">
                ¡Inscríbete Ahora!
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
