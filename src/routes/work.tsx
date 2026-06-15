import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import uygwLogo from "@/assets/uygw-logo.png";
import seedLogo from "@/assets/seed-logo.png";
import sbiLogo from "@/assets/sbi-foundation-logo.png";
import schneiderLogo from "@/assets/schneider-logo.png";
import admiralLogo from "@/assets/admiral-solutions-logo.png";
import divoLogo from "@/assets/divo-logo.png";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Works — Portfolio | KRINASSO" },
      { name: "description", content: "Selected works from KRINASSO. Branding, social media, viral campaigns, YouTube and event production for brands ready to dominate." },
      { property: "og:title", content: "Selected Works — Portfolio | KRINASSO" },
      { property: "og:description", content: "Hand-picked client work across branding, social, YouTube and live production." },
    ],
  }),
  component: WorkPage,
});

const filters = [
  "All",
  "Social Media",
  "Event Shoot and Production",
] as const;
type Filter = (typeof filters)[number];

type Work = {
  id: string;
  client: string;
  category: Exclude<Filter, "All">;
  logo?: string;
  /** When true, render logo as object-cover with no padding (fills the tile) */
  logoFill?: boolean;
  /** Tailwind gradient classes used as a placeholder logo background when no image is provided */
  fallbackGradient: string;
  /** Initials shown on the placeholder logo */
  initials: string;
  challenge: string;
  solution: string;
  results: string;
};

const works: Work[] = [
  {
    id: "uygw",
    client: "UYGW EDUCATION",
    category: "Social Media",
    logo: uygwLogo,
    fallbackGradient: "from-white to-white",
    initials: "UYGW",
    challenge:
      "UYGW, an Australian coaching institute, needed a cohesive digital presence to showcase their diverse programs.",
    solution:
      "Structured a comprehensive brand messaging strategy to unify their modules under one clear identity.",
    results:
      "Successfully launched their consolidated brand, driving a significant increase in multi-program enrollments.",
  },
  {
    id: "seed",
    client: "SEED",
    category: "Social Media",
    logo: seedLogo,
    fallbackGradient: "from-[#f7f7f7] to-[#f7f7f7]",
    initials: "SEED",
    challenge:
      "SEED CSR needed an always-on social presence that translated their on-ground impact into shareable, scroll-stopping moments.",
    solution:
      "Built a content engine around real stories from the field — short-form video, testimonial reels, and a unified visual system across platforms.",
    results:
      "Tripled monthly engaged reach and turned program announcements into community events that drove inbound partnership requests.",
  },
  {
    id: "sbi",
    client: "SBI FOUNDATION",
    category: "Event Shoot and Production",
    logo: sbiLogo,
    fallbackGradient: "from-white to-white",
    initials: "SBI",
    challenge:
      "A national-scale CSR initiative needed end-to-end coverage — multi-city events, dignitary moments and stakeholder-grade deliverables, all on tight turnarounds.",
    solution:
      "Deployed a production crew with multi-cam coverage, on-site editing pods and a templated highlight-reel pipeline for rapid same-week delivery.",
    results:
      "Delivered broadcast-quality films, recap reels and stills across every event — used by the foundation in reports, social channels and partner decks.",
  },
  {
    id: "schneider",
    client: "Schneider Foundation",
    category: "Event Shoot and Production",
    logo: schneiderLogo,
    fallbackGradient: "from-white to-white",
    initials: "SF",
    challenge:
      "Schneider Foundation's communications felt fragmented — different programs, different tones, no shared visual anchor.",
    solution:
      "Built a unified brand system: tone of voice, typographic hierarchy, color and a templated content framework for program teams to plug into.",
    results:
      "Every program now ships with a recognizable Schneider Foundation feel — internal teams move faster and external audiences finally see one foundation, not six.",
  },
  {
    id: "admiral",
    client: "Admiral Solutions",
    category: "Event Shoot and Production",
    logo: admiralLogo,
    fallbackGradient: "from-white to-white",
    initials: "AS",
    challenge:
      "Admiral Solutions needed polished event coverage that captured both the scale of their gatherings and the energy of key stakeholder moments.",
    solution:
      "Deployed a multi-cam production crew with on-site editing to deliver highlight reels, keynote captures and stakeholder-ready cuts within tight turnarounds.",
    results:
      "Delivered a full suite of event films and recap content now used across Admiral's internal comms, social channels and partner presentations.",
  },
  {
    id: "divo",
    client: "DIVO",
    category: "Event Shoot and Production",
    logo: divoLogo,
    fallbackGradient: "from-white to-white",
    initials: "DIVO",
    challenge:
      "DIVO needed a distinctive identity that could scale across product, social and partner touchpoints without losing its signature edge.",
    solution:
      "Crafted a sharp visual system — typography, palette and motion principles — paired with a content framework the in-house team could run independently.",
    results:
      "Shipped a recognizable brand presence that lifted recall across launches and gave every channel a single, confident voice.",
  },
];

