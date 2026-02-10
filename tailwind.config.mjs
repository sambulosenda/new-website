/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--color-ink-muted)',
            lineHeight: '1.8',
            a: {
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1,h2,h3,h4': {
              color: 'var(--color-ink)',
              fontWeight: '600',
            },
            strong: {
              color: 'var(--color-ink)',
              fontWeight: '600',
            },
            code: {
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
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
