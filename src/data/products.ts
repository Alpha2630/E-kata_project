import type { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Robe élégante en pagne",
    price: 85000,
    category: "Femme",
    subcategory: "Robes",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description: "Magnifique robe en pagne africain, parfaite pour les cérémonies et sorties élégantes. Tissu de qualité supérieure.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rouge", "Bleu", "Jaune"],
    stock: 10,
    featured: true
  },
  {
    id: 2,
    name: "Chemise homme moderne",
    price: 45000,
    category: "Homme",
    subcategory: "Chemises",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    description: "Chemise homme coupe moderne, adaptée pour le bureau et les sorties décontractées. Coton respirant.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Blanc", "Bleu ciel", "Noir"],
    stock: 15,
    featured: true
  },
  {
    id: 3,
    name: "Chaussures sneakers tendance",
    price: 120000,
    category: "Chaussures",
    subcategory: "Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Sneakers urbaines au design moderne. Confort optimal pour un usage quotidien. Semelle résistante.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Blanc", "Noir", "Rouge"],
    stock: 20,
    featured: true
  },
  {
    id: 4,
    name: "Sac à main en cuir",
    price: 95000,
    category: "Accessoires",
    subcategory: "Sacs",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    description: "Sac à main élégant en cuir véritable. Idéal pour les occasions spéciales et le quotidien.",
    sizes: ["Unique"],
    colors: ["Noir", "Marron", "Rouge"],
    stock: 8,
    featured: false
  },
  {
    id: 5,
    name: "T-shirt personnalisé Madagascar",
    price: 25000,
    category: "Homme",
    subcategory: "T-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "T-shirt 100% coton avec design inspiré de Madagascar. Confortable et stylé.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanc", "Noir", "Vert"],
    stock: 30,
    featured: true
  },
  {
    id: 6,
    name: "Pantalon chino slim",
    price: 65000,
    category: "Homme",
    subcategory: "Pantalons",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    description: "Pantalon chino coupe slim, élégant et confortable. Parfait pour un look professionnel.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Beige", "Noir", "Bleu marine"],
    stock: 12,
    featured: false
  },
  {
    id: 7,
    name: "Jupe plissée fashion",
    price: 55000,
    category: "Femme",
    subcategory: "Jupes",
    image: "https://images.unsplash.com/photo-1592301933927-35b90d2287e2?w=500",
    description: "Jupe plissée mi-longue, légère et élégante. Idéale pour toutes les occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rose", "Noir", "Blanc"],
    stock: 7,
    featured: false
  },
  {
    id: 8,
    name: "Sandales en cuir artisanal",
    price: 35000,
    category: "Chaussures",
    subcategory: "Sandales",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
    description: "Sandales artisanales en cuir de qualité. Fabriquées à Madagascar avec savoir-faire local.",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["Marron", "Noir"],
    stock: 18,
    featured: true
  }
];

export const categories: string[] = ["Tout", "Homme", "Femme", "Chaussures", "Accessoires"];

export const featuredProducts: Product[] = products.filter(p => p.featured);