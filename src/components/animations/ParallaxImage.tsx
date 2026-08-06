import React, { useEffect, useRef } from 'react';
import { gsap, isReducedMotion, isMobileScreen } from '../../lib/gsap';

interface ParallaxImageProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number; // e.g. -30 to 30
  src?: string;
  alt?: string;
  imgClassName?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  children,
  className = '',
  speed = 25,
  src,
  alt = '',
  imgClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    if (isReducedMotion() || isMobileScreen()) {
      gsap.set(target, { y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { y: -speed },
        {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={targetRef} className="will-change-transform w-full h-full">
        {src ? (
          <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName}`} />
        ) : (
          children
        )}
      </div>
    </div>
  );
};
