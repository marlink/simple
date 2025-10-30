# Before & After Examples

**Project:** Marceli Cieplik Portfolio  
**Purpose:** Visual guide showing inconsistencies and their fixes

---

## 1. CTA Button Inconsistency

### ❌ BEFORE (Inconsistent across pages)

**index.html:**
```html
<a class="btn-outline btn-small cta-btn" href="contact.html#form">Free website</a>
```
✅ This is the CORRECT implementation

**services.html:**
```html
<a class="btn-free-website cta-btn" href="contact.html#form" style="text-decoration:none;">Free website</a>
```
❌ Different class + inline style

**blog.html:**
```html
<a class="btn-free-website cta-btn" href="contact.html#form">Free website</a>
```
❌ Different class

**about.html, contact.html, labs.html, all blog articles:**
```html
<a class="btn-free-website cta-btn" href="contact.html#form">Free website</a>
```
❌ All using different class

### ✅ AFTER (Consistent everywhere)

**ALL 14 pages should use:**
```html
<a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>
```

**Why this matters:**
- **Visual consistency** - Button looks the same everywhere
- **Code clarity** - Uses documented component classes
- **Maintainability** - Change once in CSS, applies everywhere
- **No confusion** - Clear which classes to use

---

## 2. Navigation Structure Inconsistency

### ❌ BEFORE (Different on every page)

**index.html:**
```html
<div class="nav-links">
    <a href="#hero" class="active">Home</a>
    <a href="services.html">Services</a>
    <a href="blog.html">Blog</a>
    <a href="#what">What</a>
    <a href="labs.html">Labs</a>
    <a href="contact.html">Contact</a>
    <a href="about.html">About</a>
</div>
```
7 links, includes "What"

**blog.html:**
```html
<div class="nav-links">
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="blog.html" class="active">Blog</a>
    <a href="contact.html">Contact</a>
</div>
```
Only 4 links! Missing: Labs, About, What

**services.html:**
```html
<div class="nav-links">
    <a href="index.html#hero">Home</a>
    <a href="services.html" class="active">Services</a>
    <a href="blog.html">Blog</a>
    <a href="index.html#what">What</a>
    <a href="labs.html">Labs</a>
    <a href="contact.html">Contact</a>
</div>
```
6 links, missing "About"

**contact.html:**
```html
<div class="nav-links">
    <a href="index.html#hero">Home</a>
    <a href="services.html">Services</a>
    <a href="blog.html">Blog</a>
    <a href="index.html#what">What</a>
    <a href="labs.html">Labs</a>
    <a href="contact.html">Contact</a>
</div>
```
6 links, missing "About"

### ✅ AFTER (Consistent everywhere)

**ALL 14 pages should use:**
```html
<div class="nav-links">
    <a href="index.html#hero">Home</a>
    <a href="services.html">Services</a>
    <a href="blog.html">Blog</a>
    <a href="labs.html">Labs</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</div>
```

**Plus set active state per page:**
- index.html: `<a href="index.html#hero" class="active">Home</a>`
- services.html: `<a href="services.html" class="active">Services</a>`
- blog.html: `<a href="blog.html" class="active">Blog</a>`
- etc.

