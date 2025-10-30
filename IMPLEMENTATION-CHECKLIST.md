# Implementation Checklist

**Project:** Marceli Cieplik Portfolio  
**Goal:** Standardize all pages according to the updated style guide  
**Estimated Time:** 10-15 hours  
**Priority:** High

---

## Overview

This checklist ensures all 14 pages follow consistent design patterns as defined in `style-guide.md` (v2.0).

### Quick Stats
- **Total Pages:** 14
- **Critical Issues:** 42
- **Medium Issues:** 28
- **Low Priority:** 15

---

## Phase 1: Critical Fixes (Priority: High)

### 1.1 Standardize CTA Button (All Pages)

**Standard Implementation:**
```html
<a class="btn btn-outline btn-small" href="contact.html#form">Free website</a>
```

#### Pages to Fix:

- [ ] **about.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~291

- [ ] **blog.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~38

- [ ] **blog-article-1.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~38

- [ ] **blog-article-2.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~35

- [ ] **blog-article-3.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~35

- [ ] **blog-article-4.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~35

- [ ] **blog-article-5.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~35

- [ ] **blog-article-6.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~35

- [ ] **blog-details.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~38

- [ ] **contact.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~577

- [ ] **index.html**
  - Current: `class="btn-outline btn-small cta-btn"` ✓ CORRECT
  - Action: None (already correct)
  - Status: ✅ Reference implementation

- [ ] **labs.html**
  - Current: `class="btn-free-website cta-btn"`
  - Action: Replace with standard implementation
  - Line: ~267

- [ ] **services.html**
  - Current: `class="btn-free-website cta-btn" style="text-decoration:none;"`
  - Action: Replace with standard implementation AND remove inline style
  - Line: ~31

**Verification:**
```bash
# After changes, verify consistency:
grep -n "Free website" *.html
# All should use: class="btn btn-outline btn-small"
```

---

### 1.2 Standardize Navigation Structure (All Pages)

**Canonical Navigation:**
```html
<nav class="navbar" id="navbar">
    <div class="navbar-left">
        <a href="index.html" aria-label="Home">
            <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
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
            <img src="img/icons/login.svg" alt="User Login" class="user-icon" loading="lazy" width="24" height="24">
        </div>
    </div>
</nav>
```

#### Pages to Fix:

- [ ] **index.html**
  - Current nav items: Home, Services, Blog, What, Labs, Contact, About
  - Action: Reorder to match canonical (remove "What" or add to all)
  - Add `<a>` wrapper to logo (currently missing)
  - Status: 🟡 Mostly correct

- [ ] **about.html**
  - Current nav items: Home, Services, Blog, What, Labs, Contact, About
  - Action: Standardize nav items order
  - Verify logo link exists
  - Update active state to "About"

- [ ] **blog.html**
  - Current nav items: Home, Services, Blog, Contact (Missing: Labs, About)
  - Action: Add missing "Labs" and "About" links
  - Reorder to match canonical
  - Update active state to "Blog"

- [ ] **blog-article-1.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-article-2.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-article-3.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-article-4.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-article-5.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-article-6.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **blog-details.html**
  - Action: Check and standardize navigation
  - Update active state to "Blog"

- [ ] **contact.html**
  - Current nav items: Home, Services, Blog, What, Labs, Contact
  - Action: Add "About" link
  - Reorder to match canonical
  - Update active state to "Contact"

- [ ] **labs.html**
  - Current nav items: Home, Services, Blog, What, Labs, Contact, About
  - Action: Standardize nav items order
  - Update active state to "Labs"

- [ ] **services.html**
  - Current nav items: Home, Services, Blog, What, Labs, Contact (Missing: About)
  - Action: Add "About" link
  - Reorder to match canonical
  - Update active state to "Services"

