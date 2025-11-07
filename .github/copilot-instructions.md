# Copilot Instructions for jasperteo.com

## Architecture Overview

This is a **TanStack Start** (full-stack React framework) personal website deployed to **Cloudflare Workers**. Key architectural choices:

- **SSR with hydration**: `src/server.ts` exports Cloudflare Workers handler, `src/client.tsx` hydrates on client
- **File-based routing**: TanStack Router with auto-generated `routeTree.gen.ts` from `src/routes/`
- **Monorepo structure**: Single package using Bun as runtime and package manager
- **Bleeding-edge tooling**: Uses `rolldown-vite` (Rust-based Vite alternative), React 19, native TypeScript preview

## Development Workflow

```bash
bun run dev        # Development server (Vite)
bun run build      # Type check → lint → build (required for prod)
bun run preview    # Preview production build locally
bun run check      # TypeScript check with tsgo (--noEmit)
bun run lint       # Two-pass linting: oxlint (type-aware) then eslint
bun run format     # Prettier with @prettier/plugin-oxc
```

**Critical**: Always run `bun run build` before deploying - it gates production builds behind type checking and linting.

## Project-Specific Conventions

### Routing

- Routes live in `src/routes/` with TanStack Router file-based conventions
- `__root.tsx` defines shell component with global meta tags, fonts, and layout
- Use `createFileRoute()` for type-safe route definitions
- Devtools enabled via `<Devtools enabled />` in root shell (conditionally rendered)

### Component Patterns

**UI Components** (`src/components/ui/`):
- Built on **@base-ui-components/react** (Base UI by MUI)
- Use `useRender` hook for polymorphic components with `render` prop
- Styling: `cva` (class-variance-authority) + `cn` utility (clsx + tailwind-merge)
- Example pattern from `button.tsx`:
  ```tsx
  const variants = cva("base-classes", { variants: {...}, defaultVariants: {...} });
  function Component({ className, variant, size, render, ...props }) {
    return useRender({
      defaultTagName: "button",
      render,
      props: mergeProps(defaultProps, props)
    });
  }
  ```

**Icon Components** (`src/components/icons/`):
- Use `IconProps` type from `src/utils/utils.ts` for consistent API
- Include `title` prop for accessibility
- Wrap paths in `<g className="transition-colors">` for hover states

### Styling System

- **Tailwind CSS v4** with `@theme` directive (NOT traditional `tailwind.config.js`)
- Custom color tokens defined in `src/styles/globals.css` using CSS variables (`--background`, `--foreground`, etc.)
- `@theme inline` block maps CSS vars to Tailwind classes (`--color-background: var(--background)`)
- Fonts loaded via `@font-face` (Manrope, Paper Mono) and managed by `fontless` plugin
- Use `cn()` from `@/utils/utils` to merge Tailwind classes

### TypeScript Configuration

- Extremely strict: `noUncheckedIndexedAccess`, `noUncheckedSideEffectImports`, `erasableSyntaxOnly`
- Path alias: `@/*` → `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`)
- **Do NOT type check** `routeTree.gen.ts` (excluded from tsconfig, ESLint ignores globally)
- Type checking via `tsgo` (oxlint variant) instead of `tsc`

### Linting Strategy

**Dual-layer approach**:
1. **oxlint** (fast Rust linter, type-aware) runs first
2. **ESLint** (comprehensive rules) runs second

Key ESLint rules enforced:
- `@typescript-eslint/consistent-type-imports` + `no-import-type-side-effects` (use `type` imports)
- `@typescript-eslint/consistent-type-definitions: ["error", "type"]` (prefer `type` over `interface`)
- `simple-import-sort/*` (auto-sorted imports/exports)
- `unicorn/prevent-abbreviations` with allowlist (`Props`, `Ref`, `dev`, `env`, `utils`)
- `@eslint-react/prefer-namespace-import` (namespace imports for React)

### Code Formatting

- **Tabs** (not spaces) - `useTabs: true` in Prettier config
- `tailwindFunctions: ["cn", "cva"]` - applies to custom utility functions
- Uses `@prettier/plugin-oxc` (Rust-based parser) + `prettier-plugin-tailwindcss`

## Integration Points

### Cloudflare Workers Deployment

- `wrangler.jsonc` configures deployment (compatibility date, routes, main entry)
- `@cloudflare/vite-plugin` enables SSR environment for Cloudflare Workers
- Custom domains: `jasperteo.com` and `www.jasperteo.com`
- Entry point: `src/server.ts` exports `{ fetch }` handler

### Animation Libraries

- **motion** (Framer Motion successor): Use `LayoutGroup` + `MotionConfig` for coordinated animations
- **rough-notation**: For hand-drawn annotation effects (see `<Highlighter />`)

### Devtools Integration

- TanStack Router Devtools + React Devtools combined via `@tanstack/react-devtools`
- Conditionally enabled via `<Devtools enabled />` prop in production builds

## Key Files Reference

- `src/routes/__root.tsx` - SEO meta tags, global shell, font/style preloading
- `src/router.tsx` - Router factory with error boundaries and 404 handling
- `src/utils/utils.ts` - `cn()` helper and `IconProps` type definition
- `src/styles/globals.css` - Tailwind v4 config, custom color system, font-face declarations
- `eslint.config.ts` - Comprehensive linting rules (inspect for project conventions)
- `vite.config.ts` - React Compiler enabled via Babel plugin

## Common Patterns

**Adding a new route**: Create file in `src/routes/`, use `createFileRoute()`, route tree auto-generates.

**Creating UI component**: Extend Base UI primitives with `useRender`, apply variants with `cva`, merge classes with `cn()`.

**Styling dark mode**: Use custom `@custom-variant dark (&:is(.dark *))` for scoped dark mode styles.
