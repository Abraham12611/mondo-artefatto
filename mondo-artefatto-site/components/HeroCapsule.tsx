"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CapsulePopover from "./CapsulePopover";

interface HeroCapsuleProps {
  title: string;
  eyebrow: string;
  imageSrc: string;
}

export default function HeroCapsule({ title, eyebrow, imageSrc }: HeroCapsuleProps) {
  const [open, setOpen] = useState(false);
  const chipRef = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      ref={chipRef}
      role="img"
      aria-label={`${title} — artwork preview`}
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      animate={reduceMotion ? {} : { y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="
        inline-flex items-center mx-1
        cursor-default select-none
        relative align-middle
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-green focus-visible:ring-offset-1 rounded-full
      "
      style={{ lineHeight: 0 }}
    >
      <span className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-line hover:border-soft-green transition-colors duration-200 block">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="32px"
        />
      </span>

      {open && (
        <CapsulePopover
          title={title}
          eyebrow={eyebrow}
          imageSrc={imageSrc}
          anchorRef={chipRef}
          onClose={() => setOpen(false)}
        />
      )}
    </motion.span>
  );
}
