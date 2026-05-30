import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200",
    title: "Ton style, ta signature",
    subtitle: "Des vêtements qui te ressemblent, sans bouger de chez toi",
    cta: "Découvrir la collection",
    link: "/shop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",
    title: "La mode livrée chez toi",
    subtitle: "Commande en ligne, on s'occupe du reste. Simple et rapide.",
    cta: "Commander maintenant",
    link: "/shop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=1200",
    title: "Qualité & accessibilité",
    subtitle: "Des pièces tendances à prix justes, pour toutes les occasions",
    cta: "Voir les produits",
    link: "/shop",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide - 7 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay plus foncé pour meilleure lisibilité */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text Content - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg font-light">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                >
                  {slide.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white w-10"
                  : "bg-white/40 hover:bg-white/70 w-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Pourquoi commander chez{" "}
              <span className="text-blue-600">E-Kata</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Une expérience de shopping en ligne pensée pour vous
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* Feature 1 - Image gauche */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
              <div className="w-full md:w-2/5">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group max-w-sm mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=500"
                    alt="Livraison à Tananarive"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-center md:text-left">
                  Livraison Express à Tananarive
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Plus besoin de vous déplacer. Commandez depuis chez vous et
                  recevez vos articles en 24 à 48h dans tout Tananarive. On
                  s'occupe de tout.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    Livraison suivie et sécurisée
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    Emballage discret et soigné
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    Paiement à la livraison disponible
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Image droite */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 max-w-5xl mx-auto">
              <div className="w-full md:w-2/5">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group max-w-sm mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
                    alt="Qualité des produits"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-center md:text-left">
                  Des produits sélectionnés avec soin
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Chaque article est vérifié avant d'être expédié. Nous
                  choisissons des matériaux durables pour vous garantir des
                  vêtements qui résistent au temps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                    Contrôle qualité systématique
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                    Matières premium sélectionnées
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                    Satisfait ou échangé sous 7 jours
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Image gauche */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
              <div className="w-full md:w-2/5">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group max-w-sm mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500"
                    alt="Paiement Mobile Money"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-center md:text-left">
                  Payez facilement avec votre Mobile
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Pas besoin de carte bancaire. Utilisez Orange Money, Airtel
                  Money ou MVola pour régler vos achats en quelques secondes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                    Orange Money, Airtel Money, MVola
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                    Transaction sécurisée
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                    Confirmation instantanée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Produits <span className="text-blue-600">Populaires</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Les articles les plus commandés par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              Voir tous les produits
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
