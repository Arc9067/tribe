/* eslint-disable import/no-mutable-exports */
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export let lenis;
export default function useSmoothScroll() {
  // Lenis smooth scrolling

  useEffect(() => {
    lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);
  }, []);
}
