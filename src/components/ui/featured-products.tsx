
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProductCard from "./product-card";
import { ArrowRight, Shirt } from "lucide-react";

// Dados de produtos em destaque
const featuredProducts = [
  {
    id: "1",
    name: "Camisa Oficial Brasil 2023",
    price: 349.9,
    image: "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=600",
    category: "Seleções",
    isNew: true,
  },
  {
    id: "2",
    name: "Camisa Real Madrid Home 23/24",
    price: 389.9,
    image: "https://images.unsplash.com/photo-1629285483773-6b5cde7df315?auto=format&q=80&w=600",
    category: "La Liga",
    discount: 15,
  },
  {
    id: "3",
    name: "Camisa Manchester City 23/24",
    price: 379.9,
    image: "https://images.unsplash.com/photo-1590744029432-ad51a5983d64?auto=format&q=80&w=600",
    category: "Premier League",
  },
  {
    id: "4",
    name: "Camisa Barcelona Away 23/24",
    price: 379.9,
    image: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&q=80&w=600",
    category: "La Liga",
    discount: 10,
  },
];

// Animação para os elementos na tela
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-20 bg-sportopia-gray/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="inline-block text-sportopia-blue text-sm uppercase tracking-widest font-semibold mb-2"
            >
              Destaque
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-display tracking-tight"
            >
              Camisas em Alta
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/products"
              className="flex items-center font-medium text-sportopia-black hover:text-sportopia-blue transition-colors duration-300"
            >
              Ver Todas
              <ArrowRight size={16} className="ml-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
