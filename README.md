# Urvish Patel - Portfolio Website

A premium, modern portfolio website built with Next.js, Tailwind CSS, Framer Motion, and GSAP. Features smooth animations, dark/light mode, and a responsive design inspired by Apple and Stripe.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, Tailwind CSS
- **Advanced Animations**: Framer Motion + GSAP with ScrollTrigger
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Fully Responsive**: Mobile-first design approach
- **Premium UI**: Glassmorphism, gradients, and smooth transitions
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📦 Installation

1. **Clone or navigate to the project directory**

```bash
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

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout with theme provider
│   ├── page.js            # Main page with all sections
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Navbar.js          # Sticky navigation with blur effect
│   ├── Hero.js            # Hero section with animations
│   ├── About.js           # About section
│   ├── Experience.js      # Work experience timeline
│   ├── Projects.js        # Featured projects grid
│   ├── Skills.js          # Skills categorized
│   ├── Achievements.js    # Achievements cards
│   ├── Education.js       # Education timeline
│   ├── Contact.js         # Contact form and info
│   ├── LoadingScreen.js   # Initial loading animation
│   └── ThemeProvider.js   # Theme context provider
├── data/
│   └── portfolio.js       # All portfolio data (easy to edit)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json
```

## 🎨 Customization

### Update Your Information

Edit `data/portfolio.js` to update:
- Personal information (name, email, phone, links)
- About section
- Work experience
- Projects
- Skills
- Achievements
- Education

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Change this to your preferred color
    // ... other shades
  },
}
```

### Add/Remove Sections

Edit `app/page.js` to add or remove sections:

```javascript
<Hero />
<About />
<Experience />
// Add your custom section here
<Projects />
```

## 🎭 Animation Features

- **GSAP ScrollTrigger**: Scroll-based animations for sections
- **Framer Motion**: Component transitions and hover effects
- **Smooth Scrolling**: Native smooth scroll behavior
- **Loading Animation**: Initial page load animation
- **Parallax Effects**: Subtle background animations

## 🌙 Dark Mode

The website includes a fully functional dark/light mode toggle:
- Automatic system preference detection
- Manual toggle in navbar
- Smooth transitions between themes
- Persistent theme selection

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: JavaScript (ES6+)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email**: urvishpatel2507@gmail.com
- **Phone**: +91 9313288508
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ using Next.js, Tailwind CSS, Framer Motion & GSAP
