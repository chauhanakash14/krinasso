import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Vibe Check — About | KRINASSO" },
      { name: "description", content: "Who we are: a tight crew of strategists, editors, and chronically online operators building the next generation of social-first brands." },
      { property: "og:title", content: "Vibe Check — About | KRINASSO" },
      { property: "og:description", content: "Meet KRINASSO — a tight crew of chronically online operators." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Culture > campaigns",
    body: "A campaign ends. A cultural footprint compounds. We optimize for the latter.",
  },
  {
    title: "Speed is a feature",
    body: "If a trend takes a week to ship, it's already dead. We move at meme-time.",
  },
  {
    title: "Data, then opinion",
    body: "We bring receipts, not vibes. But once the numbers are in — strong takes only.",
  },
  {
    title: "Operators, not freelancers",
    body: "Every name on the team has shipped, scaled, or broken something at scale before.",
  },
];

function AboutPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan/40 bg-cyan/10 rounded-full text-cyan font-bold text-xs uppercase tracking-[0.25em]">
            Vibe Check
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            We're <span className="text-hologram italic">chronically online</span> on purpose.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            KRINASSO is a small studio of strategists, editors, and operators who grew up inside the algorithm. We build social-first brands for founders who don't want to be background noise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-[2rem] overflow-hidden mb-24">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-background p-10 md:p-14">
              <div className="text-xs font-mono text-muted-foreground tracking-widest mb-6">
                {String(i + 1).padStart(2, "0")} / 04
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight mb-4">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>


        <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="sticker-btn inline-block px-10 py-5 bg-lime text-void font-black text-lg rounded-2xl -rotate-2"
          >
            WORK WITH US →
          </Link>
        </div>
      </div>
    </div>
  );
}
