'use client'
import { useEffect } from 'react';

// Ek clear interface define karo taaki TypeScript ko type pata ho
interface ScrollInstance {
  destroy: () => void;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Variable ko 'any' ki jagah strict type do
    let scrollInstance: ScrollInstance | null = null;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // Class instance ko explicitly type cast karo
      scrollInstance = new LocomotiveScroll() as unknown as ScrollInstance;
    })();

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}