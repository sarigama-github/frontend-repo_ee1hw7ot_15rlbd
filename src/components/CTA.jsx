import React from 'react';
import { CalendarDays, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="booking" className="relative w-full overflow-hidden bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-500 py-16 text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 2px, transparent 2px), radial-gradient(circle at 80% 30%, white 2px, transparent 2px), radial-gradient(circle at 40% 80%, white 2px, transparent 2px)', backgroundSize: '120px 120px' }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold sm:text-3xl">Ready for a healthier, brighter smile?</h3>
            <p className="mt-2 max-w-xl text-white/90">Book online in minutes or call our friendly team. We can’t wait to meet you.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-sky-700 shadow-lg shadow-sky-900/10 transition hover:bg-slate-50"
            >
              <CalendarDays className="mr-2 h-5 w-5" /> Book Online
            </a>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" /> (123) 456‑7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
