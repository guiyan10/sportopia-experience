
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold font-display flex items-center"
        >
          <img 
            src="/lovable-uploads/894b7f43-0e30-48eb-9ec3-ce3d0fe13391.png" 
            alt="Kingimports Logo" 
            className="h-10 mr-2" 
          />
          <span className={cn(
            "transition-colors duration-500",
            isScrolled ? "text-sportopia-black" : "text-sportopia-black"
          )}>
            KINGIMPORTS
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["Camisetas", "Chuteiras", "Tênis", "Ofertas"].map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium relative py-2 transition-colors duration-300",
                isScrolled ? "text-sportopia-black" : "text-sportopia-black",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sportopia-blue after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className={cn(
              "p-2 rounded-full transition-colors duration-300",
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
            )}
            aria-label="Search"
          >
            <Search
              size={20}
              className={cn(
                "transition-colors duration-500",
                isScrolled ? "text-sportopia-black" : "text-sportopia-black"
              )}
            />
          </button>
          
          <Link
            to="/cart"
            className={cn(
              "p-2 rounded-full transition-colors duration-300 relative",
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
            )}
            aria-label="Cart"
          >
            <ShoppingCart
              size={20}
              className={cn(
                "transition-colors duration-500",
                isScrolled ? "text-sportopia-black" : "text-sportopia-black"
              )}
            />
            <span className="absolute -top-1 -right-1 bg-sportopia-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
          
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden p-2 rounded-full transition-colors duration-300",
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
            )}
            aria-label="Menu"
          >
            <Menu
              size={24}
              className={cn(
                "transition-colors duration-500",
                isScrolled ? "text-sportopia-black" : "text-sportopia-black"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-sportopia-black/95 z-50 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col items-center space-y-6">
          {["Camisetas", "Chuteiras", "Tênis", "Ofertas"].map((item) => (
            <Link
              key={item}
              to={`/category/${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-2xl font-medium text-white hover:text-sportopia-blue transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
