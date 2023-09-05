/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"]
      },
      boxShadow: {
        'xl': '0 4px 60px -3px rgba(0, 0, 0, 0.1), 0 0 35px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 0px 30px -3px rgba(0, 0, 0, 0.1), 0 0px 15px -2px rgba(0, 0, 0, 0.05)'
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(circle at 65.54% 32.10%, #eddbbf 28.98%, #F0F0F0 70%)',
        'dark-gradient-radial': 'radial-gradient(circle at 65.54% 32.10%, #0B2E3D 0%, #000 60%)'
      })
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}
