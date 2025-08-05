# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `pnpm dev` or `yarn dev` - Start development server with Turbopack
- `pnpm build` or `yarn build` - Build for production
- `pnpm start` or `yarn start` - Start production server
- `pnpm lint` or `yarn lint` - Run ESLint

### Package Manager
This project uses **pnpm** as the primary package manager (evident from `pnpm-lock.yaml`). While `yarn.lock` also exists, prefer using pnpm commands.

## Architecture Overview

### Multi-Domain Landing Page System
This is a Next.js 15 application for "Manual do Bruxo" (Wizard's Manual) - a digital product landing page with sophisticated subdomain routing:

- **Main domains**: `manualdobruxo.com` / `manualdobruxo.com.br` → `/selecao` (selection page)
- **Course subdomain**: `curso.` → `/curso` route
- **Training subdomains**: 
  - `training.` → `/curso` with English locale
  - `treinamento.` → `/curso` with Portuguese locale
- **Selection subdomain**: `selecao.` → `/selecao` route

### Component Architecture (Atomic Design)
The project follows **Atomic Design** principles:

```
src/components/
├── atoms/          # Basic components (Button, Input, Text, etc.)
├── molecules/      # Combined atoms (Modal, Card, StepCard, etc.)
├── organisms/      # Complex components (CardSlider, Categories, etc.)
└── templates/      # Page-level components (courseHero, footer, etc.)
```

### Key Features
1. **Multi-language support**: 6 languages (pt-BR, en-US, es-ES, fr-FR, it-IT, zh-CN) using i18next
2. **Domain-based routing**: Sophisticated middleware handles subdomain routing and language setting
3. **Custom Tailwind theme**: Predefined color palette with green gradients and custom fonts
4. **Form handling**: React Hook Form + Zod validation with IMask for phone numbers

### Critical Files
- `src/middleware.ts` - Complex subdomain routing logic with hostname validation
- `src/i18n/index.ts` - Internationalization configuration with language mapping
- `tailwind.config.ts` - Custom design tokens and Gazzetta font configuration
- `next.config.ts` - Domain redirects configuration

### Styling System
- **Tailwind CSS** with custom color palette focused on green gradients
- **Custom fonts**: Gazzetta (titles) and Anek Latin (body)
- **Responsive design**: Custom `xs` breakpoint at 375px

### Form and Data Handling
- **React Hook Form** for form state management
- **Zod** for validation schemas
- **IMask** for phone number formatting
- Custom `useSubscriptionModal` hook for lead capture

### Internationalization
- **6 supported languages** with fallback to Portuguese (pt-BR)
- **Cookie-based persistence** with domain sharing (`.manualdobruxo.com`)
- **Browser language detection** with variant mapping (e.g., pt-PT → pt-BR)
- **Subdomain-triggered language switching** (training. → en-US, treinamento. → pt-BR)

## Development Notes

### ESLint Configuration
The project has relaxed ESLint rules with several hooks rules disabled (`react-hooks/rules-of-hooks`, `react-hooks/exhaustive-deps`). Follow existing patterns rather than strict hooks rules.

### Middleware Complexity
The middleware handles complex hostname validation and subdomain routing. Be careful when modifying routing logic - test thoroughly across different subdomains and localhost.

### Component Patterns
- Most components use TypeScript interfaces in separate `types.ts` files
- Components follow atomic design with clear separation of concerns
- Use existing button variants and styling patterns for consistency

### Assets Structure
- Images in `src/assets/` with organized subfolders (flags, modulos, svg)
- Custom SVG components in `src/assets/svg/`
- Video assets in `public/videos/`