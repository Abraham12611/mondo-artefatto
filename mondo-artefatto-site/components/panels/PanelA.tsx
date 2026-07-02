import Image from "next/image";
import Link from "next/link";
import type { Piece } from "@/types/piece";

interface PanelAProps {
  piece: Piece;
}

export default function PanelA({ piece }: PanelAProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex flex-col items-center justify-center relative px-6 md:px-16 py-24 bg-paper"
      aria-label={`${piece.title} — full image`}
    >
      {/* Home / logo button */}
      <Link
        href="/"
        aria-label="Back to home"
        className="absolute top-6 left-6 md:top-8 md:left-12 flex items-center opacity-70 hover:opacity-100 transition-opacity z-10"
      >
        <Image src="/logoipsum-280.svg" alt="Mondo Artefatto" width={52} height={20} />
      </Link>

      {/* Piece counter */}
      <span className="absolute top-8 right-6 md:right-16 font-label text-xs uppercase tracking-widest text-ink-soft">
        {String(piece.number).padStart(2, "0")}&nbsp;/&nbsp;{String(10).padStart(2, "0")}
      </span>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-screen-xl w-full">
        {/* Artwork */}
        <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded overflow-hidden flex-shrink-0 mx-auto">
          <Image
            src={piece.image}
            alt={piece.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 90vw"
            priority
          />
        </div>

        {/* Title block */}
        <div className="flex flex-col gap-4">
          <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
            {piece.eyebrow}
          </p>
          <h1
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05 }}
          >
            {piece.title}
          </h1>
          <p className="font-label text-xs uppercase tracking-widest text-ink-soft mt-4">
            Keep scrolling to look closer&nbsp;→
          </p>
        </div>
      </div>
    </section>
  );
}
