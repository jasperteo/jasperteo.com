# Jasper Teo's Portfolio

A modern, performance-focused personal portfolio website showcasing full-stack engineering expertise. Built with cutting-edge web technologies and deployed globally on Cloudflare Workers for optimal performance.

> **Live Site**: [jasperteo.com](https://jasperteo.com)

## ✨ Features

- **Interactive Design**: Smooth animations and micro-interactions using Motion.dev
- **Responsive Layout**: Mobile-first design with thoughtful breakpoints
- **Dark Mode**: System preference detection with manual toggle
- **Performance Optimized**: Sub-100ms response times via edge computing
- **Accessible**: ARIA-compliant components with keyboard navigation
- **SEO Ready**: Comprehensive meta tags, Open Graph, and Twitter Cards

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) - Full-stack React meta-framework with SSR
- **Build Tool**: [Rolldown Vite](https://rolldown.rs/) - Next-generation bundler for blazing-fast builds
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables and design tokens
- **Animations**: [Motion](https://motion.dev/) + [Rough Notation](https://roughnotation.com/) for scroll-triggered effects
- **UI Components**: [Base UI](https://base-ui.com/) primitives with [shadcn/ui](https://ui.shadcn.com/) design patterns
- **Type Safety**: TypeScript with strict configuration and fast `tsgo` checking
- **Code Quality**: oxlint + ESLint + Prettier with comprehensive rules
- **Deployment**: Cloudflare Workers with edge computing and KV storage

## 🏗️ Architecture

### File-Based Routing
Routes are automatically generated from the `src/routes/` directory using TanStack Router:
- `__root.tsx` - Root layout with comprehensive SEO meta tags and theme provider
- `index.tsx` - Home page with hero, experience, about, and portfolio sections
- `works/` - Project showcase pages with detailed case studies

### Component Organization
```
src/components/
├── ui/           # Reusable UI components (Button, Tabs, Card, etc.)
├── icons/        # Custom SVG icon components with dynamic styling
├── hero.tsx      # Landing section with animated introduction
├── experience.tsx # Professional background with company history
├── description.tsx # Personal info with tabbed "About" and "For Recruiters" content
├── socials.tsx   # Social media links with hover animations
├── works.tsx     # Portfolio showcase with project cards
└── *.tsx         # Other feature-specific components
```

### Design System Features
- **CSS Variables**: Semantic color tokens (`--primary`, `--secondary`, etc.)
- **Group Interactions**: `group/name` pattern for coordinated hover states
- **CSS-Only Animations**: Complex hover effects using `after:` pseudo-elements
- **Motion Integration**: Layout animations with `LayoutGroup` for coordinated transitions
- **Component Variants**: CVA (class-variance-authority) for systematic component styling

## 🛠️ Development

### Prerequisites
- **Node.js**: v24+ (strict version enforcement via `engines`)
- **pnpm**: v10.15.1+ (required package manager)

### Getting Started
```bash
# Clone the repository
git clone https://github.com/jasperteo/migration.git
cd migration

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type check without emitting
pnpm check

# Lint code
pnpm lint

# Format code
pnpm format
```

### Build & Deploy
```bash
# Build for production (includes type check + lint)
pnpm build

# Preview with Cloudflare Workers simulation
pnpm preview

# Generate Cloudflare types
pnpm cf-typegen
```

### Import System
All imports use the `@/` alias for clean, absolute imports:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/utils/utils"
import { Hero } from "@/components/hero"
```

## 🎨 Key Design Patterns

### Component Architecture
- **Multi-Function Components**: Complex components split into co-located functions
- **Data-Driven**: Typed arrays and objects for dynamic content (e.g., `SOCIALS_ARRAY`, `EXPERIENCES`)
- **Polymorphic**: Base UI components with `useRender` patterns for flexibility
- **Accessible**: ARIA-compliant with Base UI primitives

### Animation Patterns
- **Scroll-Triggered**: Rough Notation highlights that activate on viewport entry
- **Layout Animations**: Motion.dev for smooth position and size transitions
- **Hover Effects**: CSS-only animations with precise timing (300ms `ease-in-out`)
- **Theme Transitions**: Smooth dark/light mode switching

### Content Sections
- **Hero**: Animated introduction with emphasized tagline
- **Experience**: Professional history with current/previous role distinction
- **About/Recruiter Tabs**: Personal information tailored for different audiences
- **Social Links**: Platform links with custom SVG icons and hover states
- **Works**: Project showcase with coming-soon portfolio pieces

## 🚀 Performance Features

- **Prerendering**: Static generation with automatic link crawling
- **Font Optimization**: Fontless plugin for improved loading performance
- **Bundle Optimization**: Rolldown for faster builds and smaller bundles
- **Edge Computing**: Global server-side rendering via Cloudflare Workers
- **KV Caching**: Distributed caching for optimal response times

## 📝 Code Quality

### Linting Stack
- **oxlint**: Primary fast linter with type awareness
- **ESLint**: Comprehensive TypeScript and React rules
- **@eslint-react**: React-specific linting with naming conventions
- **Prettier**: Code formatting with Tailwind CSS plugin

### TypeScript Configuration
- Strict mode with comprehensive type checking
- Path mapping for clean imports (`@/` alias)
- Fast type checking with `tsgo` for development speed

## 🌐 Deployment

The site is deployed on [Cloudflare Workers](https://workers.cloudflare.com/) featuring:
- **Global Edge Network**: Sub-100ms response times worldwide
- **Server-Side Rendering**: TanStack Start SSR at the edge
- **Zero Cold Starts**: Instant response with V8 isolates
- **KV Storage**: Distributed caching and data persistence
- **Automatic Scaling**: Traffic-based scaling with no configuration

## 🔄 Migration Notes

This project represents a migration to modern web technologies, hence the repository name "migration". Key architectural decisions:

- **From Create React App to TanStack Start**: Modern full-stack React framework
- **From Webpack to Rolldown**: Next-generation bundling for better performance
- **From Framer Motion to Motion**: Lighter, faster animation library by the same creators
- **From Traditional CSS to Tailwind v4**: Utility-first styling with CSS variables

## 📄 License

This project is personal portfolio code. Feel free to reference the patterns and architecture for learning, but please don't copy the content or design directly.

---

**Built with ❤️ by [Jasper Teo](https://jasperteo.com)**  
*Full-stack software engineer focused on building intuitive web experiences*
