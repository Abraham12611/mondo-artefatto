"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { pieces } from "@/lib/pieces";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/colophon", label: "Colophon" },
];

export default function Nav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDetailPage = pathname.startsWith("/pieces/");
  const slugMatch = pathname.match(/^\/pieces\/([^/]+)/);
  const currentPiece = slugMatch
    ? pieces.find((p) => p.slug === slugMatch[1])
    : null;

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  if (isDetailPage) return null;

  const showSolid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 py-4 md:px-12
          border-b
          ${showSolid ? "bg-paper border-line" : "bg-transparent border-transparent"}
          ${reduceMotion ? "" : "transition-all duration-300 ease-out"}
        `}
      >
        <Link href="/" aria-label="Mondo Artefatto — home" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
          <Image src="/logoipsum-280.svg" alt="Mondo Artefatto" width={52} height={20} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {currentPiece && (
            <span
              className="font-label text-xs uppercase tracking-widest text-ink-soft"
              aria-label={`Piece ${currentPiece.number} of ${pieces.length}`}
            >
              {String(currentPiece.number).padStart(2, "0")}&nbsp;/&nbsp;{String(pieces.length).padStart(2, "0")}
            </span>
          )}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label text-xs uppercase tracking-widest text-ink hover:text-taupe-green transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-green rounded"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-5 h-px bg-ink ${reduceMotion ? "" : "transition-transform duration-200"} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-ink ${reduceMotion ? "" : "transition-opacity duration-200"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink ${reduceMotion ? "" : "transition-transform duration-200"} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </header>

      {/* Mobile overlay nav */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`
          md:hidden fixed inset-0 z-40 bg-paper flex flex-col justify-center px-8
          ${reduceMotion ? "" : "transition-opacity duration-300"}
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display font-light text-ink hover:text-taupe-green transition-colors"
              style={{ fontSize: "clamp(1.75rem, 8vw, 3rem)", lineHeight: 1.05 }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {currentPiece && (
          <p className="absolute bottom-8 left-8 font-label text-xs uppercase tracking-widest text-ink-soft">
            {String(currentPiece.number).padStart(2, "0")}&nbsp;/&nbsp;{String(pieces.length).padStart(2, "0")}
          </p>
        )}
      </div>
    </>
  );
}
