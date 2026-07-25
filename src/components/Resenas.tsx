"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const RESENAS = [
  {
    name: "Marta G.",
    rating: 5,
    quote:
      "La Callejera es de otro planeta. El punto de la carne y el pan tostado marcan la diferencia total.",
  },
  {
    name: "Diego R.",
    rating: 5,
    quote:
      "Pedí la Picante Rebelde para llevar y llegó igual de buena que en mesa. Eso dice mucho.",
  },
  {
    name: "Laura P.",
    rating: 5,
    quote:
      "Sitio con mucha personalidad, rápido y las patatas con queso son un vicio total.",
  },
  {
    name: "Iker M.",
    rating: 5,
    quote:
      "La Doble Problema no miente en el nombre. Mejor smash burger que he probado en la ciudad.",
  },
  {
    name: "Sofía R.",
    rating: 5,
    quote:
      "Pedí la Veggie Gamberra sin esperar mucho y me sorprendió. Jugosa, con carácter, para nada un relleno de compromiso.",
  },
  {
    name: "Pablo N.",
    rating: 5,
    quote:
      "El batido de Oreo y la Queso y Humo son mi combo fijo desde la primera vez. Ya ni miro la carta.",
  },
  {
    name: "Carla M.",
    rating: 5,
    quote:
      "Ambiente con actitud, servicio rápido y la carne con ese punto de plancha que no encuentras en cualquier sitio.",
  },
  {
    name: "Rubén T.",
    rating: 5,
    quote:
      "He probado smash burgers en media ciudad y esta gana por goleada. Volveré cada semana, sin duda.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-red" : "text-black/20"}
          aria-hidden="true"
        >
          <path
            d="M8 1l2.1 4.4 4.8.6-3.5 3.4.9 4.8L8 11.9l-4.3 2.3.9-4.8L1.1 6l4.8-.6L8 1z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Resenas() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".resena-card", {
        y: 40,
        rotate: -3,
        opacity: 0,
        duration: 0.55,
        ease: "back.out(1.5)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <section id="resenas" ref={root} className="bg-off-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="inline-block -rotate-2 border-2 border-black bg-white px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-black">
          Lo que dicen
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[0.9] text-black sm:text-6xl">
          NO LO DECIMOS NOSOTROS.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESENAS.map((r, i) => (
            <div
              key={r.name}
              className={`resena-card hard-shadow flex flex-col border-2 border-black bg-white p-6 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-black/75">
                “{r.quote}”
              </p>
              <span className="mt-5 text-sm font-extrabold text-red">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
