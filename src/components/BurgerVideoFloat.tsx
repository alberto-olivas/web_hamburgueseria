"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BurgerVideoFloat() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      video.loop = true;
      video.autoplay = true;
      video.play().catch(() => {});
      return;
    }

    let scrollST: ScrollTrigger | undefined;

    const setup = () => {
      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) return;

      scrollST = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: (self) => {
          video.currentTime = self.progress * duration;
        },
      });

      gsap.to(frameRef.current, {
        y: 26,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => {
      scrollST?.kill();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative z-30 mx-auto mt-10 w-full max-w-sm lg:fixed lg:right-8 lg:top-1/2 lg:mt-0 lg:w-80 lg:max-w-none lg:-translate-y-1/2"
    >
      <div className="hard-shadow relative aspect-video w-full -rotate-2 overflow-hidden border-4 border-black bg-black">
        <video
          ref={videoRef}
          src="/videos/burger-scroll.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute -left-5 top-3 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border-2 border-black bg-red text-center font-display text-[0.65rem] leading-tight text-white shadow-[4px_4px_0_0_#0a0a0a] sm:h-24 sm:w-24 sm:text-xs">
        100% CARNE FRESCA
      </div>
      <div className="absolute -right-4 -bottom-6 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border-2 border-black bg-white text-center font-display text-xs leading-tight text-black shadow-[4px_4px_0_0_#d6141f] sm:h-28 sm:w-28">
        HECHA AL MOMENTO
      </div>
    </div>
  );
}
