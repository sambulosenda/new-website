/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Editor-inspired dark palette
        editor: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          hover: '#21262d',
        },
        // Syntax highlighting colors
        syntax: {
          blue: '#79c0ff',
          cyan: '#56d4dd',
          purple: '#d2a8ff',
          pink: '#ff7eb6',
          orange: '#ffa657',
          yellow: '#e3b341',
          green: '#7ee787',
          red: '#ff7b72',
          gray: '#8b949e',
        },
        // Base grays
        gray: {
          50: '#f6f8fa',
          100: '#eaeef2',
          200: '#d0d7de',
          300: '#afb8c1',
          400: '#8b949e',
          500: '#6e7681',
          600: '#484f58',
          700: '#30363d',
          800: '#21262d',
          900: '#161b22',
          950: '#0d1117',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '42.5rem',
            color: 'inherit',
            lineHeight: '1.75',
            a: {
              color: '#79c0ff',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1,h2,h3,h4': {
              color: 'inherit',
              fontWeight: '600',
            },
            code: {
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            },
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
