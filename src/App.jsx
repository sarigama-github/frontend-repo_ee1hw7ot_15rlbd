import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white/70 backdrop-blur border-b border-white/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-600 text-white">DS</span>
          <span>Delta Smiles</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#reviews" className="hover:text-slate-900">Reviews</a>
          <a href="#booking" className="hover:text-slate-900">Book</a>
        </nav>
        <a href="#booking" className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 sm:inline-block">
          Book now
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="font-inter" id="home">
      <Header />
      <main>
        <Hero />
        <div id="services"><Services /></div>
        <div id="reviews"><Testimonials /></div>
        <CTA />
      </main>
      <footer className="w-full border-t border-slate-200 bg-white py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Delta Smiles Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Accessibility</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
