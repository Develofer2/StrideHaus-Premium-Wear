// ============================================================
// PAGE: Student Biography
// FILE: src/app/pages/Biography.tsx
// DESC: Personal profile page for Stephen Coronel.
//       Contains profile card, quick info, interests, and
//       "get to know me" personal details. No education /
//       skills / achievements sections per project spec.
// ============================================================

import { motion } from "motion/react";
import {
  MapPin,
  User,
  Calendar,
  Briefcase,
  Heart,
  Coffee,
  Music,
  Gamepad2,
  Film,
  Smile,
  Zap,
  Sun,
  Star,
  MessageCircle,
  Utensils,
  Shirt,
} from "lucide-react";

// ─── PERSONAL INTERESTS (shown in left sidebar grid) ─────────
const interests = [
  { icon: Film,     label: "Movies"   },
  { icon: Music,    label: "Music"    },
  { icon: Gamepad2, label: "Gaming"   },
  { icon: Coffee,   label: "Coffee"   },
];

// ─── FUN FACTS list ───────────────────────────────────────────
const funFacts = [
  { icon: Smile,   text: "I laugh at my own jokes before I finish telling them." },
  { icon: Coffee,  text: "I cannot function without at least one cup of coffee in the morning." },
  { icon: Gamepad2,text: "I've been gaming since I was 7 — it taught me problem-solving." },
  { icon: Music,   text: "Music is always playing when I code; it helps me stay in the zone." },
  { icon: Sun,     text: "I'm a morning person — I do my best thinking before noon." },
  { icon: Zap,     text: "Once I start a project I genuinely cannot stop until it's done." },
];

// ─── FAVORITES grid ───────────────────────────────────────────
const favorites = [
  { icon: Utensils, category: "Food",        value: "Lechon & Pusit"        },
  { icon: Music,    category: "Music Genre", value: "R&B / Lo-fi Hip-hop"   },
  { icon: Film,     category: "Movie Genre", value: "Sci-Fi & Thriller"      },
  { icon: Gamepad2, category: "Game",        value: "Valorant / Mobile Legends" },
  { icon: Shirt,    category: "Style",       value: "Clean, Minimal, Dark"  },
  { icon: Heart,    category: "Hobby",       value: "Web Design & Sneakers" },
];

// ─── PERSONAL QUOTE ───────────────────────────────────────────
const quote = {
  text: "Design is not just what it looks like — design is how it works.",
  attribution: "— Inspired by Steve Jobs",
};

