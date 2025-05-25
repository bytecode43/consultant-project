import { useRef } from 'react';

/* ─────────────────── types ─────────────────── */
export interface ServiceItem {
  id: number | string;
  title: string;
  image: string;                 // public path or remote URL
}

/* ───────────────── default data ─────────────── */
const DEFAULT_ITEMS: ServiceItem[] = [
  { id: 1, title: 'International',          image: '/assets/services/international.jpg' },
  { id: 2, title: 'Transmission Line',      image: '/assets/services/transmission.jpg' },
  { id: 3, title: 'Feasibility Study',      image: '/assets/services/feasibility.jpg' },
  { id: 4, title: 'Environment Assessment', image: '/assets/services/environment.jpg' },
];

interface Props {
  items?: ServiceItem[];
  heading?: string;
  subHeading?: string;
}

export default function ServicesCarousel({
  items = DEFAULT_ITEMS,
  heading = 'Services & Sectors',
  subHeading = `HCEL mainly works in hydropower sector but has also extended its
  services in all water-resource-based infrastructure development and energy-related projects.`,
}: Props) {
  const listRef = useRef<HTMLUListElement>(null);

  const CARD_WIDTH = 288;   // 72 * 4px (Tailwind w-72)
  const GAP        = 24;    // 6 * 4px   (Tailwind gap-6)
  const SCROLL_BY  = CARD_WIDTH + GAP;

  const scroll = (dir: 'left' | 'right') => {
    listRef.current?.scrollBy({
      left: dir === 'left' ? -SCROLL_BY : SCROLL_BY,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-[#0d7bd4] text-white py-16">
      <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
        {/* headings */}
        <h2 className="text-center font-bold text-[clamp(1.8rem,4vw,2.6rem)]">
          {heading}
        </h2>
        <p className="mt-3 mb-12 text-center max-w-3xl mx-auto leading-relaxed opacity-90">
          {subHeading}
        </p>

        {/* arrows */}
        <button
          aria-label="previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full
                     bg-white/15 backdrop-blur flex items-center justify-center
                     text-2xl hover:bg-white/25 transition"
          onClick={() => scroll('left')}
        >
          ‹
        </button>

        <button
          aria-label="next"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full
                     bg-white/15 backdrop-blur flex items-center justify-center
                     text-2xl hover:bg-white/25 transition"
          onClick={() => scroll('right')}
        >
          ›
        </button>

        {/* card strip */}
        <ul
          ref={listRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     [&::-webkit-scrollbar]:hidden -mx-4 px-4" /* hide scrollbar on WebKit */
        >
          {items.map(({ id, title, image }) => (
            <li
              key={id}
              className="flex-none w-72 h-[420px] relative rounded-lg overflow-hidden
                         cursor-grab snap-start group"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform
                           duration-300 group-hover:scale-105"
              />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/35" />
              <span className="absolute left-5 bottom-5 text-xl font-semibold">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
