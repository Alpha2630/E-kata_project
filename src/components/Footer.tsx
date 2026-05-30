import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-2 font-bold text-2xl text-white mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              E-<span className="text-blue-400">Kata</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto sm:mx-0">
              Vente en ligne de vêtements et accessoires à Tananarive. Des produits de qualité livrés directement chez vous.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4 text-lg">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Produits</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm">
                <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">+261 37 48 137 25</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm">
                <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">contact@e-kata.mg</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm">
                <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">Tananarive, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-4 text-lg">Horaires</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-gray-400">Lundi - Vendredi</span>
                <span className="text-blue-400 font-medium">8h - 18h</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-gray-400">Samedi</span>
                <span className="text-blue-400 font-medium">9h - 16h</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-gray-400">Dimanche</span>
                <span className="text-red-400 font-medium">Fermé</span>
              </li>
            </ul>
            
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-6">
              <a
                href="https://wa.me/261374813725"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                title="Facebook"
              >
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {currentYear} <span className="text-white font-semibold">E-Kata</span>. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Conditions de vente</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;