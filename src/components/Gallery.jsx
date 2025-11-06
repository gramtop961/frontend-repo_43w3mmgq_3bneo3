import React from 'react';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop', title: 'Solitude', w: 3, h: 2 },
  { id: 2, src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', title: 'Monolith', w: 3, h: 4 },
  { id: 3, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop', title: 'White Space', w: 3, h: 2 },
  { id: 4, src: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2xpdHVkZXxlbnwwfDB8fHwxNzYyNDA3MTg1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Still', w: 3, h: 4 },
  { id: 5, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop', title: 'Echo', w: 3, h: 2 },
  { id: 6, src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop', title: 'Horizon', w: 3, h: 2 }
];

export default function Gallery() {
  return (
    <section id="work" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Selected Work</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">A calm curation of moments. Each frame favors space, form, and quiet detail.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p) => (
            <figure key={p.id} className="group overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10">
              <img src={p.src} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <figcaption className="p-3 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-300">
                <span>{p.title}</span>
                <span className="text-neutral-400">©</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
