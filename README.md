# Next-Generation Data Scientist Portfolio

A cutting-edge portfolio website built with Next.js 14, featuring futuristic UI/UX design, advanced animations, and interactive elements. This portfolio showcases the work of a data scientist and AI engineer with a focus on modern web technologies and user experience.

## 🚀 Features

### Core Features
- **Futuristic UI/UX Design**: Clean, modern interface with neon colors and glassmorphism effects
- **Advanced Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Interactive Elements**: Custom cursor, particle effects, and hover animations
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Theme Toggle**: Dark/light mode with smooth transitions
- **Performance Optimized**: Fast loading times and efficient rendering

### Sections
- **Hero Section**: Full-screen animation with particle effects and interactive elements
- **About Me**: Animated timeline, skill visualizations, and professional story
- **Projects**: Filterable project showcase with flip animations and detailed modals
- **Experience**: Interactive timeline with company logos and achievements
- **Certifications**: Animated badges and achievement cards
- **Contact**: Glassmorphism contact form with background effects

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Advanced animations and page transitions
- **Custom Cursor**: Interactive cursor with hover effects
- **Particle System**: Dynamic background animations
- **Scroll Animations**: Triggered animations on scroll
- **Form Handling**: Contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Orbitron
- **Development**: ESLint, Prettier

## 🎨 Design System

### Colors
- **Primary**: Neon Blue (#00f5ff)
- **Secondary**: Neon Purple (#bf00ff)
- **Accent**: Neon Pink (#ff007f)
- **Success**: Neon Green (#00ff41)
- **Warning**: Neon Yellow (#ffff00)
- **Dark**: Multiple shades from #0a0a0a to #4a4a4a

### Typography
- **Headings**: Orbitron (futuristic, sci-fi)
- **Body**: Inter (clean, readable)
- **Code**: Monospace

### Effects
- **Glassmorphism**: Translucent panels with backdrop blur
- **Neumorphism**: Soft shadows and highlights
- **Glow Effects**: Neon-style glowing elements
- **Gradient Animations**: Dynamic color transitions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── CustomCursor.tsx
│   ├── Navigation.tsx
│   ├── ParticleField.tsx
│   ├── ScrollIndicator.tsx
│   └── ThemeToggle.tsx
├── lib/                   # Utility functions
│   └── utils.ts
└── providers/             # Context providers
    └── ThemeProvider.tsx
```

## 🎯 Key Features Explained

### Custom Cursor
- Follows mouse movement with smooth animations
- Changes size and color on hover over interactive elements
- Hidden on mobile devices for better UX

### Particle System
- Dynamic background particles with connection lines
- Smooth animations using Canvas API
- Adjustable particle count and behavior

### Scroll Animations
- Triggered animations on scroll using Intersection Observer
- Smooth transitions and progressive disclosure
- Performance optimized with requestAnimationFrame

### Glassmorphism Effects
- Translucent panels with backdrop blur
- Subtle borders and shadows
- Responsive design considerations

### Project Showcase
- Filterable project grid by technology tags
- Flip animations on hover
- Detailed project modals with metrics and tech stack

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  neon: {
    blue: '#00f5ff',
    purple: '#bf00ff',
    pink: '#ff007f',
    // Add your colors
  }
}
```

### Animations
Modify animations in `globals.css`:
```css
@keyframes customAnimation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
```

### Content
Update personal information in component files:
- `Hero.tsx` - Name, title, description
- `About.tsx` - Skills, experience, story
- `Projects.tsx` - Project data
- `Experience.tsx` - Work history
- `Certifications.tsx` - Certifications and achievements
- `Contact.tsx` - Contact information

## 📱 Mobile Optimization

- **Touch-friendly**: Larger touch targets and gestures
- **Performance**: Optimized animations and effects
- **Layout**: Responsive grid systems and typography scaling
- **Navigation**: Mobile-first navigation with smooth transitions

## 🔍 SEO Optimization

- **Meta tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Schema markup**: Structured data for search engines
- **Sitemap**: XML sitemap generation
- **Performance**: Fast loading and Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Self-hosted
1. Build: `npm run build`
2. Start: `npm start`
3. Configure reverse proxy (nginx/Apache)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For utility-first styling
- **Lucide** - For beautiful icons
- **Pexels** - For high-quality images

## 📞 Support

For support, please open an issue on GitHub or contact [suresh.gongali@example.com](mailto:suresh.gongali@example.com).

---

Built with ❤️ by Suresh Gongali