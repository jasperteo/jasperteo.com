# Copilot Instructions

## Project Overview
This is a **personal portfolio website** built with modern React stack, designed for deployment on Cloudflare Pages. The architecture emphasizes performance, type safety, and developer experience.

**Key Stack**: TanStack Start (React meta-framework) + Rolldown Vite + TypeScript + Tailwind CSS v4 + Cloudflare Workers + Motion

## Architecture & Patterns

### File-Based Routing with TanStack Router
- Routes are defined in `src/routes/` using TanStack Router's file-based system
- `__root.tsx` defines the HTML shell with comprehensive SEO meta tags
- Route components use `createFileRoute()` pattern, not React Router
- Example: `src/routes/index.tsx` exports `Route = createFileRoute("/")`

### Import Path Conventions
- **Always use `@/` alias** for internal imports (configured in `vite.config.ts`)
- Structure: `@/components/ui/button`, `@/utils/utils`, `@/styles/globals.css?url`
- Component organization: `ui/` for reusable components, `icons/` for SVG components
- Never use relative imports like `../components` - use the alias

### Component Architecture
- **UI Components**: Located in `src/components/ui/`, follow shadcn/ui patterns with Base UI primitives
- **Icon Components**: Custom SVG components in `src/components/icons/` with `IconProps` type from utils
- **Layout Components**: Main layout logic in `__root.tsx` with `shellComponent`
- **Component Composition**: Multi-function components (e.g., `Hero` with `HeroTitle`, `Description`, `CVButton`)
- **Base UI Integration**: Uses `@base-ui-components/react` for accessible primitives with `useRender` pattern

### Styling System & Animation Patterns
- **Tailwind CSS v4** with CSS variables for theming (`--primary`, `--secondary`, etc.)
- Dark mode enabled by default (`dark` class on body)
- **Hover Effects**: Complex CSS-only animations using `after:` pseudo-elements for underlines
- **Group Interactions**: `group/name` pattern for coordinated hover states (e.g., `group/cv`, `group-hover/cv:`)
- **Motion Library**: Used for layout animations and page transitions (`motion.main`, `LayoutGroup`) - Motion is a fast animation library by the creators of Framer Motion
- **Rough Notation**: Custom `Highlighter` component with scroll-triggered annotations
- **Transition Consistency**: 300ms duration with `ease-in-out` for most interactions

### Component Data Patterns
- **Typed Constants**: Use TypeScript unions for component state (e.g., `type TabValues = "personal" | "recruiter"`)
- **Configuration Objects**: Centralized data arrays (e.g., `SOCIALS_ARRAY`, `EXPERIENCES`)
- **Variant Systems**: CVA (class-variance-authority) for component variants in UI components

## Development Workflow

### Build & Deploy Commands
```bash
pnpm dev          # Local development with Vite
pnpm build        # Full production build (includes type check + lint)
pnpm preview      # Preview with Wrangler (Cloudflare Workers simulation)
pnpm check        # TypeScript check only (using tsgo - fast TypeScript)
pnpm lint         # oxlint + ESLint (type-aware)
```

### Cloudflare Integration
- **Target**: `cloudflare-module` (configured in `vite.config.ts`)
- **Wrangler**: Used for preview and deployment (`wrangler.jsonc`)
- **Assets**: Built to `.output/public`, server to `.output/server/index.mjs`
- **KV Storage**: Configured binding named `CACHE`

### Code Quality Tools
- **Linting**: oxlint (primary) + ESLint with strict TypeScript rules
- **Formatting**: Prettier with Tailwind plugin
- **Type Checking**: Native TypeScript with strict config
- **React Rules**: @eslint-react plugin with strict naming conventions

## Project-Specific Conventions

### Meta Tag Management
- SEO constants defined at top of `__root.tsx` (NAME, DESCRIPTION, etc.)
- Comprehensive Open Graph + Twitter Card implementation
- Theme color and favicons configured in head() function

### Performance Optimizations
- **Prerendering**: Enabled with link crawling in TanStack Start
- **Static Assets**: Optimized with `fontless` plugin for font loading
- **Bundle**: Uses Rolldown (faster Vite) for builds

### Dependencies Notes
- **Node Version**: Pinned to Node 24 (see `engines` in package.json)
- **Package Manager**: pnpm 10.15.1+ required
- **Base UI**: Uses @base-ui-components/react for accessible primitives
- **Animation**: rough-notation + motion for interactive elements

## Common Patterns to Follow

### Component Creation Patterns
1. **Multi-Function Components**: Break complex components into multiple functions in same file
   - Example: `Description()` contains `CVButton()`, `Experience()` contains `EXPERIENCES` data
   - Export only the main component, keep sub-components internal
2. **Data-Driven Components**: Use typed arrays and objects for dynamic content
   - Example: `SOCIALS_ARRAY` with `{icon, label, href}` structure
   - Use TypeScript unions for state: `type TabValues = "personal" | "recruiter"`

### Styling & Animation Patterns  
1. **CSS-Only Hover Effects**: Use `after:` pseudo-elements for complex animations
   - Pattern: `after:absolute after:bottom-2 after:left-2 after:w-0 after:transition-[width]`
   - Hover expands width: `hover:after:w-[calc(100%-1rem)]`
2. **Group Interactions**: Use `group/name` pattern for coordinated hover states
   - Parent: `group/cv`, Child: `group-hover/cv:[--secondary-fill:var(--primary)]`
3. **Motion Components**: Use `motion.div` for layout animations with `LayoutGroup` for coordinated transitions
4. **Icon Color Control**: Use CSS custom properties for dynamic icon colors
   - `secondaryfill="var(--secondary-fill)"` with `[--secondary-fill:var(--primary)]`

### Base UI Integration
- Use `useRender` pattern for polymorphic components (Button with `render` prop)
- Leverage `@base-ui-components/react` for accessibility (Tabs primitive)
- Combine with CVA for variant systems in UI components

When adding new components:
1. Use `@/` imports exclusively
2. Export interface types for props when needed  
3. Implement `cn()` for conditional styling
4. Follow naming convention: PascalCase for components, kebab-case for files
5. Use consistent 300ms transitions with `ease-in-out`

When adding new routes:
1. Use `createFileRoute()` pattern
2. Implement proper SEO if public-facing
3. Consider prerendering implications

When styling:
1. Use Tailwind utilities with CSS variables
2. Leverage `motion` components for animations
3. Test in both light/dark modes