import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Film — Mondo Artefatto",
  description:
    "One week. A tool that paints from words. And an argument that would not end. The story of the collection and the strange method behind it.",
};

interface Section {
  label: string;
  body: string;
}

const sections: Section[] = [
  {
    label: "The Problem",
    body: "Ten images that had to mean something, in a week, by someone who is not an artist. That was the brief. Not a brief given by anyone else. A brief given to myself, to find out whether meaning could be made on purpose, without training, without a studio, without precedent.",
  },
  {
    label: "The Method",
    body: "The tribunal: one person, two machines, and a great many votes. Every image went through the same process. Generate, argue, reject, try again. The machine proposed. I disposed. When something passed, it passed because it had survived the argument, not because it looked good.",
  },
  {
    label: "The Rule",
    body: "One rule, held without exception: if you cannot see it, it is not there. No image was accepted because it was intended to show something. It was accepted only when it actually showed it. Intention without evidence is just description.",
  },
  {
    label: "The Grind",
    body: "The fourth blank patch. The one image that would not come. The moment when the process broke down and had to be rebuilt from a different angle. Every collection has one. This one had Manofatto, which arrived last and nearly did not arrive at all.",
  },
  {
    label: "The Name",
    body: "Artefatto: a made thing, and a faked thing, in the same word. The collection is about the world arriving already edited. The name is about the thing you are holding: made with a tool, and made with intent, which is the same ambiguity the collection puts on trial.",
  },
];

export default function FilmPage() {
  return (
    <div className="bg-paper min-h-dvh">
      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pt-36 pb-16">
        <p className="font-label text-xs uppercase tracking-widest text-ink-soft mb-6">
          The Film
        </p>
        <h1
          className="font-display font-light text-ink max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05 }}
        >
          Mondo Artefatto. A short film about making something out of nothing.
        </h1>
      </section>

      {/* Video embed */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-20">
        <div className="relative w-full aspect-video rounded overflow-hidden bg-paper-deep border border-line flex items-center justify-center">
          {/* Replace src with real YouTube/Vimeo embed URL in Phase 6 */}
          <span className="font-label text-xs uppercase tracking-widest text-ink-soft/40">
            Film placeholder — embed in Phase 6
          </span>
        </div>
      </section>

      {/* Prose sections */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 pb-32">
        <div className="max-w-2xl flex flex-col gap-20">
          {sections.map((s) => (
            <div key={s.label} className="flex flex-col gap-5">
              <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
                {s.label}
              </p>
              <p
                className="font-body text-ink-soft"
                style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
              >
                {s.body}
              </p>
            </div>
          ))}

          {/* Closing line */}
          <p
            className="font-display font-light text-ink text-center pt-8 border-t border-line"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            The tool made the images possible. The argument made them intentional.
          </p>
        </div>
      </section>
    </div>
  );
}
