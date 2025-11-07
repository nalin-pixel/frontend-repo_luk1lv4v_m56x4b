import { useEffect, useState } from 'react';

const sampleSections = [
  {
    title: 'Featured Originals',
    color: 'from-red-600/40 to-red-800/20',
    items: [
      { id: 1, title: 'AI Brand Engine', tag: 'Next.js • OpenAI', img: 'https://images.unsplash.com/photo-1693472184079-1d9b5bd81a3a?q=80&w=1600&auto=format&fit=crop' },
      { id: 2, title: 'Motion Sandbox', tag: 'Framer Motion', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop' },
      { id: 3, title: '3D Playground', tag: 'Spline • WebGL', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop' },
      { id: 4, title: 'Stream UI Kit', tag: 'Design System', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop' },
      { id: 5, title: 'Realtime Board', tag: 'WebSockets', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
      { id: 6, title: 'Ecom Motion', tag: 'Next.js • Stripe', img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop' },
    ],
  },
  {
    title: 'Recent Launches',
    color: 'from-blue-600/40 to-blue-800/20',
    items: [
      { id: 7, title: 'Docs Engine', tag: 'MDX • Search', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop' },
      { id: 8, title: 'Analytics Lite', tag: 'D3 • Edge', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
      { id: 9, title: 'CV Builder', tag: 'AI • PDF', img: 'https://images.unsplash.com/photo-1520975922215-230dd34513ba?q=80&w=1600&auto=format&fit=crop' },
      { id: 10, title: 'UI Primitives', tag: 'Radix • shadcn', img: 'https://images.unsplash.com/photo-1621241836268-7c56f29779d6?q=80&w=1600&auto=format&fit=crop' },
      { id: 11, title: 'Launch Site', tag: 'Marketing', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop' },
      { id: 12, title: 'Portfolio', tag: 'Next • SSG', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop' },
    ],
  },
];

function Row({ title, color, items }) {
  return (
    <section className="relative">
      <h3 className="px-6 text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 overflow-x-auto pb-6">
        <div className="flex gap-3 px-6 min-w-max">
          {items.map((item) => (
            <article key={item.id} className="group relative w-64 shrink-0 cursor-pointer overflow-hidden rounded-md bg-zinc-900">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity group-hover:opacity-100`}></div>
              <img src={item.img} alt={item.title} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-3">
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-white/60">{item.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Rows() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // In a full build, this could fetch from a backend or parse user's portfolio.
    setSections(sampleSections);
  }, []);

  return (
    <div id="projects" className="space-y-8">
      {sections.map((s, idx) => (
        <Row key={idx} title={s.title} color={s.color} items={s.items} />
      ))}
    </div>
  );
}
