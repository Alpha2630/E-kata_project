import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="dark:text-white">E-<span className="text-blue-600">Kata</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Accueil</Link>
            <Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Boutique</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">À propos</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <ShoppingBag className="w-6 h-6 dark:text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2">
              <Menu className="w-6 h-6 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl dark:text-white">Menu</span>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 dark:text-white" /></button>
            </div>
            <div className="space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">Accueil</Link>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">Boutique</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">À propos</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;