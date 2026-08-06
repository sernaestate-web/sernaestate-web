import React, { useEffect, useRef } from 'react';
import { gsap, isReducedMotion, isMobileScreen } from '../../lib/gsap';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  distance?: number;
  triggerOnScroll?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  distance = 30,
  triggerOnScroll = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const actualDistance = isMobileScreen() ? Math.min(distance, 15) : distance;

    let xFrom = 0;
    let yFrom = 0;
    let scaleFrom = 1;

    if (direction === 'up') yFrom = actualDistance;
    else if (direction === 'down') yFrom = -actualDistance;
    else if (direction === 'left') xFrom = actualDistance;
    else if (direction === 'right') xFrom = -actualDistance;
    else if (direction === 'scale') scaleFrom = 0.95;

    const ctx = gsap.context(() => {
      const animProps: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: isMobileScreen() ? duration * 0.8 : duration,
        delay,
        ease: 'power3.out',
      };

      if (triggerOnScroll) {
        animProps.scrollTrigger = {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        };
      }

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: xFrom,
          y: yFrom,
          scale: scaleFrom,
        },
        animProps
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, direction, duration, distance, triggerOnScroll]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
