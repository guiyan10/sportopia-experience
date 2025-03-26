
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import FeaturedProducts from "@/components/ui/featured-products";

// Dados de produto simulado
const productData = {
  id: "1",
  name: "Camisa Oficial Brasil 2023",
  price: 349.9,
  images: [
    "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=1200",
    "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=1200&crop=right",
    "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=1200&crop=left",
  ],
  category: "Camisetas",
  description: "Camisa oficial da seleção brasileira de 2023, feita com tecnologia Dri-FIT para manter o corpo seco e confortável. Design autêntico com detalhes dourados que celebram a rica história do futebol brasileiro.",
  features: [
    "Tecido 100% poliéster reciclado",
    "Tecnologia Dri-FIT para controle de umidade",
    "Design leve e respirável",
    "Brasão bordado",
    "Ajuste regular para maior conforto"
  ],
  sizes: ["P", "M", "G", "GG", "XG"],
  colors: ["Amarelo", "Azul"],
  rating: 4.8,
  reviews: 124,
  isNew: true,
  inStock: true,
};

const Product = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(productData.price);

  return (
    <div className="min-h-screen">
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-12"
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-sportopia-blue transition-colors duration-300"
            >
              <ArrowLeft size={14} className="mr-1" />
              Voltar
            </Link>
            
            <span className="mx-2 text-gray-400">/</span>
            
            <Link
              to={`/category/${productData.category.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-sportopia-blue transition-colors duration-300"
            >
              {productData.category}
            </Link>
            
            <span className="mx-2 text-gray-400">/</span>
            
            <span className="text-sm text-gray-800">
              {productData.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={productData.images[currentImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                />
                
                {productData.isNew && (
                  <span className="absolute top-4 left-4 bg-sportopia-blue text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                    NOVO
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative rounded-md overflow-hidden aspect-square w-24 transition-all ${
                      currentImage === index
                        ? "border-2 border-sportopia-blue"
                        : "border border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productData.name} - Imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-2">
                  <span className="text-sm text-sportopia-blue font-medium uppercase">
                    {productData.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  {productData.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(productData.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {productData.rating} ({productData.reviews} avaliações)
                    </span>
                  </div>
                </div>
                
                <div className="text-2xl font-bold mb-6">
                  {formattedPrice}
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600">
                    {productData.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Tamanhos</h3>
                  <div className="flex flex-wrap gap-2">
                    {productData.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center rounded-md border ${
                          selectedSize === size
                            ? "border-sportopia-blue bg-sportopia-blue/5 text-sportopia-blue"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Cores</h3>
                  <div className="flex flex-wrap gap-3">
                    {productData.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-md border ${
                          selectedColor === color
                            ? "border-sportopia-blue bg-sportopia-blue/5 text-sportopia-blue"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Quantidade</h3>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-l-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-r-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="flex-1 bg-sportopia-black text-white py-3 px-6 rounded-md flex items-center justify-center font-medium transition-all duration-300 hover:bg-sportopia-blue hover:scale-[1.02]">
                    <ShoppingCart size={18} className="mr-2" />
                    Adicionar ao Carrinho
                  </button>
                  <button className="w-12 h-12 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-start">
                    <Truck className="text-sportopia-blue mr-3 mt-1" size={20} />
                    <div>
                      <span className="block font-medium">Envio Grátis</span>
                      <span className="text-sm text-gray-600">
                        Para compras acima de R$ 299,90. Entrega em até 4 dias úteis.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mb-16">
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                <button className="text-sportopia-blue border-b-2 border-sportopia-blue pb-2 font-medium">
                  Detalhes
                </button>
                <button className="text-gray-500 pb-2 font-medium hover:text-gray-800 transition-colors duration-300">
                  Avaliações
                </button>
                <button className="text-gray-500 pb-2 font-medium hover:text-gray-800 transition-colors duration-300">
                  Guia de Tamanhos
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Características</h3>
              <ul className="space-y-2 mb-6">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-sportopia-blue/20 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-sportopia-blue"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-1">Material</h4>
                  <p className="text-sm text-gray-600">
                    100% Poliéster reciclado
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-1">Tecnologia</h4>
                  <p className="text-sm text-gray-600">Dri-FIT</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-1">Tipo de Produto</h4>
                  <p className="text-sm text-gray-600">Camisa Oficial</p>
                </div>
              </div>

              <p className="text-gray-600">
                A camisa oficial da seleção brasileira é mais do que apenas um uniforme – é um símbolo de orgulho nacional. Fabricada com tecidos de alta qualidade e tecnologia avançada, esta camisa oferece conforto excepcional e desempenho superior, seja você um atleta profissional ou um torcedor apaixonado. O design autêntico com detalhes dourados celebra a rica história do futebol brasileiro e a tradição de excelência que define a seleção pentacampeã mundial.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-sportopia-gray/30 py-16">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-2">
              Produtos Relacionados
            </h2>
            <p className="text-gray-600">
              Você também pode gostar destes itens selecionados
            </p>
          </div>

          <FeaturedProducts />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
