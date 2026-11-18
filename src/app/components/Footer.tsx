import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span
                className="text-white tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem" }}
              >
                STRIDE<span className="text-[#d4a853]">HAUS</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Premium men's footwear crafted for those who walk with purpose. From boardrooms to streets — we define the step.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#d4a853] hover:border-[#d4a853] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Contact", to: "/contact" },
                { label: "Biography", to: "/biography" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/40 hover:text-[#d4a853] text-sm transition-colors duration-200 flex items-center gap-1 group"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-white/40 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li>123 Burgos Street</li>
              <li>Mandaue City, Cebu 6014</li>
              <li>Philippines</li>
              <li className="pt-2">
                <a href="mailto:hello@stridehaus.ph" className="hover:text-[#d4a853] transition-colors">
                  hello@stridehaus.ph
                </a>
              </li>
              <li>
                <a href="tel:+6332123456" className="hover:text-[#d4a853] transition-colors">
                  +63 32 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 STRIDEHAUS. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
            Premium Men's Footwear · Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
