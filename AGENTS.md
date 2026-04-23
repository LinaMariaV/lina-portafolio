# AGENTS.md

## Dev Commands
- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Build static export (outputs to `out/`)
- `npm run lint` - Run ESLint
- `npm run start` - Start production server (after build)

## Key Paths
- App entry: `src/app/page.tsx`
- Components: `src/components/**`
- Path alias: `@/*` maps to `./src/*`

## Build Output
- Static site export (`output: 'export'` in next.config.ts)
- Build artifacts go to `out/` directory (not `.next/`)
- Images unoptimized for static export

## Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript (strict mode)
- Framer Motion for animations

## Linting
- Uses ESLint flat config (`eslint.config.mjs`)
- Extends: `next/core-web-vitals`, `next/typescript`

## Notes
- No test framework configured
- No pre-commit hooks