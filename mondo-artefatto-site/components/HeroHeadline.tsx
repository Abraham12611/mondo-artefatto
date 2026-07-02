export default function HeroHeadline() {
  return (
    <div className="max-w-4xl">
      <h1
        className="font-display font-light text-ink mb-8"
        style={{
          fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
          lineHeight: 1.15,
        }}
      >
        {/* TODO: re-add inline image capsules (HeroCapsule) once fully fixed — see build plan */}
        Reality no longer arrives raw. It arrives corrected, restored, filed. The edited version is the one you are shown.
      </h1>
    </div>
  );
}
