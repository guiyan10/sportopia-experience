
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  discount,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const discountedPrice = discount
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price * (1 - discount / 100))
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className={cn(
              "object-cover w-full h-full transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          
          {isNew && (
            <span className="absolute top-4 left-4 bg-sportopia-blue text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              NOVO
            </span>
          )}
          
          {discount && (
            <span className="absolute top-4 right-4 bg-sportopia-red text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              {discount}% OFF
            </span>
          )}

          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
        
        <div className="p-4">
          <div className="text-xs text-sportopia-blue uppercase tracking-wider mb-1">
            {category}
          </div>
          <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-sportopia-blue">
            {name}
          </h3>
          <div className="mt-2 flex items-center">
            <span className={cn("font-bold text-lg", discount ? "text-sportopia-red line-through mr-2" : "")}>
              {formattedPrice}
            </span>
            {discountedPrice && (
              <span className="font-bold text-lg text-sportopia-blue">{discountedPrice}</span>
            )}
          </div>
        </div>
      </Link>

      <button 
        className={cn(
          "absolute bottom-0 right-0 p-4 bg-sportopia-black text-white rounded-tl-lg transition-all duration-500 flex items-center justify-center",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
        aria-label="Add to cart"
      >
        <ShoppingCart size={18} className="mr-2" />
        <span className="text-sm font-medium">Adicionar</span>
      </button>
    </motion.div>
  );
};

export default ProductCard;