function WorkPage() {
  const [active, setActive] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = active === "All" ? works : works.filter((w) => w.category === active);
  const openWork = openId ? works.find((w) => w.id === openId) ?? null : null;

  // Lock body scroll while modal is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (openWork) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openWork]);

  // Close on Escape
  useEffect(() => {
    if (typeof window === "undefined" || !openWork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openWork]);

  return (
    <div className="px-6 pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h1 className="relative z-0 font-extrabold tracking-tighter leading-[0.95] mb-16 md:mb-24 pointer-events-none select-none">
          <span className="block text-[14vw] md:text-[12vw] lg:text-[10rem] text-foreground">
            SELECTED
          </span>
          <span className="block text-[14vw] md:text-[12vw] lg:text-[10rem] italic text-foreground/15 pl-[0.15em] pr-[0.1em]">
            WORKS.
          </span>
        </h1>

        {/* Filters */}
        <div className="relative z-10 flex flex-wrap gap-3 mb-16 md:mb-20">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] border transition-all ${
                  isActive
                    ? "bg-foreground text-background border-foreground shadow-[0_0_30px_-5px_var(--color-pink)]"
                    : "border-border bg-card/40 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visible.map((w) => (
            <button
              key={w.id}
              onClick={() => setOpenId(w.id)}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 rounded-[2rem] h-full flex"
              aria-label={`Open ${w.client} case study`}
            >
              <article className="flex flex-col w-full h-full overflow-hidden rounded-[2rem] border border-border bg-card transition-all group-hover:-translate-y-1 group-hover:border-foreground/30">
                {/* Logo tile — fixed aspect ratio keeps every card identical */}
                <div className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gradient-to-br ${w.fallbackGradient}`}>
                  {w.logo ? (
                    <img
                      src={w.logo}
                      alt={`${w.client} logo`}
                      className={`absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105 ${w.logoFill ? "object-cover" : "object-contain p-10 md:p-12"}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-void/80">
                        {w.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Caption — flex-1 makes caption block stretch so all cards match height */}
                <div className="flex-1 p-6 md:p-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink mb-2">
                    {w.category}
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    {w.client}
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            Nothing in this category yet — check back soon.
          </div>
        )}

        {/* CTA */}
        <div className="mt-32 max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want the long version? We'll send a deck with the full case studies and references.
          </p>
          <Link
            to="/contact"
            className="sticker-btn inline-block px-10 py-5 bg-cyan text-void font-black text-lg rounded-2xl -rotate-2"
          >
            REQUEST THE DECK →
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-void/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${openWork.client} case study`}
          >
            <button
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center text-lg font-bold transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Logo side */}
              <div className={`relative min-h-[280px] md:min-h-[520px] bg-gradient-to-br ${openWork.fallbackGradient}`}>
                {openWork.logo ? (
                  <img
                    src={openWork.logo}
                    alt={`${openWork.client} logo`}
                    className={`absolute inset-0 size-full ${openWork.logoFill ? "object-cover" : "object-contain p-12 md:p-16"}`}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-extrabold tracking-tight text-void/85">
                      {openWork.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink mb-2">
                    {openWork.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                    {openWork.client}
                  </h2>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    Challenge
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{openWork.challenge}</p>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    Solution
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{openWork.solution}</p>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    Results
                  </div>
                  <p className="text-hologram font-bold leading-relaxed">{openWork.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
