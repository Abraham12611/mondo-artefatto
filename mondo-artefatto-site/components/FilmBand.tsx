import Link from "next/link";

export default function FilmBand() {
  return (
    <section className="w-full bg-pale-blue py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <p className="font-label text-xs uppercase tracking-widest text-pale-blue-ink">
            The Film
          </p>
          <h2
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
          >
            How a person who is not an artist made ten of them.
          </h2>
          <p
            className="font-body text-ink-soft max-w-sm"
            style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            One week. A tool that paints from words. And an argument that would
            not end. This is the story of the collection, and the strange method
            behind it.
          </p>
          <Link
            href="/film"
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-ink w-fit mt-2"
          >
            <span className="relative">
              Watch
              <span
                className="
                  absolute -bottom-0.5 left-0 h-px bg-pale-blue-ink
                  w-0 group-hover:w-full
                  transition-all duration-300 ease-out
                "
              />
            </span>
            <span className="text-pale-blue-ink transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Film thumbnail placeholder — replaced in Phase 6 */}
        <div className="relative w-full aspect-video rounded overflow-hidden bg-pale-blue-ink/10 border border-pale-blue-ink/20 flex items-center justify-center">
          <span className="font-label text-xs uppercase tracking-widest text-pale-blue-ink/40">
            Film
          </span>
        </div>
      </div>
    </section>
  );
}
