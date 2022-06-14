/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-05': '#4B1979',
        'primary-04': '#7126B5',
        'primary-03': '#A06ECE',
        'primary-02': '#D0B7E6',
        'primary-01': '#E2D4F0',
        'secondary-05': '#AA9B87',
        'secondary-04': '#D4C2A8',
        'secondary-03': '#FFE9CA',
        'secondary-02': '#FFF0DC',
        'secondary-01': '#FFF8ED',
        'neutral-05': '#151515',
        'neutral-04': '#3C3C3C',
        'neutral-03': '#8A8A8A',
        'neutral-02': '#D0D0D0',
        'neutral-01': '#FFFFFF',
        danger: '#FA2C5A',
        warning: '#F9CC00',
        success: '#73CA5C',
      },
      boxShadow: {
        low: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        high: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
