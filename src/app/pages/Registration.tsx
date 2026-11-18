import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Registration() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    confirm: "",
    newsletter: false,
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords do not match.");
    if (!form.agree) return alert("Please agree to the terms.");
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    navigate("/thank-you");
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm";

  return (
    <div className="bg-[#080808] min-h-screen pt-20 flex">
      {/* ─── LEFT: Image Panel ─── */}
      <div className="hidden lg:block lg:w-5/12 relative overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672920800748-a5fb6dfd0c2b?w=800&q=80"
          alt="Luxury shoes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/30 to-[#080808]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Member Benefits
            </p>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", lineHeight: 1 }}
            >
              JOIN THE<br />
              <span className="text-[#d4a853]">STRIDE CLUB</span>
            </h2>
            <ul className="space-y-3">
              {[
                "Early access to new releases",
                "Exclusive member discounts",
                "Free express shipping on 1st order",
                "Birthday reward — ₱500 off",
                "Order history & easy reorders",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/60 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 bg-[#d4a853] rotate-45 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ─── RIGHT: Form ─── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 overflow-y-auto"
      >
        <div className="max-w-xl w-full mx-auto">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-10 group">
            <div className="w-7 h-7 bg-[#d4a853] flex items-center justify-center rotate-45">
              <span className="text-black -rotate-45 text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>S</span>
            </div>
            <span
              className="text-white tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem" }}
            >
              STRIDE<span className="text-[#d4a853]">HAUS</span>
            </span>
          </Link>

          <h1
            className="text-white mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem" }}
          >
            CREATE ACCOUNT
          </h1>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Already a member?{" "}
            <Link to="/" className="text-[#d4a853] hover:underline">
              Sign in here
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  First Name *
                </label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <input
                    required
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="Juan"
                    className={`${inputClass} pl-9`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Last Name *
                </label>
                <input
                  required
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="dela Cruz"
                  className={inputClass}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Email Address *
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="juan@example.com"
                  className={`${inputClass} pl-9`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Phone Number
              </label>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+63 917 000 0000"
                  className={`${inputClass} pl-9`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Delivery Address
              </label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-3.5 text-white/20" />
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Street, Barangay"
                  className={`${inputClass} pl-9`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                City / Municipality
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="Cebu City"
                className={inputClass}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Password *
                </label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <input
                    required
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Min. 8 characters"
                    className={`${inputClass} pl-9 pr-10`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
                  >
                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <input
                    required
                    type={showConfirm ? "text" : "password"}
                    value={form.confirm}
                    onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                    placeholder="Repeat password"
                    className={`${inputClass} pl-9 pr-10`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
                  >
                    {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                  className="mt-1 accent-[#d4a853]"
                />
                <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Subscribe to STRIDEHAUS newsletter for exclusive deals and new arrivals
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  className="mt-1 accent-[#d4a853]"
                />
                <span className="text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  I agree to the{" "}
                  <span className="text-[#d4a853] hover:underline cursor-pointer">Terms of Service</span>{" "}
                  and{" "}
                  <span className="text-[#d4a853] hover:underline cursor-pointer">Privacy Policy</span> *
                </span>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={submitting}
              className="w-full bg-[#d4a853] text-black py-4 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 mt-2 disabled:opacity-60"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              {submitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                  />
                  Creating Account…
                </>
              ) : (
                <>
                  Create Account <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
