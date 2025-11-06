import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl text-neutral-900 dark:text-white">
          minimal.photo
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#work" className="hover:text-neutral-900 dark:hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
