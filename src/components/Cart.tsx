import { useCart } from "../context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import MobileMoneyModal from "./MobileMoneyModal";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const formatPrice = (price: number) => price.toLocaleString() + " Ar";

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            Panier ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">Votre panier est vide</p>
              <button
                onClick={onClose}
                className="mt-4 text-blue-600 hover:underline"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="flex gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm dark:text-white truncate">{item.name}</h3>
                    <div className="flex gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>Taille: {item.size}</span>
                      <span>·</span>
                      <span>Couleur: {item.color}</span>
                    </div>
                    <p className="text-blue-600 font-bold mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4 dark:text-white" />
                        </button>
                        <span className="w-8 text-center font-medium dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4 dark:text-white" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            {/* Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Sous-total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Livraison (Tananarive)</span>
                <span>Gratuite</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t dark:border-gray-700 dark:text-white">
                <span>Total</span>
                <span className="text-blue-600">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={() => setShowPayment(true)}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors mb-3"
            >
              Commander ({totalItems} article{totalItems > 1 ? 's' : ''})
            </button>
            <button
              onClick={clearCart}
              className="w-full text-red-500 hover:text-red-700 text-sm font-medium py-2"
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <MobileMoneyModal
          total={totalPrice}
          onClose={() => setShowPayment(false)}
          onConfirm={() => {
            setShowPayment(false);
            clearCart();
            onClose();
          }}
        />
      )}
    </>
  );
};

export default Cart;