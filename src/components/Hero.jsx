import React from 'react';
import Spline from '@splinetool/react-spline';
import { Tooth, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient vignettes */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />
        <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sky-700 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium">Modern • Gentle • Tech-enabled</span>
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Bright Smiles, Powered by Cutting‑Edge Care
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          A modern dental studio offering preventative, cosmetic, and restorative treatments.
          Book a visit and experience comfort-first dentistry.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Tooth className="mr-2 h-5 w-5" /> Book an appointment
          </a>
          <a
            href="tel:+11234567890"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Phone className="mr-2 h-5 w-5" /> (123) 456‑7890
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3 text-slate-500">
          <MapPin className="h-4 w-4" />
          <span>123 Aurora Ave, Suite 200 • River City</span>
        </div>
      </div>
    </section>
  );
}
