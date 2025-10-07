# 🪲 TestExpo

**Interactive Bug Discovery Challenge for Test Expo 2025**

This is a React TypeScript application specifically designed for Test Expo 2025, featuring intentionally implemented bugs that participants need to discover as part of an interactive testing challenge.

## 🐛 Bug Discovery Challenge

**🎯 Your Mission:** Find all the intentionally implemented bugs in this application!

The following bugs are hidden throughout the application for you to discover:

### 👤 User Information Page Issues
- **Email Validation Bug**: Email field marked as required but doesn't prevent empty submissions
- **Form Reset Bug**: Reset form button doesn't clear all fields properly  
- **Placeholder Text Bug**: Incorrect placeholder text in the first name field
- **Security Bug**: Password appears in URL after form submission (check browser address bar!)

### 📋 Task Management Issues  
- **Mark All Done Bug**: The "Mark All Done" button doesn't behave as expected

### 📖 About Page Issues
- **Broken Navigation**: "Read More" button leads to nowhere

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd test-expo-web
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and navigate to:**
```
http://localhost:5173
```

🎉 **You're ready to start bug hunting!**

### 🏗️ Build for Production
```bash
npm run build
```

### 🧪 Run Code Quality Checks
```bash
npm run lint
```

## 📁 Project Architecture

This application follows modern React development best practices with a clean, modular structure:

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Main navigation header
│   ├── TodoForm.tsx    # Todo input form component
│   ├── TodoList.tsx    # Todo list display component
│   ├── TodoItem.tsx    # Individual todo item
│   ├── TodoActions.tsx # Bulk todo actions (mark all, clear, etc.)
│   └── index.ts        # Component barrel exports
├── pages/              # Page-level components  
│   ├── TasksPage.tsx   # Todo management page
│   ├── UserInfoPage.tsx # User information form page
│   ├── AboutUsPage.tsx # About page with app info
│   ├── NotFoundPage.tsx # 404 error page
│   └── index.ts        # Page barrel exports
├── hooks/              # Custom React hooks
│   ├── useNavigation.ts # Page navigation logic
│   ├── useTodos.ts     # Todo state management + localStorage
│   └── index.ts        # Hook barrel exports
├── types/              # TypeScript type definitions
│   ├── Todo.ts         # Todo interface definition
│   ├── UserInfo.ts     # User information interface
│   └── index.ts        # Type barrel exports
├── styles/             # Modular CSS architecture
│   ├── base/           # CSS variables and reset
│   ├── components/     # Component-specific styles
│   ├── pages/          # Page-specific styles
│   ├── utils/          # Utility classes
│   └── index.css       # Main stylesheet entry
├── constants/          # App configuration constants
│   └── index.ts        # App config and constants
└── App.tsx             # Main application component
```

### 🏗️ Architecture Highlights
- **Modular CSS**: Organized styles with CSS custom properties
- **Barrel Exports**: Clean import statements using index.ts files  
- **Type Safety**: Full TypeScript coverage with strict mode
- **Local Storage**: Persistent todo storage across sessions
- **Custom Hooks**: Reusable logic for navigation and state management

## 🛠️ Technology Stack

**Frontend Framework**
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool and dev server

**Styling & Design**
- **CSS3** - Modern CSS with custom properties (CSS variables)
- **Responsive Design** - Mobile-first approach with media queries
- **Design System** - Consistent color palette and spacing

**Development Tools**
- **ESLint** - Code linting and quality checks
- **TypeScript Compiler** - Strict type checking
- **VS Code** - Recommended IDE with full IntelliSense support

**Key Features**
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Fast Performance** - Optimized bundle size (~200KB)
- 💾 **Data Persistence** - LocalStorage integration for todos
- 🎨 **Modern UI** - Clean design with Sogeti brand colors
- 🔒 **Type Safety** - Full TypeScript coverage

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0099cc` → `#006699` (gradients)
- **Neutrals**: Clean grays for text and backgrounds
- **Background**: Light blue gradient (`#f0f8ff` → `#e6f3ff`)

### Typography & Spacing
- **Font**: Segoe UI system font stack
- **Spacing**: Consistent 8px base unit scale
- **Responsive**: Mobile-first design with breakpoints at 768px and 1024px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint code quality checks |

## 📊 Performance Metrics

- **Build Time**: ~1.4 seconds ⚡
- **Bundle Size**: 200KB JS + 18KB CSS (gzipped: ~65KB total)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **TypeScript**: 100% coverage with strict mode enable

## �📄 License

This project is created for educational and demonstration purposes as part of Test Expo 2025.  
Licensed under the MIT License - see the LICENSE file for details.

---
