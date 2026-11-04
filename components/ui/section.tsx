"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const RevealContext = createContext(false);

/** Fires once, the first time the referenced element scrolls into view. */
function useRevealOnce<T extends Element>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed] as const;
}

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

/** A page section whose `Reveal` descendants animate in once it is scrolled into view. */
export function Section({ id, className = "py-20 px-4 sm:px-6 lg:px-8 bg-white", children }: SectionProps) {
  const [ref, revealed] = useRevealOnce<HTMLElement>();

  return (
    <section id={id} ref={ref} className={className}>
      <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>
    </section>
  );
}

const VARIANTS = {
  up: { hidden: "opacity-0 translate-y-10", shown: "opacity-100 translate-y-0" },
  left: { hidden: "opacity-0 -translate-x-10", shown: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-10", shown: "opacity-100 translate-x-0" },
  fade: { hidden: "opacity-0", shown: "opacity-100" },
} as const;

interface RevealProps {
  variant?: keyof typeof VARIANTS;
  className?: string;
  /** Transition delay in milliseconds, for staggering siblings. */
  delayMs?: number;
  children: ReactNode;
}

export function Reveal({ variant = "up", className = "", delayMs, children }: RevealProps) {
  const revealed = useContext(RevealContext);
  const { hidden, shown } = VARIANTS[variant];

  return (
    <div
      className={`transition-all ${revealed ? shown : hidden} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <Reveal className="text-center mb-12 duration-1000">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-base text-gray-600 mx-auto">{description}</p>
    </Reveal>
  );
}

export function Tag({ className, children }: { className: string; children: ReactNode }) {
  return <span className={`px-2 py-1 text-xs rounded ${className}`}>{children}</span>;
}
