/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: 'var(--color-surface)',
          muted: 'var(--color-surface-muted)',
          subtle: 'var(--color-surface-subtle)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          muted: 'var(--color-border-muted)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-ink-muted)',
          faint: 'var(--color-ink-faint)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.8125rem', { lineHeight: '1.25rem' }],
        base: ['0.9375rem', { lineHeight: '1.625rem' }],
        lg: ['1.0625rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '672px',
            color: 'var(--color-ink-muted)',
            lineHeight: '1.75',
            fontSize: '0.9375rem',
            a: {
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'var(--color-ink)',
              fontWeight: '700',
              fontSize: '2.25rem',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: 'var(--color-ink)',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            },
            h3: {
              color: 'var(--color-ink)',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: 'var(--color-ink)',
              fontWeight: '600',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            strong: {
              color: 'var(--color-ink)',
              fontWeight: '600',
            },
            code: {
              fontFamily: '"JetBrains Mono Variable", ui-monospace, monospace',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
