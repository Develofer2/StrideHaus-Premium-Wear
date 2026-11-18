import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle, ArrowRight, Package, Mail, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export default function ThankYou() {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    // Gold confetti burst
    const fire = (particleRatio: number, opts: Record<string, unknown>) => {
      confetti({
        origin: { y: 0.6 },
        particleCount: Math.floor(200 * particleRatio),
        ...(opts as Parameters<typeof confetti>[0]),
      });
    };

    setTimeout(() => {
      fire(0.25, { spread: 26, startVelocity: 55, colors: ["#d4a853", "#f0c060", "#b8860b"] });
      fire(0.2, { spread: 60, colors: ["#d4a853", "#ffffff", "#888"] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ["#d4a853", "#f0c060"] });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ["#d4a853"] });
      fire(0.1, { spread: 120, startVelocity: 45, colors: ["#d4a853", "#ffffff"] });
    }, 300);
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen pt-20 flex items-center justify-center px-6">
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="absolute w-px bg-white/[0.02]" style={{ left: `${i * 6.67}%`, top: 0, bottom: 0 }} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="absolute h-px bg-white/[0.02]" style={{ top: `${i * 11}%`, left: 0, right: 0 }} />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-28 h-28 bg-[#d4a853]/10 border border-[#d4a853]/30 flex items-center justify-center">
              <CheckCircle size={52} className="text-[#d4a853]" />
            </div>
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border border-[#d4a853]/40"
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#d4a853] text-xs tracking-[0.5em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            ✦ Order Confirmed
          </p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: 0.9 }}
          >
            THANK<br />
            <span className="text-[#d4a853]">YOU!</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Your order has been received and is being processed. You'll receive a confirmation email shortly with your order details and tracking information.
          </p>
        </motion.div>

        {/* Order Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-3 gap-px bg-white/5 mb-10"
        >
          {[
            { Icon: CheckCircle, label: "Order Placed", status: "Done", active: true },
            { Icon: Package, label: "Being Packed", status: "In Progress", active: false },
            { Icon: Mail, label: "Confirmation Sent", status: "Email Sent", active: false },
          ].map(({ Icon, label, status, active }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className={`bg-[#111] p-6 flex flex-col items-center gap-3 ${active ? "border-t border-[#d4a853]" : ""}`}
            >
              <Icon size={24} className={active ? "text-[#d4a853]" : "text-white/20"} />
              <div>
                <p
                  className={`text-xs tracking-widest uppercase text-center ${active ? "text-white" : "text-white/30"}`}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {label}
                </p>
                <p
                  className={`text-xs text-center mt-0.5 ${active ? "text-[#d4a853]" : "text-white/20"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {status}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Reference */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-[#111] border border-white/5 p-6 mb-10"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            Order Reference
          </p>
          <p
            className="text-[#d4a853] tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem" }}
          >
            #SH-{Math.floor(Math.random() * 900000 + 100000)}
          </p>
          <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            Estimated delivery: 3–5 business days
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/products"
            className="flex items-center justify-center gap-3 bg-[#d4a853] text-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Continue Shopping
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:border-white/50 transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <RotateCcw size={15} />
            Back to Home
          </Link>
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white/20 text-xs mt-12 tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          STRIDEHAUS · Premium Men's Footwear · Cebu, Philippines
        </motion.p>
      </div>
    </div>
  );
}