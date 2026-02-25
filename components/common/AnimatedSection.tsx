'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

const directionMap = {
  up: { y: 48, x: 0, scale: 1 },
  left: { y: 0, x: -48, scale: 1 },
  right: { y: 0, x: 48, scale: 1 },
  scale: { y: 0, x: 0, scale: 0.95 },
};

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const initial = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initial.y, x: initial.x, scale: initial.scale }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : undefined}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
