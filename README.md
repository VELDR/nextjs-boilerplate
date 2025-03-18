# ⚡ Next.js Modern Boilerplate

A lightning-fast, modern boilerplate built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project is based on a [nextjs-boilerplate](https://github.com/omergulcicek/nextjs-boilerplate) with custom modifications to enhance developer experience.

## 🚀 Key Features

- 📁 Advanced, scalable folder structure
- ⚛️ [Next.js 15](https://nextjs.org/) with App Router
- 📘 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 🏪 [Zustand](https://zustand-demo.pmnd.rs/) for state management
- 🔐 [NextAuth.js](https://next-auth.js.org/) authentication
- 🧩 [shadcn/ui](https://ui.shadcn.com/) component library
- 🔄 [TanStack Query](https://tanstack.com/query/latest) for data management
- ✨ Code quality tools:
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for formatting
  - [Husky](https://typicode.github.io/husky/) for Git hooks
- 📝 Form handling with [React Hook Form](https://react-hook-form.com/)
- ✅ Schema validation using [Zod](https://zod.dev/)
- 🎯 Developer experience improvements:
  - 🔍 Absolute imports with `@` prefix
  - 🌓 Dark mode support via [next-themes](https://npmjs.com/package/next-themes)
  - 🎯 [Lucide](https://lucide.dev/) icons
  - 💀 [Skeleton Components](https://ui.shadcn.com/docs/components/skeleton) for loading states
- 🤖 SEO optimization:
  - 🗺️ Automated sitemap.xml with [next-sitemap](https://www.npmjs.com/package/next-sitemap)
  - 🔎 Optimized metadata configuration
  - 🤖 robots.txt generation
- 💯 Optimized for Lighthouse performance

## Project structure

```shell
│
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # Component folders structured based on the Atomic Design pattern
│   │   ├── atoms                   # Basic building blocks (e.g., buttons, inputs, typography)
│   │   ├── molecules               # Combinations of atoms forming functional units (e.g., search bars, cards)
│   │   ├── organisms               # Complex, self-contained UI sections (e.g., headers, modals)
│   │   └── templates               # Page-level layouts defining structure without specific content
│   ├── config                      # Configuration files
│   ├── constants                   # Global, hardcoded constants (e.g., enums, UI values)
│   ├── features                    # Feature specific files
│   │   └── {feature}               # Feature folder (containing components, types, etc)
│   ├── data                        # Static or mock data
│   ├── helpers                     # Helper functions for specific features (e.g., rendering, formatting)
│   ├── hooks                       # React hooks
│   ├── providers                   # All providers
│   ├── schemas                     # Form Schemas
│   ├── services                    # API services
│   ├── stores                      # Zustand stores
│   ├── types                       # Global type definitions
│   └── utils                       # General-purpose utility functions (e.g., string, date)
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── components.json                 # shadcn/ui configuration
├── next-sitemap.config.js          # next-sitemap configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.js               # PostCSS configuration
├── README.md                       # README file
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🙏 Credits

This boilerplate is a customized version of the [nextjs-boilerplate](https://github.com/omergulcicek/nextjs-boilerplate) by [omergulcicek](https://github.com/omergulcicek). We're grateful for the excellent foundation they provided.
