/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 自定义颜色主题
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0284c7',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#d1d5db',
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#0ea5e9',
              },
            },
            h1: {
              color: '#f9fafb',
            },
            h2: {
              color: '#f9fafb',
            },
            h3: {
              color: '#f9fafb',
            },
            h4: {
              color: '#f9fafb',
            },
            strong: {
              color: '#f9fafb',
            },
            code: {
              color: '#f9fafb',
            },
            blockquote: {
              color: '#d1d5db',
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