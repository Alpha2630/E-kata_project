import { Link } from "react-router-dom";
import { Sparkles, Truck, Shield, CreditCard, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
          À propos d'<span className="text-blue-600">E-Kata</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Votre vente en ligne de vêtements et accessoires à Tananarive
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
            Notre <span className="text-blue-600">Histoire</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            E-Kata est né d'une passion pour la mode et le digital. Nous avons créé cette plateforme 
            pour offrir aux Tananariviens un accès facile à des vêtements et accessoires tendance, 
            sans avoir à se déplacer.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Notre mission est simple : vous proposer des produits de qualité, à des prix abordables, 
            avec une livraison rapide dans tout Tananarive.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Chaque article est soigneusement sélectionné pour vous garantir style, confort et durabilité.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-blue-200 mt-1">Produits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-blue-200 mt-1">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">24h</div>
              <div className="text-blue-200 mt-1">Livraison rapide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-blue-200 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
          Pourquoi choisir <span className="text-blue-600">E-Kata</span> ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 dark:text-white">Livraison Express</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Livraison rapide dans tout Tananarive en 24 à 48h. Suivez votre commande en temps réel.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 dark:text-white">Qualité Garantie</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tous nos produits sont vérifiés et sélectionnés avec soin pour vous garantir la meilleure qualité.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 dark:text-white">Paiement Facile</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Payez facilement par Mobile Money : Orange Money, Airtel Money ou MVola.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
          Nos <span className="text-blue-600">Valeurs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Passion</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Nous aimons ce que nous faisons et cela se reflète dans chaque produit que nous proposons.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Nous visons l'excellence dans notre service client et la qualité de nos produits.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Proximité</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Nous sommes à l'écoute de nos clients et adaptons nos offres à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à découvrir notre collection ?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Parcourez nos produits et trouvez les pièces qui vous correspondent. Livraison rapide à Tananarive.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
        >
          Voir les produits
          <Sparkles className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default About;