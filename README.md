# jasperteo.com

Personal website built with TanStack Start and Cloudflare Workers.

[![Built with Cloudflare](https://workers.cloudflare.com/built-with-cloudflare.svg)](https://workers.cloudflare.com/)

> **Live Site:** [jasperteo.com](https://jasperteo.com)

## Development

```bash
bun install                 # Install dependencies
bun run dev                 # Start development server
bun run build               # Build for production (type check + lint + build)
bun run preview             # Preview production build
bun run check               # TypeScript type checking
bun run lint                # Lint with oxlint + ESLint
bun run format              # Format with Prettier
```

## Project Structure

```text
src/
├── routes/         # File-based routing (TanStack Router)
├── components/     # React components
│   ├── ui/         # Base UI components (cva + @base-ui)
│   └── icons/      # Icon components
├── styles/         # Global CSS and fonts
└── utils/          # Utility functions
```

---

**Built with ❤️ by Jasper** 
