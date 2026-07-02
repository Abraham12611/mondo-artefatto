import Image from "next/image";
import type { Piece } from "@/types/piece";

interface PanelDProps {
  piece: Piece;
}

export default function PanelD({ piece }: PanelDProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex items-center relative px-6 md:px-16 py-24 bg-paper-deep"
      aria-label={`${piece.title} — what is happening`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-screen-xl w-full items-center mx-auto">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
            What Is Happening
          </p>
          <p
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
          >
            {piece.copy.deeper}
          </p>
        </div>

        {/* Deeper image */}
        <div className="relative w-full aspect-square rounded overflow-hidden">
          <Image
            src={piece.images?.[1] ?? piece.image}
            alt={`${piece.title} — mechanism detail`}
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
