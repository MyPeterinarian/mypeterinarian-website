/**
 * Design System Constants
 * Brand colors, typography, and design tokens for MyPeterinarian
 */

export const COLORS = {
  // Primary brand colors
  primary: {
    blue: '#1d6896',
    teal: '#22c0b6',
    gradient: 'linear-gradient(135deg, #22c0b6, #1d6896)',
  },

  // Background colors
  background: {
    main: '#f5f7fa',
    white: '#ffffff',
    light: '#fafbfc',
  },

  // Text colors
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
    white: '#ffffff',
  },

  // Semantic colors
  semantic: {
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
} as const

export const TYPOGRAPHY = {
  fontFamily: {
    base: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

export const SPACING = {
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  boxShadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const TRANSITIONS = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
} as const
