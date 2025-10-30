# Hover Effects & Micro-interactions Guide

**Project:** Marceli Cieplik Portfolio  
**Version:** 3.1  
**Date:** 2025

---

## Overview

This guide documents all interactive hover effects and micro-interactions throughout the portfolio. These carefully crafted animations enhance user engagement and provide essential visual feedback.

---

## 🎯 Navigation Effects

### Logo Hover Animation

**Location:** Navbar left

**Effect:**
```
Normal State:        Hover State:
┌────────┐          ┌──────────┐
│  Logo  │    →     │   Logo   │  (slightly larger, brighter)
│ 65%    │          │  100%    │
└────────┘          └──────────┘
opacity: 0.65       opacity: 1.0
scale: 1.0          scale: 1.05
```

**CSS:**
```css
.navbar-logo {
    opacity: 0.65;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.navbar-logo:hover {
    opacity: 1;
    transform: scale(1.05);
}
```

**Timing:** 0.3s ease  
**Properties:** Opacity + Scale  
**Purpose:** Indicates clickability, draws attention

---

### Navigation Link Hover

**Location:** Center navbar links

**Effect:**
```
Normal:              Hover:
Link Text           Link Text  (brighter, slightly larger)
35% opacity         70% opacity
scale: 1.0          scale: 1.05
```

**CSS:**
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

**Timing:** 0.3s ease  
**Color Change:** 35% → 70% white opacity  
**Scale:** 1.05 (5% larger)

---

### Active Link Indicator

**Location:** Below active navigation link

**Effect:**
```
Inactive Link:
Link Text

Active Link:
Link Text
═════════  ← Green underline (2px, 8px below)
```

**CSS:**
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

