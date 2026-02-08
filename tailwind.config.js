/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FE520066',
                brand: '#FE5200',
                'molten-red': '#B22222',
                'molten-orange': '#FE580A',
                'molten-yellow': '#FFD700',
                dark: '#000000',
                light: '#FFFFFF',
                'light-gray': '#F8F9FA',
                'text-dark': '#1A1A1A',
                'text-light': '#FFFFFF',
                'accent-gray': '#6B7280',
                'border-color': '#E5E7EB',
            },
            boxShadow: {
                'orange-glow': '0 0 25px rgba(254, 82, 0, 0.5)',
                'orange-glow-lg': '0 0 40px rgba(254, 82, 0, 0.7)',
                'lava-glow': '0 0 35px rgba(254, 82, 0, 0.6), 0 0 15px rgba(254, 82, 0, 0.8)',
            },
            animation: {
                'float': 'float 5s ease-in-out infinite',
                'sparkle': 'sparkle 3s linear infinite',
                'marquee-vertical': 'marquee-vertical 35s linear infinite',
                'smoke': 'smoke 10s ease-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee-reverse 30s linear infinite',
                'blink-wave': 'blink-wave 2s ease-in-out infinite',
                'ripple': 'ripple 4s ease-out infinite',
            },
            keyframes: {
                'marquee-vertical': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(0, -50%, 0)' },
                },
                'marquee': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(-50%, 0, 0)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translate3d(-50%, 0, 0)' },
                    '100%': { transform: 'translate3d(0, 0, 0)' },
                },
                'blink-wave': {
                    '0%, 100%': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
                    '50%': { opacity: 0.4, transform: 'scale3d(1.2, 1.2, 1)' },
                },
                'ripple': {
                    '0%': { transform: 'scale3d(1, 1, 1)', opacity: '0.8' },
                    '100%': { transform: 'scale3d(2.5, 2.5, 1)', opacity: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
                    '50%': { transform: 'translate3d(0, -15px, 0)' },
                },
                sparkle: {
                    '0%': { transform: 'translate3d(0, 0, 0) scale(0)', opacity: 0 },
                    '20%': { opacity: 1 },
                    '100%': { transform: 'translate3d(0, -50px, 0) scale(1)', opacity: 0 },
                },
                smoke: {
                    '0%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 0.2 },
                    '100%': { transform: 'translate3d(0, -100px, 0) scale(1.3)', opacity: 0 },
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                bebas: ['"Bebas Neue"', 'sans-serif'],
            },
            spacing: {
                'section': '120px',
            },
            scale: {
                '105': '1.05',
            },
        },
    },
    plugins: [],
}
