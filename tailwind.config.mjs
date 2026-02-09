/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8f8f7',
          subtle: '#f0efed',
        },
        border: {
          DEFAULT: '#e8e6e3',
          muted: '#f0efed',
        },
        ink: {
          DEFAULT: '#1a1a19',
          muted: '#6b6b69',
          faint: '#9e9e9b',
        },
        accent: {
          DEFAULT: '#2b5ce6',
          hover: '#1d4ed8',
          subtle: '#eef2ff',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#6b6b69',
            lineHeight: '1.8',
            a: {
              color: '#2b5ce6',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1,h2,h3,h4': {
              color: '#1a1a19',
              fontWeight: '600',
            },
            strong: {
              color: '#1a1a19',
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
