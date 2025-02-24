# React Component Monorepo

This monorepo is structured to manage a React component library and a playground application using pnpm, TypeScript, Rollup, Vite, and Storybook. It provides a scalable setup to develop, test, and publish reusable React components.

## 📂 Project Structure

```plaintext
react-component-monorepo/
│── packages/
│ ├── components-library/ # The component library
│ │ ├── src/ # Source code for reusable components
│ │ ├── dist/ # Build output
│ │ ├── package.json # Library package configuration
│ │ ├── rollup.config.js # Rollup bundling configuration
│ │ ├── tsconfig.json # TypeScript config
│ │ └── README.md # Documentation
│ │
│ ├── playground-app/ # Testing playground for components
│ │ ├── src/ # React app source code
│ │ ├── public/ # Static assets
│ │ ├── package.json # Application package configuration
│ │ ├── vite.config.js # Vite configuration
│ │ ├── tsconfig.json # TypeScript config
│ │ └── README.md # Documentation
│
├── .github/ # GitHub workflows (CI/CD, tests, etc.)
├── package.json # Root package.json (manages workspace dependencies)
├── pnpm-workspace.yaml # pnpm workspace configuration
├── README.md # Documentation
└── tsconfig.base.json # Shared TypeScript config
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm

### Installation

Run the following command at the root of the repository to install all dependencies:

```sh
pnpm install
```

### Clean and Reinstall (for fresh setup)

To clean up all dist and node_modules folders and reinstall dependencies:

### 📦 Components Library (@ankit/ui-library)

Build Library

To build the library using Rollup:

```sh
pnpm run build
```

### 🛠 Playground App (playground-app)

Start Development Server

Run the app with Vite:

```sh
pnpm run dev
```

### 📖 Storybook

```sh
Start Storybook
pnpm storybook
```
