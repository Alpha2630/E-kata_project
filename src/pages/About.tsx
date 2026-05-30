import { Link } from "react-router-dom";
import { Sparkles, Truck, Shield, CreditCard, Users, Target, Heart, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
      {/* Hero */}
      <div className="text-center mb-16 md:mb-20">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">
          À propos d'<span className="text-blue-600">E-Kata</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Votre vente en ligne de vêtements et accessoires à Tananarive
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 dark:text-white">
            Notre <span className="text-blue-600">Histoire</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            E-Kata est né d'une passion pour la mode et le digital. Nous avons créé cette plateforme 
            pour offrir aux Tananariviens un accès facile à des vêtements et accessoires tendance, 
            sans avoir à se déplacer.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            Notre mission est simple : vous proposer des produits de qualité, à des prix abordables, 
            avec une livraison rapide dans tout Tananarive.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            Chaque article est soigneusement sélectionné pour vous garantir style, confort et durabilité.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white max-w-sm mx-auto w-full">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-bold">50+</div>
              <div className="text-blue-200 mt-1 text-sm">Produits</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-bold">100+</div>
              <div className="text-blue-200 mt-1 text-sm">Clients satisfaits</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-bold">24h</div>
              <div className="text-blue-200 mt-1 text-sm">Livraison rapide</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-bold">100%</div>
              <div className="text-blue-200 mt-1 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 dark:text-white">
          Pourquoi choisir <span className="text-blue-600">E-Kata</span> ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center group">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
              <Truck className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Livraison Express</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Livraison rapide dans tout Tananarive en 24 à 48h. Suivez votre commande en temps réel.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center group">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <Shield className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Qualité Garantie</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Tous nos produits sont vérifiés et sélectionnés avec soin pour vous garantir la meilleure qualité.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center group sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
              <CreditCard className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Paiement Facile</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Payez facilement par Mobile Money : Orange Money, Airtel Money ou MVola.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 dark:text-white">
          Nos <span className="text-blue-600">Valeurs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">Passion</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Nous aimons ce que nous faisons et cela se reflète dans chaque produit.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Nous visons l'excellence dans notre service et la qualité de nos produits.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">Proximité</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Nous sommes à l'écoute de nos clients et adaptons nos offres à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Prêt à découvrir notre collection ?
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm sm:text-base">
          Parcourez nos produits et trouvez les pièces qui vous correspondent. Livraison rapide à Tananarive.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105"
        >
          Voir les produits
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default About;