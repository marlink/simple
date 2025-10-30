# Migration Steps - Quick Guide

**Estimated Time:** 30 minutes  
**Difficulty:** Easy  
**Risk:** Low (all original files preserved)

---

## Before You Start

✅ **Checklist:**
- [ ] Backup your current site
- [ ] Have FTP/file access to your server
- [ ] Test locally first (optional but recommended)
- [ ] Review the optimized template

---

## Step-by-Step Migration

### Step 1: Upload New Folders (5 minutes)

Upload these new folders to your server:

```
Upload to server:
├── css/          (entire folder)
├── js/           (entire folder)
└── templates/    (optional, for reference)
```

**Important:** Don't delete the old `style.css` and `script.js` yet!

---

### Step 2: Update One Page (Test) (10 minutes)

Pick ONE page to test first (recommend: `about.html`)

#### Find and Replace:

**1. Update CSS link:**
```html
<!-- OLD (find this) -->
<link rel="stylesheet" href="style.css">

<!-- NEW (replace with this) -->
<link rel="stylesheet" href="css/style.min.css">
```

**2. Update JavaScript link:**
```html
<!-- OLD (find this) -->
<script src="script.js"></script>

<!-- NEW (replace with this) -->
<script src="js/main.js" defer></script>
```

**3. Add these lines in `<head>` (before closing `</head>`):**
```html
<!-- Preload critical resources -->
<link rel="preload" href="css/style.min.css" as="style">
<link rel="preload" href="js/main.js" as="script">

<!-- Theme color -->
<meta name="theme-color" content="#020305">
```

**4. Save and upload the modified page**

---

### Step 3: Test the Page (5 minutes)

Open the page in your browser and check:

- [ ] Page looks correct (same design)
- [ ] Navigation works
- [ ] Buttons work
- [ ] Images load (may load progressively)
- [ ] No errors in browser console (F12)
- [ ] Mobile view works (use DevTools)

**If everything works:** Continue to Step 4  
**If something's wrong:** Check paths, clear cache, review console errors

---

### Step 4: Update Remaining Pages (10 minutes)

Apply the same changes to all other HTML files:

**Pages to update:**
- [ ] index.html
- [ ] about.html (already done in Step 2)
- [ ] services.html
- [ ] blog.html
- [ ] contact.html
- [ ] labs.html
- [ ] blog-article-1.html
- [ ] blog-article-2.html
- [ ] blog-article-3.html
- [ ] blog-article-4.html
- [ ] blog-article-5.html
- [ ] blog-article-6.html
- [ ] blog-details.html

**Quick method:** Use find & replace in your code editor

---

### Step 5: Final Testing (5 minutes)

Test the entire site:

#### Manual Testing:
- [ ] Visit each page
- [ ] Click navigation links
- [ ] Test forms
- [ ] Check mobile view
- [ ] Test keyboard navigation (Tab key)

#### Automated Testing:
```
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Click "Generate report"
4. Target: All scores > 90
```

---

## That's It! 🎉

Your site is now optimized and running faster!

---

## Optional Improvements

### A. Add Lazy Loading to Images

For images that should load progressively:

```html
<!-- Change from: -->
<img src="image.jpg" alt="Description">

<!-- To: -->
<img data-src="image.jpg" class="lazy-img" alt="Description">
```

### B. Mark Critical Images

For hero/important images that should load immediately:

```html
<img src="hero.jpg" class="preload" loading="eager" alt="Hero">
```

### C. Update Navigation (if inconsistent)

Use this standard navigation on ALL pages:

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

---

## Troubleshooting

### Problem: Page looks unstyled

**Solution:**
```
1. Check CSS path: css/style.min.css
2. Clear browser cache (Ctrl+Shift+R)
3. Verify file uploaded to server
4. Check browser console for 404 errors
```

### Problem: JavaScript not working

**Solution:**
```
1. Check JS path: js/main.js
2. Verify 'defer' attribute present
3. Clear browser cache
4. Check console for errors
5. Ensure all files in js/ folder uploaded
```

### Problem: Images not loading

**Solution:**
```
1. Check if image-loader.js is loaded
2. Verify image paths are correct
3. For lazy images, check data-src attribute
4. Clear cache and reload
```

### Problem: Still seeing old version

**Solution:**
```
1. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache completely
3. Check server cache settings
4. Try incognito/private window
```

---

## Rollback (If Needed)

If you need to revert:

```html
<!-- Change back to: -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

Your old files are still on the server, so rollback is instant!

---

## After Migration

### Cleanup (Optional)

After everything works for a few days:

1. **Archive old files** (don't delete immediately):
```
Create 'archive-old/' folder
Move old style.css → archive-old/
Move old script.js → archive-old/
```

2. **Set up monitoring:**
- Google Analytics (if not already)
- Error logging
- Performance monitoring

3. **Regular maintenance:**
- Run Lighthouse monthly
- Update documentation
- Keep backups

---

## Performance Checks

### Before Migration:
```bash
# Note your current scores
Lighthouse Performance: [YOUR SCORE]
Page Load Time: [YOUR TIME]
```

### After Migration:
```bash
# Compare new scores
Lighthouse Performance: [NEW SCORE] ✨
Page Load Time: [NEW TIME] ⚡
```

**Expected improvements:**
- Load time: ~50% faster
- Lighthouse: +15-20 points
- Bundle size: ~45% smaller

---

## Need More Help?

### Documentation:
1. **OPTIMIZATION.md** - Complete technical guide
2. **style-guide.md** - Design system
3. **BEFORE-AFTER-EXAMPLES.md** - Code examples

### Testing Tools:
- **Lighthouse** (Chrome DevTools)
- **PageSpeed Insights** (https://pagespeed.web.dev/)
- **HTML Validator** (https://validator.w3.org/)

### Quick Support:
1. Check browser console (F12) for errors
2. Review file paths carefully
3. Test in incognito mode
4. Verify all files uploaded

---

## Success Criteria ✅

Your migration is successful when:

- ✅ All pages load correctly
- ✅ Navigation works everywhere
- ✅ Forms submit properly
- ✅ Images display (even if progressive)
- ✅ Mobile view works
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ Load time < 2 seconds

---

## Summary

```
┌─────────────────────────────────────┐
│  MIGRATION PROCESS                  │
├─────────────────────────────────────┤
│  1. Upload css/ and js/ folders     │
│  2. Update one page (test)          │
│  3. Test thoroughly                 │
│  4. Update remaining pages          │
│  5. Final testing                   │
│  6. Done! 🎉                        │
└─────────────────────────────────────┘

Time: ~30 minutes
Risk: Low
Reversible: Yes
Worth it: Absolutely! ⚡
```

---

**Questions?** Review the full `OPTIMIZATION.md` guide

**Ready?** Start with Step 1!

**Last Updated:** 2025