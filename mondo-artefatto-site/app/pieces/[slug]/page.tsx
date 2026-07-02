import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pieces, getPieceBySlug, getAdjacentPieces } from "@/lib/pieces";
import HorizontalScroller from "@/components/HorizontalScroller";
import PanelA from "@/components/panels/PanelA";
import PanelB from "@/components/panels/PanelB";
import PanelC from "@/components/panels/PanelC";
import PanelD from "@/components/panels/PanelD";
import PanelE from "@/components/panels/PanelE";
import PanelF from "@/components/panels/PanelF";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) return {};
  return {
    title: `${piece.title} — Mondo Artefatto`,
    description: piece.teaser,
    openGraph: {
      title: `${piece.title} — Mondo Artefatto`,
      description: piece.teaser,
      images: [{ url: piece.image }],
    },
  };
}

export default async function PieceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) notFound();

  const { prev, next } = getAdjacentPieces(slug);

  return (
    <HorizontalScroller panelCount={6}>
      <PanelA piece={piece} />
      <PanelB piece={piece} />
      <PanelC piece={piece} />
      <PanelD piece={piece} />
      <PanelE piece={piece} />
      <PanelF piece={piece} prevPiece={prev} nextPiece={next} />
    </HorizontalScroller>
  );
}
