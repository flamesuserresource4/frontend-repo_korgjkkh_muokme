import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl p-[1px] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-400 via-cyan-400 to-indigo-500">
              <div className="h-full w-full rounded-xl bg-white/80" />
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500 via-cyan-400 to-indigo-500">
              Your Name
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 text-white shadow-lg shadow-cyan-500/20">
              <Mail size={16} />
              <span>Say hi</span>
            </a>
            <button className="md:hidden p-2 rounded-md bg-white/10 text-white">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
