import React, { useEffect, useRef } from 'react';
import { gsap, isReducedMotion, isMobileScreen } from '../../lib/gsap';

interface StaggeredCardsProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'scale' | 'fade';
  selector?: string; // Optional custom selector for direct children
}

export const StaggeredCards: React.FC<StaggeredCardsProps> = ({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  selector,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isReducedMotion()) {
      const targets = selector ? container.querySelectorAll(selector) : container.children;
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const targets = selector ? container.querySelectorAll(selector) : container.children;
    if (!targets.length) return;

    const actualStagger = isMobileScreen() ? Math.min(stagger, 0.08) : stagger;
    const yFrom = direction === 'up' ? (isMobileScreen() ? 20 : 35) : 0;
    const scaleFrom = direction === 'scale' ? 0.95 : 1;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: yFrom,
          scale: scaleFrom,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isMobileScreen() ? duration * 0.85 : duration,
          delay,
          stagger: actualStagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay, duration, direction, selector]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
