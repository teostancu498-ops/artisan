import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './split-text';

gsap.registerPlugin(ScrollTrigger);

/**
 * Boot a Lenis smooth-scroll instance, wire it to GSAP's ScrollTrigger,
 * and return the lenis instance for anchors / pause-on-modal usage.
 */
export function bootSmoothScroll() {
  // Respect user preference
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReduced) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Anchor links use lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href') || '');
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -80 });
      }
    });
  });

  return lenis;
}

/**
 * Reveal any element with [data-reveal] on scroll.
 * Variants:
 *   data-reveal="up" (default), "fade", "scale", "left", "right"
 *   data-reveal-delay="0.1"
 *   data-reveal-stagger on parent → children stagger
 */
export function bootReveals() {
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReduced) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Line-by-line text reveals
  document
    .querySelectorAll<HTMLElement>('[data-reveal-lines]')
    .forEach((el) => {
      const split = new SplitText(el, { type: 'lines' });
      split.lines.forEach((line) => {
        const wrapper = document.createElement('span');
        wrapper.style.display = 'block';
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        (line as HTMLElement).style.display = 'block';
        (line as HTMLElement).style.transform = 'translateY(110%)';
        (line as HTMLElement).style.willChange = 'transform';
      });

      gsap.to(split.lines, {
        y: 0,
        transform: 'translateY(0%)',
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const variant = el.getAttribute('data-reveal') || 'up';
    const delay = Number(el.getAttribute('data-reveal-delay') || 0);

    const from: gsap.TweenVars = { opacity: 0 };
    switch (variant) {
      case 'fade':   break;
      case 'scale':  from.scale = 0.92; break;
      case 'left':   from.x = -40; break;
      case 'right':  from.x = 40; break;
      case 'up':
      default:
        from.y = 40;
    }

    gsap.fromTo(el, from, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      delay,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
      },
    });
  });

  document
    .querySelectorAll<HTMLElement>('[data-reveal-stagger]')
    .forEach((parent) => {
      const children = parent.querySelectorAll<HTMLElement>(
        '[data-reveal-child]',
      );
      if (!children.length) return;

      gsap.fromTo(
        children,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
          },
        },
      );
    });
}

/** Pulls a class off the loader and fades the first fold in. */
export function hideLoader() {
  const loader = document.querySelector<HTMLElement>('#loader');
  if (!loader) return;

  const tl = gsap.timeline({
    onComplete: () => loader.classList.add('gone'),
  });
  tl.to(loader, { opacity: 1, duration: 0.1 });
  tl.to(loader.querySelector('.loader-mark'), {
    y: -16,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.inOut',
    delay: 0.25,
  });
  tl.to(
    loader,
    {
      y: '-100%',
      duration: 1.0,
      ease: 'expo.inOut',
    },
    '-=0.1',
  );
}
