import HeroSection from "@/components/HeroSection";
import GalleryRow from "@/components/GalleryRow";
import { pieces } from "@/lib/pieces";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="work" className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
        {pieces.map((piece, index) => (
          <GalleryRow key={piece.slug} piece={piece} index={index} />
        ))}
      </section>

      {/* TODO: FilmBand re-added here once film is created — see build plan D.2 */}
    </>
  );
}
