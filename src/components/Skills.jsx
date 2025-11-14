import { motion } from 'framer-motion'
import { Code2, Smartphone, Cpu, Sparkles } from 'lucide-react'

const skills = [
  {
    title: 'Web',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Expo', 'iOS/Android', 'Animations', 'Perf Tuning'],
  },
  {
    title: 'Core',
    icon: Cpu,
    items: ['Node.js', 'FastAPI', 'MongoDB', 'REST', 'Testing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0c10] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-white/80 text-xs mb-6">
          <Sparkles size={14} className="text-fuchsia-300" />
          Featured Skills
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-50" style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, rgba(111, 76, 255, .15) 0deg, rgba(0, 255, 224, .15) 120deg, rgba(255, 0, 229, .15) 240deg, rgba(111, 76, 255, .15) 360deg)'
              }} />
              <div className="relative flex items-center gap-3">
                <s.icon className="text-cyan-300" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="relative mt-4 text-white/80 space-y-2">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
