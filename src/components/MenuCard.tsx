"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Burger } from "@/lib/menu-data";
import { useOrder } from "@/lib/order-context";

gsap.registerPlugin(ScrollTrigger);

export default function MenuCard({ burger, index }: { burger: Burger; index: number }) {
  const { addItem } = useOrder();
  const [justAdded, setJustAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    addItem({ id: burger.id, name: burger.name, price: burger.price });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1100);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", skewY: 4 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          skewY: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: cardRef }
  );

  const tilt = index % 2 === 0 ? "rotate-1" : "-rotate-1";

  return (
    <div
      ref={cardRef}
      className={`menu-card hard-shadow group flex flex-col overflow-hidden border-2 border-black bg-white ${tilt}`}
    >
      <div ref={imgRef} className="relative aspect-[4/3] overflow-hidden border-b-2 border-black">
        <Image
          src={burger.image}
          alt={burger.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08] group-hover:-rotate-1"
        />
        <Image
          src={burger.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="pointer-events-none object-cover opacity-0 mix-blend-multiply transition-all duration-300 ease-out [filter:sepia(1)_hue-rotate(-50deg)_saturate(6)] group-hover:translate-x-1.5 group-hover:-translate-y-1 group-hover:opacity-60"
        />
        {burger.tag && (
          <span className="absolute left-3 top-3 -rotate-3 border-2 border-black bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
            {burger.tag}
          </span>
        )}
        <span className="absolute -right-2 -top-2 flex h-14 w-14 rotate-6 items-center justify-center rounded-full border-2 border-black bg-red text-center font-display text-xs text-white shadow-[3px_3px_0_0_#0a0a0a]">
          {burger.price.toFixed(2)}€
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-tight text-black">
          {burger.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-black/60">
          {burger.ingredients}
        </p>

        <motion.button
          type="button"
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
          className="hard-shadow-red mt-5 flex items-center justify-center gap-2 border-2 border-black bg-black px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-red"
        >
          <AnimatePresence mode="wait" initial={false}>
            {justAdded ? (
              <motion.span
                key="added"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
                className="flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Añadida
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
                className="flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Añadir al pedido
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
