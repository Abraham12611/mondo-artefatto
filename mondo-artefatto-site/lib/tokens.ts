export const palette = {
  paper:         "#F3EFE6",
  paperDeep:     "#EAE4D6",
  ink:           "#20211E",
  inkSoft:       "#4A4C46",
  taupeGreen:    "#555940",
  softGreen:     "#879A77",
  paleBlue:      "#D7E5F0",
  paleBlueInk:   "#5B7C93",
  beige:         "#C9AD93",
  line:          "#D8D2C4",
} as const;

export const fonts = {
  display: "var(--font-display)",
  body:    "var(--font-body)",
  label:   "var(--font-label)",
} as const;

export const scale = {
  hero:           "clamp(2.75rem, 7vw, 6.5rem)",
  h1:             "clamp(2rem, 4.5vw, 3.75rem)",
  h2:             "clamp(1.5rem, 3vw, 2.5rem)",
  bodyLg:         "1.25rem",
  body:           "1.0625rem",
  label:          "0.75rem",
  lineHeightDisplay: 1.05,
  lineHeightBody:    1.6,
} as const;
