import React from 'react';
import { Sparkles, Smile, ShieldCheck, Scan, Brush, Heart } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and smile makeovers tailored to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventative Care',
    desc: 'Cleanings, exams, and digital x-rays for proactive health.',
  },
  {
    icon: Brush,
    title: 'Restorative Treatments',
    desc: 'Crowns, fillings, and implants with precision and comfort.',
  },
  {
    icon: Scan,
    title: '3D Imaging',
    desc: 'Intraoral scanning and guided planning for accuracy.',
  },
];

export default function Services() {
  return (
    <section className="relative isolate w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium">Our Services</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything your smile needs
          </h2>
          <p className="mt-3 text-slate-600">
            From routine wellness to advanced cosmetic work, we blend technology with gentle care.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-slate-500">
          <Heart className="h-4 w-4 text-rose-400" />
          <span className="text-sm">We accept most insurance plans and offer flexible payment options.</span>
        </div>
      </div>
    </section>
  );
}
