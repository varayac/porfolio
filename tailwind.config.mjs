/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            cube: {
               balicSea: '#2E2D33', // black
               balicSeaBorder: '#2D2E3380', // border-div
               alabaster: '#F9F9F9', // white
               lochmara: '#037ACA' // H3, bg-menu, bg-icons
            }
            /* stefan: {
					bgBorderTitle: '#2d2e3280',
					scroll: '#8e8e8e',
					scrollAlt: '#797979',
					bgSection: '#f8f8f8',
					bgSectionAlt: '#f9f9f9',
					bgFooter: '#2d2e32', // black, H1
					bgFooterAlt: '#2e2d33',
					textH3: '#147efb', // bg-icons
					textH3Alt: '#037aca',
					cornflowerBlue: '#5DA1F4' // some
				}, */
         }
      },
      fontFamily: {
         onest: ['Onest Variable', 'sans-serif'],
         nunito: ['Nunito Variable', 'sans-serif'],
         inter: ['Inter Variable', 'sans-serif'],
         code: ['Source Code Pro Variable', 'sans-serif'],
         ubuntu: ['Ubuntu', 'sans-serif']
      }
   },
   plugins: []
}
