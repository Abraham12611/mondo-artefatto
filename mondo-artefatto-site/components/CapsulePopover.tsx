"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface CapsulePopoverProps {
  title: string;
  eyebrow: string;
  imageSrc: string;
  anchorRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
}

const POPOVER_W = 224;
const POPOVER_H = 310;
const GAP = 10;
const MARGIN = 12;

function computePosition(anchor: HTMLElement): { top: number; left: number } {
  const r = anchor.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const spaceBelow = vh - r.bottom;
  const spaceAbove = r.top;
  const spaceRight = vw - r.right;
  const spaceLeft = r.left;

  let top: number;
  let left: number;

  if (spaceBelow >= POPOVER_H + GAP) {
    // preferred: below
    top = r.bottom + GAP;
    left = r.left + r.width / 2 - POPOVER_W / 2;
  } else if (spaceAbove >= POPOVER_H + GAP) {
    // above
    top = r.top - POPOVER_H - GAP;
    left = r.left + r.width / 2 - POPOVER_W / 2;
  } else if (spaceRight >= POPOVER_W + GAP) {
    // right
    top = r.top + r.height / 2 - POPOVER_H / 2;
    left = r.right + GAP;
  } else if (spaceLeft >= POPOVER_W + GAP) {
    // left
    top = r.top + r.height / 2 - POPOVER_H / 2;
    left = r.left - POPOVER_W - GAP;
  } else {
    // fallback: below, may clip
    top = r.bottom + GAP;
    left = r.left + r.width / 2 - POPOVER_W / 2;
  }

  // Clamp to viewport
  left = Math.max(MARGIN, Math.min(left, vw - POPOVER_W - MARGIN));
  top = Math.max(MARGIN, Math.min(top, vh - POPOVER_H - MARGIN));

  return { top, left };
}

export default function CapsulePopover({
  title,
  eyebrow,
  imageSrc,
  anchorRef,
  onClose,
}: CapsulePopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (anchorRef.current) {
      setPos(computePosition(anchorRef.current));
    }
  }, [anchorRef]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        if (anchorRef.current && "focus" in anchorRef.current) {
          (anchorRef.current as HTMLElement).focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, anchorRef]);

  if (!pos) return null;

  return (
    <motion.div
      ref={popoverRef}
      role="tooltip"
      aria-label={`${title} artwork preview`}
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ position: "fixed", top: pos.top, left: pos.left, width: POPOVER_W, zIndex: 200 }}
      className="rounded-lg overflow-hidden shadow-2xl border border-pale-blue-ink/20 bg-pale-blue pointer-events-none"
    >
      <div className="relative w-full" style={{ height: POPOVER_H - 56 }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="224px"
        />
        <div className="absolute inset-0 bg-pale-blue/10" />
      </div>
      <div className="px-3 py-2 bg-pale-blue border-t border-pale-blue-ink/10" style={{ height: 56 }}>
        <p className="font-label text-[0.65rem] uppercase tracking-widest text-pale-blue-ink leading-none mb-1">
          {eyebrow}
        </p>
        <p className="font-display text-sm font-light text-ink leading-tight">
          {title}
        </p>
      </div>
    </motion.div>
  );
}
