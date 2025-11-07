import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Varun's Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-6 max-w-xl text-base text-white/80 sm:text-lg"
        >
          A cinematic portfolio inspired by streaming UIs. Explore featured case studies, interactive builds, and motion design with a familiar browsing experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <a href="#projects" className="rounded bg-red-600 px-5 py-2.5 text-sm font-semibold shadow hover:bg-red-500 transition-colors">Browse Projects</a>
          <a href="#about" className="rounded bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors">About Me</a>
        </motion.div>
      </div>
    </section>
  );
}
