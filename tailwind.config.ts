
import type {Config} from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1600px',
      },
    },
    extend: {
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      boxShadow: {
        'primary-glow': '0 0 25px 0 hsl(var(--primary) / 0.5)',
        'smooth-lift': '0 10px 20px 4px rgb(0 0 0 / 0.05)',
      },
      fontFamily: {
        body: ['var(--font-body)', ...fontFamily.sans],
        headline: ['var(--font-headline)', ...fontFamily.sans],
        sans: ['var(--font-body)', ...fontFamily.sans],
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
        zinc: {
          DEFAULT: 'hsl(var(--zinc))',
          ...colors.zinc,
        },
        'dark-teal': {
          DEFAULT: '#09555A',
          hsl: 'hsl(var(--dark-teal))',
        },
        darkTeal: '#09555A',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'drastic-zoom-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
         'drastic-zoom-in': 'drastic-zoom-in 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, hsl(var(--primary)) 0%, #003B38 100%)',
        'gradient-text-light': 'linear-gradient(to right, hsl(var(--primary)) 0%, #00a59e 100%)',
        'gradient-container': 'linear-gradient(to right, #003B38 0%, hsl(var(--primary)) 100%)',
        'zinc-gradient': 'linear-gradient(to right, #003431 0%, #28938E 100%)',
        'zinc-gradient-b': 'linear-gradient(to bottom, #003431 0%, #28938E 100%)',
        'zinc-gradient-br': 'linear-gradient(135deg, #003431 0%, #28938E 100%)',
        'zc-gd': 'linear-gradient(to right, #003431 0%, #28938E 100%)',
        'cyan-radial': 'radial-gradient(circle, #98DAD7 0%, #00645F 100%)',
        'cyan-radial-at-t': 'radial-gradient(circle at top, #98DAD7 0%, #00645F 100%)',
        'cyan-radial-at-tl': 'radial-gradient(circle at top left, #98DAD7 0%, #00645F 100%)',
        'cyan-radial-at-c': 'radial-gradient(ellipse at center, #98DAD7 0%, #00645F 100%)',
        'cyan-gradient': 'linear-gradient(to right, hsl(var(--primary)) 0%, #003B38 100%)',
        'cyan-gradient-b': 'linear-gradient(to bottom, hsl(var(--primary)) 0%, #003B38 100%)',
        'cyan-gradient-br': 'linear-gradient(135deg, hsl(var(--primary)) 0%, #003B38 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
