# My App Store

A modern, responsive application platform built with React and Vite that enables users to discover, browse, and manage applications with an intuitive user interface.

## Overview

My App Store is a feature-rich web application that provides a seamless experience for exploring applications. Users can search through a comprehensive catalog, view detailed application information including ratings and reviews, and manage their installed applications efficiently.

## Key Features

- **Application Catalog:** Browse and discover applications with comprehensive details and metadata
- **Advanced Search:** Filter applications by title with real-time search functionality
- **Detailed Analytics:** View application statistics, ratings distribution, and user reviews with interactive charts
- **Application Management:** Install and track installed applications with persistent state management
- **Rating Visualization:** Interactive bar and pie charts displaying application ratings and user feedback
- **Responsive Interface:** Optimized layout that adapts seamlessly across all device sizes
- **Performance Optimized:** Fast load times and smooth interactions powered by Vite

## Technology Stack

- **Frontend Framework:** React 19 - Modern UI library with hooks and concurrent features
- **Build Tool:** Vite - Lightning-fast build and development server
- **Routing:** React Router 7 - Client-side navigation and URL management
- **Styling:** Tailwind CSS 4 & DaisyUI - Utility-first CSS framework with component library
- **Data Visualization:** Recharts 3 - Composable charting library for React
- **State Management:** React Context API - Lightweight state management for application data
- **Notifications:** React Toastify - Toast notifications for user feedback
- **Code Quality:** ESLint - JavaScript linting and code standards

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm 7.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/my-app-store.git

# Navigate to project directory
cd my-app-store

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build application for production with optimizations |
| `npm run lint` | Run ESLint to check code quality and standards |
| `npm run preview` | Serve the production build locally for testing |

## Project Architecture

The application follows a component-based architecture with clear separation of concerns:

- **Components:** Reusable UI components for cards, charts, headers, and navigation
- **Pages:** Full-page components for routing (Homepage, Apps, AppDetails, etc.)
- **Context:** React Context for managing global application state (installed apps)
- **Assets:** Static resources including images and icons

## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
