import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brief Us | KRINASSO" },
      { name: "description", content: "Tell us about your brand. We'll respond within 24 hours with a battle plan." },
      { property: "og:title", content: "Contact — Brief Us | KRINASSO" },
      { property: "og:description", content: "Brief KRINASSO. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const budgets = ["₹40-65K/Month", "₹65-90K/Month", "₹90-120K/Month", "₹120K+/Month"];
const services = ["Strategy", "Content", "Paid Social", "Community", "Influencer", "Analytics"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  function toggleService(s: string) {
    setSelectedServices((prev) => 
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Package data cleanly into a standard JSON payload
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      site: formData.get("site") || "N/A",
      budget: formData.get("budget") || "Not selected",
      services: selectedServices.join(", ") || "None selected",
      brief: formData.get("brief"),
    };

    try {
      // REPLACE THIS URL WITH YOUR ACTUAL DOMAIN PATH TO THE PHP FILE
      const HOSTINGER_PHP_URL = "https://krinasso.com/send-brief.php";

      const response = await fetch(HOSTINGER_PHP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Could not connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 border border-lime/40 bg-lime/10 rounded-full text-lime font-bold text-xs uppercase tracking-[0.25em]">
            Brief Us
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6">
            Tell us <span className="text-hologram italic">everything.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            60 seconds to fill in. 24 hours to respond. No discovery calls with sales reps, ever.
          </p>
        </div>

        {submitted ? (
          <div className="bg-card border border-lime/40 rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-80 bg-lime rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="relative">
              <div className="text-7xl mb-6">⚡️</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                Brief <span className="text-hologram italic">received.</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We'll be in your inbox within 24 hours with next steps and a tailored plan.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-[2rem] p-8 md:p-12 space-y-8"
          >
            {errorMessage && (
              <div className="p-4 bg-pink/10 border border-pink text-pink rounded-xl text-sm font-bold">
                ⚠️ {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Brand / company" name="company" required />
              <Field label="Website or @handle" name="site" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-bold">
                What do you need?
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => {
                  const active = selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border transition-colors ${
                        active
                          ? "bg-lime text-void border-lime"
                          : "border-border text-foreground/70 hover:border-cyan hover:text-cyan"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-bold">
                Monthly budget
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <label key={b} className="cursor-pointer">
                    <input type="radio" name="budget" value={b} className="peer sr-only" required />
                    <div className="text-center px-3 py-3 rounded-xl border border-border text-sm font-bold peer-checked:border-pink peer-checked:bg-pink/10 peer-checked:text-pink transition-colors">
                      {b}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-bold" htmlFor="brief">
                The brief
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={5}
                placeholder="What are you launching, fixing, or scaling?"
                className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan transition-colors"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="sticker-btn w-full md:w-auto inline-block px-12 py-5 bg-lime text-void font-black text-lg rounded-2xl -rotate-1 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND THE BRIEF →"}
              </button>
            </div>
          </form>
        )}

        <div className="mt-12 text-sm text-muted-foreground text-center">
          Prefer email? <a href="mailto:hello@krinasso.com" className="text-cyan hover:underline">hello@krinasso.com</a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-bold">
        {label} {required && <span className="text-pink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan transition-colors"
      />
    </div>
  );
}