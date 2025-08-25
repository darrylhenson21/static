# Replit.md

## Overview
This is a full-stack React application for Avon Splash Car Wash, a car wash business website. The project implements a modern web application with a React frontend and Express backend, featuring a touchless car wash service business site with sections for services, testimonials, and contact information.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Component-based architecture using functional components and hooks
- **Routing**: Client-side routing implemented with Wouter library
- **UI Components**: Built using shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for development server and build process

### Backend Architecture
- **Express.js Server**: RESTful API backend with TypeScript
- **Development Tools**: Custom Vite integration for development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Session Management**: Configured for connect-pg-simple (PostgreSQL sessions)

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Structure**: 
  - Users table with id (UUID), username (unique), and password fields
  - Zod validation schemas for type-safe data handling
- **Migration System**: Drizzle Kit for schema migrations

### Component Structure
The application is organized into reusable React components:
- **Page Components**: Home, Blog, NotFound pages
- **Layout Components**: Header with navigation, Footer with links and social media
- **Content Sections**: Hero, About, Services, Testimonials, Contact components
- **UI Library**: Comprehensive shadcn/ui component collection

### Styling and Design System
- **Design Tokens**: CSS custom properties for colors, fonts, and spacing
- **Typography**: Google Fonts (Montserrat for headings, Open Sans for body text)
- **Icons**: Font Awesome for iconography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme System**: Light theme with neutral color palette and blue primary color

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and functional components
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

### Database and ORM
- **Drizzle ORM**: Type-safe SQL toolkit and query builder
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Utility for handling component variants

### State Management and Data Fetching
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation library

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools
- **ESBuild**: Fast JavaScript bundler for production builds

### Routing and Navigation
- **Wouter**: Lightweight client-side routing library

### Additional Utilities
- **date-fns**: Date manipulation library
- **clsx**: Utility for conditionally joining class names
- **nanoid**: Unique ID generation