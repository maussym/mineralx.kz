# MineralX - Digital Mining & Metallurgy Association

## Overview

MineralX is a comprehensive web application for a digital mining and metallurgy association that unites technology leaders with industrial giants to accelerate digital transformation in the mining sector. The platform serves as a promotional and informational website showcasing the association's mission, members, benefits, and digital trends in the mining industry. Built as a modern, responsive single-page application with a focus on user experience and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture with TypeScript for type safety and maintainability:

- **Framework**: React 18 with TypeScript for component-based development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Radix UI primitives with shadcn/ui component system for accessibility and consistency
- **Animations**: Framer Motion for smooth, professional animations and micro-interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **State Management**: TanStack Query for server state management and caching

### Backend Architecture
The backend follows a minimal Express.js server architecture:

- **Runtime**: Node.js with Express.js framework
- **Build System**: Vite for development and production builds with ESBuild for server bundling
- **Development**: Hot module replacement and development middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database implementations

### Data Storage Solutions
Currently uses an in-memory storage system with a clean interface design:

- **Schema Definition**: Drizzle ORM schemas with PostgreSQL dialect configuration
- **Type Safety**: Zod schemas for runtime validation integrated with Drizzle types
- **Migration Support**: Drizzle Kit configured for database migrations when needed
- **Database Ready**: PostgreSQL connection configuration available for production deployment

### Design System
The application implements a cohesive design system focused on the mining industry:

- **Color Palette**: Mining-themed colors (orange, gold, amber) with dark backgrounds
- **Typography**: Inter font family for modern, professional appearance
- **Component Library**: Comprehensive UI component set based on Radix UI primitives
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components and keyboard navigation support

### Development Environment
Optimized for both development and production deployment:

- **Development Server**: Vite development server with HMR and error overlay
- **Production Build**: Optimized builds with code splitting and asset optimization
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Replit Integration**: Custom plugins for Replit development environment support

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver for production deployment
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Consistent icon library for UI elements

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library integrated with TypeScript
- **@hookform/resolvers**: Zod resolver for React Hook Form integration

### Development Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking for improved code quality
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Autoprefixer support

### Utility Libraries
- **date-fns**: Modern date utility library for date formatting
- **clsx**: Conditional className utility for dynamic styling
- **class-variance-authority**: Type-safe variant API for component styling
- **nanoid**: Secure URL-friendly unique ID generator

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development environment enhancements