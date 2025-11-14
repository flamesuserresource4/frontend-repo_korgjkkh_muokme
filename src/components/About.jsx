import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0c10] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-10 h-64 w-64 rounded-full blur-3xl opacity-30 bg-fuchsia-500/30" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full blur-3xl opacity-30 bg-cyan-400/30" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80">
            <Sparkles size={14} className="text-cyan-300" />
            About Me
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
            Building futuristic experiences
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-3xl">
            I’m a web and mobile developer who loves blending clean architecture with playful, holographic aesthetics. I design and build responsive interfaces, performant APIs, and smooth interactions across platforms — turning ideas into polished, accessible products.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
