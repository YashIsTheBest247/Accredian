import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ---------- UI ---------- */
export function IconArrowRight(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function IconChevronRight(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
export function IconChevronDown(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
export function IconCheck(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12l4 4L19 7" />
    </svg>
  );
}
export function IconCheckCircle(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12l2.3 2.3L16 9" />
    </svg>
  );
}
export function IconMenu(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
export function IconClose(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
export function IconStar(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.2l1.4-6.8L2.2 9.7l6.9-.7L12 2Z" />
    </svg>
  );
}
export function IconQuote(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 7h5v6a4 4 0 0 1-4 4H7v-2h1a2 2 0 0 0 2-2H7V7Zm8 0h5v6a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2h-3V7Z" />
    </svg>
  );
}

/* ---------- Concept icons ---------- */
export function IconBulb(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  );
}
export function IconChat(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}
export function IconRefresh(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
    </svg>
  );
}
export function IconChip(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </svg>
  );
}
export function IconExpand(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </svg>
  );
}
export function IconTarget(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
export function IconBox(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}
export function IconBrain(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5a3 3 0 0 0-6 .5A3 3 0 0 0 4 8a3 3 0 0 0 1 5.5A3 3 0 0 0 6 19a3 3 0 0 0 6 0V5Z" />
      <path d="M12 5a3 3 0 0 1 6 .5A3 3 0 0 1 20 8a3 3 0 0 1-1 5.5A3 3 0 0 1 18 19a3 3 0 0 1-6 0" />
    </svg>
  );
}
export function IconUsers(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7" />
    </svg>
  );
}
export function IconChart(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}
export function IconGear(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  );
}
export function IconGlobe(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
export function IconMoney(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9v6M18 9v6" />
    </svg>
  );
}
export function IconMonitorCheck(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16v4M8.5 10l2 2 3.5-4" />
    </svg>
  );
}
export function IconMonitorX(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16v4M9.5 8l5 4M14.5 8l-5 4" />
    </svg>
  );
}
export function IconCap(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M2 9l10-4 10 4-10 4L2 9Z" />
      <path d="M6 11v4c0 1.3 2.7 2.5 6 2.5s6-1.2 6-2.5v-4M22 9v5" />
    </svg>
  );
}
export function IconBriefcase(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}
export function IconPresentation(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M3 4h18M4 4v9h16V4M12 13v4M9 21l3-4 3 4" />
    </svg>
  );
}
export function IconVideoPlay(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3V9Z" />
    </svg>
  );
}
export function IconHeadset(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2ZM20 13a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2Z" />
      <path d="M20 17v1a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}
export function IconMail(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
export function IconSun(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </svg>
  );
}
export function IconMoon(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

/* ---------- Social (filled) ---------- */
export function IconFacebook(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.5l.5-3h-3V8.2c0-.9.3-1.5 1.6-1.5H17V4.1C16.5 4 15.6 4 14.6 4c-2.2 0-3.6 1.3-3.6 3.8V10H8.5v3H11v8h2.5Z" />
    </svg>
  );
}
export function IconLinkedin(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.9 8.4H4V20h2.9V8.4ZM5.4 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20v-6.4c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.4H9.9V20h2.9v-6.1c0-1.5.6-2.4 1.9-2.4s1.9.9 1.9 2.4V20H20Z" />
    </svg>
  );
}
export function IconTwitter(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 3h3.3l-7.2 8.2L23.5 21h-6.6l-5.2-6.8L5.8 21H2.5l7.7-8.8L1.5 3h6.8l4.7 6.2L18.9 3Zm-1.2 16h1.8L7.1 4.8H5.2L17.7 19Z" />
    </svg>
  );
}
export function IconInstagram(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconYoutube(p: Props) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}
