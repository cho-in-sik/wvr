import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/main/main4.jpg')",
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        play: ['var(--font-play)', 'sans-serif'],
        sans: [
          'Noto Sans KR',
          'Noto Sans Korean',
          'sans-serif',
          'Malgun Gothic',
          '맑은 고딕',
          '돋움',
          'Dotum',
          '굴림',
          'Gulim',
          'Tahoma',
          'Verdana',

          'Apple Gothic',
          'AppleGothic',
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        fadeZoom: {
          '0%': {
            opacity: '0',
            transform: 'scale(1.4)',
          },
          '10%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
          '25%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
          '40%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
          '50%': {
            opacity: '0',
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-zoom-1': 'fadeZoom 12s infinite',
        'fade-zoom-2': 'fadeZoom 12s infinite 4s', // 🚀 두 번째 이미지 4초 후 시작
        'fade-zoom-3': 'fadeZoom 12s infinite 8s', // 🚀 세 번째 이미지 8초 후 시작
      },
    },
  },
  plugins: [animatePlugin],
};
export default config;
