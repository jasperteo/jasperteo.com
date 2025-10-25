# jasperteo.com

Personal website

[![Built with Cloudflare](https://workers.cloudflare.com/built-with-cloudflare.svg)](https://workers.cloudflare.com/)

> **Live Site:** [jasperteo.com](https://jasperteo.com)

## Development

```bash
bun install                 # Install dependencies
bun run dev                 # Start development server with hot reload
bun run build               # Build for production (runs type check + linting first)
bun run preview             # Preview production build locally
bun run check               # Run TypeScript type checking without emitting files
bun run lint                # Lint code with oxlint (type-aware) and ESLint
bun run format              # Format code with Prettier
bun run migrate-oxlint      # Migrate ESLint config to oxlint
```

## Project Structure

```text
src/
├── routes/         # File-based routing
├── components/     # Reusable UI components
│   ├── ui/         # Base UI components
│   └── icons/      # Icon components
├── styles/         # Global styles and fonts
└── utils/          # Utility functions
```

---

**Built with ❤️ by Jasper** 
