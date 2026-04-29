// Reusable animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
}

// Stagger container variants
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  },
  viewport: { once: false, margin: "-100px" }
}

export const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

// Card hover effect
export const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
}

// Button hover effect
export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

export const buttonTap = {
  scale: 0.98
}

// Hero animations (single use)
export const heroFadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
}

export const heroSlideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }
}

export const heroSlideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }
}

// Stats animation
export const statsStagger = {
  container: {
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    viewport: { once: false, margin: "-100px" }
  },
  item: {
    initial: { opacity: 0, x: 30, scale: 0.9 },
    whileInView: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  }
}
