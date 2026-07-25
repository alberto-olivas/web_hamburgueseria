"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BURGERS, SIDES } from "@/lib/menu-data";
import MenuCard from "@/components/MenuCard";
import { useOrder } from "@/lib/order-context";

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
  const root = useRef<HTMLElement>(null);
  const { addItem, count, total } = useOrder();

  useGSAP(
    () => {
      ScrollTrigger.batch(".menu-card", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.1, overwrite: true }
          ),
        once: true,
      });

      gsap.from(".side-item", {
        opacity: 0,
        y: 16,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sides-strip",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <section id="menu" ref={root} className="relative overflow-hidden bg-black py-24 sm:py-28">
      <div className="stripe-red pointer-events-none absolute inset-x-0 top-0 h-3" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block rotate-2 border-2 border-white bg-red px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-white">
              La carta
            </span>
            <h2 className="font-display mt-4 text-5xl leading-[0.9] text-white sm:text-6xl">
              PÍDELA COMO QUIERAS.
            </h2>
          </div>
          {count > 0 && (
            <div className="hard-shadow-red border-2 border-white bg-black px-5 py-3 text-sm font-bold text-white">
              {count} en tu pedido · {total.toFixed(2)}€
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BURGERS.map((b, i) => (
            <MenuCard key={b.id} burger={b} index={i} />
          ))}
        </div>

        <div className="sides-strip mt-16 border-2 border-white bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-2xl text-white">
            PATATAS Y BATIDOS
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SIDES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => addItem(s)}
                className="side-item flex items-center justify-between gap-3 border-2 border-white/20 bg-black px-4 py-3 text-left transition-colors duration-150 hover:border-red active:scale-[0.98]"
              >
                <span className="text-sm font-medium text-white/85">{s.name}</span>
                <span className="shrink-0 font-display text-sm text-red">
                  {s.price.toFixed(2)}€
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
