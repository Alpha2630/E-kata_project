import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const formatPrice = (price: number) => price.toLocaleString() + " Ar";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          {product.featured && (
            <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Populaire</span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs text-blue-600 font-medium">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold mt-1 hover:text-blue-600 transition-colors dark:text-white">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
          <button onClick={() => addToCart(product, product.sizes[0], product.colors[0])} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;