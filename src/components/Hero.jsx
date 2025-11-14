import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0c10]">
      {/* Gradient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25),_transparent_60%)]" />
        <div className="absolute -bottom-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.18),_transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            Web & Mobile Developer
          </span>
          <h1 className="mt-4 bg-gradient-to-br from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Holographic Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
            I craft delightful, performant apps for web and mobile with a love for futuristic UI, accessibility, and smooth interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/10] w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* holographic overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen opacity-70" style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, rgba(111, 76, 255, .3) 0deg, rgba(0, 255, 224, .25) 120deg, rgba(255, 0, 229, .25) 240deg, rgba(111, 76, 255, .3) 360deg)'
          }} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0c10] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
