import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, Target, Eye, CheckCircle } from "lucide-react";

const team = [
  {
    name: "Marcus Vega",
    role: "Founder & CEO",
    bio: "15 years in premium footwear retail. Passionate about marrying style with utility.",
    image: "https://images.unsplash.com/photo-1758599543242-31567fb8766e?w=400&q=80",
  },
  {
    name: "Dante Rivera",
    role: "Head of Design",
    bio: "Former shoe designer for international luxury brands. Brings global trends to STRIDEHAUS.",
    image: "https://images.unsplash.com/photo-1584940120505-117038d90b05?w=400&q=80",
  },
  {
    name: "Elena Cruz",
    role: "Sales Director",
    bio: "Built our retail network from the ground up. Customer satisfaction is her guiding principle.",
    image: "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?w=400&q=80",
  },
  {
    name: "Leon Park",
    role: "Marketing Manager",
    bio: "Digital-first strategist who helped STRIDEHAUS reach over 50,000 social followers.",
    image: "https://images.unsplash.com/photo-1768492263016-7b0e26d15d8d?w=400&q=80",
  },
  {
    name: "James Okafor",
    role: "Operations Head",
    bio: "Logistics and supply chain expert ensuring every order reaches you perfectly.",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?w=400&q=80",
  },
];

const milestones = [
  { year: "2018", event: "STRIDEHAUS Founded in Cebu City" },
  { year: "2019", event: "Launched first flagship store in Mandaue" },
  { year: "2020", event: "Expanded e-commerce platform nationwide" },
  { year: "2021", event: "Crossed 5,000 satisfied customers milestone" },
  { year: "2023", event: "Introduced premium leather collection" },
  { year: "2026", event: "22+ styles, 8,500+ customers & growing" },
];

export default function About() {
  return (
    <div className="bg-[#080808] min-h-screen pt-20">
      {/* ─── HEADER HERO ─── */}
      <section className="relative py-28 overflow-hidden">
        {/* Big background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-white/[0.02] whitespace-nowrap"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(8rem, 20vw, 16rem)" }}
          >
            STRIDEHAUS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Story
            </p>
            <h1
              className="text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9 }}
            >
              BUILT FOR<br />
              <span className="text-[#d4a853]">THE BOLD</span>
            </h1>
            <p className="text-white/50 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              STRIDEHAUS was born from a simple belief: every man deserves footwear that matches his ambition. 
              Founded in 2018 in the heart of Cebu, Philippines, we set out to curate the finest men's shoes — 
              from polished dress oxfords to rugged outdoor boots — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SPLIT STORY ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1777987601431-8d27d2039cc4?w=800&q=80"
                  alt="Premium shoes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#d4a853] p-8 hidden md:block">
                <div
                  className="text-black text-center"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <div style={{ fontSize: "3rem", lineHeight: 1 }}>7+</div>
                  <div className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                The STRIDEHAUS Way
              </p>
              <h2
                className="text-white mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", lineHeight: 1 }}
              >
                CRAFT. QUALITY.<br />CHARACTER.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                We don't just sell shoes — we sell confidence. Every pair on our shelves is personally curated by our team 
                of style experts who understand that footwear is the foundation of any great look. We work directly with 
                trusted manufacturers to bring you authentic, premium products at fair prices.
              </p>
              <ul className="space-y-4">
                {[
                  "Handpicked selection from verified suppliers",
                  "Genuine leather and premium materials only",
                  "Expert sizing and fitting advice",
                  "Nationwide delivery with care packaging",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/60 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <CheckCircle size={16} className="text-[#d4a853] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
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
              MISSION &amp; <span className="text-[#d4a853]">VISION</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative border border-[#d4a853]/20 p-10 overflow-hidden group hover:border-[#d4a853]/50 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#d4a853]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#d4a853]/10 border border-[#d4a853]/30 flex items-center justify-center">
                  <Target size={22} className="text-[#d4a853]" />
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}
                >
                  OUR MISSION
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                To provide every man in the Philippines with access to premium, authentic footwear that seamlessly 
                blends bold style with everyday comfort. We are committed to empowering confident strides — 
                one pair at a time — through curated collections, honest pricing, and genuine customer care.
              </p>
              <div
                className="absolute -bottom-8 -right-8 text-[#d4a853]/5 pointer-events-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "8rem" }}
                aria-hidden
              >
                M
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative border border-white/5 p-10 overflow-hidden group hover:border-[#d4a853]/30 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-white/10" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Eye size={22} className="text-[#d4a853]" />
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}
                >
                  OUR VISION
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                To become the most recognized and trusted men's footwear brand in Southeast Asia — celebrated for 
                our uncompromising craftsmanship, innovative style direction, and unwavering commitment to the 
                modern man's identity. We envision STRIDEHAUS as the destination where quality meets character.
              </p>
              <div
                className="absolute -bottom-8 -right-8 text-white/[0.02] pointer-events-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "8rem" }}
                aria-hidden
              >
                V
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mt-8">
            {[
              { icon: Award, label: "Excellence" },
              { icon: Users, label: "Community" },
              { icon: Target, label: "Precision" },
              { icon: CheckCircle, label: "Integrity" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0d0d0d] p-8 flex flex-col items-center gap-3 group hover:bg-[#d4a853]/5 transition-colors"
              >
                <Icon size={24} className="text-[#d4a853]" />
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Journey
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
            >
              THE STRIDEHAUS <span className="text-[#d4a853]">TIMELINE</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-8 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#d4a853] rotate-45 flex-shrink-0" />
                
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span
                    className="text-[#d4a853]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem" }}
                  >
                    {m.year}
                  </span>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {m.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#d4a853] text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              The Crew
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
            >
              MEET THE <span className="text-[#d4a853]">TEAM</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  {/* Hover bio overlay */}
                  <div className="absolute inset-0 bg-[#d4a853]/90 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.08em" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#d4a853] text-xs tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
