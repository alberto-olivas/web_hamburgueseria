"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PUNTOS = [
  {
    icon: (
      <path
        d="M6 14c4-3 20-3 24 0M4 20h28M6 26c4 3 20 3 24 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    ),
    title: "LA TÉCNICA DEL SMASH",
    body: "Bola de carne aplastada en plancha ardiendo. Costra caramelizada por fuera, jugo por dentro. Así se hace, sin discusión.",
  },
  {
    icon: (
      <path
        d="M6 16a10 10 0 0120 0M4 16h24M6 20h20l-2 8H8l-2-8z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "PAN BRIOCHE, TOSTADO",
    body: "Horneado cerca, tostado en mantequilla en la plancha justo antes de montar. Aguanta el jugo sin deshacerse.",
  },
  {
    icon: (
      <path
        d="M16 4v6M9 8l3 4M23 8l-3 4M6 18c0 7 4.5 12 10 12s10-5 10-12H6z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "CARNE FRESCA, A DIARIO",
    body: "Cero congelados. Picada cada mañana, en la calle antes de las 12. Lo que no se vende, no se vende mañana.",
  },
];

export default function Concepto() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".concepto-card", {
        y: 60,
        rotate: -4,
        opacity: 0,
        duration: 0.65,
        ease: "back.out(1.6)",
        stagger: 0.14,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-white py-24 text-black sm:py-28">
      <div className="stripe-white-red pointer-events-none absolute inset-x-0 top-0 h-3" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-block -rotate-2 border-2 border-black bg-red px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-white">
            La diferencia
          </span>
          <h2 className="font-display mt-4 text-5xl leading-[0.9] sm:text-6xl">
            NO ES UNA HAMBURGUESA MÁS.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PUNTOS.map((p, i) => (
            <div
              key={p.title}
              className={`concepto-card hard-shadow border-2 border-black bg-off-white p-7 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-red text-white">
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display mt-5 text-2xl leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
