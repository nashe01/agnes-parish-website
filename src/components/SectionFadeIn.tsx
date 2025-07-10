import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SectionFadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const getInitial = (direction: SectionFadeInProps['direction']) => {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: 40 };
    case 'down':
      return { opacity: 0, y: -40 };
    case 'left':
      return { opacity: 0, x: -40 };
    case 'right':
      return { opacity: 0, x: 40 };
    default:
      return { opacity: 0, y: 40 };
  }
};

export const SectionFadeIn = ({ children, direction = 'up', delay = 0 }: SectionFadeInProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7, delay },
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={controls}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}; 