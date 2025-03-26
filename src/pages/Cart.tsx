
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Trash, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

// Dados simulados do carrinho
const cartItems = [
  {
    id: "1",
    name: "Camisa Oficial Brasil 2023",
    price: 349.9,
    image: "https://images.unsplash.com/photo-1580087564293-6d23b0ecaa9f?auto=format&q=80&w=400",
    quantity: 1,
    size: "M",
    color: "Amarelo",
  },
  {
    id: "2",
    name: "Chuteira Nike Phantom GT2",
    price: 899.9,
    image: "https://images.unsplash.com/photo-1593095945242-55a7a5f5331c?auto=format&q=80&w=400",
    quantity: 1,
    size: "42",
    color: "Preto",
  },
  {
    id: "3",
    name: "Tênis Adidas Ultraboost 23",
    price: 1199.9,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&q=80&w=400",
    quantity: 1,
    size: "41",
    color: "Branco",
  },
];

const Cart = () => {
  // Calcular valores
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 299.9 ? 0 : 29.9;
  const total = subtotal + shipping;

  // Formatador de preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-24 pb-12"
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-bold font-display">Seu Carrinho</h1>
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-sportopia-blue transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-1" />
              Continuar Comprando
            </Link>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-6 flex flex-col sm:flex-row items-start"
                      >
                        <div className="w-full sm:w-20 h-20 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-grow">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <div className="flex text-sm text-gray-600 mb-4">
                            <span className="mr-3">Tamanho: {item.size}</span>
                            <span>Cor: {item.color}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <button className="w-8 h-8 rounded-l-md border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                                -
                              </button>
                              <div className="w-10 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                                {item.quantity}
                              </div>
                              <button className="w-8 h-8 rounded-r-md border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                                +
                              </button>
                            </div>

                            <div className="flex items-center gap-4">
                              <span className="font-semibold">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                              <button className="text-gray-400 hover:text-sportopia-red transition-colors duration-300">
                                <Trash size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm p-6 sticky top-24"
                >
                  <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frete</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">Grátis</span>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-xl">{formatPrice(total)}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-1">
                        Incluindo impostos
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          {subtotal > 299.9
                            ? "Você ganhou frete grátis!"
                            : `Adicione ${formatPrice(
                                299.9 - subtotal
                              )} para frete grátis`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-sportopia-black text-white py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 hover:bg-sportopia-blue hover:scale-[1.02] mb-3">
                    Finalizar Compra
                    <ArrowRight size={16} className="ml-2" />
                  </button>

                  <div className="flex flex-col items-center text-center text-sm text-gray-500 mt-4">
                    <p className="mb-2">Métodos de pagamento aceitos</p>
                    <div className="flex space-x-2">
                      {["visa", "mastercard", "amex", "paypal"].map((card) => (
                        <img
                          key={card}
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${card}.svg`}
                          className="h-8 w-8 opacity-50"
                          alt={card}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Seu carrinho está vazio
              </h2>
              <p className="text-gray-600 mb-6">
                Parece que você ainda não adicionou nenhum produto ao carrinho.
              </p>
              <Link
                to="/"
                className="bg-sportopia-black text-white px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 hover:bg-sportopia-blue hover:scale-[1.02]"
              >
                Começar a Comprar
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Cart;
