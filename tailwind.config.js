/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B35',
                brand: '#FE580A',
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
                'orange-glow': '0 0 25px rgba(254, 88, 10, 0.5)',
                'orange-glow-lg': '0 0 40px rgba(254, 88, 10, 0.7)',
                'lava-glow': '0 0 35px rgba(178, 34, 34, 0.6), 0 0 15px rgba(254, 88, 10, 0.8)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'sparkle': 'sparkle 4s linear infinite',
                'marquee-vertical': 'marquee-vertical 30s linear infinite',
                'smoke': 'smoke 8s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'blink-wave': 'blink-wave 2s ease-in-out infinite',
                'ripple': 'ripple 2s ease-out infinite',
            },
            keyframes: {
                'marquee-vertical': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                'marquee': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'blink-wave': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.4, transform: 'scale(1.2)' },
                },
                'ripple': {
                    '0%': { transform: 'scale(1)', opacity: '0.8' },
                    '100%': { transform: 'scale(2.5)', opacity: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                sparkle: {
                    '0%': { transform: 'translateY(0) scale(0)', opacity: 0 },
                    '50%': { opacity: 1 },
                    '100%': { transform: 'translateY(-100vh) scale(1)', opacity: 0 },
                },
                smoke: {
                    '0%': { transform: 'translateX(0) translateY(0) scale(1)', opacity: 0.15 },
                    '25%': { transform: 'translateX(20px) translateY(-30px) scale(1.1)', opacity: 0.25 },
                    '50%': { transform: 'translateX(-15px) translateY(-60px) scale(1.2)', opacity: 0.2 },
                    '75%': { transform: 'translateX(10px) translateY(-90px) scale(1.15)', opacity: 0.15 },
                    '100%': { transform: 'translateX(0) translateY(-120px) scale(1)', opacity: 0 },
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
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
