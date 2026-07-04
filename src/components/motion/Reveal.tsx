"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;
type RevealVariant = "up" | "left" | "right" | "scale" | "mask";

const hiddenByVariant: Record<RevealVariant, Record<string, string | number>> = {
  up: { opacity: 0, y: 22 },
  left: { opacity: 0, x: -28 },
  right: { opacity: 0, x: 28 },
  scale: { opacity: 0, y: 12, scale: 0.975 },
  mask: { opacity: 0, y: 16, clipPath: "inset(0 0 100% 0 round 28px)" },
};

const visibleByVariant: Record<RevealVariant, Record<string, string | number>> = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, y: 0, scale: 1 },
  mask: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 28px)" },
};

function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduceMotion = useReducedMotion();
  const mounted = useHydrated();

  if (mounted && reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={hiddenByVariant[variant]}
      whileInView={visibleByVariant[variant]}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: variant === "mask" ? 0.85 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const mounted = useHydrated();

  if (mounted && reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.09,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      data-stagger-item=""
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Floating({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const mounted = useHydrated();

  if (mounted && reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
