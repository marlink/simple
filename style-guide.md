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
| **Background Dark** | `#000305` | `rgb(0, 3, 5)` | Main background (updated darker) |
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
    --bg-color: #000305;
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

#### Emergent Silver Gradient Effect (H1, H2, H3)

Headings H1, H2, and H3 feature a special "Emergent Silver" gradient effect that creates a sense of depth, making text appear to emerge from the dark background.

```css
h1, h2, h3 {
    /* Silver Gradient: predominantly light white, fading gently dark on the right */
    background: linear-gradient(
        270deg,
        #1a2a3a 0%,      /* Darker tone on the far right */
        #f4f4f4 25%,     /* Gently transitions to light white */
        #f4f4f4 100%     /* Stays light white for most of text */
    );
    
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    /* Darker, more gentle shadow for depth */
    filter: drop-shadow(0 0 8px rgba(244, 244, 244, 0.08))
            drop-shadow(3px 3px 15px rgba(0, 0, 0, 0.7));
    
    position: relative;
}
```

**Key Features:**
- **Gradient Direction**: Right-to-left (270deg) - flipped from original
- **Color Transition**: Dark (#1a2a3a) → Light (#f4f4f4) at 25% (more gentle)
- **Shadow Layers**: Dual drop-shadow with darker, softer effect
- **Effect**: Text appears to emerge from background with faded gradient on the right side

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
- Line height: `1` (precise vertical centering)
- White space: `nowrap` (prevents wrapping)

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

Buttons are designed with flexible, responsive sizing that scales appropriately across devices.

##### Small
```html
<button class="btn btn-small">Small</button>
```
- **Desktop**: Padding `10px 20px`, Font size `0.875rem`, Min height `40px`
- **Tablet**: Padding `9px 18px`, Font size `0.85rem`, Min height `38px`
- **Mobile**: Padding `8px 16px`, Font size `0.8rem`, Min height `36px`

##### Normal (Default)
```html
<button class="btn btn-medium">Normal</button>
```
- **Desktop**: Padding `12px 24px`, Font size `0.9rem`, Min height `44px`
- **Tablet**: Padding `11px 22px`, Font size `0.875rem`, Min height `42px`
- **Mobile**: Padding `10px 20px`, Font size `0.85rem`, Min height `40px`

##### Large
```html
<button class="btn btn-large">Large</button>
```
- **Desktop**: Padding `14px 28px`, Font size `1rem`, Min height `48px`
- **Tablet**: Padding `13px 26px`, Font size `0.95rem`, Min height `46px`
- **Mobile**: Padding `12px 24px`, Font size `0.9rem`, Min height `44px`

**Responsive Breakpoints:**
- Desktop: `> 1024px`
- Tablet: `768px - 1024px`
- Mobile: `< 768px`

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

#### Icon Button (Login/User)

A special rounded/pill-shaped button designed for icon-only interactions.

```html
<div class="login-icon">
    <img src="img/icons/login.svg" alt="User Login" class="user-icon">
</div>
```

**Properties:**
- **Desktop**: Size `44×44px`, Padding `12px`, Border radius `50px`
- **Tablet**: Size `42×42px`, Padding `11px`, Border radius `50px`
- **Mobile**: Size `40×40px`, Padding `10px`, Border radius `50px`
- Border: `2px solid rgba(229, 229, 229, 0.12)`
- Background: `rgba(229, 229, 229, 0.1)`
- Display: `inline-flex` with centered content
- Transition: `all 0.3s ease`

**Icon Specifications:**
- Always square (aspect-ratio: 1/1)
- Desktop: `20×20px`
- Tablet: `19×19px`
- Mobile: `18×18px`
- Filter: `brightness(0) invert(1)`
- Flex-shrink: `0` (maintains size)

**Hover State:**
```css
background-color: rgba(229, 229, 229, 0.2);
border-color: rgba(74, 139, 92, 0.4);
box-shadow: 0 0 10px rgba(74, 139, 92, 0.2);
```

**Use Cases:**
- User login/profile access
- Icon-only actions
- Circular avatar buttons

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

### Navigation

#### Top Navbar

The fixed navigation bar features a three-column grid layout with logo, navigation links, and action buttons.

**Structure:**
```css
.navbar {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding: 1.5rem 5%;
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 3, 5, 0.15);
}
```

**Navigation Links:**
- Order: Home | Services | Blog | Solutions | Labs | About | Contact
- Home link: Always links to `index.html` (never uses hash `#hero`)
- Solutions: Links to `index.html#solutions` (formerly "What")
- Default color: `rgba(255, 255, 255, 0.35)`
- Hover color: `rgba(255, 255, 255, 0.7)`
- Active color: `#ffffff` with underline
- **Enhanced Click Area**: Padding `12px 8px` (8px wider than label, taller for better touch)
- Display: `inline-block` with `position: relative`
- Transition: `color 0.3s ease, transform 0.3s ease`
- **No Hash URLs**: JavaScript prevents adding hash to URL history

**Active Link Indicator:**
```css
.nav-links a.active::after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
}
```

**Logo Behavior:**
- Logo is wrapped in link to `index.html`
- Clicking logo on index.html scrolls to top (no hash)
- Clicking logo on other pages navigates to home

**Right Section:**
- Gap: `0.75rem` between elements
- Padding-right: `2rem` (desktop)
- Contains: "Free website" button (outline style) + Login icon button
- Alignment: Vertically centered with `align-items: center`
- Button uses `.btn-free-website` class with outline styling

**Special Behaviors:**
- **Home Link**: Clicking "Home" always scrolls to top without adding hash to URL
- **Browser Back**: Preserves scroll position when using back button
- **No Hash URLs**: All navigation uses `history.pushState()` to avoid hash URLs

**Responsive Behavior:**
- **Mobile (< 768px)**: Single column, centered elements, reduced gaps
- **Tablet (768-1024px)**: Slightly reduced spacing and button sizes
- **Desktop (> 1024px)**: Full layout with optimal spacing

### Footer

#### Modern Four-Column Layout

The footer features a modern, responsive four-column layout that adapts to different screen sizes.

**Structure:**
```html
<footer>
    <div class="footer-content">
        <div class="footer-section"><!-- Column 1: Navigation --></div>
        <div class="footer-section"><!-- Column 2: Services --></div>
        <div class="footer-section"><!-- Column 3: About & Social --></div>
        <div class="footer-section"><!-- Column 4: Contact --></div>
    </div>
    <div class="footer-bottom">
        <p class="footer-version">v. 3.0 | © 2025 Marceli Cieplik</p>
        <div class="footer-legal"><!-- Privacy, Terms, Cookies --></div>
    </div>
</footer>
```

**Styling:**
- Background: `rgba(0, 3, 5, 0.95)` with blur(20px)
- Padding: `5rem 5% 2rem`
- Border-top: Gradient line effect for visual polish
- Grid: `repeat(4, 1fr)` with `3rem` gap

**Column Headers:**
- Font-size: `1.1rem`
- Font-weight: `600`
- Green underline accent (40px width)
- Bottom padding: `0.75rem`

**Footer Links:**
- Animated hover effect with arrow (→) appearing on left
- Color transition from `rgba(246, 246, 246, 0.65)` to green
- Slide effect: `translateX(5px)` on hover
- Smooth transitions: `0.3s ease`

**Social Links:**
- Circular icons with hover effects
- Display: `flex` with gap
- Opacity and transform transitions

**Footer Bottom:**
- Flexbox layout: space-between alignment
- Version info on left, legal links on right
- Responsive: Stacks vertically on mobile

**Responsive Breakpoints:**
```css
Desktop (> 1024px): 4 columns
Tablet (768-1024px): 2 columns (2×2 grid)
Mobile (< 768px): 1 column (stacked)
```

**Key Features:**
- Gradient top border for elegance
- Animated link hover effects
- Reduced visual clutter
- Consistent spacing and alignment
- Fully responsive layout
- Improved readability with proper hierarchy

---

## Micro-interactions & Hover Effects

The portfolio features carefully crafted micro-interactions and hover effects that enhance user engagement and provide visual feedback.

### Navigation Effects

#### Logo Hover
```css
.navbar-logo {
    opacity: 0.65;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.navbar-logo:hover,
.navbar-logo:focus {
    opacity: 1;
    transform: scale(1.05);
}
```

**Effect**: Logo brightens and slightly enlarges on hover
**Duration**: 0.3s ease
**Transform**: scale(1.05)

#### Navigation Link Hover
```css
.nav-links a {
    color: rgba(255, 255, 255, 0.35);
    transition: color 0.3s ease, transform 0.3s ease;
}

.nav-links a:hover {
    color: rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
}
```

**Effect**: Link brightens and scales up
**Color Change**: 35% → 70% opacity
**Scale**: 1.05
**Duration**: 0.3s ease

#### Active Link Indicator
```css
.nav-links a.active::after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
}
```

**Effect**: Green underline appears below active link
**Color**: Accent green (#0bb43d)
**Height**: 2px
**Position**: 8px below text

### Button Interactions

#### Standard Button Hover
```css
.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
```

**Effect**: Button lifts up with enhanced shadow
**Lift**: 2px upward
**Shadow**: Expands from 4px to 8px blur
**Duration**: 0.3s ease

#### Outline Button Hover
```css
.btn-outline:hover {
    background-color: var(--glass-bg);
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(11, 180, 61, 0.2);
}
```

**Effect**: Border and text turn green, button lifts, green glow appears
**Color Change**: White → Green
**Background**: Transparent → Glass effect
**Shadow**: Green glow (20% opacity)
**Lift**: 2px upward

#### Free Website Button Hover
```css
.btn-free-website:hover {
    background-color: var(--glass-bg);
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(11, 180, 61, 0.2);
}
```

**Effect**: Outline style with green accent and lift
**Duration**: 0.3s ease
**All Properties**: Smooth transition

#### Login Icon Hover
```css
.login-icon {
    transition: all 0.3s ease;
}

.login-icon:hover,
.login-icon:focus {
    background-color: rgba(229, 229, 229, 0.2);
    border-color: rgba(74, 139, 92, 0.4);
    box-shadow: 0 0 10px rgba(74, 139, 92, 0.2);
}
```

**Effect**: Background brightens, green tint on border, green glow
**Background**: 10% → 20% opacity
**Border**: Green tint added
**Glow**: 10px green shadow

### Footer Interactions

#### Footer Link Arrow Animation
```css
.footer-links a {
    transition: all 0.3s ease;
    position: relative;
    padding-left: 0;
}

.footer-links a::before {
    content: "→";
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
}

.footer-links a:hover {
    color: #0bb43d;
    padding-left: 20px;
    transform: translateX(5px);
}

.footer-links a:hover::before {
    opacity: 1;
    left: 0;
}
```

**Effect**: Arrow (→) appears from left as link slides right and turns green
**Animation Stages**:
1. Arrow positioned -20px left (hidden)
2. On hover: Arrow slides to 0px (visible)
3. Link text slides 20px right
4. Additional 5px translateX for emphasis
5. Color changes to green

**Duration**: 0.3s ease for all transitions
**Color**: rgba(246, 246, 246, 0.65) → #0bb43d

**Visual Flow**:
```
Before hover:
Link Text

During hover:
→ Link Text (sliding right, turning green)

After hover:
Link Text (back to original position)
```

This is one of the most sophisticated interactions on the site!

#### Social Link Hover
```css
.social-links a {
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: rgba(11, 180, 61, 0.1);
    border-color: #0bb43d;
    color: #0bb43d;
    transform: translateY(-2px);
}
```

**Effect**: Icon lifts up with green background and border
**Lift**: 2px upward
**Background**: Green tint (10% opacity)
**Border**: Green accent color
**Duration**: 0.3s ease

### Hero Section Effects

#### Logo Fade Transition
```css
.mc-logo-hero {
    transition: filter 0.8s ease, opacity 1.2s ease 0.8s, transform 1.2s ease 0.8s;
}

.hero-logo-container:hover .mc-logo-hero {
    filter: brightness(0) invert(1);
    opacity: 0;
    transform: scale(0.8);
}
```

**Effect**: Logo inverts color, fades out, and shrinks
**Duration**: 0.8s for color, 1.2s for fade/scale
**Delay**: 0.8s for fade and scale
**Transform**: scale(0.8)

#### Designer Info Reveal
```css
.hidden-heading {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease, visibility 0s linear 1s;
}

.hero-logo-container:hover .hidden-heading {
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease, visibility 0s;
}
```

**Effect**: Designer name and title fade in as logo fades out
**Duration**: 1s opacity transition
**Visibility**: Instant change on hover start

#### Video Background Transition
```css
.video-bg {
    opacity: 0;
    transition: opacity 1s ease;
}

/* Triggered by hover */
videoBg.style.opacity = '1';
```

**Effect**: Video smoothly fades in behind cover image
**Duration**: 1s ease
**Coordination**: Works with logo hover effect

### Card Interactions

#### Standard Card Hover
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
```

**Effect**: Card lifts with enhanced shadow
**Lift**: 5px upward
**Shadow**: Deepens and expands
**Duration**: 0.3s ease

#### Service Card Hover
```css
.service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--glass-shadow);
    border-color: var(--accent-color);
}
```

**Effect**: Lift + shadow + green border accent
**Lift**: 5px upward
**Border**: Green accent appears

#### Blog Card Image Hover
```css
.blog-card-image-link img {
    transition: transform 0.3s ease;
}

