import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import knsLogo from "@/assets/kns-logo.png";

type NavLink = {
  to: "/services" | "/work" | "/about";
  hash: string;
  label: string;
};

const links: NavLink[] = [
  { to: "/services", hash: "services", label: "The Lab" },
  { to: "/work", hash: "portfolio", label: "Portfolio" },
  { to: "/about", hash: "about", label: "Vibe Check" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  function handleAnchorClick(e: React.MouseEvent, hash: string) {
    if (!onHome) return; // let the Link route normally
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${hash}`);
    }
    setOpen(false);
  }

  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-6">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter italic">
          <span>KRIN<span className="text-hologram">ASSO</span></span>
          <img src={knsLogo} alt="KRINASSO logo" className="h-8 w-8 object-contain" />
        </Link>
        <div className="hidden md:flex gap-10 font-medium text-sm tracking-wide uppercase">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              hash={onHome ? l.hash : undefined}
              onClick={(e) => handleAnchorClick(e, l.hash)}
              className="text-foreground/80 hover:text-cyan transition-colors"
              activeProps={{ className: "text-cyan" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-lime text-void px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Brief Us
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-foreground"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-card/80 backdrop-blur">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                hash={onHome ? l.hash : undefined}
                onClick={(e) => handleAnchorClick(e, l.hash)}
                className="text-base font-semibold uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-lime text-void px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-center"
            >
              Brief Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
