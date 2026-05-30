import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Truck, Shield, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200",
    title: "Ton style, ta signature",
    subtitle: "Des vêtements qui te ressemblent, sans bouger de chez toi",
    cta: "Découvrir la collection",
    link: "/shop"
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",
    title: "La mode livrée chez toi",
    subtitle: "Commande en ligne, on s'occupe du reste. Simple et rapide.",
    cta: "Commander maintenant",
    link: "/shop"
  },
  {
    image: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=1200",
    title: "Qualité & accessibilité",
    subtitle: "Des pièces tendances à prix justes, pour toutes les occasions",
    cta: "Voir les produits",
    link: "/shop"
  }
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
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Livraison à Tana</h3>
              <p className="text-gray-600 dark:text-gray-400">Livraison rapide dans tout Tananarive</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Qualité garantie</h3>
              <p className="text-gray-600 dark:text-gray-400">Produits sélectionnés avec soin</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Mobile Money</h3>
              <p className="text-gray-600 dark:text-gray-400">Paiement simple et sécurisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
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