.blog-card:hover .blog-card-image-link img {
    transform: scale(1.05);
}
```

**Effect**: Image zooms in slightly when card is hovered
**Scale**: 1.05 (5% larger)
**Duration**: 0.3s ease
**Container**: Overflow hidden to crop zoom

### Labs Page - Gradient Cards

#### Project Card Hover
```css
.project-card {
    transition: all 0.4s ease;
}

.project-card:hover {
    transform: translateY(-8px) scale(1.02);
}
```

**Effect**: Card lifts more dramatically and scales up
**Lift**: 8px upward (more than standard cards)
**Scale**: 1.02 (2% larger)
**Duration**: 0.4s ease (slightly slower for elegance)

### Timing Guidelines

**Interaction Speeds**:
- **Quick**: 0.3s - Standard interactions (buttons, links, icons)
- **Medium**: 0.4s - Cards and larger elements
- **Slow**: 0.8s-1.2s - Hero section transitions, complex animations

**Easing Functions**:
- `ease` - Default for most interactions (smooth acceleration/deceleration)
- `ease-out` - Animations ending smoothly (fade-ins)
- `ease-in` - Animations starting smoothly (fade-outs)
- `linear` - Constant speed (visibility changes)

### Transform Properties Used

```css
/* Lift effects */
transform: translateY(-2px);  /* Buttons */
transform: translateY(-5px);  /* Cards */
transform: translateY(-8px);  /* Special cards */

