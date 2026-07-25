"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PASOS = [
  {
    n: "01",
    title: "LA CARNE",
    body: "Bola de vacuno fresco, picado esa misma mañana. Nada de cámara, nada de congelador.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
  },
  {
    n: "02",
    title: "EL SMASH",
    body: "Aplastada en plancha a 250°C con toda la fuerza. Costra caramelizada en segundos.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    n: "03",
    title: "EL MONTAJE",
    body: "Pan tostado en mantequilla, queso fundido al borde, salsas propias, capa a capa.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
  },
  {
    n: "04",
    title: "A LA MESA",
    body: "Del fuego a tu mano en minutos. Caliente, jugosa, sin tiempos muertos.",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Proceso() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".proceso-row");
      rows.forEach((row) => {
        const image = row.querySelector(".proceso-image");
        const text = row.querySelector(".proceso-text");
        const num = row.querySelector(".proceso-num");

        gsap.from([num, text], {
          opacity: 0,
          y: 30,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.fromTo(
          image,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(image, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="proceso" ref={root} className="relative overflow-hidden bg-white py-16 text-black sm:py-24 lg:py-28">
      <span className="inline-block -rotate-2 border-2 border-black bg-white px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-red ml-5 sm:ml-8">
        De la plancha a la mesa
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[0.9] sm:text-6xl">
          CUATRO PASOS. CERO ATAJOS.
        </h2>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {PASOS.map((p, i) => (
            <div
              key={p.n}
              className={`proceso-row grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12 ${
                i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`hard-shadow relative aspect-[4/3] w-full overflow-hidden border-4 border-black ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="proceso-image object-cover"
                />
              </div>
              <div className="proceso-text">
                <span className="proceso-num font-display text-outline-black text-7xl sm:text-8xl">
                  {p.n}
                </span>
                <h3 className="font-display mt-2 text-3xl leading-tight">
                  {p.title.split(" ")[0]}{" "}
                  <span className="text-red">{p.title.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-black/70">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
