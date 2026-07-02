"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  panelCount: number;
}

export default function HorizontalScroller({
  children,
  panelCount,
}: HorizontalScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const scrollToPanel = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({ left: index * scroller.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function handleKey(e: KeyboardEvent) {
      const scrollLeft = scroller!.scrollLeft;
      const panelWidth = scroller!.clientWidth;
      const currentIndex = Math.round(scrollLeft / panelWidth);

      if (e.key === "ArrowRight" && currentIndex < panelCount - 1) {
        e.preventDefault();
        scrollToPanel(currentIndex + 1);
      }
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        scrollToPanel(currentIndex - 1);
      }
    }

    function handleScroll() {
      const panelWidth = scroller!.clientWidth;
      const index = Math.round(scroller!.scrollLeft / panelWidth);
      setActivePanel(index);
    }

    let wheelTimer: ReturnType<typeof setTimeout> | null = null;
    let accumulated = 0;
    let isScrolling = false;

    function handleWheel(e: WheelEvent) {
      const el = scroller!;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;

      const atLeft  = el.scrollLeft <= 0;
      const atRight = el.scrollLeft >= maxScrollLeft - 1;

      if (atLeft && delta < 0) return;
      if (atRight && delta > 0) return;

      e.preventDefault();

      // While a smooth scroll is in progress, ignore further input
      if (isScrolling) return;

      accumulated += delta;

      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        if (accumulated === 0) return;

        const panelWidth = el.clientWidth;
        const currentIndex = Math.round(el.scrollLeft / panelWidth);
        const direction = accumulated > 0 ? 1 : -1;
        const targetIndex = Math.max(0, Math.min(panelCount - 1, currentIndex + direction));

        accumulated = 0;
        isScrolling = true;
        el.scrollTo({ left: targetIndex * panelWidth, behavior: "smooth" });

        // Unlock after the smooth scroll completes (~600ms)
        setTimeout(() => { isScrolling = false; }, 650);
      }, 50);
    }

    scroller.addEventListener("keydown", handleKey);
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      scroller.removeEventListener("keydown", handleKey);
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollToPanel, panelCount]);

  const progressPct = panelCount > 1
    ? (activePanel / (panelCount - 1)) * 100
    : 0;

  return (
    <>
      {/* Desktop: horizontal scroll */}
      <div
        ref={scrollerRef}
        role="region"
        aria-label="Piece detail panels"
        tabIndex={0}
        className="
          hidden md:flex
          overflow-x-auto overflow-y-hidden
          focus:outline-none
          h-dvh
        "
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {children}
      </div>

      {/* Progress line — desktop only */}
      <div
        className="hidden md:block fixed bottom-0 left-0 h-px bg-line w-full z-40"
        aria-hidden="true"
      >
        <div
          className="h-full bg-soft-green transition-all duration-300 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Panel dot indicators — desktop only */}
      <nav
        aria-label="Panel navigation"
        className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 gap-2 z-40"
      >
        {Array.from({ length: panelCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPanel(i)}
            aria-label={`Go to panel ${i + 1}`}
            aria-current={activePanel === i ? "true" : undefined}
            className={`
              rounded-full transition-all duration-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-green
              ${activePanel === i
                ? "w-3 h-1.5 bg-soft-green"
                : "w-1.5 h-1.5 bg-ink/20 hover:bg-ink/40"}
            `}
          />
        ))}
      </nav>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col">
        {children}
      </div>
    </>
  );
}
