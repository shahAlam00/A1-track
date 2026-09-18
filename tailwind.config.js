/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#050608',
          900: '#0B0D10',
          850: '#0F1217',
          800: '#12161B',
          700: '#1C2229',
          600: '#2A323D',
          500: '#404B5A',
        },
        metallic: {
          100: '#FFFFFF',
          200: '#E8EAED',
          300: '#D9DDE2',
          400: '#9AA0A6',
          500: '#64748B',
        },
        racing: {
          500: '#E53935',
          600: '#D32F2F',
          400: '#FF5252',
          glow: 'rgba(229, 57, 53, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 30%, rgba(22, 28, 36, 0.4) 0%, rgba(5, 6, 8, 0.95) 80%)',
        'carbon-pattern': 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 4s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}
