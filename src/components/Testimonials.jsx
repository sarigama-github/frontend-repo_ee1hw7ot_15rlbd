import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maya R.',
    text: 'The most relaxing dental visit I have ever had. The team is warm and the tech is impressive!',
  },
  {
    name: 'Daniel K.',
    text: 'Beautiful space, painless cleaning, and they explained every step. Highly recommend.',
  },
  {
    name: 'Aria P.',
    text: 'I finally love my smile. The cosmetic work looks natural and flawless.',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">
            <Star className="h-4 w-4" />
            <span className="text-xs font-medium">Patient Stories</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Five-star care, every visit
          </h2>
          <p className="mt-3 text-slate-600">What our patients are saying about their experience.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
