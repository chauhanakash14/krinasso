import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "The Lab — Services | KRINASSO" },
      { name: "description", content: "Strategy, content, paid social, community and analytics. The full KRINASSO service stack for brands that want to win the feed." },
      { property: "og:title", content: "The Lab — Services | KRINASSO" },
      { property: "og:description", content: "Six disciplines for total social dominance. From strategy to paid amplification." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Social Media Strategy",
    body: "We build platform-specific growth systems designed to increase visibility, engagement and brand authority.",
    bullets: ["Content planning", "Brand positioning", "Growth roadmap"],
    tint: "from-cyan/20",
  },
  {
    n: "02",
    title: "Content Production",
    body: "High-retention content crafted for modern attention spans across Instagram, YouTube and ads.",
    bullets: ["Reels & Shorts", "Product shoots", "Motion graphics"],
    tint: "from-pink/20",
  },
  {
    n: "03",
    title: "Performance Marketing",
    body: "Data-driven ad campaigns focused on leads, conversions and scalable ROI.",
    bullets: ["Meta Ads", "Google Ads", "Creative testing"],
    tint: "from-lime/20",
  },
  {
    n: "04",
    title: "Personal Branding",
    body: "Helping founders and creators become recognizable authority figures online.",
    bullets: ["LinkedIn growth", "Founder content", "Audience building"],
    tint: "from-electric/30",
  },
  {
    n: "05",
    title: "Video Editing & Creative",
    body: "Fast-paced edits engineered for retention, storytelling and scroll-stopping visuals.",
    bullets: ["Podcast edits", "Viral reel editing", "Thumbnail design"],
    tint: "from-cyan/20",
  },
  {
    n: "06",
    title: "Analytics & Optimization",
    body: "Every campaign backed by insights, testing and continuous performance improvements.",
    bullets: ["Audience analytics", "A/B testing", "Conversion tracking"],
    tint: "from-pink/20",
  },
  {
    n: "07",
    title: "Product Shoot",
    body: "Premium product photography and videography that makes your catalog scroll-stopping and conversion-ready.",
    bullets: ["Product photos", "Lifestyle shots", "Catalog styling"],
    tint: "from-lime/20",
  },
];

function ServicesPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 border border-lime/40 bg-lime/10 rounded-full text-lime font-bold text-xs uppercase tracking-[0.25em]">
            The Lab
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Seven ways we <span className="text-hologram italic">break</span> the feed.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Pick a discipline or pick the whole stack. Either way, we ship the work and own the outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.n}
              className={`relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 group hover:-translate-y-1 transition-transform`}
            >
              <div className={`absolute -top-20 -right-20 size-60 bg-gradient-to-br ${s.tint} to-transparent rounded-full blur-3xl pointer-events-none opacity-60`} />
              <div className="relative">
                <div className="text-sm font-mono text-muted-foreground mb-6 tracking-widest">{s.n} / 07</div>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{s.body}</p>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="text-lime mt-1">▸</span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Need <span className="text-hologram italic">all of it?</span>
          </h3>
          <Link
            to="/contact"
            className="sticker-btn inline-block px-10 py-5 bg-lime text-void font-black text-lg rounded-2xl -rotate-2"
          >
            BUILD A RETAINER →
          </Link>
        </div>
      </div>
    </div>
  );
}
