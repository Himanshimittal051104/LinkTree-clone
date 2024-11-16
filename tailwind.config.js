/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDark: 'rgb(30, 35, 48)',
        customLight:'rgb(239, 240, 236)',
        textcolor:'rgb(103, 107, 95)',
        bg1:'#254F1A',
        bg11:'#D2E823',
        bg12:'#E9C0E9',
        bg13:'rgb(80, 34, 116)',
        bg2:"#880d1e",
        bg3:"#7b0d18",
        customBlue:'rgba(29,30,200,1)',
        customGrey:"#a7aea2",
        customPurple:'#7400d8',
        customOlive:"#78763C",
        customMustardYellow:"#AC7E04",
        customNeon:"#E0E722",
        customSapphire:"rgb(6,20,146)",
        customGreen:"#95BF47",
        customOrange:"#FF4A00",
        customCyan:'#00b4d8',
        FallingTears:"#c0d6dd",
        customBlack:"#0f0f0f",
        customMarketPlace:"#B69FAF"
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      fontSize: {
        'md-lg': '1.05rem', // custom size between base (1rem) and lg (1.125rem)
      },
      
      
    },
  },
  plugins: [],
};
