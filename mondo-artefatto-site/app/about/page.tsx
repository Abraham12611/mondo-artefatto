import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mondo Artefatto",
  description:
    "What the edited world means, how the ten pieces rhyme, the method behind the collection, and the name.",
};

const pairs = [
  {
    a: "Definitiva",
    b: "Reliquiario",
    note: "Erasure by seamless addition versus erasure by subtraction. One closes the gap so cleanly no hole remains. The other cuts the whole into pieces and calls it preservation.",
  },
  {
    a: "Ritocco",
    b: "Immobile",
    note: "A false detail inserted into an object, and a person restored into a false ideal. Both are about the editor deciding what the original should have looked like.",
  },
  {
    a: "Riproduzione",
    b: "Residuo",
    note: "Memory replaced by a copy that is preferred to the thing it replaced, and memory dissolving until only a few strange fragments remain. Two ways to lose the original.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper min-h-dvh">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-36 pb-32">
        <div className="max-w-2xl flex flex-col gap-24">

          {/* The Idea */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              The Idea
            </p>
            <h1
              className="font-display font-light text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05 }}
            >
              The Edited World
            </h1>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              Reality does not arrive raw. By the time it reaches you it has been named,
              framed, corrected, filed, and restored. The copy is what gets kept. The
              original is what gets lost. Each of the ten pieces in this collection is
              one instance of that process: a different mechanism, a different medium,
              the same quiet claim.
            </p>
          </section>

          {/* The Spine */}
          <section className="flex flex-col gap-8">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              The Spine
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              The ten pieces are not ten separate arguments. They rhyme. Some are
              opposites. Some are mirrors. The structure is never stated on the surface
              of the work. It is there for the visitor who looks across the whole set.
            </p>
            <div className="flex flex-col gap-8 border-l-2 border-line pl-6">
              {pairs.map((p) => (
                <div key={p.a} className="flex flex-col gap-2">
                  <p className="font-label text-xs uppercase tracking-widest text-ink">
                    {p.a} &amp; {p.b}
                  </p>
                  <p
                    className="font-body text-ink-soft"
                    style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
                  >
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Method */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              The Method
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              The tribunal: one person, two machines, a great many votes. Every image
              was argued into existence. The rule was simple and held without exception:
              if you cannot see it, it is not there. No image was accepted because it
              was intended to contain something. It was accepted only when it actually
              did.
            </p>
          </section>

          {/* The Name */}
          <section className="flex flex-col gap-6">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              The Name
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              Artefatto. In Italian, a made thing. Also a faked thing. The word
              contains both without distinguishing between them, which is the collection's
              own argument held inside a single noun. Mondo Artefatto: the made world,
              and the world made up.
            </p>
          </section>

          {/* Honest note */}
          <section className="flex flex-col gap-4 bg-paper-deep rounded p-6 border border-line">
            <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
              A Plain Note
            </p>
            <p
              className="font-label text-sm text-ink-soft"
              style={{ lineHeight: 1.6 }}
            >
              The images in this collection were made with Reve, an AI image generation
              tool, through iterative editing over the course of one week. The tool made
              the images possible. The argument made them intentional. This is stated
              plainly because the collection is about exactly this act: a thing made
              with a machine, filed as the original, and presented as the truth. No
              hiding the tool. The tool is the subject.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