**Color:** Accent green (#0bb43d)  
**Position:** 8px below text  
**Height:** 2px solid line

---

## 🔘 Button Interactions

### Standard Button Lift

**Effect:**
```
Normal State:
┌──────────────┐
│    Button    │
└──────────────┘
     Shadow: 4px blur

Hover State:
┌──────────────┐
│    Button    │  ↑ Lifts 2px
└──────────────┘
     Shadow: 8px blur (enhanced)
```

**CSS:**
```css
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
```

**Transform:** translateY(-2px)  
**Shadow:** 4px → 8px blur expansion  
**Timing:** 0.3s ease

---

### Outline Button Transformation

**Effect:**
```
Normal State:
┌────────────────┐
│  Free website  │  ← White text, gray border
└────────────────┘

Hover State:
┌────────────────┐
│  Free website  │  ← Green text, green border, lifts up
└────────────────┘
        ↑ 2px lift
     Green glow
```

**CSS:**
```css
.btn-outline:hover,
.btn-free-website:hover {
    background-color: var(--glass-bg);
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(11, 180, 61, 0.2);
}
```

**Color Change:** White → Green (#0bb43d)  
**Border:** Gray → Green  
**Background:** Transparent → Glass effect  
**Lift:** 2px upward  
**Glow:** Green shadow (20% opacity)

---

### Login Icon Button

**Effect:**
```
Normal:              Hover:
┌──────┐            ┌──────┐
│  👤  │      →     │  👤  │  ← Brighter background
└──────┘            └──────┘     Green border glow
10% bg              20% bg
No glow             Green glow (10px)
```

**CSS:**
```css
.login-icon:hover {
    background-color: rgba(229, 229, 229, 0.2);
    border-color: rgba(74, 139, 92, 0.4);
    box-shadow: 0 0 10px rgba(74, 139, 92, 0.2);
}
```

**Background:** 10% → 20% opacity  
**Border:** Gray → Green tint  
**Glow:** 10px green shadow  
**Timing:** 0.3s ease

---

## 🦶 Footer Link Arrow Animation

**Location:** Footer navigation links

**The Star Effect! ⭐**

**Animation Stages:**

```
Stage 1 (Normal):
Link Text
(Arrow hidden at -20px left)

Stage 2 (Hover Start):
→ Link Text (arrow slides in from left)
  └─ Arrow appears at 0px
  └─ Text slides 20px right
  └─ Additional 5px translateX

Stage 3 (Hover Complete):
  → Link Text (green color, fully slid right)

Stage 4 (Hover End):
Link Text (returns to original position)
```

**CSS:**
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

**Animation Breakdown:**
1. **Arrow starts**: left: -20px, opacity: 0 (invisible)
2. **On hover**: Arrow slides to left: 0, opacity: 1 (visible)
3. **Simultaneously**: Link text gets padding-left: 20px (slides right)
4. **Extra emphasis**: transform: translateX(5px) (additional slide)
5. **Color change**: Gray → Green (#0bb43d)

**Total slide distance:** 25px right (20px padding + 5px transform)  
**Arrow travel:** 20px right (from -20px to 0px)  
**Timing:** 0.3s ease for all properties  
**Synchronization:** All transitions start and end together

**Why it's special:**
- Multiple simultaneous animations
- Arrow emerges from nothing
- Text slides in two ways (padding + transform)
- Color changes during motion
- Perfectly timed coordination

---

### Social Media Icon Hover

**Effect:**
```
Normal:              Hover:
┌──────┐            ┌──────┐
│  ig  │      →     │  ig  │  ↑ Lifts 2px
└──────┘            └──────┘     Green tint & border
Gray bg             Green bg (10%)
```

**CSS:**
```css
.social-links a:hover {
    background: rgba(11, 180, 61, 0.1);
    border-color: #0bb43d;
    color: #0bb43d;
    transform: translateY(-2px);
}
```

**Lift:** 2px upward  
**Background:** Green tint (10% opacity)  
**Border:** Green accent  
**Icon Color:** Turns green

---

## 🎭 Hero Section Effects

### Logo Fade & Reveal Animation

**Location:** Hero section center

**Complex Multi-stage Animation:**

```
Stage 1 (Normal):
┌─────────┐
│  LOGO   │  ← Black logo, visible
└─────────┘

Stage 2 (Hover - 0s to 0.8s):
┌─────────┐
│  LOGO   │  ← Inverts to white
└─────────┘

Stage 3 (Hover - 0.8s to 2.0s):
┌─────────┐
│  LOGO   │  ← Fades out, shrinks to 80%
└─────────┘
    ↓

Marceli Cieplik    ← Fades in
UI/UX designer     ← Fades in with delay
```

**CSS:**
```css
.mc-logo-hero {
    transition: filter 0.8s ease, 
                opacity 1.2s ease 0.8s, 
                transform 1.2s ease 0.8s;
}

.hero-logo-container:hover .mc-logo-hero {
    filter: brightness(0) invert(1);
    opacity: 0;
    transform: scale(0.8);
}

.hero-logo-container:hover .hidden-heading {
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease, visibility 0s;
}
```

**Timeline:**
- 0.0s: Hover starts, color inversion begins
- 0.8s: Color inversion complete, fade/shrink starts
- 2.0s: Logo fully hidden, designer info visible

**Properties:**
- Color: Black → White (0.8s)
- Opacity: 1 → 0 (1.2s with 0.8s delay)
- Scale: 1.0 → 0.8 (1.2s with 0.8s delay)
- Designer info: 0 → 1 opacity (1s)

---

### Video Background Fade

**Effect:**
```
Normal:
[Cover Image] (visible)
[Video] (opacity: 0, hidden)

Hover:
[Cover Image] (fades to opacity: 0)
[Video] (fades to opacity: 1, plays)
```

**JavaScript + CSS:**
```javascript
coverImage.style.opacity = '0';
videoBg.style.opacity = '1';
videoBg.play();
```

```css
.video-bg {
    transition: opacity 1s ease;
}
```

**Timing:** 1s smooth fade  
**Coordination:** Syncs with logo hover  
**Playback:** Video starts during fade

---

## 📇 Card Interactions

### Standard Card Lift

**Effect:**
```
Normal State:
┌──────────────┐
│              │
│     Card     │
│              │
└──────────────┘
Shadow: 4px blur

Hover State:
┌──────────────┐
│              │  ↑ Lifts 5px
│     Card     │
│              │
└──────────────┘
Shadow: 12px blur (enhanced)
```

**CSS:**
```css
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
```

**Lift:** 5px upward  
**Shadow:** Expands and darkens  
**Timing:** 0.3s ease

---

### Service Card Border Accent

**Effect:**
```
Normal:                    Hover:
┌──────────────┐          ┌══════════════┐
│              │          ║              ║  ← Green border
│  Service     │    →     ║  Service     ║     Lifts up
│              │          ║              ║
└──────────────┘          └══════════════┘
Gray border               Green border
```

**CSS:**
```css
.service-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
}
```

**Border:** Gray → Green  
**Lift:** 5px  
**Timing:** 0.3s ease

---

### Blog Card Image Zoom

**Effect:**
```
Normal:                    Hover:
┌──────────────┐          ┌──────────────┐
│ ┌──────────┐ │          │ ┌──────────┐ │
│ │  Image   │ │    →     │ │  Image   │ │  ← Zooms 5%
│ └──────────┘ │          │ └──────────┘ │     (overflow hidden)
│              │          │              │
└──────────────┘          └──────────────┘
scale: 1.0                scale: 1.05
```

**CSS:**
```css
.blog-card:hover .blog-card-image-link img {
    transform: scale(1.05);
}
```

**Scale:** 1.05 (5% larger)  
**Container:** Overflow hidden crops zoom  
**Timing:** 0.3s ease

---

## 🎨 Labs Page - Gradient Cards

### Project Card Enhanced Lift

**Effect:**
```
Normal State:
┌══════════════┐
║ Blurred      ║
║ Gradient     ║  ← Gradient card
║ Card         ║
└══════════════┘
scale: 1.0

Hover State:
┌══════════════┐
║ Blurred      ║  ↑ Lifts 8px
║ Gradient     ║  ← Scales 2% larger
║ Card         ║
└══════════════┘
scale: 1.02
```

**CSS:**
```css
.project-card:hover {
    transform: translateY(-8px) scale(1.02);
}
```

**Lift:** 8px upward (more dramatic)  
**Scale:** 1.02 (2% larger)  
**Combined Transform:** Both effects simultaneous  
**Timing:** 0.4s ease (slightly slower for elegance)

---

## ⚡ Timing Reference

### Speed Categories

| Speed | Duration | Use Case | Examples |
|-------|----------|----------|----------|
| **Quick** | 0.3s | Standard interactions | Buttons, links, icons |
| **Medium** | 0.4s | Larger elements | Cards, panels |
| **Slow** | 0.8-1.2s | Complex animations | Hero section, reveals |

### Easing Functions

| Function | Behavior | Use Case |
|----------|----------|----------|
| `ease` | Smooth start & end | Most interactions (default) |
| `ease-out` | Fast start, slow end | Fade-ins, appearing elements |
| `ease-in` | Slow start, fast end | Fade-outs, disappearing elements |
| `linear` | Constant speed | Visibility changes, rotations |

---

## 📐 Transform Values Reference

### Lift Effects
```css
translateY(-2px)   /* Buttons - subtle lift */
translateY(-5px)   /* Cards - standard lift */
translateY(-8px)   /* Special cards - dramatic lift */
```

### Scale Effects
```css
scale(1.05)        /* Small zoom - links, logos */
scale(1.02)        /* Subtle zoom - large cards */
scale(0.8)         /* Shrink - hero logo */
```

### Horizontal Movement
```css
translateX(5px)    /* Slide right - footer links */
translateX(-5px)   /* Slide left */
```

### Combined Transforms
```css
transform: translateY(-8px) scale(1.02);  /* Lift + zoom */
transform: translateX(5px);                /* Horizontal slide */
```

---

## 🎨 Color Transitions

### Navigation Colors
```css
/* Inactive */
color: rgba(255, 255, 255, 0.35);

/* Hover */
color: rgba(255, 255, 255, 0.7);

/* Active */
color: #ffffff;
```

### Footer Link Colors
```css
/* Default */
color: rgba(246, 246, 246, 0.65);

/* Hover */
color: #0bb43d;  /* Green accent */
```

### Button Colors
```css
/* Outline Hover */
border-color: #0bb43d;  /* Green */
color: #0bb43d;

/* Background Hover */
background-color: rgba(255, 255, 255, 0.02);  /* Glass effect */
```

---

## 📦 Shadow Progression

### Button Shadows
```css
/* Default */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);

/* Hover */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```
**Change:** Blur doubles (20px → 32px), offset doubles (4px → 8px)

### Card Shadows
```css
/* Default */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

/* Hover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
```
**Change:** Blur increases (16px → 40px), offset triples (4px → 12px), opacity increases (0.2 → 0.3)

### Green Glow Shadows
```css
/* Outline Button Hover */
box-shadow: 0 8px 32px rgba(11, 180, 61, 0.2);

/* Login Icon Hover */
box-shadow: 0 0 10px rgba(74, 139, 92, 0.2);
```

---

## ✅ Best Practices

### 1. Consistency
- All buttons use 0.3s timing
- All cards lift 5px (except special cards)
- All colors use same green accent (#0bb43d)

### 2. Performance
```css
/* Good - GPU accelerated */
transform: translateY(-2px);
opacity: 0.5;

/* Bad - Causes reflow */
top: -2px;
display: none;
```

### 3. Accessibility
- Hover states = Focus states
- Sufficient color contrast maintained
- Animations respect `prefers-reduced-motion`

### 4. Subtlety
- Effects enhance, don't distract
- Movements are small (2-8px max)
- Scales are gentle (1.02-1.05)

### 5. Feedback
- Every clickable element has hover state
- Changes are immediate and smooth
- Visual feedback is clear and obvious

---

## 🎯 Quick Reference Chart

| Element | Hover Effect | Timing | Transform | Color Change |
|---------|-------------|--------|-----------|--------------|
| **Logo** | Brighten + Scale | 0.3s | scale(1.05) | opacity: 0.65→1 |
| **Nav Link** | Brighten + Scale | 0.3s | scale(1.05) | 35%→70% white |
| **Button** | Lift + Shadow | 0.3s | translateY(-2px) | - |
| **Outline Btn** | Green + Lift + Glow | 0.3s | translateY(-2px) | Gray→Green |
| **Login Icon** | Brighten + Glow | 0.3s | - | 10%→20% bg |
| **Footer Link** | Arrow + Slide + Green | 0.3s | translateX(25px) | Gray→Green |
| **Social Icon** | Lift + Green Tint | 0.3s | translateY(-2px) | Gray→Green |
| **Card** | Lift + Shadow | 0.3s | translateY(-5px) | - |
| **Service Card** | Lift + Green Border | 0.3s | translateY(-5px) | Border→Green |
| **Blog Image** | Zoom | 0.3s | scale(1.05) | - |
| **Project Card** | Lift + Scale | 0.4s | translateY(-8px) scale(1.02) | - |

---

## 🚀 Implementation Tips

### Adding New Hover Effects

1. **Always use transform** (not position properties)
2. **Keep timing consistent** (0.3s for most elements)
3. **Use ease timing** (or ease-out/ease-in when appropriate)
4. **Test hover + focus** (should look identical)
5. **Check mobile** (hover may not work, ensure touch feedback)
6. **Keep movements small** (2-8px is usually enough)
7. **Add to style guide** (document all new effects)

### Testing Checklist

- [ ] Effect triggers on hover
- [ ] Effect triggers on focus (keyboard)
- [ ] Transition is smooth (no jarring)
- [ ] Return to normal is smooth
- [ ] Works in all browsers
- [ ] Works on mobile (or has alternative)
- [ ] Performance is good (60fps)
- [ ] Doesn't cause layout shift

---

**Status:** ✅ Complete  
**Effects Documented:** 15+ unique interactions  
**Star Effect:** Footer link arrow animation 🌟  
**Performance:** All GPU-accelerated ⚡
