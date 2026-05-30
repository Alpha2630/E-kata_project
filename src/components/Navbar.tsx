import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Menu, X, Sparkles, Home, ShoppingCart, Info, Phone } from "lucide-react";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Accueil", icon: <Home className="w-5 h-5" /> },
    { to: "/shop", label: "Produits", icon: <ShoppingCart className="w-5 h-5" /> },
    { to: "/about", label: "À propos", icon: <Info className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Fond flou quand menu ouvert */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 font-bold text-2xl group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="dark:text-white">
                E-<span className="text-blue-600">Kata</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.to)
                      ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button
                onClick={onCartClick}
                className="relative p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                <ShoppingBag className="w-6 h-6 dark:text-white" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                <Menu className="w-6 h-6 dark:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl flex flex-col z-50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl dark:text-white">
                  E-<span className="text-blue-600">Kata</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 dark:text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl font-medium text-lg transition-all ${
                    isActive(link.to)
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent"
                  }`}
                >
                  <span className={isActive(link.to) ? "text-blue-600" : "text-gray-400 dark:text-gray-500"}>
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 dark:border-gray-800">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <p className="font-medium dark:text-gray-300">E-Kata</p>
                <p>Livraison à Tananarive</p>
                <p>+261 37 48 137 25</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;