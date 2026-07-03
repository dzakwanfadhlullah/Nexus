"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
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
