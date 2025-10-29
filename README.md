# Marceli Cieplik - UI/UX Designer Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://marlink.github.io/simple/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website showcasing the work of Marceli Cieplik, a professional UI/UX Designer. Built with pure HTML5, CSS3, and JavaScript, featuring glass morphism design, video hero sections, and partner logos.

## 🎨 Author

**Marceli Cieplik** - UI/UX Designer

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Glass morphism design, animations, and responsive layout
- **JavaScript** - Interactive elements and video playback
- **GitHub Pages** - Hosting and deployment
- **GitHub Actions** - Automated CI/CD deployment

## ✨ Key Features

- **Video Hero Section** - Dynamic background videos that reveal on hover
- **Glass Morphism Design** - Modern frosted glass aesthetic throughout
- **Responsive Layout** - Optimized for mobile, tablet, and desktop
- **Partner Logos** - Animated logo showcase with hover effects
- **Single-Page Application** - Smooth scrolling navigation
- **Interactive Elements** - Hover animations and transitions
- **Dark Theme** - Consistent dark color scheme

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for video content
- No additional dependencies required

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/marlink/simple.git
   cd simple
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (if available)
     npx serve .
     ```

3. **View the website**
   - Open `http://localhost:8000` (or your chosen port) in your browser

## 📁 Project Structure

```
simple/
├── index.html              # Main HTML file
├── img/                    # Images and assets
│   ├── icons/             # Icon files
│   │   └── user.svg
│   └── logo/              # Partner and personal logos
│       ├── mc-logo.svg
│       ├── mc-logo-m.svg
│       └── [partner-logos]/
├── vid/                    # Video content
│   ├── formula/           # Formula 1 themed content
│   └── rider/             # Rider themed content
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml  # GitHub Actions deployment
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push to main branch**
   - The GitHub Actions workflow will automatically trigger on pushes to the `main` branch
   - The site builds and deploys to GitHub Pages

2. **Manual deployment**
   - Go to the repository's Actions tab
   - Select the "Deploy Jekyll with GitHub Pages" workflow
   - Click "Run workflow"

### Deployment Requirements

- Repository must be public or have GitHub Pages enabled
- GitHub Actions must be enabled for the repository
- The workflow file is already configured in `.github/workflows/jekyll-gh-pages.yml`

## 🌍 Browser Support

- **Chrome** (recommended) - Full feature support
- **Firefox** - Full feature support
- **Safari** - Full feature support
- **Edge** - Full feature support
- **Mobile browsers** - Optimized responsive design

### Minimum Requirements

- CSS Grid and Flexbox support
- CSS backdrop-filter support (for glass morphism)
- HTML5 video support
- Modern JavaScript features

## 🤝 Contributing

Contributions are welcome! This is a portfolio website, so contributions are typically:

- Design improvements
- Code optimizations
- Accessibility enhancements
- Performance improvements

### How to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Marceli Cieplik**
- Repository: [https://github.com/marlink/simple](https://github.com/marlink/simple)
- Live Site: [https://marlink.github.io/simple/](https://marlink.github.io/simple/)

---

*Built with ❤️ using pure HTML, CSS, and JavaScript*