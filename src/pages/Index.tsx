import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturedProducts from "@/components/ui/featured-products";
import Footer from "@/components/ui/footer";

// Configurações para a animação de entrada da página
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Index = () => {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <Navigation />
      <HeroSection />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sportopia-blue text-sm uppercase tracking-widest font-semibold mb-2">
              Bem-vindo à Kingimports
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
              O Futuro da Moda Esportiva
            </h1>
            <p className="text-lg text-gray-600">
              Descubra produtos premium que combinam tecnologia avançada, 
              design inovador e materiais de alta qualidade para elevar seu 
              desempenho e estilo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade Premium",
                description: "Materiais de alta durabilidade selecionados para performance superior.",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/adidas.svg",
              },
              {
                title: "Design Inovador",
                description: "Estética moderna e arrojada para destacar seu estilo dentro e fora de campo.",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nike.svg",
              },
              {
                title: "Tecnologia Avançada",
                description: "Recursos tecnológicos que potencializam seu conforto e desempenho.",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/puma.svg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md hover-lift"
              >
                <div className="w-16 h-16 bg-sportopia-gray rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={feature.icon} className="w-8 h-8" alt={feature.title} />
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&q=75&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-block text-sportopia-blue text-sm uppercase tracking-widest font-semibold mb-2">
                Tecnologia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
                Desempenho ao seu Alcance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Na Sportopia, combinamos materiais de ponta e tecnologia avançada para criar 
                produtos que elevam seu jogo a um novo patamar. Cada peça é desenvolvida com 
                atenção meticulosa aos detalhes para garantir conforto, durabilidade e estilo.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Tecidos respiráveis com controle de umidade",
                  "Sistema de amortecimento responsivo em calçados",
                  "Materiais leves e resistentes para máxima mobilidade",
                  "Design aerodinâmico para melhor desempenho"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-sportopia-blue/20 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-sportopia-blue"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary">
                Explorar Tecnologias
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&q=80&w=800" 
                  alt="Tênis de alta tecnologia" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 p-6 bg-white rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-sportopia-blue/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sportopia-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold">Tecnologia UltraBoost</span>
                </div>
                <p className="text-sm text-gray-600">
                  Amortecimento responsivo que devolve energia a cada passada, proporcionando conforto incomparável.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-sportopia-black text-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10k+", label: "Clientes Satisfeitos" },
              { number: "250+", label: "Produtos de Alta Qualidade" },
              { number: "15+", label: "Marcas Premium" },
              { number: "5★", label: "Avaliações de Clientes" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-block text-sportopia-blue text-sm uppercase tracking-widest font-semibold mb-2">
                Novidades
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
                As Últimas Tendências
              </h2>
              <p className="text-lg text-gray-600">
                Fique à frente com nossas coleções mais recentes, 
                inspiradas nas últimas tendências e tecnologias do mundo esportivo.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tênis para Todos os Terrenos",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&q=80&w=600",
                category: "Calçados",
                date: "10 Jun 2023",
              },
              {
                title: "Camisetas com Tecnologia Dry-Fit",
                image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&q=80&w=600",
                category: "Vestuário",
                date: "15 Jun 2023",
              },
              {
                title: "Chuteiras para Gramados Sintéticos",
                image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&q=80&w=600",
                category: "Futebol",
                date: "22 Jun 2023",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-medium bg-sportopia-blue px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sportopia-blue transition-colors duration-300">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="text-sportopia-blue font-medium inline-flex items-center"
                >
                  Leia mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Index;
