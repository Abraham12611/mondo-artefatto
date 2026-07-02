import type { Metadata } from "next";
import { palette } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Colophon — Mondo Artefatto",
  description: "Tools, typefaces, palette, process, and credits for Mondo Artefatto.",
};

const swatches = [
  { name: "Paper",         role: "Background",           hex: palette.paper },
  { name: "Paper Deep",    role: "Raised surfaces",       hex: palette.paperDeep },
  { name: "Ink",           role: "Primary text",          hex: palette.ink },
  { name: "Ink Soft",      role: "Secondary text",        hex: palette.inkSoft },
  { name: "Taupe Green",   role: "Primary accent",        hex: palette.taupeGreen },
  { name: "Soft Green",    role: "Secondary accent",      hex: palette.softGreen },
  { name: "Pale Blue",     role: "Reveal backgrounds",    hex: palette.paleBlue },
  { name: "Pale Blue Ink", role: "Reveal text",           hex: palette.paleBlueInk },
  { name: "Beige",         role: "Tertiary (rare)",       hex: palette.beige },
  { name: "Line",          role: "Hairlines & dividers",  hex: palette.line },
];

const typefaces = [
  {
    name: "Fraunces",
    role: "Display — piece titles, hero, section heads",
    note: "Warm old-style serif variable font. Soft ink traps; set large with tight leading.",
  },
  {
    name: "Inter",
    role: "Body — reading text, descriptions, essay",
    note: "Quiet neutral-humanist grotesque. Comfortable at long-form reading sizes.",
  },
  {
    name: "IBM Plex Mono",
    role: "Label — eyebrows, metadata, captions, footer",
    note: "Cold, filed, bureaucratic. Always uppercase with wide letter-spacing. The institutional voice.",
  },
];

const tools = [
  { name: "Reve",       note: "AI image generation — all ten artworks" },
  { name: "Next.js 16", note: "React framework, App Router, static export" },
  { name: "Tailwind CSS v4", note: "Utility-first styling" },
  { name: "Framer Motion", note: "Animation — capsule reveals, scroll transitions" },
  { name: "Vercel / Netlify", note: "Hosting and deployment" },
];

export default function ColophonPage() {
  return (
    <div className="bg-paper min-h-dvh">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-36 pb-32">
        <div className="max-w-3xl flex flex-col gap-20">

          <div className="flex flex-col gap-4">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              Colophon
            </p>
            <h1
              className="font-display font-light text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05 }}
            >
              Small print.
            </h1>
          </div>

          {/* Palette */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft border-b border-line pb-3">
              Palette
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {swatches.map((s) => (
                <div key={s.hex} className="flex flex-col gap-2">
                  <div
                    className="w-full aspect-square rounded border border-line"
                    style={{ backgroundColor: s.hex }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="font-label text-[0.65rem] uppercase tracking-widest text-ink leading-none">
                      {s.name}
                    </p>
                    <p className="font-label text-[0.65rem] tracking-wider text-ink-soft leading-none">
                      {s.hex}
                    </p>
                    <p className="font-label text-[0.6rem] uppercase tracking-widest text-ink-soft/60 leading-none mt-0.5">
                      {s.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typefaces */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft border-b border-line pb-3">
              Typefaces
            </p>
            <div className="flex flex-col gap-6">
              {typefaces.map((t) => (
                <div key={t.name} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
                  <p className="font-label text-xs uppercase tracking-widest text-ink">
                    {t.name}
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
                    {t.role}
                  </p>
                  <p
                    className="font-body text-ink-soft"
                    style={{ fontSize: "0.875rem", lineHeight: 1.5 }}
                  >
                    {t.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft border-b border-line pb-3">
              Tools
            </p>
            <div className="flex flex-col gap-4">
              {tools.map((t) => (
                <div key={t.name} className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-8">
                  <p className="font-label text-xs uppercase tracking-widest text-ink">
                    {t.name}
                  </p>
                  <p
                    className="font-body text-ink-soft col-span-2"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.5 }}
                  >
                    {t.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process note */}
          <section className="flex flex-col gap-4">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft border-b border-line pb-3">
              Process Note
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              Each image in the collection was produced through iterative generation
              and argument. A prompt would produce a candidate. The candidate would be
              examined against the brief. Most candidates were rejected. The rule was
              simple: if you cannot see it in the image, it is not there. The process
              took one week. The ten images that passed are the ones you see here.
            </p>
          </section>

          {/* Rights + contact */}
          <section className="flex flex-col gap-4 border-t border-line pt-8">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
              &copy; 2026 Mondo Artefatto. All rights reserved.
            </p>
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
              Contact:&nbsp;
              <a
                href="mailto:hello@mondo-artefatto.art"
                className="text-taupe-green hover:text-ink transition-colors underline underline-offset-2"
              >
                hello@mondo-artefatto.art
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
