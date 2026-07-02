"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/pieces/")) return null;

  return (
    <footer className="relative overflow-hidden bg-paper-deep border-t border-line">
      {/* Dithered background echo — Manofatto hidden hand detail */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Placeholder: replaced with real dithered image in Phase 6 */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.04] bg-ink rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 pt-12 pb-6">
        {/* Top row — three columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 border-b border-line pb-10">
          <div className="flex flex-col gap-1">
            <span className="font-label text-xs uppercase tracking-widest text-ink-soft">
              mondo-artefatto.art
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-ink-soft">
              &copy; 2026
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              Behance
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <Link
              href="/#work"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              About
            </Link>
            <Link
              href="/colophon"
              className="font-label text-xs uppercase tracking-widest text-ink-soft hover:text-taupe-green transition-colors"
            >
              Colophon
            </Link>
          </div>
        </div>

        {/* Oversized split wordmark */}
        <div className="flex flex-wrap items-end gap-x-4 leading-none select-none">
          <span
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.9 }}
          >
            Mondo
          </span>
          <span
            className="font-display font-light italic text-ink"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.9 }}
          >
            Artefatto
            <span className="not-italic text-soft-green">.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
