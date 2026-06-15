import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBlob from "@/assets/hero-blob.jpg";
import uygwLogo from "@/assets/uygw-logo.png";
import seedLogo from "@/assets/seed-logo.png";
import sbiLogo from "@/assets/sbi-foundation-logo.png";
import schneiderLogo from "@/assets/schneider-logo.png";
import admiralLogo from "@/assets/admiral-solutions-logo.png";
import divoLogo from "@/assets/divo-logo.png";
import { CameraScrollScene } from "@/components/CameraScrollScene";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRINASSO — We Turn Feeds Into Frenzy" },
      { name: "description", content: "Hyper-social growth engine for brands ready to dominate the algorithm. Strategy, viral content, and paid social that actually moves." },
      { property: "og:title", content: "KRINASSO — We Turn Feeds Into Frenzy" },
      { property: "og:description", content: "Stop posting. Start haunting the FYP. Social-first growth for brands that refuse to be background noise." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    emoji: "⚡️",
    chip: "bg-lime text-void",
    border: "hover:border-lime/60",
    title: "Performance Marketing",
    body: "Meta & Google ad campaigns engineered for reach, leads and scalable ROI. We don't run ads. We build acquisition systems.",
    tags: ["Meta Ads", "Google Ads", "Lead Gen"],
    rotate: "rotate-3",
  },
  {
    emoji: "🎯",
    chip: "bg-cyan text-void",
    border: "hover:border-cyan/60",
    title: "Social Media Strategy",
    body: "Content strategies designed to make brands look premium, relevant and impossible to ignore online.",
    tags: ["Instagram", "Content", "Positioning"],
    rotate: "-rotate-6",
    offset: "md:translate-y-12",
  },
  {
    emoji: "🧪",
    chip: "bg-pink text-white",
    border: "hover:border-pink/60",
    title: "Creative & Analytics",
    body: "High-performing creatives backed by audience psychology, testing and real-time analytics.",
    tags: ["Creative Testing", "CTR", "Analytics"],
    rotate: "rotate-12",
  },
  {
    emoji: "📸",
    chip: "bg-electric text-white",
    border: "hover:border-electric/60",
    title: "Product Shoot",
    body: "Premium product photography and videography that makes your catalog scroll-stopping and conversion-ready.",
    tags: ["Product Photos", "Lifestyle Shots", "Catalog"],
    rotate: "-rotate-3",
    offset: "md:translate-y-8",
  },
];

const stats = [
  { value: "6+", label: "Founding clients" },
  { value: "15+", label: "Campaigns executed" },
  { value: "100+", label: "Creatives delivered" },
  { value: "24/7", label: "Growth obsession" },
];

type FeaturedCase = {
  id: string;
  client: string;
  category: string;
  bg: string;
  logo?: string;
  wordmark?: { text: string; className: string };
  challenge: string;
  solution: string;
  results: string;
};

const featuredCases: FeaturedCase[] = [
  {
    id: "uygw",
    client: "UYGW EDUCATION",
    category: "Branding",
    bg: "bg-white",
    logo: uygwLogo,
    challenge: "UYGW, an Australian coaching institute, needed a cohesive digital presence to showcase their diverse programs.",
    solution: "Structured a comprehensive brand messaging strategy to unify their modules under one clear identity.",
    results: "Successfully launched their consolidated brand, driving a significant increase in multi-program enrollments.",
  },
  {
    id: "seed",
    client: "SEED",
    category: "Social Media",
    bg: "bg-[#f7f7f7]",
    logo: seedLogo,
    challenge: "SEED needed an always-on social presence that translated their on-ground impact into shareable, scroll-stopping moments.",
    solution: "Built a content engine around real stories from the field — short-form video, testimonial reels, and a unified visual system across platforms.",
    results: "Tripled monthly engaged reach and turned program announcements into community events that drove inbound partnership requests.",
  },
  {
    id: "sbi",
    client: "SBI FOUNDATION",
    category: "Event Shoot & Production",
    bg: "bg-white",
    logo: sbiLogo,
    challenge: "A national-scale CSR initiative needed end-to-end coverage — multi-city events, dignitary moments and stakeholder-grade deliverables, all on tight turnarounds.",
    solution: "Deployed a production crew with multi-cam coverage, on-site editing pods and a templated highlight-reel pipeline for rapid same-week delivery.",
    results: "Delivered broadcast-quality films, recap reels and stills across every event — used by the foundation in reports, social channels and partner decks.",
  },
  {
    id: "schneider",
    client: "Schneider Foundation",
    category: "Event Shoot & Production",
    bg: "bg-white",
    logo: schneiderLogo,
    challenge: "Schneider Foundation's communications felt fragmented — different programs, different tones, no shared visual anchor.",
    solution: "Built a unified brand system: tone of voice, typographic hierarchy, color and a templated content framework for program teams to plug into.",
    results: "Every program now ships with a recognizable Schneider Foundation feel — internal teams move faster and external audiences finally see one foundation, not six.",
  },

  {
    id: "divo",
    client: "DIVO",
    category: "Event Shoot & Production",
    bg: "bg-white",
    logo: divoLogo,
    challenge: "DIVO needed a distinctive identity that could scale across product, social and partner touchpoints without losing its signature edge.",
    solution: "Crafted a sharp visual system — typography, palette and motion principles — paired with a content framework the in-house team could run independently.",
    results: "Shipped a recognizable brand presence that lifted recall across launches and gave every channel a single, confident voice.",
  },
];

