import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
  { label: "Biography", to: "/biography" },
];

export function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#d4a853] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <span className="text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-xs font-bold tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>S</span>
            </div>
            <span
              className="text-white tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem" }}
            >
              STRIDE<span className="text-[#d4a853]">HAUS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm tracking-[0.15em] uppercase transition-colors duration-200 ${
                  location.pathname === link.to ? "text-[#d4a853]" : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#d4a853]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="hidden md:flex items-center gap-2 text-white/70 hover:text-[#d4a853] transition-colors duration-200 text-sm tracking-wider"
            >
              <User size={18} />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Register</span>
            </Link>
            <Link to="/cart" className="relative p-2 text-white/70 hover:text-[#d4a853] transition-colors duration-200">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#d4a853] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.to}
                  className={`text-4xl tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.to ? "text-[#d4a853]" : "text-white/60 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
            >
              <Link
                to="/register"
                className="text-4xl tracking-[0.2em] uppercase text-white/60 hover:text-[#d4a853] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Register
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}