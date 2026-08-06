import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion, isMobileScreen } from '../../lib/gsap';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  as?: React.ElementType;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  direction = 'up',
  delay = 0,
  duration = 0.9,
  distance = 40,
  as: Component = 'section',
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const actualDistance = isMobileScreen() ? Math.min(distance, 20) : distance;

    let xFrom = 0;
    let yFrom = 0;

    if (direction === 'up') yFrom = actualDistance;
    else if (direction === 'down') yFrom = -actualDistance;
    else if (direction === 'left') xFrom = actualDistance;
    else if (direction === 'right') xFrom = -actualDistance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: xFrom,
          y: yFrom,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: isMobileScreen() ? duration * 0.85 : duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [direction, delay, duration, distance]);

  return (
    <Component ref={sectionRef} id={id} className={`will-change-transform ${className}`}>
      {children}
    </Component>
  );
};
