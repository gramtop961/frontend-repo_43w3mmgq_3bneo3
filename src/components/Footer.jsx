import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Minimal Photo — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@minimal.photo" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition">Email</a>
          <a href="#" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition">Instagram</a>
          <a href="#" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