// ─────────────────────────────────────────────────────────────
export default function Biography() {
  return (
    <div className="bg-[#080808] min-h-screen pt-20">

      {/* ── BACKGROUND GRID TEXTURE ────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/[0.015]"
            style={{ left: `${i * 5.26}%`, top: 0, bottom: 0 }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/[0.015]"
            style={{ top: `${i * 9}%`, left: 0, right: 0 }}
          />
        ))}
      </div>
      {/* ── END BACKGROUND ─────────────────────────────────── */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        {/* ── PAGE TITLE ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#d4a853] text-xs tracking-[0.5em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ✦ Student Portfolio
          </p>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 0.9,
            }}
          >
            STUDENT <span className="text-[#d4a853]">BIOGRAPHY</span>
          </h1>
          <div className="w-24 h-px bg-[#d4a853] mx-auto mt-6" />
        </motion.div>
        {/* ── END PAGE TITLE ──────────────────────────────── */}

        {/* ── MAIN LAYOUT: 3-column grid ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ═══════════════════════════════════════════════
              LEFT COLUMN — Profile card, quick info, interests
          ═══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >

            {/* ── AVATAR / NAME CARD ──────────────────────── */}
            <div className="bg-[#111] border border-white/5 p-8 mb-6 text-center relative overflow-hidden">
              {/* Watermark initials */}
              <div
                className="absolute top-0 right-0 text-[#d4a853]/5 pointer-events-none select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "8rem", lineHeight: 1 }}
                aria-hidden
              >
                SC
              </div>

              <div className="relative z-10">
                {/* Avatar circle with initials */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#d4a853] to-[#8a6420] mx-auto mb-5 flex items-center justify-center overflow-hidden border-4 border-[#d4a853]/30">
                  <span
                    className="text-black select-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem" }}
                  >
                    SC
                  </span>
                </div>

                {/* Name */}
                <h2
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.8rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Stephen Coronel
                </h2>

                {/* Role subtitle */}
                <p
                  className="text-[#d4a853] text-xs tracking-widest uppercase mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Student · Web Developer
                </p>

                {/* Online / active badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span
                    className="text-green-400 text-xs tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
            {/* ── END AVATAR CARD ─────────────────────────── */}

            {/* ── QUICK INFO LIST ─────────────────────────── */}
            <div className="bg-[#111] border border-white/5 p-6 mb-6 space-y-4">
              {[
                { Icon: User,        label: "Full Name",     value: "Stephen Coronel"                  },
                { Icon: MapPin,      label: "Address",       value: "Cogon, Poblacion, Liloan, Cebu"   },
                { Icon: Calendar,    label: "Academic Year", value: "A.Y. 2025–2026"                   },
                { Icon: Briefcase,   label: "Program",       value: "BS Information Technology"        },
                { Icon: Star,        label: "Year Level",    value: "2nd Year"                         }, // updated from 3rd to 2nd
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#d4a853]" />
                  </div>
                  <div>
                    <p
                      className="text-white/30 text-xs tracking-wider uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </p>
                    <p className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* ── END QUICK INFO ──────────────────────────── */}

            {/* ── INTERESTS GRID ──────────────────────────── */}
            <div className="bg-[#111] border border-white/5 p-6">
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                }}
              >
                INTERESTS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1a1a1a] border border-white/5 hover:border-[#d4a853]/30 p-3 flex flex-col items-center gap-2 transition-colors cursor-default"
                  >
                    <Icon size={18} className="text-[#d4a853]" />
                    <span
                      className="text-white/50 text-xs tracking-wider"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* ── END INTERESTS ───────────────────────────── */}

          </motion.div>
          {/* ═══════════════════════════════════════════════
              END LEFT COLUMN
          ═══════════════════════════════════════════════ */}

          {/* ═══════════════════════════════════════════════
              RIGHT COLUMN — About Me, Get To Know Me,
                             Favorites, Personal Quote,
                             Project Note
          ═══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >

            {/* ── ABOUT ME ────────────────────────────────── */}
            <div className="bg-[#111] border border-white/5 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-[#d4a853]" />
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  ABOUT ME
                </h3>
              </div>
              <p
                className="text-white/60 leading-relaxed text-sm mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hi there! I'm <strong className="text-white">Stephen Coronel</strong>, a 2nd year
                BS Information Technology student based in Liloan, Cebu. I love building things on
                the web — from crafting clean, responsive layouts to experimenting with animations
                and interactions that make people smile.
              </p>
              <p
                className="text-white/60 leading-relaxed text-sm mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Outside of class, you'll find me deep in a game, vibing to lo-fi beats, or quietly
                obsessing over shoe designs. I take style seriously — whether that's on screen or
                on my feet. That passion is a big reason why I chose to build{" "}
                <strong className="text-white">STRIDEHAUS</strong> as my school project.
              </p>
              <p
                className="text-white/60 leading-relaxed text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'm someone who pays attention to the small things — spacing, color, the way a
                button feels when you hover over it. To me, a great website isn't just functional;
                it's an experience worth remembering.
              </p>
            </div>
            {/* ── END ABOUT ME ────────────────────────────── */}

            {/* ── GET TO KNOW ME — FUN FACTS ──────────────── */}
            <div className="bg-[#111] border border-white/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#d4a853]" />
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  GET TO KNOW ME
                </h3>
              </div>

              {/* Intro blurb */}
              <p
                className="text-white/40 text-xs tracking-wider uppercase mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ✦ A few things that make me, me
              </p>

              {/* Fun facts list */}
              <div className="space-y-4">
                {funFacts.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Icon bubble */}
                    <div className="w-9 h-9 bg-[#d4a853]/10 border border-[#d4a853]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a853]/20 transition-colors">
                      <Icon size={14} className="text-[#d4a853]" />
                    </div>
                    {/* Fact text */}
                    <p
                      className="text-white/60 text-sm leading-relaxed pt-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* ── END GET TO KNOW ME ──────────────────────── */}

            {/* ── FAVORITES GRID ──────────────────────────── */}
            <div className="bg-[#111] border border-white/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#d4a853]" />
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  MY FAVORITES
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {favorites.map(({ icon: Icon, category, value }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3 p-4 border border-white/5 hover:border-[#d4a853]/30 transition-colors"
                  >
                    {/* Category icon */}
                    <div className="w-9 h-9 bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#d4a853]" />
                    </div>
                    <div>
                      {/* Category label */}
                      <p
                        className="text-white/30 text-xs tracking-wider uppercase"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {category}
                      </p>
                      {/* Favorite value */}
                      <p
                        className="text-white text-sm mt-0.5"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* ── END FAVORITES GRID ──────────────────────── */}

            {/* ── PERSONAL QUOTE ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/5 p-8 relative overflow-hidden"
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute -top-4 -left-2 text-[#d4a853]/5 select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif", fontSize: "10rem", lineHeight: 1 }}
                aria-hidden
              >
                "
              </div>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-9 h-9 bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle size={14} className="text-[#d4a853]" />
                </div>
                <div>
                  <p
                    className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Personal Motto
                  </p>
                  {/* Quote text */}
                  <p
                    className="text-white/80 leading-relaxed mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                    }}
                  >
                    "{quote.text}"
                  </p>
                  {/* Attribution */}
                  <p
                    className="text-[#d4a853] text-xs tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {quote.attribution}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* ── END PERSONAL QUOTE ──────────────────────── */}

            {/* ── PROJECT NOTE (footer disclaimer) ────────── */}
            <div className="border border-[#d4a853]/20 bg-[#d4a853]/5 p-6">
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Project Note
              </p>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <strong className="text-white">STRIDEHAUS</strong> is a student-created web project
                developed as part of an academic exercise in Web Systems and Technologies. All
                content, branding, product data, and business information presented in this website
                are fictional and created solely for educational demonstration purposes. No real
                transactions occur on this platform.
              </p>
              {/* Student signature line */}
              <p
                className="text-white/40 text-xs mt-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                — Stephen Coronel, Cogon, Poblacion, Liloan, Cebu · A.Y. 2025–2026
              </p>
            </div>
            {/* ── END PROJECT NOTE ────────────────────────── */}

          </motion.div>
          {/* ═══════════════════════════════════════════════
              END RIGHT COLUMN
          ═══════════════════════════════════════════════ */}

        </div>
        {/* ── END MAIN LAYOUT ─────────────────────────────── */}

      </div>
    </div>
  );
}