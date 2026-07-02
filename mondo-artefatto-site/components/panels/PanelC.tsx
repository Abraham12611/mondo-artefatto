import Image from "next/image";
import type { Piece } from "@/types/piece";

interface PanelCProps {
  piece: Piece;
}

export default function PanelC({ piece }: PanelCProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex items-center relative px-6 md:px-16 py-24 bg-pale-blue"
      aria-label={`${piece.title} — look closer`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-screen-xl w-full items-center mx-auto">
        {/* Detail image */}
        <div className="relative w-full aspect-square rounded overflow-hidden">
          <Image
            src={piece.images?.[0] ?? piece.image}
            alt={`${piece.title} — detail`}
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="font-label text-xs uppercase tracking-widest text-pale-blue-ink">
            Look Closer
          </p>
          <p
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
          >
            {piece.copy.closer}
          </p>
        </div>
      </div>
    </section>
  );
}
