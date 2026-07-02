import HeroHeadline from "./HeroHeadline";

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center px-6 md:px-12 pt-28 pb-16">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-8">
        <HeroHeadline />

        <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
          Mondo Artefatto&nbsp;&nbsp;·&nbsp;&nbsp;A Collection in Ten
          Images&nbsp;&nbsp;·&nbsp;&nbsp;2026
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-label text-[0.65rem] uppercase tracking-widest text-ink-soft">
          Scroll to see the work
        </span>
        <span
          className="block w-px h-10 bg-line motion-safe:animate-[grow_1.6s_ease-in-out_infinite]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
