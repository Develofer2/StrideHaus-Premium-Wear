import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    navigate("/thank-you");
  };

  return (
    <div className="bg-[#080808] min-h-screen pt-20">
      {/* ─── HEADER ─── */}
      <section className="relative py-24 overflow-hidden">
        {/* Diagonal line decoration */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            className="absolute top-0 bottom-0 w-px bg-white/3"
            style={{ left: `${20 + i * 15}%` }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Get In Touch
            </p>
            <h1
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.9 }}
            >
              LET'S START<br />
              <span className="text-[#d4a853]">A CONVERSATION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTACT GRID ─── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

            {/* ─── LEFT: Info Panel ─── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-[#d4a853] p-10 lg:p-14 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div
                className="absolute top-0 right-0 text-black/5 pointer-events-none select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "12rem", lineHeight: 1 }}
                aria-hidden
              >
                SH
              </div>

              <div className="relative z-10">
                <h2
                  className="text-black mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem" }}
                >
                  CONTACT INFO
                </h2>
                <p className="text-black/60 text-sm mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Visit our store or reach us through any of the channels below.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      Icon: MapPin,
                      title: "Store Address",
                      lines: ["123 Burgos Street", "Mandaue City, Cebu 6014", "Philippines"],
                    },
                    {
                      Icon: Phone,
                      title: "Phone",
                      lines: ["+63 32 123 4567", "+63 917 876 5432"],
                    },
                    {
                      Icon: Mail,
                      title: "Email",
                      lines: ["hello@stridehaus.ph", "orders@stridehaus.ph"],
                    },
                    {
                      Icon: Clock,
                      title: "Store Hours",
                      lines: ["Mon–Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 6:00 PM"],
                    },
                  ].map(({ Icon, title, lines }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-black" />
                      </div>
                      <div>
                        <p
                          className="text-black text-xs tracking-[0.2em] uppercase mb-1"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                        >
                          {title}
                        </p>
                        {lines.map((line, j) => (
                          <p key={j} className="text-black/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-12 pt-8 border-t border-black/10">
                  <p className="text-black/50 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {["IG", "FB", "TW", "YT"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="w-9 h-9 bg-black/10 hover:bg-black/20 flex items-center justify-center text-black text-xs transition-colors"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT: Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 bg-[#111] p-10 lg:p-14"
            >
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem" }}
              >
                SEND US A MESSAGE
              </h2>
              <p className="text-white/40 text-sm mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Have a question about an order, a product, or just want to say hello? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-white/40 text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Juan dela Cruz"
                      className="bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-white/40 text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="juan@example.com"
                      className="bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white/40 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white px-4 py-3 outline-none transition-colors text-sm cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="" className="bg-[#111]">Select a subject…</option>
                    <option value="order" className="bg-[#111]">Order Inquiry</option>
                    <option value="product" className="bg-[#111]">Product Question</option>
                    <option value="return" className="bg-[#111]">Return / Exchange</option>
                    <option value="bulk" className="bg-[#111]">Bulk / Corporate Orders</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-white/40 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here…"
                    className="bg-[#1a1a1a] border border-white/10 focus:border-[#d4a853] text-white placeholder-white/20 px-4 py-3 outline-none transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#d4a853] text-black py-4 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 disabled:opacity-70"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* FAQ Quick Links */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-white/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Quick Questions
                </p>
                <div className="space-y-2">
                  {[
                    "How do I track my order?",
                    "What is your return policy?",
                    "Do you offer shoe customization?",
                  ].map((q, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-2 text-white/40 hover:text-[#d4a853] text-sm transition-colors group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="h-72 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="text-[#d4a853] mx-auto mb-3" />
            <p
              className="text-white/40 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              123 Burgos St, Mandaue City, Cebu
            </p>
          </div>
        </div>
        {/* Grid lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px bg-white/3" style={{ left: `${(i + 1) * 8}%` }} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px bg-white/3" style={{ top: `${(i + 1) * 16}%` }} />
        ))}
      </section>
    </div>
  );
}
