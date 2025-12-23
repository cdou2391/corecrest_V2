# CoreCrest Website

A modern React/TypeScript website for CoreCrest, a tech solutions company in Rwanda and East Africa.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
corecrest/
├── components/       # React components
│   ├── home/        # Home page sections
│   └── ui/          # Reusable UI components
├── Entities/        # Data schemas
├── Pages/           # Page components
├── lib/             # Utility functions
├── App.tsx          # Main app component with routing
├── layout.tsx       # Layout wrapper
├── main.tsx         # Entry point
└── utils.ts         # Utility functions
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **TanStack Query** - Data fetching
- **Lucide React** - Icons

## Features

- Responsive design
- Smooth animations
- Form handling with validation
- Blog system
- Consultation booking
- Contact forms

## Notes

- All UI components are custom implementations styled with Tailwind CSS.
- Form submissions are sent via email API to `https://bff.corecrest.tech/api/submit/contact`.

