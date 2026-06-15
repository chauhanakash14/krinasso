import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="overflow-hidden py-16">
        <div className="animate-marquee gap-12 text-6xl md:text-8xl font-black uppercase tracking-tighter whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 pr-12">
              <span className="opacity-15">Viral Strategy</span>
              <span className="text-hologram">//</span>
              <span className="opacity-15">Motion Design</span>
              <span className="text-hologram">//</span>
              <span className="opacity-15">Community Chaos</span>
              <span className="text-hologram">//</span>
              <span className="opacity-15">Trend Hijack</span>
              <span className="text-hologram">//</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-border">
        <div>
          <div className="text-xl font-extrabold italic tracking-tighter mb-3">
            KRIN<span className="text-hologram">ASSO</span>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Hyper-social growth engine for brands that refuse to be background noise.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/krinasso.kns?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-pink hover:border-pink transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Studio</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-cyan">The Lab</Link></li>
            <li><Link to="/work" className="hover:text-cyan">Work</Link></li>
            <li><Link to="/about" className="hover:text-cyan">Vibe Check</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-cyan">Social Media Strategy</Link></li>
            <li><Link to="/services" className="hover:text-cyan">Content Production</Link></li>
            <li><Link to="/services" className="hover:text-cyan">Performance Marketing</Link></li>
            <li><Link to="/services" className="hover:text-cyan">Personal Branding</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a href="mailto:hello@krinasso.com" className="hover:text-pink">hello@krinasso.com</a>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="flex flex-col">
                <a href="tel:+918920157655" className="hover:text-pink">+91 8920157655</a>
                <a href="tel:+917042317047" className="hover:text-pink">+91 7042317047</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Noida, Uttar Pradesh<br />India, 201301</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} KRINASSO — Built to be unignorable.
      </div>
    </footer>
  );
}
