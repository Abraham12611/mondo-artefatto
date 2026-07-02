import Image from "next/image";
import type { Piece } from "@/types/piece";

interface PanelBProps {
  piece: Piece;
}

export default function PanelB({ piece }: PanelBProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex items-center relative px-6 md:px-16 py-24 bg-paper"
      aria-label={`${piece.title} — first glance`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-screen-xl w-full items-center mx-auto">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
            At First Glance
          </p>
          <p
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2 }}
          >
            {piece.copy.glance}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
          <Image
            src={piece.image}
            alt={`${piece.title} — surface view`}
            fill
            className="object-contain"
            sizes="(min-width: 768px) 45vw, 90vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
