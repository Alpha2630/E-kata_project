import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-white mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              E-<span className="text-blue-400">Kata</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Votre boutique mode en ligne à Tananarive. Des vêtements et accessoires de qualité livrés directement chez vous.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-blue-400 transition-colors">Boutique</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+261374813725</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contact@e-kata.mg</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Tananarive, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="text-blue-400">8h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="text-blue-400">9h - 16h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-red-400">Fermé</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/261340000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
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
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} <span className="text-white font-semibold">E-Kata</span>. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Conditions générales</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;