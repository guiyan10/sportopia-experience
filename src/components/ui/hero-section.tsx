
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroBackgrounds = [
  {
    url: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&q=90&fit=crop&w=1920",
    position: "center",
    title: "ELEVANDO SEU JOGO",
    subtitle: "Equipamentos premium para sua melhor performance",
  },
  {
    url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&q=90&fit=crop&w=1920",
    position: "center",
    title: "ESTILO E TECNOLOGIA",
    subtitle: "A nova coleção Kingimports acabou de chegar",
  },
  {
    url: "https://images.unsplash.com/photo-1552066379-e7bfd22155c5?auto=format&q=90&fit=crop&w=1920",
    position: "center",
    title: "CORRA MAIS LONGE",
    subtitle: "Descubra tênis projetados para ultrapassar limites",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroBackgrounds.map((background, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${background.url})`,
            backgroundPosition: background.position,
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className={currentSlide === index ? "z-10" : "z-0"}
        />
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-10 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-display font-bold text-7xl md:text-8xl tracking-tight mb-4"
            >
              {heroBackgrounds[currentSlide].title}
            </motion.h2>
            
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-xl md:text-2xl mb-8"
            >
              {heroBackgrounds[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-white text-sportopia-black font-semibold rounded-md inline-flex items-center transition-all duration-300 hover:bg-sportopia-blue hover:text-white hover:scale-105">
                Explorar Coleção
                <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-3">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
