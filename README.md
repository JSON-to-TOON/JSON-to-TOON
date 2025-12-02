# JSON to TOON Converter - Next.js + TypeScript

A modern, SEO-optimized JSON to TOON converter built with Next.js 14, TypeScript, and Tailwind CSS. Designed to rank #1 on Google with superior features and performance.

## 🚀 Features

### Core Features
- ✅ **Instant Conversion** - Real-time JSON to TOON conversion
- ✅ **Token Savings Calculator** - Visual display of token reduction (30-60%)
- ✅ **Conversion History** - Keep track of your recent conversions
- ✅ **Example Templates** - 5+ pre-built examples to get started
- ✅ **Advanced Options** - Customize delimiter, indentation, and formatting
- ✅ **100% Client-Side** - All processing happens in your browser
- ✅ **No Signup Required** - Free forever, no API keys needed

### Unique Features (Better Than Competitors)
- 🎯 **Conversion History** - Save and reload previous conversions
- 🎯 **Multiple Example Templates** - 5 different examples vs competitors' 0-1
- 🎯 **Visual Savings Display** - Animated savings bar with detailed stats
- 🎯 **Better UX** - Modern design with smooth animations
- 🎯 **Mobile-First** - Fully responsive and touch-optimized
- 🎯 **Performance** - Static site generation for instant load times

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static Export (SSG)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Converter.tsx        # Main converter component
│   ├── Hero.tsx             # Hero section
│   ├── FAQ.tsx              # FAQ section
│   ├── Examples.tsx         # Examples section
│   └── ...                  # Other components
├── lib/
│   ├── toon-converter.ts    # TOON conversion logic
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🔧 Configuration

### GitHub Pages Setup

1. **Update Domain in Metadata** (Required)

   Edit `app/layout.tsx` and replace `yourdomain.com` with your GitHub Pages URL:
   
   For project pages: `https://username.github.io/repo-name`
   
   For user/organization pages: `https://username.github.io`
   
   ```typescript
   metadataBase: new URL('https://username.github.io/repo-name'),
   ```

2. **Update Sitemap Domain**

   Edit `app/sitemap.ts` and replace `yourdomain.com` with your GitHub Pages URL:
   ```typescript
   const baseUrl = 'https://username.github.io/repo-name'
   ```

3. **Update robots.txt**

   Edit `public/robots.txt` and update the sitemap URL:
   ```
   Sitemap: https://username.github.io/repo-name/sitemap.xml
   ```

4. **Update Breadcrumbs Component** (Optional but recommended)

   Edit `components/Breadcrumbs.tsx` and replace `yourdomain.com` with your GitHub Pages URL (line 27).

4. **Enable GitHub Pages**

   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Save

5. **Push to main branch** - The workflow will automatically deploy!

### Add Analytics

Edit `components/Analytics.tsx` to add your analytics code.

### Customize Colors

Edit `tailwind.config.ts` to customize the color scheme.

## 📊 SEO Features

- ✅ Optimized metadata with Next.js Metadata API
- ✅ Schema.org markup (SoftwareApplication, HowTo, FAQPage)
- ✅ Semantic HTML5 structure
- ✅ Open Graph and Twitter Card support
- ✅ Static Site Generation (SSG) for fast load times
- ✅ Mobile-responsive design
- ✅ Proper heading hierarchy

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'out' folder
```

### GitHub Pages

This project is configured for GitHub Pages deployment.

#### Automatic Deployment (Recommended)

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push to main branch** - The GitHub Actions workflow will automatically:
   - Build the Next.js app
   - Deploy to GitHub Pages

The workflow is configured in `.github/workflows/deploy.yml`

#### Manual Deployment

If you prefer manual deployment:

```bash
# Set your repository name as base path
export NEXT_PUBLIC_BASE_PATH=/your-repo-name

# Build the project
npm run build

# The 'out' folder contains the static files
# Push the 'out' folder contents to the gh-pages branch
```

**Note:** For user/organization pages (repo name: `username.github.io`), set `NEXT_PUBLIC_BASE_PATH` to empty string:
```bash
export NEXT_PUBLIC_BASE_PATH=
```

#### Configuration

The base path is automatically detected from your repository name in the GitHub Actions workflow. If you need to customize it, edit `.github/workflows/deploy.yml` or set the `NEXT_PUBLIC_BASE_PATH` environment variable.

## 📈 Performance

- **Lighthouse Score**: 95+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with Next.js

## 🎯 Competitive Advantages

| Feature | This Tool | Competitors |
|---------|-----------|-------------|
| Conversion History | ✅ | ❌ |
| Example Templates | ✅ 5+ | ❌ 0-1 |
| Visual Savings | ✅ Animated | ❌ Basic |
| Modern Design | ✅ Framer Motion | ❌ Basic |
| TypeScript | ✅ | ❌ |
| Next.js SSG | ✅ | ❌ |
| Mobile UX | ✅ Excellent | ⚠️ Good |

## 📝 License

Free to use and modify. No attribution required.

## 🤝 Contributing

Contributions welcome! Please ensure:
- Code follows TypeScript best practices
- Components are properly typed
- SEO best practices are maintained
- All features are tested

## 🔮 Roadmap

- [ ] TOON to JSON conversion
- [ ] Batch file conversion
- [ ] API endpoint
- [ ] Browser extension
- [ ] VS Code extension
- [ ] CLI tool

---

**Built to rank #1 on Google for "JSON to TOON Converter"**
