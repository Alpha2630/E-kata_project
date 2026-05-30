import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart, Check, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  const formatPrice = (price: number) => price.toLocaleString() + " Ar";

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold dark:text-white">Produit introuvable</h2>
        <Link to="/shop" className="mt-4 text-blue-600 hover:underline inline-block">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Retour
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
          {product.featured && (
            <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Populaire
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Plus que {product.stock} en stock
            </span>
          )}
        </div>

        {/* Product Info */}
        <div>
          <span className="text-blue-600 font-medium text-sm">{product.category} · {product.subcategory}</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 dark:text-white">{product.name}</h1>

          {/* Price */}
          <p className="text-3xl font-bold text-blue-600 mt-4">{formatPrice(product.price)}</p>

          {/* Stock */}
          <div className="flex items-center gap-2 mt-3">
            <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3 dark:text-white">Taille : <span className="text-blue-600">{selectedSize || 'Sélectionnez'}</span></h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-lg font-medium border-2 transition-all ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/30"
                      : "border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 dark:text-white">Couleur : <span className="text-blue-600">{selectedColor || 'Sélectionnez'}</span></h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-5 py-2.5 rounded-lg font-medium border-2 transition-all ${
                    selectedColor === color
                      ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/30"
                      : "border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:text-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor || product.stock === 0}
            className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              addedToCart
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            {addedToCart ? (
              <>
                <Check className="w-6 h-6" />
                Ajouté au panier !
              </>
            ) : product.stock === 0 ? (
              'Rupture de stock'
            ) : (
              <>
                <ShoppingCart className="w-6 h-6" />
                Ajouter au panier
              </>
            )}
          </button>

          {/* Delivery Info */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center gap-3">
            <Truck className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Livraison gratuite dans Tananarive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;