export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  stock: number;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (productId: number, size: string, color: string) => void;
  updateQuantity: (productId: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}