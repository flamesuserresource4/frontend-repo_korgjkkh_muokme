import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Iridescent Wallet',
    desc: 'Fintech web app with holographic UI and secure auth.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Glow Fitness',
    desc: 'Cross‑platform mobile app with smooth gestures.',
    tags: ['React Native', 'Expo'],
    link: '#'
  },
  {
    title: 'Neon Shop',
    desc: 'E‑commerce storefront with real‑time search.',
    tags: ['Next.js', 'Tailwind'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0a0c10] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">Selected Work</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity" style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, rgba(111, 76, 255, .15) 0deg, rgba(0, 255, 224, .15) 120deg, rgba(255, 0, 229, .15) 240deg, rgba(111, 76, 255, .15) 360deg)'
              }} />
              <div className="relative">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
