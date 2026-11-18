import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Star, Filter, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState(42);
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("default");

  const sizes = [39, 40, 41, 42, 43, 44, 45];

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const handleAddToCart = (product: typeof products[0], size: number) => {
    addToCart(product, size);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => setAddedIds((prev) => prev.filter((id) => id !== product.id)), 1800);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#080808] min-h-screen pt-20">
      {/* ─── HEADER ─── */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-white/[0.025]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(6rem,18vw,14rem)", lineHeight: 1 }}
          >
            COLLECTION
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              ✦ {products.length} Premium Styles
            </p>
            <h1
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95 }}
            >
              THE FULL<br />
              <span className="text-[#d4a853]">COLLECTION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            <Filter size={14} className="text-white/30 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#d4a853] text-black"
                    : "text-white/40 hover:text-white border border-white/10 hover:border-white/30"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: activeCategory === cat ? 700 : 400 }}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-white/10 text-white/50 text-xs tracking-wider uppercase px-3 py-1.5 focus:outline-none focus:border-[#d4a853] cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <option value="default" className="bg-[#111]">Default</option>
            <option value="price-asc" className="bg-[#111]">Price: Low to High</option>
            <option value="price-desc" className="bg-[#111]">Price: High to Low</option>
            <option value="name" className="bg-[#111]">Name A-Z</option>
          </select>
        </div>
        {/* Result count */}
        <div className="max-w-7xl mx-auto px-6 pb-2">
          <p className="text-white/20 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            Showing {filtered.length} of {products.length} products
          </p>
        </div>
      </div>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group bg-[#111] overflow-hidden cursor-pointer relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.tag && (
                        <span
                          className={`px-2 py-0.5 text-xs tracking-widest uppercase ${
                            product.tag === "New"
                              ? "bg-[#d4a853] text-black"
                              : product.tag === "Limited"
                              ? "bg-red-600 text-white"
                              : product.tag === "Premium"
                              ? "bg-white text-black"
                              : "bg-[#d4a853] text-black"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                        >
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Quick add */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="w-full bg-[#d4a853] text-black py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                      >
                        <ShoppingCart size={14} />
                        {addedIds.includes(product.id) ? "✓ Added!" : "Select Size"}
                      </motion.button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {product.category}
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={9} className="text-[#d4a853] fill-[#d4a853]" />
                        ))}
                      </div>
                    </div>
                    <h3
                      className="text-white mb-2 truncate"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.15rem", letterSpacing: "0.05em" }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[#d4a853]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                      >
                        ₱{product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCT MODAL ─── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#111] w-full max-w-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square">
                  <ImageWithFallback
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.tag && (
                    <span
                      className="absolute top-4 left-4 bg-[#d4a853] text-black px-3 py-1 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      {selectedProduct.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <p className="text-[#d4a853] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.category}
                    </p>
                    <h2
                      className="text-white mb-3"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}
                    >
                      {selectedProduct.name}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.description}
                    </p>

                    {/* Size selector */}
                    <div className="mb-6">
                      <p className="text-white/40 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Select Size (EU)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-10 h-10 text-sm border transition-all ${
                              selectedSize === size
                                ? "bg-[#d4a853] border-[#d4a853] text-black"
                                : "border-white/20 text-white/60 hover:border-white/50"
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[#d4a853]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}
                      >
                        ₱{selectedProduct.price.toLocaleString()}
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={12} className="text-[#d4a853] fill-[#d4a853]" />
                        ))}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(selectedProduct, selectedSize)}
                      className="w-full bg-[#d4a853] text-black py-4 text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart — Size EU {selectedSize}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
