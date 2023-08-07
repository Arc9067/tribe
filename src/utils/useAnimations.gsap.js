import gsap from "gsap/dist/gsap";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

export let showMainTL = gsap.timeline({
  paused: true,
});

export let heroTL = gsap.timeline({
  paused: true,
});

export function useAnimations(containerRef) {
  const q = gsap.utils.selector(containerRef);

  useLayoutEffect(() => {
    gsap.set(q('.hero-text'), {
        autoAlpha: 1
    })
    gsap.set(q('.hero-image'), {
        autoAlpha: 1
    })


    showMainTL.to(q(".loader"), {
      autoAlpha: 0,
    });

    heroTL
      .from(
        q(".hero-text"),
        {
          autoAlpha: 0,
          y: 10,
          stagger: 0.10
        }
      )
      .from(
        q(".hero-image"),
        {
          autoAlpha: 0,
          scale: 0.5,
          stagger: 0.1,
          rotate: '12deg'
        }, "<"
      );
  }, []);
}
