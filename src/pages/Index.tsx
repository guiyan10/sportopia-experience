
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturedProducts from "@/components/ui/featured-products";
import Footer from "@/components/ui/footer";
import { Shirt, Flag, Award, CreditCard } from "lucide-react";

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
              Sua Loja de Camisas Oficiais
            </h1>
            <p className="text-lg text-gray-600">
              Somos especializados em camisas de futebol originais dos maiores times do mundo. 
              Na Kingimports, você encontra qualidade, autenticidade e estilo para torcer com orgulho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "100% Originais",
                description: "Todas as nossas camisas são produtos oficiais licenciados pelos clubes.",
                icon: <Award className="w-8 h-8 text-sportopia-blue" />,
              },
              {
                title: "Variedade de Times",
                description: "Oferecemos camisas dos principais clubes e seleções nacionais do mundo.",
                icon: <Flag className="w-8 h-8 text-sportopia-blue" />,
              },
              {
                title: "Qualidade Premium",
                description: "Materiais de alta durabilidade com tecidos respiráveis e confortáveis.",
                icon: <Shirt className="w-8 h-8 text-sportopia-blue" />,
              },
              {
                title: "Pagamento Seguro",
                description: "Diversas opções de pagamento com total segurança para sua compra.",
                icon: <CreditCard className="w-8 h-8 text-sportopia-blue" />,
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
                  {feature.icon}
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
            backgroundImage: "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&q=75&w=1920')",
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
                Qualidade Premium
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">
                Camisas Originais
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Na Kingimports, garantimos que todas as nossas camisas são 100% originais, 
                adquiridas diretamente de fornecedores oficiais. Cada detalhe é cuidadosamente
                verificado para proporcionar a melhor experiência aos nossos clientes.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Tecidos respiráveis e confortáveis",
                  "Escudos e patrocínios bordados com perfeição",
                  "Cores vibrantes que não desbotam facilmente",
                  "Design autêntico e idêntico ao usado pelos jogadores"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-sportopia-blue/20 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-sportopia-blue"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <button className="px-8 py-4 bg-sportopia-blue text-white font-semibold rounded-md inline-flex items-center transition-all duration-300 hover:bg-sportopia-blue/90 hover:scale-105">
                Explorar Coleção
                <ArrowRight size={16} className="ml-2" />
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
                  src="https://images.unsplash.com/photo-1617606003139-c55e4485f78a?auto=format&q=80&w=800" 
                  alt="Camisa oficial de time" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 p-6 bg-white rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-sportopia-blue/20 flex items-center justify-center mr-3">
                    <Shirt className="h-5 w-5 text-sportopia-blue" />
                  </div>
                  <span className="font-semibold">Autenticidade Garantida</span>
                </div>
                <p className="text-sm text-gray-600">
                  Todas as nossas camisas possuem etiquetas e detalhes oficiais que garantem a originalidade do produto.
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
              { number: "5k+", label: "Clientes Satisfeitos" },
              { number: "200+", label: "Modelos de Camisas" },
              { number: "50+", label: "Clubes Disponíveis" },
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
                Últimos Lançamentos
              </h2>
              <p className="text-lg text-gray-600">
                Fique por dentro dos mais recentes lançamentos de camisas oficiais dos seus times favoritos.
                Novas coleções chegam semanalmente!
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Novas Camisas da Premier League 2023/24",
                image: "https://images.unsplash.com/photo-1521138054413-5a47d349b7af?auto=format&q=80&w=600",
                category: "Premier League",
                date: "10 Jun 2023",
              },
              {
                title: "Coleção Vintage - Times Históricos",
                image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&q=80&w=600",
                category: "Retrô",
                date: "15 Jun 2023",
              },
              {
                title: "Camisas Oficiais da Copa América 2024",
                image: "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=600",
                category: "Seleções",
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
