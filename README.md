# مشروع فطرة - Fitrah Project Landing Page

<div dir="rtl">

## نظرة عامة 🌱

صفحة هبوط حديثة وجميلة لمشروع فطرة - مبادرة إسلامية لتحويل المجتمع وإعادة الإنسان إلى فطرته الأصيلة.

### المميزات الرئيسية ✨

- ✅ **تصميم عصري**: نظام تصميم متكامل بألوان التركواز والأخضر
- ✅ **دعم كامل للغة العربية**: تخطيط RTL مثالي
- ✅ **تحسين محركات البحث (SEO)**: علامات meta شاملة وSchema.org
- ✅ **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة
- ✅ **أداء عالي**: HTML/CSS/JS خفيف الوزن
- ✅ **إمكانية الوصول**: متوافق مع معايير WCAG

</div>

---

## 📁 Project Structure

```
Fitrah/
├── index.html          # Main HTML file with all 17 sections
├── css/
│   └── style.css       # Complete styling system with RTL support
├── js/
│   └── script.js       # Minimal JavaScript for interactions
├── images/             # Project images
│   ├── nature-children.jpg
│   ├── community-illustration.jpg
│   └── education.jpg
└── README.md          # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Turquoise | `#4DD4C0` | Buttons, accents, icons |
| Primary Light | `#5FE3D0` | Gradients, hover states |
| Secondary Green | `#A8E6CF` | Cards, highlights |
| Secondary Dark | `#7FD8BE` | Gradients, borders |
| Navy Blue | `#2C3E50` | Headings, primary text |
| Navy Light | `#34495E` | Subheadings |
| Text Color | `#555555` | Body text |
| Background Light | `#F8FFFE` | Section backgrounds |
| Background Lighter | `#E8F8F5` | Alternate sections |

### Typography

- **Font Family**: Cairo (Google Fonts)
- **H1**: 48px (mobile: 32px) - Bold 700
- **H2**: 40px (mobile: 28px) - Bold 700
- **H3**: 32px (mobile: 24px) - Semi-bold 600
- **H4**: 24px (mobile: 20px) - Semi-bold 600
- **Body**: 18px (mobile: 16px) - Regular 400

### Spacing

- **Section Padding**: 100px vertical (mobile: 60px)
- **Card Padding**: 40px (mobile: 25px)
- **Container Max-Width**: 1200px
- **Border Radius**: 20px (cards), 30px (buttons)

---

## 📱 Responsive Breakpoints

| Device | Width Range | Layout |
|--------|-------------|--------|
| Mobile | 320px - 767px | Single column, touch-friendly |
| Tablet | 768px - 1024px | 2-column layouts |
| Desktop | 1025px+ | Full multi-column layouts |

---

## 🚀 Getting Started

### 1. Installation

No installation required! This is a pure HTML/CSS/JavaScript project.

Simply download or clone the project:

```bash
git clone https://github.com/yourusername/fitrah-landing-page.git
cd fitrah-landing-page
```

### 2. Local Development

#### Option 1: Open Directly
Simply double-click `index.html` to open in your browser.

#### Option 2: Use a Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

Using PHP:
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### 3. Deployment

#### Deploy to Netlify

1. Drag and drop the entire `Fitrah` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! Your site is live.

#### Deploy to Vercel

```bash
npm i -g vercel
cd Fitrah
vercel
```

#### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/fitrah-landing-page.git
git push -u origin main
```
3. Go to Settings → Pages → Source: `main` → Save

---

## 📄 Page Sections

The landing page includes **17 comprehensive sections**:

1. **Header/Navigation** - Sticky navigation with mobile menu
2. **Hero Section** - Main introduction with CTAs
3. **Project Summary** (المشروع في جملة)
4. **Project Mission** (رسالة المشروع)
5. **Project Goals** (أهداف المشروع) - 4 goal cards
6. **Practical Components** (مكونات المشروع التطبيقية) - 5 components
7. **Fitrah Ambassador** (سفير الفطرة)
8. **Ambassador Responsibilities** (مهام سفير الفطرة) - 5 tasks
9. **Ambassador Requirements** (شروط سفير الفطرة) - 5 conditions
10. **Project Vision** (رؤية المشروع)
11. **Family According to Fitrah** (الأسرة وفق الفطرة)
12. **Education According to Fitrah** (التربية وفق الفطرة)
13. **Fitrah Lifestyle Pattern** (نمط العيش الفطري)
14. **Final Summary** - Project definition
15. **FAQ Section** - 5 common questions
16. **Call to Action** - Join the project
17. **Footer** - Links, contact, social media

---

## 🎯 Features

### SEO Optimization
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Schema.org JSON-LD markup
- ✅ Semantic HTML5 structure
- ✅ All images have Arabic alt text
- ✅ Proper heading hierarchy

### Accessibility
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Focus indicators visible
- ✅ Screen reader compatible

### Performance
- ✅ Minimal dependencies (only Google Fonts)
- ✅ Optimized CSS (organized, commented)
- ✅ Lazy loading ready
- ✅ Fast load time (< 3 seconds)
- ✅ Mobile-first approach

### Interactions
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Scroll-triggered fade-in animations
- ✅ Hover effects on cards and buttons
- ✅ Active navigation highlighting
- ✅ Sticky header with shadow on scroll

---

## 🛠️ Customization

### Change Colors

Edit `css/style.css` and update the CSS variables:

```css
:root {
    --color-primary: #4DD4C0;      /* Your primary color */
    --color-secondary: #A8E6CF;    /* Your secondary color */
    --color-navy: #2C3E50;         /* Your text color */
    /* ... */
}
```

### Change Font

Replace the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

And update CSS:

```css
:root {
    --font-family: 'YourFont', sans-serif;
}
```

### Add/Remove Sections

Simply edit `index.html` and remove or add `<section>` blocks.

---

## 📸 Screenshots

The landing page features:
- Beautiful nature-themed imagery
- Clean card-based layouts
- Smooth gradients and animations
- Traditional Islamic design elements
- Professional typography and spacing

---

## 🔍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Latest |

---

## 📝 Testing Checklist

### Before Deployment

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test responsive design (320px, 768px, 1024px, 1440px)
- [ ] Test mobile menu functionality
- [ ] Test smooth scroll navigation
- [ ] Test all links work
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Run Lighthouse audit (Score 90+)
- [ ] Check RTL layout is correct
- [ ] Verify all images load
- [ ] Test accessibility (keyboard navigation)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

For questions or support regarding مشروع فطرة (Fitrah Project):

- **Email**: info@fitrahproject.com
- **Phone**: +123 456 7890
- **Website**: [Your website URL]
- **Social Media**: Facebook | Twitter | Instagram | YouTube

---

## 📜 License

This project is licensed under the MIT License.

---

<div dir="rtl" align="center">

### مشروع فطرة 🌱
**نحو إنسان منسجم مع أصل خلقته**

© 2025 مشروع فطرة. جميع الحقوق محفوظة.

</div>

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern Islamic web design principles
- **Color Palette**: Nature-inspired turquoise and green theme
- **Typography**: Cairo font by Google Fonts
- **Icons**: Unicode emoji for universal compatibility

---

**Built with ❤️ for the Fitrah Project community**
