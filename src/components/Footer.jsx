export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <div>
          <h4 className="text-xl font-bold text-red-600">Varunflix</h4>
          <p className="mt-2 text-sm text-white/70">A cinematic portfolio experience. Built with React, Tailwind, Framer Motion, and Spline.</p>
        </div>
        <div className="text-sm text-white/70">
          <p>Contact</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-white" href="mailto:hello@varun.design">hello@varun.design</a></li>
            <li><a className="hover:text-white" href="https://portfolio-varun-psi.vercel.app" target="_blank" rel="noreferrer">Current Portfolio</a></li>
          </ul>
        </div>
        <div className="text-sm text-white/70">
          <p>Social</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-white" href="#">Twitter</a></li>
            <li><a className="hover:text-white" href="#">GitHub</a></li>
            <li><a className="hover:text-white" href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-8 text-xs text-white/50">© {new Date().getFullYear()} Varun. All rights reserved.</div>
    </footer>
  );
}
