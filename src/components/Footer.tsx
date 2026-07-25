const SOCIAL = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <path
        d="M6 2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm4 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.2-3.4a.9.9 0 110 1.8.9.9 0 010-1.8z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <path
        d="M13.5 2h2.1c.15 1.4 1.05 2.6 2.4 3v2.1a5.2 5.2 0 01-2.4-.6v5.8a4.6 4.6 0 11-4.6-4.6c.2 0 .4 0 .6.03V9.9a2.5 2.5 0 102.1 2.47V2z"
        fill="currentColor"
      />
    ),
  },
];

const TICKER_ITEMS = ["SIGUENOS", "PARA VALIENTES", "SIN NEGOCIAR", "SMASH HOUSE"];

export default function Footer() {
  return (
    <footer className="border-t-4 border-red bg-black pt-0 text-white">
      <div className="overflow-hidden border-b-2 border-white/20 bg-red py-1.5">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-4 text-xs font-extrabold uppercase tracking-widest text-white"
            >
              {item}
              <span>★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-3">
          <div>
            <span className="font-display -rotate-2 inline-block text-3xl">
              SMASH<span className="text-red">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Smash burgers sin negociar. Carne fresca, plancha ardiendo,
              cero atajos.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center border-2 border-white/30 text-white transition-colors duration-150 hover:border-red hover:text-red"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-red">
              Horario
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Lun – Jue: 13:00 – 23:30</li>
              <li>Vie – Sáb: 13:00 – 01:00</li>
              <li>Domingo: 13:00 – 23:30</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-red">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Calle Gran Vía 28, Madrid</li>
              <li>91 234 56 78</li>
              <li>hola@smashhouse.es</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Smash House. Todos los derechos reservados.</p>
          <a href="#hero" className="font-extrabold uppercase tracking-wide hover:text-red">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
