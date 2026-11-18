import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const shipping = totalPrice >= 3000 ? 0 : 200;
  const tax = Math.round(totalPrice * 0.12);
  const grandTotal = totalPrice + shipping + tax;

  const handleCheckout = () => {
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="bg-[#080808] min-h-screen pt-20">
      {/* ─── HEADER ─── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Your Selection
              </p>
              <h1
                className="text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.9 }}
              >
                SHOPPING <span className="text-[#d4a853]">CART</span>
              </h1>
            </div>
            {totalItems > 0 && (
              <div className="text-right">
                <span
                  className="text-white/30 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {totalItems} item{totalItems !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {cartItems.length === 0 ? (
          /* ─── EMPTY STATE ─── */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-24 h-24 border border-white/10 flex items-center justify-center mb-8">
              <ShoppingBag size={40} className="text-white/20" />
            </div>
            <h2
              className="text-white mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem" }}
            >
              YOUR CART IS EMPTY
            </h2>
            <p className="text-white/40 text-sm mb-8 max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Looks like you haven't added any shoes yet. Explore our collection and find your perfect pair.
            </p>
            <Link
              to="/products"
              className="flex items-center gap-3 bg-[#d4a853] text-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              <ShoppingCart size={16} />
              Browse Collection
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ─── ITEMS ─── */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {totalItems} Item{totalItems !== 1 ? "s" : ""} in Cart
                </p>
                <button
                  onClick={clearCart}
                  className="text-white/20 hover:text-red-400 text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Trash2 size={12} />
                  Clear All
                </button>
              </div>

              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-5 py-6 border-b border-white/5 group"
                  >
                    {/* Product image */}
                    <div className="w-28 h-28 flex-shrink-0 bg-[#111] overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-white/30 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {item.category}
                            </p>
                            <h3
                              className="text-white"
                              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.05em" }}
                            >
                              {item.name}
                            </h3>
                            <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                              Size: EU {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-white/20 hover:text-red-400 transition-colors p-1"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span
                            className="w-10 h-8 border-t border-b border-white/10 flex items-center justify-center text-white text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Price */}
                        <span
                          className="text-[#d4a853]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                        >
                          ₱{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-8 text-white/40 hover:text-[#d4a853] text-sm tracking-wider uppercase transition-colors group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Continue Shopping
              </Link>
            </div>

            {/* ─── ORDER SUMMARY ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-[#111] p-8 sticky top-28">
                <h2
                  className="text-white mb-6 pb-4 border-b border-white/5"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.1em" }}
                >
                  ORDER SUMMARY
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
                    </span>
                    <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      ₱{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Shipping
                    </span>
                    <span
                      className={`text-sm ${shipping === 0 ? "text-green-400" : "text-white"}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {shipping === 0 ? "FREE" : `₱${shipping}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      VAT (12%)
                    </span>
                    <span className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      ₱{tax.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Free shipping notice */}
                {shipping > 0 && (
                  <div className="bg-[#d4a853]/10 border border-[#d4a853]/20 px-4 py-3 mb-6">
                    <p className="text-[#d4a853] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Add ₱{(3000 - totalPrice).toLocaleString()} more for FREE shipping!
                    </p>
                  </div>
                )}

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem" }}
                    >
                      TOTAL
                    </span>
                    <span
                      className="text-[#d4a853]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
                    >
                      ₱{grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="flex gap-0 mb-6">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="flex-1 bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white placeholder-white/20 px-4 py-3 outline-none text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 text-xs tracking-wider uppercase transition-colors border border-white/10 border-l-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Apply
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCheckout}
                  className="w-full bg-[#d4a853] text-black py-4 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </motion.button>

                <div className="mt-4 flex items-center justify-center gap-6">
                  {["VISA", "MC", "GCash", "PayMaya"].map((m) => (
                    <span
                      key={m}
                      className="text-white/20 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
