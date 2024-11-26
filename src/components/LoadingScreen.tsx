import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const text = new SplitType('.loading-text', { types: 'chars' });
    const chars = text.chars;
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete: onLoadingComplete
        });
      }
    });

    tl.from(chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'power4.out'
    })
    .to(chars, {
      opacity: 0,
      y: -100,
      rotateX: 90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'power4.in',
      delay: 0.5
    });

    return () => tl.kill();
  }, [onLoadingComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <h1 className="loading-text text-6xl md:text-8xl font-bold text-white">
        VISUAL PUSH
      </h1>
      <div className="absolute bottom-8 left-8">
        <p className="text-white/60 text-sm">Creative Agency</p>
      </div>
      <div className="absolute bottom-8 right-8">
        <p className="text-white/60 text-sm">Est. 2024</p>
      </div>
    </div>
  );
};