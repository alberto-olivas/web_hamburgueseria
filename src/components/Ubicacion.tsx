"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HORARIO = [
  { dia: "Lunes – Jueves", horas: "13:00 – 23:30" },
  { dia: "Viernes – Sábado", horas: "13:00 – 01:00" },
  { dia: "Domingo", horas: "13:00 – 23:30" },
];

const DELIVERY = [
  { name: "Glovo", href: "#" },
  { name: "Uber Eats", href: "#" },
  { name: "Just Eat", href: "#" },
];

export default function Ubicacion() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".ubicacion-panel", {
        y: 40,
        opacity: 0,
        duration: 0.55,
        ease: "back.out(1.4)",
        stagger: 0.12,
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
    <section id="ubicacion" ref={root} className="relative overflow-hidden bg-white py-16 text-black sm:py-24 lg:py-28">
      <div className="stripe-white-red pointer-events-none absolute inset-x-0 top-0 h-3" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="inline-block rotate-2 border-2 border-black bg-red px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-white">
          Ven o pide
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[0.9] sm:text-6xl">
          TE LA DEJAMOS DONDE QUIERAS.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="ubicacion-panel hard-shadow overflow-hidden border-2 border-black">
            <iframe
              title="Mapa de ubicación de Smash House"
              src="https://www.google.com/maps?q=Calle%20Gran%20V%C3%ADa%2028%2C%20Madrid&output=embed"
              className="h-72 w-full grayscale sm:h-full sm:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="ubicacion-panel flex flex-col gap-6">
            <div className="hard-shadow border-2 border-black bg-off-white p-7">
              <h3 className="font-display text-2xl">DIRECCIÓN Y HORARIO</h3>
              <p className="mt-3 text-[15px] text-black/70">
                Calle Gran Vía 28, 28013 Madrid
              </p>
              <ul className="mt-5 space-y-2">
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex justify-between text-sm">
                    <span className="text-black/60">{h.dia}</span>
                    <span className="font-semibold">{h.horas}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hard-shadow-red border-2 border-black bg-off-white p-7">
              <h3 className="font-display text-2xl">PIDE A DOMICILIO</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {DELIVERY.map((d) => (
                  <a
                    key={d.name}
                    href={d.href}
                    className="border-2 border-black px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide transition-colors duration-150 hover:bg-black hover:text-white"
                  >
                    {d.name}
                  </a>
                ))}
              </div>
              <a
                href="#menu"
                className="hard-shadow mt-6 inline-flex w-full items-center justify-center border-2 border-black bg-red px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-transform duration-[160ms] ease-out hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-[0.97]"
              >
                Pedir para recoger
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