/* Scale effects */
transform: scale(1.05);       /* Small zoom */
transform: scale(1.02);       /* Subtle zoom */
transform: scale(0.8);        /* Shrink */

/* Combined */
transform: translateY(-8px) scale(1.02);  /* Lift + zoom */
transform: translateX(5px);   /* Slide right */
```

### Color Transitions

**Navigation**:
- Inactive: `rgba(255, 255, 255, 0.35)`
- Hover: `rgba(255, 255, 255, 0.7)`
- Active: `#ffffff`

**Footer Links**:
- Default: `rgba(246, 246, 246, 0.65)`
- Hover: `#0bb43d` (green)

**Buttons**:
- Outline hover: Green border + text
- Solid hover: Darker shade

### Shadow Effects

**Button Shadow Progression**:
```css
/* Default */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);

/* Hover */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

**Card Shadow Progression**:
```css
/* Default */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

/* Hover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
```

### Best Practices

1. **Consistency**: All similar elements use same timing (0.3s for buttons)
2. **Feedback**: Every interactive element has visible hover state
3. **Performance**: Use `transform` and `opacity` (GPU-accelerated)
4. **Subtlety**: Effects enhance, don't distract
5. **Accessibility**: Focus states match hover states
6. **Smooth**: Ease timing creates natural feel

### Avoiding Layout Shift

All hover effects use `transform` instead of changing position properties:
```css
/* Good - No layout shift */
transform: translateY(-2px);

/* Bad - Causes layout shift */
top: -2px;
```

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