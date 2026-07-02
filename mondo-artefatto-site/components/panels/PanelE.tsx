import Image from "next/image";
import type { Piece } from "@/types/piece";

interface PanelEProps {
  piece: Piece;
}

export default function PanelE({ piece }: PanelEProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex items-center justify-center relative px-6 md:px-16 py-24 bg-paper"
      aria-label={`${piece.title} — the turn`}
    >
      {piece.images?.[2] && (
        <>
          <Image
            src={piece.images[2]}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        </>
      )}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col gap-8 text-center">
        <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
          And Then
        </p>
        <p
          className="font-display font-light text-ink"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
        >
          {piece.copy.turn}
        </p>
        {/* Quiet hairline */}
        <span className="block w-8 h-px bg-line mx-auto mt-4" aria-hidden="true" />
      </div>
    </section>
  );
}