**Decision Required:**
- [ ] Keep "What" link (add to all pages) OR remove it (remove from all)
- Recommendation: Remove "What" (it's an anchor on index.html only)

---

### 1.3 Remove Duplicate CSS Variable Definitions

#### about.html
- [ ] **Remove inline `<style>` block** (lines ~13-26)
  - Current: Defines `:root` variables already in style.css
  - Action: Delete entire inline style block
  - Keep only page-specific styles NOT in style.css
  - Move unique styles to style.css with `.about-page` prefix

- [ ] **Extract unique styles to style.css**
  ```css
  /* About Page Specific Styles */
  .tools-section { /* existing styles */ }
  .tools-grid { /* existing styles */ }
  .tool-category { /* existing styles */ }
  /* etc. */
  ```

#### contact.html
- [ ] **Review inline styles** (line ~14)
  - Current: `.cta-btn { text-decoration: none; }`
  - Action: Already handled in style.css, remove if redundant
  
- [ ] **Extract page-specific styles**
  - Move `.messaging-section`, `.whatsapp-card`, etc. to style.css
  - Keep organized under `/* Contact Page Specific */`

#### Other pages
- [ ] **blog.html** - Check for inline styles
- [ ] **services.html** - Check for inline styles (has inline `style="text-decoration:none;"`)
- [ ] **All blog-article-*.html** - Check for inline styles

**Verification:**
```bash
# Find all inline style blocks:
grep -n "<style>" *.html

# Find inline style attributes:
grep -n 'style="' *.html
```

---

## Phase 2: Medium Priority Fixes

### 2.1 Ensure Logo Link Consistency

#### Standard Pattern:
```html
<!-- On all pages EXCEPT index.html -->
<div class="navbar-left">
    <a href="index.html" aria-label="Home">
        <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
    </a>
</div>

<!-- On index.html only -->
<div class="navbar-left">
    <img src="img/logo/mc-logo.svg" alt="MC Logo" class="navbar-logo" loading="lazy" width="1024" height="768">
</div>
```

- [ ] **index.html** - Logo should NOT link (already on home) ✓
- [ ] **about.html** - Logo should link to index.html
- [ ] **blog.html** - Logo should link to index.html
- [ ] **contact.html** - Logo should link to index.html
- [ ] **labs.html** - Logo should link to index.html
- [ ] **services.html** - Logo should link to index.html
- [ ] **All blog articles** - Logo should link to index.html

---

### 2.2 Add Missing Meta Tags

Ensure all pages have consistent meta tags:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title — Marceli Cieplik | UI/UX Designer</title>
    <meta name="description" content="Page description">
    <meta property="og:title" content="Page Title — Marceli Cieplik">
    <meta property="og:description" content="Page description">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://marlink.github.io/simple/PAGE.html">
    <meta property="og:image" content="img/logo/mc-logo.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
```

- [ ] **about.html** - Add/verify meta tags
- [ ] **blog.html** - Add/verify meta tags
- [ ] **contact.html** - Add/verify meta tags
- [ ] **labs.html** - Add/verify meta tags
- [ ] **services.html** - Add/verify meta tags
- [ ] **All blog articles** - Add/verify meta tags

---

### 2.3 Standardize Section Titles

All section titles should use:
```html
<h2 class="section-title">Section Title</h2>
```

Check each page:
- [ ] **about.html** - Verify section title classes
- [ ] **blog.html** - Verify section title classes
- [ ] **contact.html** - Verify section title classes
- [ ] **labs.html** - Verify section title classes
- [ ] **services.html** - Verify section title classes

---

### 2.4 Verify Button Consistency

Ensure all buttons follow documented patterns:

#### Audit each page for:
- [ ] **about.html**
  - All buttons use `btn` base class
  - Size classes: `btn-small`, `btn-normal`, or `btn-large`
  - Variant classes: `btn-solid` or `btn-outline`
  - No custom button classes

- [ ] **contact.html**
  - Submit button: `<button type="submit" class="btn btn-solid btn-large">Submit</button>`
  - All other buttons follow standard

- [ ] **services.html**
  - Service cards use proper classes
  - CTAs follow standard patterns

- [ ] **All pages** - Verify button patterns

---

## Phase 3: CSS Refactoring

### 3.1 Organize style.css

- [ ] **Add section comments** to style.css:
  ```css
  /* ======================
     1. CSS Variables
     ====================== */
  
  /* ======================
     2. Reset & Base Styles
     ====================== */
  
  /* ======================
     3. Layout Components
     ====================== */
  
  /* ======================
     4. UI Components
     ====================== */
  
  /* ======================
     5. Page-Specific Styles
     ====================== */
  
  /* ======================
     6. Utilities
     ====================== */
  
  /* ======================
     7. Responsive (Media Queries)
     ====================== */
  ```

- [ ] **Move all page-specific styles** from inline `<style>` blocks to style.css

- [ ] **Remove deprecated classes**:
  - `btn-free-website` (replace with `btn btn-outline btn-small`)
  - Any other unused classes

- [ ] **Verify no duplicate selectors** in style.css

---

### 3.2 Add Missing Component Styles

Ensure these components are fully styled in style.css:

- [ ] `.blog-card` and variants
- [ ] `.social-media-card` variants (WhatsApp, Telegram, X, Substack)
- [ ] `.service-card`
- [ ] `.tools-section` and `.tools-grid`
- [ ] `.green-card` (verify complete)
- [ ] Form elements (`.form-input`, `.form-textarea`)

---

## Phase 4: Accessibility & Testing

### 4.1 Add Focus Styles

- [ ] **Add global focus styles** to style.css:
  ```css
  /* Focus styles for accessibility */
  .btn:focus-visible,
  .nav-links a:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  .login-icon:focus-visible {
      outline: 2px solid var(--accent-color);
      outline-offset: 2px;
  }
  ```

### 4.2 Verify ARIA Labels

Check all pages for:
- [ ] Images have descriptive `alt` attributes
- [ ] Links with icons have `aria-label`
- [ ] Form inputs have associated labels
- [ ] Semantic HTML is used (`<nav>`, `<main>`, `<section>`, etc.)

### 4.3 Test Keyboard Navigation

- [ ] **Tab through each page**:
  - [ ] index.html
  - [ ] about.html
  - [ ] blog.html
  - [ ] contact.html
  - [ ] labs.html
  - [ ] services.html
  - [ ] Sample blog article

- [ ] **Verify**:
  - Logical tab order
  - Visible focus indicators
  - No keyboard traps
  - All interactive elements reachable

### 4.4 Test Responsive Breakpoints

#### Mobile (<768px)
- [ ] Test on actual device or Chrome DevTools
- [ ] Navigation works (may need hamburger menu)
- [ ] All buttons are tappable (44px min)
- [ ] Text is readable
- [ ] No horizontal scroll

#### Tablet (768px - 991px)
- [ ] Grids adjust properly
- [ ] Navigation wraps gracefully
- [ ] Images scale correctly

#### Desktop (>991px)
- [ ] Full layout displays correctly
- [ ] Hover states work
- [ ] Animations smooth

---

## Phase 5: Documentation & Cleanup

### 5.1 Update Documentation

- [ ] Review `style-guide.md` for accuracy
- [ ] Update `README.md` if needed
- [ ] Document any new components added
- [ ] Add code examples for common patterns

### 5.2 Code Cleanup

- [ ] Remove unused CSS classes
- [ ] Remove commented-out code
- [ ] Ensure consistent indentation
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Validate CSS (https://jigsaw.w3.org/css-validator/)

### 5.3 Performance Check

- [ ] Optimize images (compress, lazy load)
- [ ] Check CSS file size (consider splitting if >100kb)
- [ ] Verify font loading strategy
- [ ] Test page load times

---

## Verification Checklist

After completing all phases, verify:

### Global Checks
- [ ] All 14 pages use identical CTA button implementation
- [ ] All 14 pages use identical navigation structure
- [ ] No inline `<style>` blocks (except truly unique cases)
- [ ] No inline `style=""` attributes
- [ ] All pages link to `style.css` only
- [ ] CSS variables used consistently

### Per-Page Checks
Run this checklist on each page:

- [ ] **Navigation**
  - Logo links to home (except on index.html)
  - All 6 nav links present in correct order
  - Active state set correctly
  - CTA button uses standard classes

- [ ] **Buttons**
  - All use `btn` base class
  - Proper variant classes
  - No deprecated classes
  - Touch targets ≥44px

- [ ] **Typography**
  - Headings use proper hierarchy
  - Section titles use `.section-title`
  - Font sizes from defined scale
  - Colors from palette

- [ ] **Accessibility**
  - All images have alt text
  - Focus styles visible
  - Keyboard navigable
  - Semantic HTML used

- [ ] **Responsive**
  - Works on mobile (<768px)
  - Works on tablet (768-991px)
  - Works on desktop (>991px)
  - No horizontal scroll

---

## Testing Matrix

| Page | CTA Button | Navigation | No Inline Styles | Responsive | Accessible | Final ✓ |
|------|-----------|------------|------------------|-----------|-----------|---------|
| index.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| about.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| contact.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| labs.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| services.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-1.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-2.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-3.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-4.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-5.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-article-6.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| blog-details.html | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

---

## Quick Reference Commands

### Find & Replace
```bash
# Find all instances of old CTA button
grep -r "btn-free-website" *.html

# Find all inline styles
grep -r 'style="' *.html

# Find all navigation sections
grep -A10 "navbar-center" *.html

# Validate HTML
for file in *.html; do echo "Validating $file"; done
```

### Test URLs
After deployment, test all pages:
- https://marlink.github.io/simple/index.html
- https://marlink.github.io/simple/about.html
- https://marlink.github.io/simple/blog.html
- https://marlink.github.io/simple/contact.html
- https://marlink.github.io/simple/labs.html
- https://marlink.github.io/simple/services.html

---

## Progress Tracking

**Started:** _______________  
**Phase 1 Complete:** _______________  
**Phase 2 Complete:** _______________  
**Phase 3 Complete:** _______________  
**Phase 4 Complete:** _______________  
**Phase 5 Complete:** _______________  
**Final Review:** _______________  

---

## Sign-Off

- [ ] All critical issues fixed
- [ ] All medium priority issues fixed
- [ ] Low priority issues documented
- [ ] Testing complete
- [ ] Documentation updated
- [ ] Ready for deployment

**Completed by:** _______________  
**Date:** _______________  
**Approved by:** _______________

---

**Notes:**
Use this space to document any deviations from the checklist or special cases encountered during implementation.