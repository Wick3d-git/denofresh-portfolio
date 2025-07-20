# 🌊 Fresh Portfolio

A modern, responsive portfolio website built with Fresh and Deno, featuring a
terminal-inspired design with dark/light theme support.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-wick3dhl.dev-blue?style=for-the-badge&logo=deno)](https://wick3dhl.dev)

## 🚀 Technologies Used

### Core Framework & Runtime

[![Fresh](https://img.shields.io/badge/Fresh-1.7.3-00ADD8?style=for-the-badge&logo=deno&logoColor=white)](https://fresh.deno.dev/)
[![Deno](https://img.shields.io/badge/Deno-2.0+-black?style=for-the-badge&logo=deno&logoColor=white)](https://deno.land/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Frontend

[![Preact](https://img.shields.io/badge/Preact-10.22.0-673AB8?style=for-the-badge&logo=preact&logoColor=white)](https://preactjs.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.7.2-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

### Fonts & Styling

[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-JetBrains%20Mono-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)](https://fonts.google.com/)

### Deployment

[![Deno Deploy](https://img.shields.io/badge/Deno%20Deploy-Hosting-00ADD8?style=for-the-badge&logo=deno&logoColor=white)](https://deno.com/deploy)

## ✨ Features

- 🎨 **Dark/Light Theme Toggle** - Persistent theme switching with smooth
  transitions
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Loading** - Server-side rendered with Fresh framework
- 🖥️ **Terminal UI** - Unique terminal-inspired interface design
- 🔗 **Social Links** - Direct links to GitHub and LinkedIn profiles
- 📄 **Resume Download** - Downloadable PDF resume
- ⌨️ **Keyboard Shortcuts** - `Ctrl/Cmd + D` for theme toggle
- 🎭 **Typing Animation** - Interactive terminal-style animations
- 🛣️ **Client-side Routing** - Smooth navigation between pages

## 📁 Project Structure

```
nextjs-portfolio/
├── islands/           # Interactive client-side components
│   ├── Sidebar.tsx   # Navigation and theme toggle
│   ├── ThemeProvider.tsx
│   └── TypingAnimation.tsx
├── routes/           # File-based routing
│   ├── _app.tsx     # App shell with global styles
│   ├── index.tsx    # Home page
│   ├── about/       # About page
│   └── resume/      # Resume page
├── static/          # Static assets
│   ├── Resume.pdf
│   ├── logo.png
│   └── styles.css
└── components/      # Server-side components
```

## 🛠️ Development Setup

### Prerequisites

- [Deno](https://deno.land/) 2.0 or higher

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/wick3d-git/denofresh-portfolio.git
   cd denofresh-portfolio
   ```

2. **Start the development server**
   ```bash
   deno task start
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Available Scripts

```bash
# Development
deno task start          # Start dev server with hot reload
deno task check          # Type check and lint
deno task build          # Build for production
deno task preview        # Preview production build

# Utilities
deno task manifest       # Update Fresh manifest
deno task update         # Update Fresh framework
```

## 🚀 Deployment

This project is deployed on **Deno Deploy** for optimal performance and seamless
integration with the Deno ecosystem.

### Deploy to Deno Deploy

1. Fork this repository
2. Connect your GitHub account to [Deno Deploy](https://dash.deno.com)
3. Create a new project and select your forked repository
4. Deploy automatically with zero configuration needed!

## 🎯 Pages

- **Home (`/`)** - Interactive terminal-style introduction with skills showcase
- **About (`/about`)** - Personal background and experience
- **Resume (`/resume`)** - Professional experience and education with PDF
  download

## 🔧 Customization

### Updating Content

- **Personal Info**: Update the content in each route file (`routes/index.tsx`,
  `routes/about/index.tsx`, etc.)
- **Social Links**: Modify the URLs in `islands/Sidebar.tsx`
- **Resume**: Replace `static/Resume.pdf` with your own resume
- **Profile Image**: Replace `static/logo.png` with your own image

### Styling

- **Colors & Themes**: Modify CSS custom properties in `static/styles.css`
- **Fonts**: Update font imports in `routes/_app.tsx`
- **Layout**: Adjust responsive breakpoints and layouts in the CSS

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the
[issues page](../../issues).

## 📧 Contact

**Anthony Abaray**

- 🐙 GitHub: [@wick3d-git](https://github.com/wick3d-git)
- 💼 LinkedIn: [anthony-abaray](https://linkedin.com/in/anthony-abaray)
- 🌐 Portfolio: [wick3dhl.dev](https://wick3dhl.dev)

---

<div align="center">
  <strong>Built with ❤️ using Fresh and Deno</strong>
</div> 