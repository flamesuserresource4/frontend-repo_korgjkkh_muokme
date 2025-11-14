import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0c10] text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80">
          <Mail size={14} className="text-cyan-300" />
          Contact
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-br from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
          Let’s build something beautiful
        </h2>
        <p className="mt-3 text-white/70">
          I’m available for freelance and full‑time roles. Tell me about your idea, and I’ll get back to you.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Your name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input placeholder="Email" type="email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input placeholder="Subject" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea placeholder="Message" rows={5} className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20">
            <Send size={16} />
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