**Decision made:**
- ✅ Removed "What" link (it's just an anchor on index.html)
- ✅ Standard order: Home, Services, Blog, Labs, About, Contact
- ✅ 6 links on every page

**Why this matters:**
- **User confusion eliminated** - Same menu everywhere
- **Accessibility** - Users can find all pages from anywhere
- **Professional** - Consistent navigation is basic UX
- **SEO** - All pages properly linked

---

## 3. Logo Link Inconsistency

### ❌ BEFORE (Mixed implementation)

**index.html:**
```html
<div class="navbar-left">
    <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo">
</div>
```
No link (which is correct for home page)

**services.html:**
```html
<div class="navbar-left">
    <a href="index.html" aria-label="Home">
        <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo">
    </a>
</div>
```
✅ Has link (correct)

**Some other pages:**
```html
<div class="navbar-left">
    <a href="index.html">
        <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo">
    </a>
</div>
```
Has link but missing `aria-label`

### ✅ AFTER (Consistent pattern)

**index.html ONLY:**
```html
<div class="navbar-left">
    <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
</div>
```
No link on home page (user is already home)

**ALL other 13 pages:**
```html
<div class="navbar-left">
    <a href="index.html" aria-label="Home">
        <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
    </a>
</div>
```

**Why this matters:**
- **UX standard** - Users expect logo to return home
- **Accessibility** - `aria-label` helps screen readers
- **Performance** - `loading="lazy"` optimizes page load
- **SEO** - Proper internal linking

---

## 4. Inline CSS Duplication

### ❌ BEFORE (about.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-color: #020305;
            --text-color: #E5E5E5;
            --muted-color: #8B8B8B;
            --accent-color: #4A8B5C;
            --glass-bg: rgba(255, 255, 255, 0.02);
            --glass-border: rgba(255, 255, 255, 0.05);
            --glass-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
        }

        .tools-section {
            max-width: 1400px;
            margin: 0 auto;
            padding: 6rem 1rem;
        }
        
        /* ... 100+ more lines of CSS ... */
    </style>
</head>
<body>
    <!-- Page content -->
</body>
</html>
```

**Problems:**
1. Duplicates CSS variables already in `style.css`
2. Duplicates reset styles already in `style.css`
3. Page-specific styles mixed with global styles
4. Hard to maintain (changes needed in multiple places)
5. Increases page size unnecessarily

### ✅ AFTER (about.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About — Marceli Cieplik | UI/UX Designer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Page content -->
</body>
</html>
```

**And in style.css, add:**
```css
/* ======================
   About Page Specific Styles
   ====================== */

.tools-section {
    max-width: 1400px;
    margin: 0 auto;
    padding: 6rem 1rem;
}

.tools-header {
    text-align: center;
    margin-bottom: 4rem;
}

/* ... rest of about-specific styles ... */
```

**Why this matters:**
- **DRY principle** - Don't Repeat Yourself
- **Single source of truth** - Variables defined once
- **Smaller pages** - Faster load times
- **Easier maintenance** - Change once, applies everywhere
- **Version control** - All CSS changes in one file

---

## 5. Inline Style Attributes

### ❌ BEFORE

**services.html:**
```html
<a class="btn-free-website cta-btn" href="contact.html#form" style="text-decoration:none;">Free website</a>
```

**Various pages:**
```html
<header style="text-align:center; margin-top: 3rem;">
    <h1 class="section-title">Services</h1>
</header>

<p style="max-width:760px;margin:0.75rem auto 0; color:#B0B0B0;">
    Description text
</p>
```

**Problems:**
- Overrides CSS specificity
- Hard to find and change
- Inconsistent with design system
- Can't be reused
- Not in version control flow

### ✅ AFTER

**Clean HTML:**
```html
<a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>

<header class="page-header">
    <h1 class="section-title">Services</h1>
</header>

<p class="page-description">
    Description text
</p>
```

**With CSS classes:**
```css
.page-header {
    text-align: center;
    margin-top: 3rem;
}

.page-description {
    max-width: 760px;
    margin: 0.75rem auto 0;
    color: var(--gray-color);
}
```

**Why this matters:**
- **Reusability** - Same styles can be applied elsewhere
- **Maintainability** - Change style once, affects all instances
- **Consistency** - Forces use of design system
- **Performance** - CSS can be cached

---

## 6. Button Variant Usage

### ❌ BEFORE (Unclear which to use)

```html
<!-- Seen across different pages: -->
<button class="btn">Button</button>
<button class="btn-solid">Button</button>
<button class="btn btn-solid">Button</button>
<a class="btn-outline btn-small cta-btn">Link</a>
<a class="btn-free-website cta-btn">Link</a>
```

No clear pattern, mix of classes

### ✅ AFTER (Clear patterns)

**Primary Action:**
```html
<button class="btn btn-solid btn-large">Submit Form</button>
```

**Secondary Action:**
```html
<button class="btn btn-outline">Cancel</button>
```

**Small Button (nav):**
```html
<a class="btn btn-outline btn-small" href="#">Link</a>
```

**Normal Button:**
```html
<button class="btn btn-solid">Save</button>
```

