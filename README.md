# jasperteo.com

Personal portfolio website built with React and deployed on Cloudflare.

[![Built with Cloudflare](https://workers.cloudflare.com/built-with-cloudflare.svg)](https://cloudflare.com)

> **Live Site**  [jasperteo.com](https://jasperteo.com)

## 🎬 Getting Started

### Prerequisites
- **Node.js**: v24+ (enforced via `engines` field)
- **pnpm**: v10.16+ (required package manager)

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

## 🍔 Tech Stack

### Core Framework
- **[TanStack Start](https://tanstack.com/start)** - Full-stack React meta-framework with file-based routing
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with 100% inferred TypeScript
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://typescriptlang.org/)** - Strict type safety throughout

### Build & Performance
- **[Vite](https://vitejs.dev/)** (dev server + build tooling)
- **[Rolldown](https://rolldown.rs/)** - Next‑gen Rust bundler (Rollup successor)
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling with CSS variables
- **[Motion](https://motion.dev/)** - Performant animations library by Framer Motion creators

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
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Cloudflare development toolkit


### Design System Patterns
- **CSS Variables**: Semantic color tokens (`--primary`, `--secondary`, `--accent`)
- **Group Interactions**: `group/name` pattern for coordinated hover states
- **CSS-Only Hover Effects**: Complex animations using `after:` pseudo-elements
- **Motion Integration**: Layout animations with `LayoutGroup` for coordinated transitions
- **Component Variants**: CVA (class-variance-authority) for systematic styling
- **Accessible Components**: Base UI primitives with `useRender` patterns

 ## 📁 Project Structure

```text
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
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Vite/Rolldown  
├── wrangler.jsonc         # Cloudflare Workers 
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

---
**Built with ❤️ by Jasper** 
