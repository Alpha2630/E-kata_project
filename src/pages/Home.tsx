import { Link } from "react-router-dom";
import { featuredProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Truck, Shield, CreditCard } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Le style à Tananarive commence ici</h1>
            <p className="text-xl opacity-90 mb-8">Découvrez les dernières tendances mode livrées directement chez vous. Qualité, style et prix abordables.</p>
            <div className="flex gap-4">
              <Link to="/shop" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 inline-flex items-center gap-2">
                Voir la boutique <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><Truck className="w-8 h-8" /></div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Livraison à Tana</h3>
              <p className="text-gray-600 dark:text-gray-400">Livraison rapide dans tout Tananarive</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><Shield className="w-8 h-8" /></div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Qualité garantie</h3>
              <p className="text-gray-600 dark:text-gray-400">Produits sélectionnés avec soin</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><CreditCard className="w-8 h-8" /></div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Mobile Money</h3>
              <p className="text-gray-600 dark:text-gray-400">Paiement simple et sécurisé</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Produits populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
              Voir tous les produits <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;