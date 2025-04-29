export const colors = {
  primary: {
    main: '#A685FA',
    light: '#9672e8',
    dark: '#8B5CF6',
  },
  background: {
    dark: '#141414',
    card: '#1E1E1E',
    light: '#242424',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A1A1AA',
    muted: '#71717A',
  },
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    dark: 'rgba(0, 0, 0, 0.2)',
  },
}

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
}

export const typography = {
  h1: {
    fontSize: '2.5rem',    // 40px
    fontWeight: 'bold',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '2rem',      // 32px
    fontWeight: 'bold',
    lineHeight: '1.3',
  },
  h3: {
    fontSize: '1.5rem',    // 24px
    fontWeight: 'semibold',
    lineHeight: '1.4',
  },
  body: {
    fontSize: '1rem',      // 16px
    lineHeight: '1.5',
  },
  small: {
    fontSize: '0.875rem',  // 14px
    lineHeight: '1.5',
  },
}

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { y: 10, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
  },
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} 