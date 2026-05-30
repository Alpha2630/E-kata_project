import { useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search, Filter, X, Sparkles } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === "Tout" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">
            Nos <span className="text-blue-600">Produits</span>
          </h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          Découvrez notre collection de vêtements et accessoires. Livraison rapide à Tananarive.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-2xl mx-auto">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:text-white text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile filter button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center justify-center gap-2 px-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm font-medium dark:text-white"
        >
          <Filter className="w-4 h-4" />
          Filtres
          {selectedCategory !== "Tout" && (
            <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
              1
            </span>
          )}
        </button>
      </div>

      {/* Category Filters */}
      <div className={`flex flex-wrap justify-center gap-2 mb-8 ${showFilters ? 'flex' : 'hidden'} sm:flex`}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
        {selectedCategory !== "Tout" && (
          <span> en <span className="text-blue-600 font-medium">{selectedCategory}</span></span>
        )}
      </p>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-2">Aucun produit trouvé</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Essayez de modifier vos critères de recherche
          </p>
          <button
            onClick={() => { setSelectedCategory("Tout"); setSearchTerm(""); }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;