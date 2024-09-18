import fluid, { extract } from "fluid-tailwind";
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: {
		files: [
			"./pages/**/*.{ts,tsx}",
			"./components/**/*.{ts,tsx}",
			"./app/**/*.{ts,tsx}",
			"./src/**/*.{ts,tsx}",
		],
		extract,
	},
	prefix: "",
	theme: {
		fontSize: {
			xs: "0.75rem" /* 12px */,
			sm: "0.875rem" /* 14px */,
			base: "1rem" /* 16px */,
			lg: "1.125rem" /* 18px */,
			xl: "1.25rem" /* 20px */,
			"2xl": "1.5rem" /* 24px */,
			"3xl": "1.875rem" /* 30px */,
			"4xl": "2.25rem" /* 36px */,
			"5xl": "3rem" /* 48px */,
		},
		screens: {
			xs: "30rem",
			sm: "40rem",
			md: "48rem",
			lg: "64rem",
			xl: "80rem",
			"2xl": "96rem",
		},
		container: {
			center: true,
			padding: "2rem",
			// screens: {
			// 	"2xl": "1400px",
			// },
		},
		extend: {
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), fluid],
} satisfies Config;

export default config;
