// Lightweight animation utilities for SEO-friendly animations
// All animations respect prefers-reduced-motion

export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  fadeInUp: 'animate-fade-in-up',
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

