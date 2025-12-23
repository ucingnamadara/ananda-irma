/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This adds 'font-spectral' to your utility classes
        spectral: ['Spectral', 'serif'],
      },
      colors: {
        "brandDark": "#5A0E24",    /* Deep Bordeaux */
        "brandMaroon": "#76153C",  /* Rich Wine */
        "brandCrimson": "#BF124D", /* Bright Red-Pink */
        "forestLight": "#A4BE7B",   /* Pale Moss */
        "forestMuted": "#5F8D4E",   /* Sage Green */
        "forestDark": "#285430",     /* Deep Forest Green */
        "surfaceCream": "#E5D9B6",   /* Warm Beige Background */
        
      },
    },
  },
  plugins: [],
}