# jasperteo.com

A modern, performance-focused personal portfolio website built with cutting-edge React technologies and deployed on Cloudflare's global edge network.

> **Live Site**: [jasperteo.com](https://jasperteo.com)

## 🍔 Tech Stack

### Core Framework
- **[TanStack Start](https://tanstack.com/start)** - Full-stack React meta-framework with file-based routing
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with 100% inferred TypeScript
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://typescriptlang.org/)** - Strict type safety throughout

### Build & Performance
- **[Rolldown Vite](https://rolldown.rs/)** - Next-generation bundler (Rust-based Rollup successor)
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling with CSS variables
- **[Motion](https://motion.dev/)** - Performant animations library by Framer Motion creators
- **[Rough Notation](https://roughnotation.com/)** - Hand-drawn style annotations

### Developer Experience
- **[oxlint](https://oxc.rs/)** + **[ESLint](https://eslint.org/)** - Ultra-fast linting with comprehensive rules
- **[Prettier](https://prettier.io/)** - Code formatting with Tailwind CSS plugin
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[@tanstack/devtools](https://github.com/TanStack/devtools)** - Development debugging tools

### UI & Design
- **[Base UI](https://base-ui.com/)** - Headless, accessible React components
- **[shadcn/ui](https://ui.shadcn.com/)** design patterns with custom adaptations
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **Custom SVG Icons** - Optimized icon components with dynamic styling

### Deployment & Infrastructure
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Edge computing platform
- **[Cloudflare KV](https://developers.cloudflare.com/kv/)** - Distributed key-value storage
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Cloudflare development toolkit

## 🏗️ Architecture

### File-Based Routing with TanStack Router
```
src/routes/
├── __root.tsx     # Root layout with HTML shell and SEO
├── index.tsx      # Home page route
└── works/
    ├── route.tsx  # Works layout page
    └── *.tsx      # Individual project pages
```

### Component Organization
```
src/components/
├── ui/              # Reusable UI primitives
│   ├── button.tsx
│   ├── tabs.tsx
│   ├── card.tsx
│   └── ...
├── icons/           # Custom SVG components
│   ├── github.tsx
│   ├── linkedin.tsx
│   └── ...
├── hero.tsx         # Landing section
├── experience.tsx   # Professional background
├── description.tsx  # About content with tabs
├── socials.tsx      # Social media links
└── works.tsx        # Portfolio showcase
```

### Design System Patterns
- **CSS Variables**: Semantic color tokens (`--primary`, `--secondary`, `--accent`)
- **Group Interactions**: `group/name` pattern for coordinated hover states
- **CSS-Only Hover Effects**: Complex animations using `after:` pseudo-elements
- **Motion Integration**: Layout animations with `LayoutGroup` for coordinated transitions
- **Component Variants**: CVA (class-variance-authority) for systematic styling
- **Accessible Components**: Base UI primitives with `useRender` patterns

## � Getting Started

### Prerequisites
- **Node.js**: v24+ (enforced via `engines` field)
- **pnpm**: v10.15.1+ (required package manager)

### Available Scripts
```bash
# Development
pnpm dev          # Start dev server with Vite
pnpm check        # TypeScript type checking (fast with tsgo)
pnpm lint         # Run oxlint + ESLint
pnpm format       # Format code with Prettier

# Production
pnpm build        # Full production build (includes type check + lint)
pnpm preview      # Preview with Cloudflare Workers simulation

# Cloudflare
pnpm cf-typegen   # Generate Cloudflare environment types
```

### Import System
All internal imports use the `@/` alias for clean, absolute paths:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/utils/utils"
import { Hero } from "@/components/hero"
import "@/styles/globals.css?url"
```

## 🎨 Key Design Patterns

### TanStack Router File-Based Routing
```typescript
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return <div>Home Page</div>
}
```

### Component Architecture
- **Multi-Function Components**: Related functionality co-located in single files
- **Data-Driven**: Typed arrays and configuration objects (e.g., `SOCIALS_ARRAY`)
- **Polymorphic**: Base UI components with flexible `render` props
- **Type-Safe**: Comprehensive TypeScript interfaces for all props

### Theme System
- **CSS Variables**: `--primary`, `--secondary`, `--accent`, `--muted`
- **Dark Mode**: Next-themes with system preference detection

## 📁 Project Structure

```
jasperteo.com/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── opengraph-image.png
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI primitives
│   │   ├── icons/         # SVG icon components
│   │   └── *.tsx          # Feature components
│   ├── routes/            # File-based routing
│   │   ├── __root.tsx     # HTML shell + SEO
│   │   ├── index.tsx      # Home page
│   │   └── works/         # Portfolio pages
│   ├── styles/            # Global styles
│   │   ├── globals.css    # Tailwind + custom CSS
│   │   └── fonts/         # Web font files
│   ├── utils/             # Utility functions
│   └── images/            # Optimized images
├── .github/               # GitHub configuration
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Vite/Rolldown configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── wrangler.jsonc         # Cloudflare Workers config
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Development Tools & Quality

### Linting & Formatting
- **[oxlint](https://oxc.rs/)**: Ultra-fast Rust-based linter (primary)
- **[ESLint](https://eslint.org/)**: Comprehensive TypeScript and React rules
- **[@eslint-react](https://github.com/Rel1cx/eslint-react)**: React-specific linting with naming conventions
- **[Prettier](https://prettier.io/)**: Code formatting with Tailwind CSS plugin

### TypeScript Configuration
- **Strict Mode**: Comprehensive type checking enabled
- **Path Mapping**: `@/` alias for clean imports
- **Fast Checking**: `tsgo` for development speed without sacrificing safety

### Build Optimizations
- **Prerendering**: Static generation with automatic link crawling
- **Font Loading**: `fontless` plugin for optimized web font delivery
- **Bundle Splitting**: Rolldown's intelligent code splitting
- **Tree Shaking**: Dead code elimination for minimal bundle size

## 🌍 Deployment & Performance

### Cloudflare Workers Architecture
- **Global Edge Network**: 275+ data centers worldwide
- **V8 Isolates**: Zero cold starts with instant response
- **Server-Side Rendering**: TanStack Start SSR at the edge
- **KV Storage**: Distributed caching for optimal performance
- **Auto-Scaling**: Traffic-based scaling with no configuration

### Performance Metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Response Times**: Sub-100ms globally via edge computing
- **Bundle Size**: Minimal JavaScript with efficient tree shaking
- **Lighthouse Score**: 95+ across all categories

## 📞 Connect

- **Portfolio**: [jasperteo.com](https://jasperteo.com)
- **Email**: [hello@jasperteo.com](mailto:hello@jasperteo.com)
- **LinkedIn**: [linkedin.com/in/jasperteo](https://linkedin.com/in/jasperteo)
- **GitHub**: [github.com/jasperteo](https://github.com/jasperteo)

---

**Built with ❤️ by Jasper** 
