import Link from "next/link";
import type { Piece } from "@/types/piece";

interface PanelFProps {
  piece: Piece;
  prevPiece: Piece;
  nextPiece: Piece;
}

export default function PanelF({ piece, prevPiece, nextPiece }: PanelFProps) {
  return (
    <section
      className="panel flex-shrink-0 w-screen min-h-dvh flex items-center relative px-6 md:px-16 py-24 bg-paper-deep"
      aria-label={`${piece.title} — notes`}
    >
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-16">
        <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
          Notes
        </p>

        {/* Two Ways + Made — side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Read It Two Ways */}
          <div className="flex flex-col gap-4">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              Read It Two Ways
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {piece.copy.twoWays}
            </p>
          </div>

          {/* How It Was Made */}
          <div className="flex flex-col gap-4">
            <p className="font-label text-xs uppercase tracking-widest text-taupe-green">
              How It Was Made
            </p>
            <p
              className="font-body text-ink-soft"
              style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {piece.copy.made}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-line pt-8">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Back to the Work</span>
          </Link>

          <Link
            href={`/pieces/${nextPiece.slug}`}
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-ink hover:text-taupe-green transition-colors"
          >
            <span className="font-display font-light italic">{nextPiece.title}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
