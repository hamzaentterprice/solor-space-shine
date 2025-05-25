
# JinkoSolar Website

A modern, responsive website for JinkoSolar featuring product showcase, verification system, and comprehensive company information.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Product Verification**: Serial number verification system with visual feedback
- **Modern UI**: Clean design using Tailwind CSS and shadcn/ui components
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Multi-page Navigation**: Home, Shop, Verify, and Contact pages
- **Interactive Components**: Hero sections, product cards, forms, and tips sections

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **React Router** for navigation
- **Lucide React** for icons
- **React Hook Form** for form handling

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section component
│   ├── ProductCard.tsx  # Product display component
│   ├── TipsSection.tsx  # Tips display component
│   └── VerificationForm.tsx # Product verification form
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Home.tsx         # Homepage content
│   ├── Shop.tsx         # Products page
│   ├── Verify.tsx       # Verification page
│   ├── Contact.tsx      # Contact page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jinkosolar-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Features

- **Brand Colors**: Green and blue palette matching JinkoSolar branding
- **Typography**: Inter font family for modern, clean text
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Lazy loading images and optimized components

## Key Components

### Hero Component
Reusable hero section with customizable title, subtitle, and call-to-action button.

### ProductCard Component
Displays product information with image, title, description, and action button.

### VerificationForm Component
Interactive form for product serial number verification with success feedback.

### TipsSection Component
Two-column layout for displaying solar energy tips with accompanying imagery.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 JinkoSolar. All rights reserved.
