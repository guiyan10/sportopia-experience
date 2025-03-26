
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-sportopia-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 - Logo e Sobre */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/894b7f43-0e30-48eb-9ec3-ce3d0fe13391.png" 
                alt="Sportopia Logo" 
                className="h-10 mr-2 invert"
              />
              <span className="text-xl font-bold font-display">SPORTOPIA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevando sua experiência esportiva com produtos premium e design inovador.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sportopia-blue transition-colors duration-300"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`}
                    className="w-5 h-5 invert opacity-75"
                    alt={social}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Produtos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Produtos</h4>
            <ul className="space-y-3">
              {["Camisetas", "Chuteiras", "Tênis", "Acessórios", "Equipamentos", "Ofertas"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/category/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Suporte</h4>
            <ul className="space-y-3">
              {[
                "FAQ",
                "Trocas e Devoluções",
                "Política de Privacidade",
                "Termos de Uso",
                "Rastreio de Pedidos",
                "Contato",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-display">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades e ofertas exclusivas.
            </p>
            <form className="mb-6">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 rounded-l-md py-3 px-4 w-full focus:outline-none focus:ring-1 focus:ring-sportopia-blue text-white mb-2 sm:mb-0"
                />
                <button
                  type="submit"
                  className="bg-sportopia-blue text-white py-3 px-4 rounded-r-md font-medium hover:bg-sportopia-blue/80 transition-colors duration-300"
                >
                  Assinar
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visa.svg"
                className="h-8 invert opacity-50"
                alt="Visa"
              />
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mastercard.svg"
                className="h-8 invert opacity-50"
                alt="Mastercard"
              />
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/paypal.svg"
                className="h-8 invert opacity-50"
                alt="PayPal"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sportopia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
