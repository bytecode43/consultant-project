/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

type Status = 'Ongoing' | 'Completed';
type Category =
  | 'Construction Supervision'
  | 'Detailed Engineering Design'
  | 'Feasibility Study'
  | 'Due Diligence Appraisal'
  | 'Bill Verification';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: Status;
  category: Category;
  hero: string;      // large image
  description: string;
  facts: Record<string, string>;  // key-value bullet list
}

/* ─────────────── mock data ─────────────── */
const PROJECTS: Project[] = [
  {
    id: 'solu-khola',
    title: 'Solu Khola (Dudh Koshi)',
    subtitle: 'Hydroelectric Project (86 MW)',
    status: 'Completed',
    category: 'Construction Supervision',
    hero: '/assets/projects/solu.jpg',
    description:
      'HCE managed inspection, testing and commissioning … commercial operation on 1 Mar 2023.',
    facts: {
      Type: 'Run-of-River',
      Client: 'Sahas Urja Limited',
      Location: 'Solukhumbu District, Province 1',
      Capacity: '86 MW',
      'Gross Head / Net Head': '614.70 m / 598.09 m',
      Discharge: '17.05 m³/s',
      'Annual Energy': '520.20 GWh',
    },
  },
  /* add more projects here … */
];

/* ─────────────── helpers ─────────────── */
const categories: Category[] = [
  'Construction Supervision',
  'Detailed Engineering Design',
  'Feasibility Study',
  'Due Diligence Appraisal',
  'Bill Verification',
];

export default function ProjectsPage() {
  /* top filter state */
  const [projType, setProjType] = useState<'National' | 'International'>(
    'National',
  );
  const [category, setCategory] = useState<Category>(categories[0]);
  const [status, setStatus] = useState<Status>('Ongoing');

  /* list + selected item */
  const filtered = PROJECTS.filter(
    (p) => p.category === category && p.status === status,
  );
  const [selectedId, setSelectedId] = useState(filtered[0]?.id);
  const selected = filtered.find((p) => p.id === selectedId);

  /* keep selection valid when filters change */
  useEffect(() => {
    if (!selected) setSelectedId(filtered[0]?.id);
  }, [filtered.length]);

  /* back-to-top visibility */
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─────────────── render ─────────────── */
  return (
    <div className="flex flex-col min-h-screen">
      {/* ―――― hero banner ―――― */}
      <Navbar/>
      <header className="relative h-56 md:h-72 lg:h-80">
        <img
          src="/assets/projects/hero.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
          Our Projects
        </h1>
      </header>

      {/* ―――― filters ―――― */}
      <section className="max-w-7xl mx-auto w-full px-4 py-10 space-y-6">
        {/* Project Type (National / International) */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Project Type:</span>
          <select
            value={projType}
            onChange={(e) =>
              setProjType(e.target.value as 'National' | 'International')
            }
            className="border p-2 rounded"
          >
            <option>National</option>
            <option>International</option>
          </select>
        </div>

        {/* category tabs */}
        <div className="flex flex-wrap gap-4 border-b">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`pb-2 border-b-2 ${
                c === category
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:text-primary'
              } whitespace-nowrap`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* status dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Status:</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="border p-2 rounded"
          >
            <option>Ongoing</option>
            <option>Completed</option>
          </select>
        </div>

        {/* ―――― two-column layout ―――― */}
        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* left: list */}
          <ul className="space-y-2">
            {filtered.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => setSelectedId(p.id)}
                  className={`w-full text-left border rounded p-3 text-sm hover:border-primary ${
                    p.id === selectedId
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300'
                  }`}
                >
                  {p.title} <br />
                  <span className="text-gray-500">{p.subtitle}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="text-gray-500 italic">No projects yet.</li>
            )}
          </ul>

          {/* right: details */}
          {selected ? (
            <article className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">
                {selected.title}
              </h2>
              <p className="font-medium">{selected.subtitle}</p>
              <img
                src={selected.hero}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="leading-relaxed">{selected.description}</p>

              {/* facts table */}
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(selected.facts).map(([k, v]) => (
                  <div key={k} className="flex">
                    <span className="w-40 font-semibold">{k}:</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </article>
          ) : (
            <p className="italic text-gray-600">Choose a project…</p>
          )}
        </div>
      </section>

      {/* ―――― back-to-top ―――― */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary text-white
                     flex items-center justify-center shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
      <Footer/>
    </div>
  );
}
