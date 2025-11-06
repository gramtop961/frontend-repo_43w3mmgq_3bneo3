import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">Minimalist Photography</h1>
          <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300 text-base sm:text-lg">
            Clean lines, quiet compositions, and light that tells stories.
          </p>
        </div>
      </div>
    </section>
  );
}
