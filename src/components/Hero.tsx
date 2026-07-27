"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BurgerVideoFloat from "@/components/BurgerVideoFloat";

gsap.registerPlugin(ScrollTrigger);

const TICKER_ITEMS = [
  "SIN NEGOCIAR",
  "SMASH EN PLANCHA",
  "PAN BRIOCHE",
  "QUESO AL BORDE",
  "PARA VALIENTES",
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: -20,
        rotate: -8,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(2)",
      })
        .from(
          ".hero-title-line",
          {
            y: 70,
            skewY: 4,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" },
          "-=0.2"
        );

      gsap.to(".hero-diagonal", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-dvh items-center bg-off-white pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-diagonal stripe-red absolute -right-1/3 -top-1/4 h-[160%] w-2/3 opacity-90"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.5)_35%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8">
        <div className="relative z-10">
          <span className="hero-badge inline-flex -rotate-3 items-center gap-2 border-2 border-black bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black">
            Smash desde 2019 <span className="text-red">·</span> Sin negociar
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.75rem,16vw,5rem)] leading-[0.82] text-black sm:text-8xl lg:text-[6rem]">
            <span className="hero-title-line block">SMASH-</span>
            <span className="hero-title-line text-outline-black block -ml-1 sm:-ml-2">EADAS,</span>
            <span className="hero-title-line block -rotate-1 text-red">NO NEGOCIABLES.</span>
          </h1>

          <div className="mt-6 overflow-hidden border-y-2 border-black bg-black py-2">
            <div className="marquee-track">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap px-4 text-xs font-extrabold uppercase tracking-widest text-white"
                >
                  {item}
                  <span className="text-red">✦</span>
                </span>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-md text-lg font-medium text-black/75">
            Carne fresca aplastada a 250°C, pan brioche tostado en mantequilla
            y queso hasta el borde. Sin atajos, sin congelados, sin excusas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="hero-cta hard-shadow inline-flex items-center justify-center border-2 border-black bg-red px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-transform duration-[160ms] ease-out hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-[0.97]"
            >
              Ver carta
            </a>
            <a
              href="#ubicacion"
              className="hero-cta hard-shadow inline-flex items-center justify-center border-2 border-black bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition-transform duration-[160ms] ease-out hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-[0.97]"
            >
              Pedir ahora
            </a>
          </div>
        </div>

        <BurgerVideoFloat />
      </div>
    </section>
  );
}
