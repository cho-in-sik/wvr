import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: [
          'Noto Sans Korean',
          'Noto Sans KR',
          'Malgun Gothic',
          '맑은 고딕',
          '돋움',
          'Dotum',
          '굴림',
          'Gulim',
          'Tahoma',
          'Verdana',
          'Geneva',
          'sans-serif',
          'Apple Gothic',
          'AppleGothic',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
