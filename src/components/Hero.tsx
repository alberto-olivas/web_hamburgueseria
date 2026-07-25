"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  const imgWrap = useRef<HTMLDivElement>(null);

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
        .fromTo(
          imgWrap.current,
          { scale: 0.8, opacity: 0, rotate: -6, skewX: 4 },
          {
            scale: 1,
            opacity: 1,
            rotate: -3,
            skewX: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hero-sticker",
          { scale: 0, opacity: 0, rotate: -25, duration: 0.5, stagger: 0.1, ease: "back.out(2.4)" },
          "-=0.25"
        );

      gsap.to(imgWrap.current, {
        yPercent: 10,
        rotate: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

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
      className="relative flex min-h-dvh items-center overflow-hidden bg-off-white pt-28 pb-16"
    >
      <div
        className="hero-diagonal stripe-red pointer-events-none absolute -right-1/3 -top-1/4 h-[160%] w-2/3 opacity-90"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.5)_35%,transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
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

        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <div ref={imgWrap} className="relative aspect-square w-full">
            <div className="absolute inset-4 border-4 border-black bg-white" />
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
              alt="Smash burger con queso derretido recién hecha"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="relative border-4 border-black object-cover"
            />
          </div>

          <div className="hero-sticker absolute -left-6 top-2 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-2 border-black bg-red text-center font-display text-[0.7rem] leading-tight text-white shadow-[4px_4px_0_0_#0a0a0a] sm:h-28 sm:w-28 sm:text-xs">
            100% CARNE FRESCA
          </div>
          <div className="hero-sticker absolute -right-4 bottom-6 flex h-28 w-28 rotate-12 items-center justify-center rounded-full border-2 border-black bg-white text-center font-display text-xs leading-tight text-black shadow-[4px_4px_0_0_#d6141f] sm:h-32 sm:w-32">
            HECHA AL MOMENTO
          </div>
        </div>
      </div>
    </section>
  );
}
