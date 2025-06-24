# Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website for Daniel-Iyade Emmanuel, showcasing his journey as an aspiring software developer and cybersecurity expert. The application is built using a modern React frontend with Express.js backend, designed to be deployed on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: Hot reload with Vite integration in development mode
- **Production**: Built and served as static files with Express

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Shared Components
- **Schema Definition**: Centralized database schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **User Management**: Basic user schema with username/password fields

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Introduction with profile image and call-to-action buttons
- **About Section**: Personal background and education information
- **Goals Section**: Three main aspirations (development, cybersecurity, product building)
- **Inspiration Section**: Faith-based motivation with biblical quote
- **Connect Section**: Social media links and contact information
- **Footer**: Simple footer with copyright information

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Development Server**: Vite integration for hot module replacement
- **Error Handling**: Global error handling middleware
- **Request Logging**: Detailed API request/response logging

## Data Flow

1. **Development Mode**: Vite dev server handles frontend with HMR, Express serves API routes
2. **Production Mode**: Express serves static frontend files and API routes
3. **Database Operations**: Drizzle ORM handles database queries with type safety
4. **API Communication**: Frontend uses TanStack Query for server state management
5. **Error Handling**: Centralized error handling with user-friendly error messages

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Component Library**: Radix UI primitives via Shadcn/ui
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Drizzle ORM with Neon serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation
- **Build Tools**: ESBuild for production builds

### Development Dependencies
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Runtime**: TSX for TypeScript execution in development
- **Replit Integration**: Replit-specific plugins for development experience

## Deployment Strategy

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Build Command**: `npm run build` - builds both frontend and backend
- **Start Command**: `npm run start` - serves production build
- **Development**: `npm run dev` - runs development server with HMR
- **Port Configuration**: Internal port 5000 mapped to external port 80

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves frontend files from `dist/public`
4. **Database Setup**: Drizzle migrations run automatically

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 24, 2025: Initial portfolio website setup with modern React frontend
- June 24, 2025: Successfully integrated user's personal photo from Google Photos
- June 24, 2025: Website deployed and running at: https://11661855-f6ef-4c72-803b-e58f0a978503-00-2tzcbpn4kjyv1.riker.replit.dev
- June 24, 2025: Created comprehensive ZIP package with all source code, images, and configuration files

## User Preferences

- Communication style: Simple, everyday language
- Successfully completed personal portfolio website with user's actual photo