const principles = [
  { title: "Culture > campaigns", body: "A campaign ends. A cultural footprint compounds. We optimize for the latter." },
  { title: "Speed is a feature", body: "If a trend takes a week to ship, it's already dead. We move at meme-time." },
  { title: "Data, then opinion", body: "We bring receipts, not vibes. But once the numbers are in — strong takes only." },
  { title: "Operators, not freelancers", body: "Every name on the team has shipped, scaled, or broken something at scale before." },
];

function HomePage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openCase = openId ? featuredCases.find((c) => c.id === openId) ?? null : null;

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (openCase) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openCase]);

  useEffect(() => {
    if (typeof window === "undefined" || !openCase) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openCase]);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-12 md:pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute -top-12 -left-12 size-72 bg-pink rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 -right-20 size-96 bg-cyan rounded-full blur-[140px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 mb-8 border border-cyan/40 bg-cyan/10 rounded-full text-cyan font-bold text-xs uppercase tracking-[0.25em] -rotate-1">
              Hyper-Social Growth Engine
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter leading-[1.05] mb-8">
              WE TURN<br />
              <span className="text-hologram italic">FEEDS INTO</span><br />
              FRENZY.
            </h1>
            <p className="max-w-[44ch] mx-auto text-lg md:text-xl text-muted-foreground font-medium text-pretty mb-12">
              Stop posting. Start haunting the FYP. We build social ecosystems that move at the speed of culture — not your quarterly review.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="sticker-btn inline-block px-10 py-5 bg-foreground text-void font-black text-lg rounded-2xl -rotate-2 hover:-translate-y-0.5 transition-transform"
              >
                LFG — START A PROJECT
              </a>
              <a
                href="#portfolio"
                className="px-8 py-5 text-foreground font-bold uppercase text-sm tracking-widest hover:text-cyan transition-colors"
              >
                See the chaos →
              </a>
            </div>
          </div>

          <div className="mt-20 relative flex justify-center">
            <img
              src={heroBlob}
              alt="Iridescent holographic 3D render representing dynamic social content"
              width={800}
              height={800}
              className="w-full max-w-2xl rounded-[3rem] animate-float"
            />
          </div>
        </div>
      </section>

      {/* SCROLL-DRIVEN CAMERA SCENE */}
      <CameraScrollScene />

      {/* CLIENT LOGO STRIP */}
      <section className="py-12 border-y border-border overflow-hidden">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center px-6">
          Trusted by
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="animate-marquee items-center">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
                {[
                  { name: "SEED", logo: seedLogo },
                  { name: "SBI FOUNDATION", logo: sbiLogo },
                  { name: "Schneider Foundation", logo: schneiderLogo },
                  { name: "UYGW EDUCATION", logo: uygwLogo },
                  { name: "Admiral Solutions", logo: admiralLogo },
                  { name: "DIVO", logo: divoLogo },
                ].map((c) => (
                  <div
                    key={`${i}-${c.name}`}
                    className="flex items-center gap-3 text-foreground/55 hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {c.logo ? (
                      <span className="inline-flex items-center justify-center h-10 md:h-12 w-16 md:w-20 rounded-lg bg-white/95 p-1.5">
                        <img
                          src={c.logo}
                          alt={`${c.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </span>
                    ) : null}
                    <span className="font-extrabold text-sm md:text-base tracking-widest uppercase italic">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 border border-lime/40 bg-lime/10 rounded-full text-lime font-bold text-xs uppercase tracking-[0.25em]">
                The Lab
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                The <span className="text-hologram italic">arsenal.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Four disciplines. One mission: make your brand impossible to scroll past.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`group relative bg-card/50 border border-border ${s.border} p-8 rounded-[2rem] overflow-hidden transition-colors ${s.offset ?? ""}`}
              >
                <div className="relative z-10">
                  <div className={`size-14 ${s.chip} flex items-center justify-center rounded-2xl font-black text-3xl mb-6 ${s.rotate} group-hover:rotate-0 transition-transform`}>
                    {s.emoji}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="px-3 py-1 bg-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="text-xs uppercase tracking-widest text-cyan hover:text-pink transition-colors">
              See all 7 services →
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 border border-pink/40 bg-pink/10 rounded-full text-pink font-bold text-xs uppercase tracking-[0.25em]">
                Client Portfolio
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                Receipts. <span className="text-hologram italic">Not vibes.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Featured client work. Real brands, real numbers, zero recycled case-study language.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {featuredCases.slice(0, 4).map((c) => (
              <button
                key={c.client}
                type="button"
                onClick={() => setOpenId(c.id)}
                className="group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 rounded-[2rem]"
                aria-label={`Open ${c.client} case study`}
              >
                <article className="relative overflow-hidden rounded-[2rem] aspect-[4/3] hover:-translate-y-1 transition-transform">
                  <div className={`absolute inset-0 ${c.bg}`} />
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.client} logo`}
                      className="absolute inset-0 size-full object-contain p-10 md:p-12"
                    />
                  ) : c.wordmark ? (
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                      <span className={`text-5xl md:text-6xl font-black tracking-tight text-center leading-none ${c.wordmark.className}`}>
                        {c.wordmark.text}
                      </span>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </article>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{c.client}</h3>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold whitespace-nowrap">
                    {c.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/work" className="text-xs uppercase tracking-widest text-cyan hover:text-pink transition-colors">
              See full portfolio + testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto bg-card border border-border rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-80 bg-electric rounded-full blur-[120px] opacity-30 pointer-events-none" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-hologram mb-3">{s.value}</div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 border border-cyan/40 bg-cyan/10 rounded-full text-cyan font-bold text-xs uppercase tracking-[0.25em]">
                Vibe Check
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-3xl">
                We're <span className="text-hologram italic">chronically online</span> on purpose.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A studio of strategists, editors, and operators who grew up inside the algorithm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-[2rem] overflow-hidden mb-12">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-background p-10 md:p-12">
                <div className="text-xs font-mono text-muted-foreground tracking-widest mb-6">
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about" className="text-xs uppercase tracking-widest text-cyan hover:text-pink transition-colors">
              More about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-lime/40 bg-lime/10 rounded-full text-lime font-bold text-xs uppercase tracking-[0.25em]">
            Brief Us
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Ready to <span className="text-hologram italic">cause a scene?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Brief us in 60 seconds. We'll respond in 24 hours with a battle plan.
          </p>
          <Link
            to="/contact"
            className="sticker-btn inline-block px-12 py-6 bg-lime text-void font-black text-xl rounded-2xl -rotate-2 hover:-translate-y-0.5 transition-transform"
          >
            BRIEF US →
          </Link>
        </div>
      </section>

      {/* Case Study Modal */}
      {openCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-void/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${openCase.client} case study`}
          >
            <button
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center text-lg font-bold transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className={`relative min-h-[280px] md:min-h-[520px] ${openCase.bg}`}>
                {openCase.logo ? (
                  <img
                    src={openCase.logo}
                    alt={`${openCase.client} logo`}
                    className="absolute inset-0 size-full object-contain p-12 md:p-16"
                  />
                ) : openCase.wordmark ? (
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <span className={`text-6xl md:text-7xl font-black tracking-tight text-center leading-none ${openCase.wordmark.className}`}>
                      {openCase.wordmark.text}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink mb-2">
                    {openCase.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                    {openCase.client}
                  </h2>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">Challenge</div>
                  <p className="text-foreground/90 leading-relaxed">{openCase.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">Solution</div>
                  <p className="text-foreground/90 leading-relaxed">{openCase.solution}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-2">Results</div>
                  <p className="text-hologram font-bold leading-relaxed">{openCase.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
