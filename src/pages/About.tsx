import { Link } from "react-router-dom";
import { Sparkles, Truck, Shield, CreditCard, ArrowRight, Quote } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero avec image */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200"
          alt="E-Kata mode"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Notre histoire</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                À propos d'<span className="text-blue-400">E-Kata</span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-xl">
                Votre vente en ligne de vêtements et accessoires à Tananarive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400"
                alt="Mode femme"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400"
                alt="Mode homme"
                className="w-full h-48 md:h-56 object-cover rounded-2xl mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400"
                alt="Accessoires"
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
                alt="Style"
                className="w-full h-48 md:h-56 object-cover rounded-2xl mt-6"
              />
            </div>

            {/* Texte */}
            <div className="text-center lg:text-left">
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
              <div className="flex items-center gap-2 text-blue-600 font-medium mt-6">
                <Quote className="w-5 h-5" />
                <span className="italic">Le style à portée de clic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats avec fond photo */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-blue-200 text-sm mt-1">Produits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-blue-200 text-sm mt-1">Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">24h</div>
              <div className="text-blue-200 text-sm mt-1">Livraison</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-blue-200 text-sm mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
            Pourquoi choisir <span className="text-blue-600">E-Kata</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <img
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500"
                alt="Livraison"
                className="w-full h-44 object-cover"
              />
              <div className="p-5 text-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Livraison Express</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">24 à 48h dans tout Tananarive</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"
                alt="Qualité"
                className="w-full h-44 object-cover"
              />
              <div className="p-5 text-center">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Qualité Garantie</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Produits vérifiés avec soin</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500"
                alt="Paiement"
                className="w-full h-44 object-cover"
              />
              <div className="p-5 text-center">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">Paiement Mobile</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Orange, Airtel, MVola</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA avec image */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200"
          alt="Shopping"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90" />
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à découvrir notre collection ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Parcourez nos produits et trouvez les pièces qui vous correspondent.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105"
          >
            Voir les produits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;