**Pattern:**
```
.btn                  ← Base class (ALWAYS required)
.btn-solid/.btn-outline  ← Variant (choose one)
.btn-small/.btn-large    ← Size (optional, default is normal)
```

**Why this matters:**
- **Predictability** - Developers know which classes to use
- **Consistency** - Buttons look the same in similar contexts
- **Documentation** - Matches style guide exactly
- **Scalability** - Easy to add new variants

---

## 7. Complete Navbar Example

### ❌ BEFORE (Fragmented)

Different pages had different combinations:
- Different nav links
- Different button classes
- Inconsistent logo links
- Mixed HTML structure

### ✅ AFTER (Complete, consistent navbar)

**Use this EXACT structure on ALL pages:**

```html
<nav class="navbar" id="navbar">
    <!-- Left: Logo -->
    <div class="navbar-left">
        <!-- On index.html (no link): -->
        <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
        
        <!-- On all other pages (with link): -->
        <!-- <a href="index.html" aria-label="Home">
            <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
        </a> -->
    </div>
    
    <!-- Center: Navigation Links -->
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
    
    <!-- Right: CTA + Login -->
    <div class="navbar-right">
        <a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>
        <div class="login-icon">
            <img src="img/icons/login.svg" alt="User Login" class="user-icon" loading="lazy" width="24" height="24">
        </div>
    </div>
</nav>
```

**Remember to set active state per page:**
```html
<!-- On services.html -->
<a href="services.html" class="active">Services</a>

<!-- On blog.html -->
<a href="blog.html" class="active">Blog</a>

<!-- etc. -->
```

---

## Quick Reference: What Changed

| Element | Before | After | Pages Affected |
|---------|--------|-------|----------------|
| **CTA Button** | `btn-free-website cta-btn` | `btn btn-outline btn-small` | 13 pages |
| **Navigation Links** | 4-7 links, varied | 6 links, consistent | 14 pages |
| **Logo Link** | Inconsistent | Standard pattern | 14 pages |
| **Inline Styles** | Many inline `<style>` blocks | Moved to style.css | 2 pages |
| **Style Attributes** | `style="..."` on elements | CSS classes | 3+ pages |
| **Button Patterns** | Mixed classes | Standard `.btn` + variants | All pages |
| **Active States** | Inconsistent | Always set correctly | 14 pages |

---

## Testing Checklist

After making changes, verify:

### Visual Check
- [ ] All pages have identical navbar
- [ ] "Free website" button looks same everywhere
- [ ] Navigation links in same order everywhere
- [ ] Active states show correctly per page
- [ ] Logo looks consistent across pages

### Code Check
```bash
# All should return identical HTML for CTA:
grep -h "Free website" *.html | sort -u

# All should return identical nav structure:
grep -A8 "navbar-center" *.html | grep -A6 "nav-links"

# Should return no results (no inline styles):
grep '<style>' *.html

# Should return minimal results (no inline attributes):
grep 'style="' *.html
```

### Browser Check
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test on mobile (<768px)
- [ ] Test on tablet (768-991px)
- [ ] Test on desktop (>991px)

### Accessibility Check
- [ ] Tab through navigation
- [ ] Logo link works (except on index)
- [ ] All nav links reachable
- [ ] CTA button focusable
- [ ] Active states visible

---

## Summary

**Total Changes Needed:**
- ✏️ 13 pages: Update CTA button class
- ✏️ 14 pages: Standardize navigation links
- ✏️ 2 pages: Remove inline CSS blocks
- ✏️ 3 pages: Clean inline style attributes
- ✏️ 1 file: Update style.css with page-specific styles

**Time Estimate:**
- CTA button updates: 1 hour
- Navigation standardization: 2 hours
- CSS cleanup: 1 hour
- Testing: 1 hour
- **Total: ~5 hours of focused work**

**Impact:**
- 🎨 Visual consistency across entire site
- 🔧 Easier maintenance going forward
- 📚 Code matches documentation
- ♿ Better accessibility
- 🚀 Improved performance (cached CSS)

---

**Ready to implement?** Start with `IMPLEMENTATION-CHECKLIST.md` and check off items as you go!