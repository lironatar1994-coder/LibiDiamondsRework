import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function MenuIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}
export function CloseIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}
export function PhoneIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M7.2 3.8 9.6 8l-2 1.8c1.1 2.5 3.1 4.5 5.6 5.6l1.8-2 4.2 2.4-.5 3.5c-.2 1-1.1 1.8-2.1 1.7C9.5 20.3 3.7 14.5 3 7.4c-.1-1 .7-1.9 1.7-2.1l2.5-.5Z" /></svg>;
}
export function SearchIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;
}
export function HeartIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M20.8 5.8c-2-2.2-5.5-1.9-7.3.4L12 8.1l-1.5-1.9c-1.8-2.3-5.3-2.6-7.3-.4-2 2.2-1.7 5.6.5 7.6L12 21l8.3-7.6c2.2-2 2.5-5.4.5-7.6Z" /></svg>;
}
export function ArrowIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
export function MessageIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M20 11.5a8 8 0 0 1-11.7 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" /><path d="M8 10.5h8M8 14h5" /></svg>;
}
export function DiamondIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m3 8 4-5h10l4 5-9 13L3 8Z" /><path d="M3 8h18M7 3l2 5 3 13 3-13 2-5" /></svg>;
}
export function CheckIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}
