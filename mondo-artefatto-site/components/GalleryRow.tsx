"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Piece } from "@/types/piece";

interface GalleryRowProps {
  piece: Piece;
  index: number;
}

export default function GalleryRow({ piece, index }: GalleryRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16
        items-center py-16 md:py-20
        border-t border-line
        ${isEven ? "" : ""}
      `}
    >
      {/* Image */}
      <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
        <Link
          href={`/pieces/${piece.slug}`}
          className="block relative w-full aspect-[4/5] rounded overflow-hidden group"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={piece.image}
            alt={piece.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
        </Link>
      </div>

      {/* Text */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"} flex flex-col gap-4`}>
        <p className="font-label text-xs uppercase tracking-widest text-ink-soft">
          {piece.eyebrow}
        </p>
        <h2
          className="font-display font-light text-ink"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.05 }}
        >
          {piece.title}
        </h2>
        <p
          className="font-body text-ink-soft"
          style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
        >
          {piece.teaser}
        </p>
        <Link
          href={`/pieces/${piece.slug}`}
          className="look-closer-link group inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-ink w-fit mt-2"
        >
          <span className="relative">
            Look Closer
            <span
              className="
                absolute -bottom-0.5 left-0 h-px bg-soft-green
                w-0 group-hover:w-full
                transition-all duration-300 ease-out
              "
            />
          </span>
          <span className="text-soft-green transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
