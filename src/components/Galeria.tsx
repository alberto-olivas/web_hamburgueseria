"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FOTOS = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Interior del local con barra abierta",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
    alt: "Clientes disfrutando de sus hamburguesas",
  },
  {
    src: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=700&q=80",
    alt: "Equipo trabajando en la plancha",
  },
  {
    src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=700&q=80",
    alt: "Detalle de hamburguesa recién montada",
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    alt: "Patatas smash recién hechas",
  },
];

export default function Galeria() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.batch(".galeria-item", {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, scale: 0.85, rotate: -6 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.55, ease: "back.out(1.5)", stagger: 0.08, overwrite: true }
          ),
        once: true,
      });
    },
    { scope: root }
  );

  return (
    <section id="galeria" ref={root} className="relative overflow-hidden bg-black py-24 sm:py-28">
      <div className="stripe-red pointer-events-none absolute inset-x-0 bottom-0 h-3" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="inline-block rotate-2 border-2 border-white bg-red px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-white">
          El ambiente
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[0.9] text-white sm:text-6xl">
          ESTO ES SMASH HOUSE.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:14rem]">
          {FOTOS.map((f) => (
            <div
              key={f.alt}
              className={`galeria-item group relative overflow-hidden border-2 border-white/30 ${f.span ?? ""}`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="pointer-events-none absolute inset-0 bg-red opacity-0 mix-blend-color transition-opacity duration-300 group-hover:opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
