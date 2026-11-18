import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Star, Truck, Shield, RotateCcw, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const heroWords = ["DEFINED", "EARNED", "CRAFTED", "FORGED"];

const marqueeItems = [
  "FREE SHIPPING OVER ₱3,000",
  "PREMIUM CRAFTSMANSHIP",
  "AUTHENTIC LEATHER",
  "EXCLUSIVE DESIGNS",
  "NEW ARRIVALS WEEKLY",
  "30-DAY RETURNS",
];

function Marquee() {
  return (
    <div className="overflow-hidden bg-[#d4a853] py-3 relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-black text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {item}
            <span className="w-2 h-2 bg-black/40 rotate-45 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const featuredIds = [1, 2, 4, 7, 10, 12];

export default function Home() {
  const { addToCart } = useCart();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  const [wordIndex, setWordIndex] = useState(0);
  const [addedId, setAddedId] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 42);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const featuredProducts = products.filter((p) => featuredIds.includes(p.id));

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657305249451-8eb977c77038?w=1600&q=80"
            alt="Shoe store"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        </motion.div>

        {/* Animated vertical lines */}
        {[15, 30, 55, 75, 90].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/3"
            style={{ left: `${pos}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}

        {/* Hero Content */}
        <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#d4a853] text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ✦ Premium Men's Footwear Since 2018
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 0.9 }}
            >
              WALK
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-2 flex items-end gap-6">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#d4a853] leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 0.9 }}
            >
              LIKE IT'S
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8 h-[clamp(4rem,12vw,9rem)]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -120, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 0.9 }}
              >
                {heroWords[wordIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/50 max-w-md mb-10 text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Handpicked premium footwear for the modern man who moves with confidence. Every pair tells a story of craft and character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group flex items-center gap-3 bg-[#d4a853] text-black px-8 py-4 uppercase tracking-[0.15em] text-sm hover:bg-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Shop Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 uppercase tracking-[0.15em] text-sm hover:border-white/60 transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── STATS ─── */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { num: "22+", label: "Unique Styles" },
              { num: "8,500+", label: "Happy Customers" },
              { num: "7", label: "Years in Business" },
              { num: "100%", label: "Authentic Leather" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#080808] px-10 py-12 text-center"
              >
                <div
                  className="text-[#d4a853] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
                >
                  {stat.num}
                </div>
                <div className="text-white/40 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Curated for You
              </p>
              <h2
                className="text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", lineHeight: 1 }}
              >
                FEATURED<br />
                <span className="text-[#d4a853]">COLLECTION</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-white/50 hover:text-[#d4a853] text-sm tracking-wider uppercase transition-colors group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#111] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  {product.tag && (
                    <span
                      className="absolute top-4 left-4 bg-[#d4a853] text-black px-3 py-1 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      {product.tag}
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#d4a853] text-black px-8 py-3 text-sm tracking-widest uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                    >
                      {addedId === product.id ? "✓ Added!" : "Add to Cart"}
                    </motion.button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {product.category}
                    </p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={10} className="text-[#d4a853] fill-[#d4a853]" />
                      ))}
                    </div>
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.05em" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#d4a853]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                    >
                      ₱{product.price.toLocaleString()}
                    </span>
                    <Link
                      to="/products"
                      className="text-white/30 hover:text-white/70 text-xs tracking-wider uppercase transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND PROMISE ─── */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
            >
              THE <span className="text-[#d4a853]">STRIDEHAUS</span> PROMISE
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Truck, title: "Free Delivery", desc: "Free shipping on all orders above ₱3,000. Express options available." },
              { Icon: Shield, title: "Authenticity Guaranteed", desc: "Every pair comes with a certificate of authenticity. 100% real deal." },
              { Icon: RotateCcw, title: "30-Day Returns", desc: "Not the right fit? Return or exchange within 30 days — no questions asked." },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/5 p-8 hover:border-[#d4a853]/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 border border-[#d4a853]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/10 transition-colors">
                  <Icon size={22} className="text-[#d4a853]" />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.05em" }}
                >
                  {title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden py-32">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724318497004-084cece3e7ae?w=1600&q=80"
          alt="Leather shoes"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] to-[#080808]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#d4a853] text-sm tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Limited Time
            </p>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
            >
              NEW ARRIVALS<br />
              <span className="text-[#d4a853]">ARE HERE</span>
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Fresh styles dropping every week. Be the first to own the latest drops from STRIDEHAUS.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-[#d4a853] text-black px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Shop Now <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
