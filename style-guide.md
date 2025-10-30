# Style Guide

**Project:** Marceli Cieplik Portfolio  
**Version:** 2.0  
**Last Updated:** 2025

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Components](#components)
6. [Layout Patterns](#layout-patterns)
7. [Animations](#animations)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Usage Guidelines](#usage-guidelines)

---

## Design Principles

### Core Values
- **Minimalism**: Clean, uncluttered interfaces
- **Clarity**: Clear visual hierarchy and readable typography
- **Consistency**: Unified experience across all pages
- **Performance**: Lightweight, fast-loading components
- **Accessibility**: WCAG AA compliant designs

### Visual Style
- Dark theme with high contrast
- Glassmorphism effects for depth
- Subtle animations for engagement
- Modern, professional aesthetic

---

## Color Palette

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Background Dark** | `#020305` | `rgb(2, 3, 5)` | Main background |
| **Text Primary** | `#E5E5E5` | `rgb(229, 229, 229)` | Body text, headings |
| **Text Muted** | `#8B8B8B` | `rgb(139, 139, 139)` | Secondary text, captions |
| **Text Gray** | `#B0B0B0` | `rgb(176, 176, 176)` | Tertiary text, placeholders |
| **Accent Green** | `#B7F04D` | `rgb(183, 240, 77)` | Primary actions, highlights |
| **Accent Dark Green** | `#4A8B5C` | `rgb(74, 139, 92)` | Hover states, secondary accent |

### UI Colors

| Color | Value | Usage |
|-------|-------|-------|
| **Border Light** | `rgba(255, 255, 255, 0.1)` | Default borders |
| **Border Subtle** | `rgba(255, 255, 255, 0.05)` | Subtle dividers |
| **Glass Background** | `rgba(255, 255, 255, 0.02)` | Card backgrounds |
| **Glass Border** | `rgba(255, 255, 255, 0.05)` | Glass effect borders |

### Gradient Effects

```css
/* Heading Gradient */
linear-gradient(90deg, rgba(254, 254, 254, 0) 30.29%, rgba(254, 254, 254, 0.9) 100%), rgba(255, 255, 255, 0.35)

/* Hero Overlay */
linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)
```

### CSS Variables

```css
:root {
    --bg-color: #020305;
    --text-color: #E5E5E5;
    --accent-color: #B7F04D;
    --accent-dark: #4A8B5C;
    --border-color: rgba(255, 255, 255, 0.1);
    --muted-color: #8B8B8B;
    --gray-color: #B0B0B0;
    --glass-bg: rgba(255, 255, 255, 0.02);
    --glass-border: rgba(255, 255, 255, 0.05);
    --glass-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

### Color Contrast Ratios (WCAG AA)
- Text Primary on Background: **14.2:1** ✓ AAA
- Text Muted on Background: **5.8:1** ✓ AA
- Accent Green on Background: **12.1:1** ✓ AAA
- Accent Green on Dark: **4.5:1** ✓ AA

---

## Typography

### Font Family

```css
font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Primary Font:** Inter (Google Fonts)  
**Fallback Stack:** System fonts for performance

### Font Scale

| Name | Size | rem | Usage |
|------|------|-----|-------|
| **Extra Small** | 12.8px | 0.8rem | Captions, labels |
| **Small** | 14.4px | 0.9rem | Supporting text |
| **Base** | 16px | 1rem | Body text |
| **Large** | 19.2px | 1.2rem | Large body, subheadings |
| **XL** | 32px | 2rem | Section titles |
| **2XL** | 40px | 2.5rem | Page titles |
| **3XL** | 48px | 3rem | Hero headlines |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| **Light** | 300 | Large display text |
| **Normal** | 400 | Body text |
| **Medium** | 500 | Subheadings, navigation |
| **Semi Bold** | 600 | Buttons, emphasis |
| **Bold** | 700 | Strong emphasis |

### Headings

```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter';
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
```

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| `h1` | 3rem (mobile: 2.5rem) | 500 | Page titles |
| `h2` | 2.5rem (mobile: 2rem) | 500 | Section titles |
| `h3` | 2rem | 500 | Subsection titles |
| `h4` | 1.5rem | 500 | Card titles |
| `h5` | 1.2rem | 500 | Small headings |
| `h6` | 1rem | 600 | Labels |

### Body Text

```css
body {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
}
```

---

## Spacing System

### Base Unit: 1rem = 16px

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `xs` | 0.25rem | 4px | Icon spacing |
| `sm` | 0.5rem | 8px | Tight spacing |
| `md` | 1rem | 16px | Default spacing |
| `lg` | 1.5rem | 24px | Component spacing |
| `xl` | 2rem | 32px | Section spacing |
| `2xl` | 3rem | 48px | Large section spacing |
| `3xl` | 4rem | 64px | Hero spacing |

### Container Padding

```css
padding: 0 5%; /* Horizontal page padding */
max-width: 1400px; /* Maximum content width */
margin: 0 auto; /* Center alignment */
```

---

## Components

### Buttons

#### Button Base

```html
<button class="btn">Button Text</button>
<a class="btn" href="#">Link Button</a>
```

**Properties:**
- Border radius: `50px` (fully rounded)
- Min height: `44px` (touch target)
- Min width: `44px`
- Font weight: `600`
- Transition: `all 0.3s ease`
- Shadow: `0 4px 20px rgba(0, 0, 0, 0.12)`

#### Button Variants

##### 1. Solid Button (Primary Action)

```html
<button class="btn btn-solid">Primary Action</button>
```

**Styles:**
- Background: `#B7F04D`
- Text: `white`
- Border: `2px solid #B7F04D`

**Hover:**
- Background: `rgba(74, 139, 92, 0.8)`
- Transform: `translateY(-2px)`

**Use Cases:**
- Submit forms
- Primary CTAs
- Confirm actions

##### 2. Outline Button (Secondary Action)

```html
<button class="btn btn-outline">Secondary Action</button>
```

**Styles:**
- Background: `transparent`
- Text: `#E5E5E5`
- Border: `2px solid rgba(255, 255, 255, 0.1)`

**Hover:**
- Background: `rgba(255, 255, 255, 0.02)`
- Border: `#B7F04D`
- Text: `#B7F04D`

**Use Cases:**
- Cancel actions
- Secondary navigation
- Less prominent actions

##### 3. CTA Button (Specific Call-to-Action)

```html
<a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>
```

**Styles:**
- Same as outline button with small size
- Consistent across all pages
- Always links to contact form

**Use Cases:**
- "Free website" CTA in navigation
- Special promotional actions

#### Button Sizes

##### Small
```html
<button class="btn btn-small">Small</button>
```
- Padding: `0.5rem 1rem`
- Font size: `0.8rem`
- Min height: `36px`

##### Normal (Default)
```html
<button class="btn">Normal</button>
```
- Padding: `0.7rem 1.5rem`
- Font size: `0.9rem`
- Min height: `44px`

##### Large
```html
<button class="btn btn-large">Large</button>
```
- Padding: `1rem 2rem`
- Font size: `1.1rem`
- Min height: `52px`

#### Button States

**Hover:**
```css
transform: translateY(-2px);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

**Focus:**
```css
outline: 2px solid var(--accent-color);
outline-offset: 2px;
```

**Disabled:**
```css
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

---

### Navigation

#### Navbar Structure

**Canonical Navigation (Use on ALL pages):**

```html
<nav class="navbar" id="navbar">
    <div class="navbar-left">
        <a href="index.html" aria-label="Home">
            <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo">
        </a>
    </div>
    <div class="navbar-center">
        <div class="nav-links">
            <a href="index.html#hero">Home</a>
            <a href="services.html">Services</a>
            <a href="blog.html">Blog</a>
            <a href="labs.html">Labs</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </div>
    </div>
    <div class="navbar-right">
        <a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>
        <div class="login-icon">
            <img src="img/icons/login.svg" alt="User Login" class="user-icon">
        </div>
    </div>
</nav>
```

**Properties:**
- Position: `fixed`
- Top: `0`
- Z-index: `1000`
- Background: `rgba(2, 3, 5, 0.15)` with `backdrop-filter: blur(10px)`
- Border bottom: `1px solid rgba(255, 255, 255, 0.05)`
- Grid: `1fr auto 1fr`

**Active State:**
```css
.nav-links a.active {
    color: #ffffff;
    border-bottom: 1px solid var(--accent-color);
}
```

#### Responsive Behavior

**Desktop (>991px):**
- Three-column grid layout
- All links visible in center
- Logo on left, CTA + login on right

**Tablet (768px - 991px):**
- Grid maintained
- May wrap to multiple rows
- All elements remain visible

**Mobile (<768px):**
- Single column stack
- Consider hamburger menu for space efficiency

---

### Cards

#### Base Card

```html
<div class="card">
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Card description text.</p>
    </div>
</div>
```

**Properties:**
- Background: `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border radius: `20px`
- Padding: `2rem`
- Shadow: `0 4px 20px rgba(0, 0, 0, 0.12)`

**Hover:**
```css
transform: translateY(-2px);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

#### Green Cards

```html
<div class="green-card">
    <h3 class="card-heading-bottom">
        <span class="card-main-text">WEB</span> 
        <span class="card-sub-text">SITES</span>
    </h3>
</div>
```

**Properties:**
- Background: `#00ff88`
- Hover background: `#ffffff`
- Border radius: `16px`
- Shadow: `0 4px 20px rgba(0, 255, 136, 0.2)`
- Transition: `all 0.3s ease`

**Use Cases:**
- Service highlights on homepage
- Feature showcases
- Category cards

#### Service Cards

```html
<a class="service-card" href="#service">
    <div class="card-content">
        <h3>Service Title</h3>
        <p>Service description</p>
    </div>
</a>
```

**Properties:**
- Glass background with border
- Clickable (entire card is link)
- Hover: subtle lift and glow

**Use Cases:**
- Services page grid
- Clickable feature cards

#### Blog Cards

```html
<div class="blog-card">
    <a href="article.html" class="blog-card-image-link">
        <img src="image.jpg" alt="Article">
    </a>
    <div class="blog-card-content">
        <div class="blog-card-tags">
            <span class="tag">Category</span>
        </div>
        <h2><a href="article.html">Article Title</a></h2>
        <p>Article excerpt...</p>
        <div class="blog-card-author">
            <img src="avatar.jpg" alt="Author">
            <span>Author Name</span>
            <span class="date">Date</span>
        </div>
    </div>
</div>
```

**Properties:**
- Image aspect ratio: `3:2`
- Content padding: `1.5rem`
- Tag styling: pill-shaped, muted background
- Author section: flex layout with avatar

#### Social Media Cards

##### WhatsApp Card
```html
<div class="whatsapp-card">
    <!-- Content -->
</div>
```
- Gradient: `linear-gradient(135deg, #075e54 0%, #128c7e 60%, #25d366 100%)`
- Hover shadow: `0 20px 60px rgba(37,211,102,0.4)`

##### Telegram Card
```html
<div class="telegram-card">
    <!-- Content -->
</div>
```
- Gradient: `linear-gradient(135deg, #0088cc 0%, #229ed9 100%)`
- Hover shadow: `0 20px 60px rgba(34,158,217,0.4)`

##### X (Twitter) Card
```html
<div class="x-card">
    <!-- Content -->
</div>
```
- Gradient: `linear-gradient(135deg, #000000 0%, #1d1d1d 50%, #333333 100%)`
- Hover shadow: `0 20px 60px rgba(0,0,0,0.5)`

##### Substack Card
```html
<div class="substack-card">
    <!-- Content -->
</div>
```
- Gradient: `linear-gradient(135deg, #FF6719 0%, #FF8A33 100%)`
- Hover shadow: `0 20px 60px rgba(255,103,25,0.4)`

**Common Properties for Social Cards:**
- Border radius: `20px`
- Padding: `2.5rem`
- Grid: `1fr auto`
- Transform on hover: `translateY(-4px)`

---

### Icons

#### Logo

**Navbar Logo:**
```html
<img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo">
```

**Properties:**
- Height: `56px`
- Width: `auto`
- Filter: `brightness(0) invert(1)` (white)
- Opacity: `0.65`

**Hover:**
- Opacity: `1`
- Transform: `scale(1.05)`

**Hero Logo:**
```html
<img src="img/logo/mc-logo.svg" alt="MC Logo" class="mc-logo-hero">
```

**Properties:**
- Width: `300px`
- Height: `auto`
- Filter: `brightness(0)` (black)
- Cursor: `pointer`

**Hover Effect:**
- Filter: `brightness(0) invert(1)` (white)
- Opacity: `0`
- Transform: `scale(0.8)`
- Reveals text beneath

#### User/Login Icon

```html
<div class="login-icon">
    <img src="img/icons/login.svg" alt="User Login" class="user-icon">
</div>
```

**Properties:**
- Container: `40px × 40px` circle
- Icon: `16px × 16px`
- Background: `rgba(229, 229, 229, 0.1)`
- Border: `2px solid rgba(229, 229, 229, 0.12)`

**Hover:**
- Background: `rgba(229, 229, 229, 0.2)`
- Border: `rgba(74, 139, 92, 0.4)`
- Glow: `0 0 10px rgba(74, 139, 92, 0.2)`

---

### Hero Section

```html
<section class="hero" id="hero">
    <div class="hero-logo-container">
        <div class="hero-logo">
            <img src="img/logo/mc-logo.svg" alt="MC Logo" class="mc-logo-hero">
        </div>
        <div class="hidden-heading">
            <div class="designer-info">
                <h1 class="designer-name">Name</h1>
                <h2 class="designer-title">Title</h2>
            </div>
        </div>
    </div>
    <div class="video-container">
        <img src="cover.png" alt="Cover" class="cover-image">
        <div class="hero-gradient-overlay"></div>
        <video class="video-bg" src="video.mp4" muted loop playsinline></video>
    </div>
</section>
```

**Properties:**
- Height: `80vh` (desktop), `60vh` (mobile)
- Position: `relative`
- Video: full cover, revealed on hover
- Gradient overlay: dark to transparent

**Interaction:**
- Hover on logo reveals video background
- Logo fades, text appears
- Smooth transitions: `0.8s - 1.2s`

---

### Forms

#### Input Fields

```html
<input type="text" class="form-input" placeholder="Your name">
```

**Properties:**
- Background: `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border radius: `8px`
- Padding: `0.75rem 1rem`
- Color: `var(--text-color)`

**Focus:**
- Border: `1px solid var(--accent-color)`
- Outline: `none`
- Box shadow: `0 0 0 3px rgba(183, 240, 77, 0.1)`

#### Textarea

```html
<textarea class="form-textarea" rows="5"></textarea>
```

**Properties:**
- Same as input fields
- Min height: `120px`
- Resize: `vertical`

#### Submit Button

```html
<button type="submit" class="btn btn-solid btn-large">Submit</button>
```

---

## Layout Patterns

### Container

```html
<div class="container">
    <!-- Content -->
</div>
```

**Properties:**
- Max width: `1400px`
- Margin: `0 auto`
- Padding: `0 5%`

### Section Spacing

```css
.section {
    padding: 5rem 0; /* Desktop */
    padding: 3rem 0; /* Mobile */
}
```

### Grid Systems

#### Services Grid (3 columns)

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

@media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
    grid-template-columns: 1fr;
}
```

#### Blog Grid (2 columns)

```css
.blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
}

@media (max-width: 991px) {
    grid-template-columns: 1fr;
}
```

#### Skills Grid (Responsive)

```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

---

## Animations

### Transitions

**Default:**
```css
transition: all 0.3s ease;
```

**Fast:**
```css
transition: all 0.15s ease;
```

**Slow:**
```css
transition: all 0.6s ease;
```

### Hover Effects

**Lift:**
```css
transform: translateY(-2px);
```

**Scale:**
```css
transform: scale(1.05);
```

**Glow:**
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

### Keyframe Animations

**Spin:**
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

**Fade In:**
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

---

## Responsive Design

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | `< 768px` | Phones |
| Tablet | `768px - 991px` | Tablets |
| Desktop | `> 991px` | Laptops, desktops |

### Media Queries

```css
/* Mobile First Approach */

/* Base styles (mobile) */
.element { /* ... */ }

/* Tablet and up */
@media (min-width: 768px) {
    .element { /* ... */ }
}

/* Desktop and up */
@media (min-width: 992px) {
    .element { /* ... */ }
}
```

### Responsive Typography

```css
h1 {
    font-size: 2.5rem; /* Mobile */
}

@media (min-width: 768px) {
    h1 {
        font-size: 3rem; /* Desktop */
    }
}
```

### Responsive Components

**Navbar:**
- Desktop: Grid layout, all visible
- Tablet: May wrap, all visible
- Mobile: Consider hamburger menu

**Hero:**
- Desktop: `80vh`
- Mobile: `60vh`

**Cards:**
- Desktop: Multi-column grids
- Tablet: 2 columns
- Mobile: Single column

**Buttons:**
- Maintain min touch target: `44px × 44px`
- Adjust padding for smaller screens

---

## Accessibility

### WCAG AA Compliance

**Requirements:**
- Text contrast ratio: ≥ 4.5:1 (normal text)
- Large text contrast: ≥ 3:1 (18px+)
- Touch targets: ≥ 44px × 44px
- Focus indicators: Visible and clear
- Keyboard navigation: Full support

### Focus States

**All Interactive Elements:**
```css
.btn:focus-visible,
.nav-links a:focus-visible,
a:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}
```

### ARIA Labels

**Images:**
```html
<img src="logo.svg" alt="Descriptive text">
```

**Buttons:**
```html
<button aria-label="Close menu">×</button>
```

**Links:**
```html
<a href="index.html" aria-label="Home">
    <img src="logo.svg" alt="MC Logo">
</a>
```

### Semantic HTML

Always use semantic elements:
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for blog posts
- `<section>` for content sections
- `<header>` for page/section headers
- `<footer>` for footers

### Keyboard Navigation

**Tab Order:**
1. Skip to main content link
2. Navigation links
3. Main content interactive elements
4. Footer links

**Focus Management:**
- Logical tab order
- No keyboard traps
- Visible focus indicators
- Skip navigation option

---

## Usage Guidelines

### When to Use Each Component

#### Buttons

**Solid Button:**
- Primary actions (Submit, Buy, Start)
- Maximum one per section
- Most important action

**Outline Button:**
- Secondary actions (Cancel, Learn More)
- Navigation CTAs
- Multiple per section allowed

**Small Button:**
- Navigation items
- Inline actions
- Compact interfaces

**Large Button:**
- Hero CTAs
- Form submissions
- Landing page actions

#### Cards

**Green Cards:**
- Service/feature highlights
- Category showcases
- Homepage only

**Service Cards:**
- Services page grid
- Interactive lists
- Clickable features

**Blog Cards:**
- Blog listing pages
- Article previews
- News sections

**Social Media Cards:**
- Contact page only
- Platform-specific links
- Branded interactions

### Dos and Don'ts

#### Typography

✅ **Do:**
- Use Inter font family
- Follow type scale
- Maintain hierarchy
- Keep line length readable (50-75 characters)

❌ **Don't:**
- Mix multiple font families
- Use colors for headings (keep white)
- Exceed 3XL size
- Use all caps for body text

#### Colors

✅ **Do:**
- Use CSS variables
- Maintain contrast ratios
- Test in dark environments
- Use accent color sparingly

❌ **Don't:**
- Hardcode color values
- Use low-contrast combinations
- Overuse accent color
- Add colors not in palette

#### Spacing

✅ **Do:**
- Use spacing tokens
- Maintain consistent gaps
- Follow grid systems
- Use padding for breathing room

❌ **Don't:**
- Use arbitrary pixel values
- Create cramped layouts
- Mix spacing systems
- Forget mobile spacing

#### Buttons

✅ **Do:**
- Use clear, action-oriented labels
- Maintain touch targets
- Provide hover/focus states
- Use appropriate variants

❌ **Don't:**
- Use generic labels ("Click here")
- Make buttons too small
- Remove focus indicators
- Use too many solid buttons

---

## Code Examples

### Basic Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title — Marceli Cieplik</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation (use canonical structure) -->
    <nav class="navbar" id="navbar">
        <!-- Standard navbar content -->
    </nav>

    <!-- Main Content -->
    <main class="content">
        <header class="page-header">
            <h1 class="section-title">Page Title</h1>
            <p>Page description</p>
        </header>

        <section class="section">
            <!-- Section content -->
        </section>
    </main>

    <!-- Footer (if applicable) -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Component Usage Example

```html
<!-- Hero Section -->
<section class="hero" id="hero">
    <!-- Hero content -->
</section>

<!-- Services Grid -->
<section class="services-section">
    <div class="container">
        <h2 class="section-title">Services</h2>
        <div class="services-grid">
            <a class="service-card" href="#service1">
                <div class="card-content">
                    <h3>Service One</h3>
                    <p>Description</p>
                </div>
            </a>
            <!-- More cards -->
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section">
    <div class="container">
        <h2>Ready to start?</h2>
        <a class="btn btn-solid btn-large" href="contact.html">Get in Touch</a>
    </div>
</section>
```

---

## Maintenance

### Adding New Components

1. **Design** the component following existing patterns
2. **Document** in this style guide with:
   - HTML structure
   - CSS properties
   - Usage guidelines
   - Examples
3. **Implement** in `style.css` with clear comments
4. **Test** across all breakpoints and browsers
5. **Update** any affected pages

### Updating Existing Components

1. **Check** if component is documented
2. **Update** style guide first
3. **Implement** CSS changes
4. **Verify** all instances across pages
5. **Test** for regressions
6. **Version** the change in style guide

### Version History

**v2.0** (2025)
- Added missing components (social cards, blog cards)
- Documented usage guidelines
- Added accessibility section
- Standardized button patterns
- Defined canonical navigation

**v1.0** (Initial)
- Basic color palette
- Typography system
- Initial components

---

## Resources

### Tools
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Palette Generator](https://coolors.co)
- [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

### References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [BEM Methodology](https://getbem.com/)

---

**Last Updated:** 2025  
**