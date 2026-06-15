import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import frame1 from "@/assets/camera-frame-1.jpg";
import frame2 from "@/assets/camera-frame-2.jpg";
import frame3 from "@/assets/camera-frame-3.jpg";
import frame4 from "@/assets/camera-frame-4.jpg";

const frames = [frame1, frame2, frame3, frame4];

const captions = [
  {
    kicker: "01 — The Instrument",
    title: "We shoot with intent.",
    body: "Every frame engineered. Every detail deliberate.",
  },
  {
    kicker: "02 — The Aperture",
    title: "Zoom in. Lock focus.",
    body: "We obsess over the micro so your brand wins the macro.",
  },
  {
    kicker: "03 — The Motion",
    title: "Made to move.",
    body: "Stories that don't sit still — they outrun the scroll.",
  },
  {
    kicker: "04 — The Portal",
    title: "Step through the lens.",
    body: "A creative lab where tech, story and performance converge.",
  },
];

export function CameraScrollScene() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = rootRef.current;
    if (!root) return;

    let ctx: gsap.Context | undefined;
    let cleanupFn: (() => void) | undefined;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-frame]", root);
        const captionEls = gsap.utils.toArray<HTMLElement>("[data-caption]", root);
        const stage = root.querySelector<HTMLElement>("[data-stage]");
        if (!stage) return;

        // opacity-only crossfade (scaling 1080p images thrashes the compositor)
        gsap.set(layers, { opacity: 0, force3D: true });
        gsap.set(layers[0], { opacity: 1 });
        gsap.set(captionEls, { opacity: 0, y: 20 });
        gsap.set(captionEls[0], { opacity: 1, y: 0 });

        // Each scene gets a HOLD (read time) + TRANSITION. Total scroll = scenes * 1.4vh of viewport.
        const HOLD = 1;        // dwell time per scene
        const TRANS = 0.5;     // crossfade time between scenes
        const totalUnits = frames.length * HOLD + (frames.length - 1) * TRANS;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${window.innerHeight * frames.length * 1.4}`,
            pin: stage,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        let cursor = HOLD; // first scene already visible; advance past its hold
        for (let i = 1; i < frames.length; i++) {
          const start = cursor / totalUnits;
          const dur = TRANS / totalUnits;
          tl.to(layers[i - 1], { opacity: 0, ease: "none", duration: dur }, start);
          tl.to(layers[i], { opacity: 1, ease: "none", duration: dur }, start);
          tl.to(captionEls[i - 1], { opacity: 0, y: -20, ease: "power1.out", duration: dur }, start);
          tl.fromTo(
            captionEls[i],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, ease: "power1.out", duration: dur },
            start + dur * 0.4,
          );
          cursor += TRANS + HOLD;
        }

      }, root);

      cleanupFn = () => ctx?.revert();
    })();

    return () => {
      cleanupFn?.();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full bg-void"
      aria-label="KRINASSO creative lab scroll experience"
    >
      <div
        data-stage
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Frames stack */}
        <div className="absolute inset-0">
          {frames.map((src, i) => (
            <div
              key={i}
              data-frame
              className="absolute inset-0 will-change-[opacity]"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Static neon wash + bottom fade (no blend modes, no animation) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.10), transparent 45%), radial-gradient(circle at 75% 70%, rgba(255,0,200,0.12), transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 30%, transparent 60%, rgba(0,0,0,0.75))",
          }}
        />


        {/* HUD chrome */}
        <div className="pointer-events-none absolute inset-0 p-6 md:p-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-cyan/80">
          <div className="flex justify-between">
            <span>● REC · KNS-LAB</span>
            <span className="text-pink/80">f/1.4 · ISO 800</span>
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex justify-between">
            <span>SCROLL TO FOCUS</span>
            <span>A7 · G MASTER</span>
          </div>
          {/* Corner brackets */}
          <span className="absolute top-16 left-6 md:left-10 size-6 border-l-2 border-t-2 border-cyan/60" />
          <span className="absolute top-16 right-6 md:right-10 size-6 border-r-2 border-t-2 border-cyan/60" />
          <span className="absolute bottom-16 left-6 md:left-10 size-6 border-l-2 border-b-2 border-pink/60" />
          <span className="absolute bottom-16 right-6 md:right-10 size-6 border-r-2 border-b-2 border-pink/60" />
        </div>

        {/* Captions */}
        <div className="absolute inset-0 flex items-end md:items-center justify-start pointer-events-none">
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-0">
            {captions.map((c, i) => (
              <div
                key={i}
                data-caption
                className={`${i === 0 ? "relative" : "absolute inset-x-0 px-6 md:px-12"} max-w-xl will-change-[opacity,transform]`}
              >
                <div className="inline-block px-3 py-1 mb-4 border border-cyan/50 bg-void/40 backdrop-blur-sm rounded-full text-cyan font-bold text-[10px] uppercase tracking-[0.3em]">
                  {c.kicker}
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.05] mb-4 drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
                  {c.title}
                </h2>
                <p className="text-base md:text-lg text-white/80 max-w-md">
                  {c.body}
                </p>
                {i === captions.length - 1 && (
                  <Link
                    to="/contact"
                    className="pointer-events-auto sticker-btn inline-block mt-8 px-8 py-4 bg-lime text-void font-black text-base rounded-2xl -rotate-2 hover:-translate-y-0.5 transition-transform"
                  >
                    BRIEF US →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraScrollScene;
