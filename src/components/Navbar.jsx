import { useEffect, useState } from 'react';
import { Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-extrabold tracking-tight text-red-600">Varunflix</span>
          <ul className="hidden items-center gap-4 text-sm md:flex">
            <li className="hover:text-red-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">About</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-md bg-white/10 p-2 hover:bg-white/20 transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="rounded-md bg-white/10 p-2 hover:bg-white/20 transition-colors" aria-label="Account">
            <User size={18} />
          </button>
          <button className="md:hidden rounded-md bg-white/10 p-2 hover:bg-white/20 transition-colors" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 text-white">
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">About</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}
