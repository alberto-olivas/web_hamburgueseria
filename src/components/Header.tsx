"use client";

import { useEffect, useState } from "react";
import { useOrder } from "@/lib/order-context";

const LINKS = [
  { href: "#menu", label: "Carta" },
  { href: "#proceso", label: "Proceso" },
  { href: "#galeria", label: "Local" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

const TICKER_ITEMS = [
  "100% CARNE FRESCA",
  "SMASH DIARIO",
  "CERO CONGELADOS",
  "PAN BRIOCHE TOSTADO",
  "HECHA AL MOMENTO",
];

export default function Header() {
  const { count } = useOrder();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="overflow-hidden border-b-2 border-black bg-black py-1.5 text-white">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-4 text-xs font-bold uppercase tracking-widest"
            >
              {item}
              <span className="text-red">★</span>
            </span>
          ))}
        </div>
      </div>

      <header
        className={`border-b-4 border-black transition-colors duration-200 ${
          scrolled ? "bg-white" : "bg-off-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a
            href="#hero"
            className="font-display -rotate-2 text-2xl tracking-tight text-black sm:text-3xl"
          >
            SMASH<span className="text-red">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-extrabold uppercase tracking-wide text-black transition-colors duration-150 hover:text-red"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="hard-shadow relative hidden items-center gap-2 border-2 border-black bg-red px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white transition-transform duration-[160ms] ease-out hover:-translate-y-0.5 hover:translate-x-0.5 active:scale-[0.97] sm:inline-flex"
            >
              Pedir ahora
              {count > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-black bg-white px-1 text-xs font-bold text-black">
                  {count}
                </span>
              )}
            </a>
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t-2 border-black bg-white px-5 py-4 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-extrabold uppercase tracking-wide text-black hover:bg-off-white hover:text-red"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="hard-shadow mt-2 border-2 border-black bg-red px-5 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white"
            >
              Pedir ahora {count > 0 ? `(${count})` : ""}
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
