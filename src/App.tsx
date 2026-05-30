import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;