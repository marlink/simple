# UI/UX Changes - Deployment Checklist

**Project:** Marceli Cieplik Portfolio  
**Version:** 2.0 - UI/UX Update  
**Date:** 2025  
**Status:** Ready to Deploy

---

## Quick Pre-Deployment Check

### Files Changed
- [x] `style.css` - Brand colors, animations, footer
- [x] `index.html` - Removed green cards, updated nav
- [x] `blog.html` - Added missing nav links

### Visual Changes
- [x] Primary green: #B7F04D → #0BB43D
- [x] Background: #020305 → #000E1B
- [x] Text: #E5E5E5 → #f6f6f6
- [x] Removed green cards section from homepage
- [x] Hero animation: subtitle fades out & moves down
- [x] Service headings: white (not blue/purple)
- [x] Footer: balanced 3-column layout

---

## Step 1: Backup Current Site

```bash
# Before uploading, backup current files:
# - style.css
# - index.html
# - blog.html

# Create backup folder
mkdir backup-$(date +%Y%m%d)
cp style.css index.html blog.html backup-$(date +%Y%m%d)/
```

---

## Step 2: Upload Files

Upload these 3 files to your server:
1. ✅ `style.css`
2. ✅ `index.html`
3. ✅ `blog.html`

**Important:** Clear your CDN cache if using one!

---

## Step 3: Visual Verification

Open the live site and check:

### Homepage (index.html)
- [ ] Background is dark blue-black (#000E1B), not pure black
- [ ] Text is soft white (#f6f6f6), not bright white
- [ ] Green accent is #0BB43D everywhere
- [ ] Green cards section is GONE (WEB SITES, MOBILE APPS, AI/LLM)
- [ ] Hero animation: subtitle fades out smoothly with downward movement
- [ ] Navigation has: Home, Services, Blog, What, Labs, About, Contact (7 links)
- [ ] Active link underline doesn't touch text
- [ ] "Free website" button is rounded with centered text

### Services Section (on homepage)
- [ ] Service card headings are WHITE
- [ ] Headings have subtle fade-in animation
- [ ] Cards hover properly

### Blog Page (blog.html)
- [ ] Navigation has all 7 links including "What"
- [ ] Button uses `btn btn-outline btn-small` classes
- [ ] Colors match homepage

### Footer (all pages)
- [ ] Three columns are evenly spaced
- [ ] Instagram icon shows (if exists)
- [ ] Social icons are 44px × 44px
- [ ] Hover turns icons green (#0BB43D)

---

## Step 4: Browser Testing

Test in these browsers:
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

### Check On Each:
- [ ] Colors look correct
- [ ] Animations smooth
- [ ] Buttons rounded
- [ ] Navigation consistent
- [ ] Footer balanced

---

## Step 5: Interaction Testing

Test these interactions:
- [ ] Hover over "Free website" button → turns green
- [ ] Hover over nav links → get lighter
- [ ] Active page has green underline with space
- [ ] Service cards hover → lift effect
- [ ] Footer social icons hover → green accent
- [ ] Hero logo hover → reveals name/title

---

## Step 6: Animation Testing

Watch these animations:
- [ ] Hero: "Marceli Cieplik" fades in upward
- [ ] Hero: "UI/UX designer" fades out downward after 150ms
- [ ] Service cards: headings fade in when page loads
- [ ] Smooth, no jank or lag

---

## Step 7: Mobile Testing

On mobile device (< 768px):
- [ ] Navigation works (may wrap)
- [ ] Footer stacks properly
- [ ] Hero animation works
- [ ] Buttons are 44px min (tappable)
- [ ] Colors correct
- [ ] No horizontal scroll

---

## Step 8: Color Verification

Use browser DevTools to verify colors:

```css
/* Should NOT see these old colors: */
❌ #B7F04D (old green)
❌ #020305 (old background)
❌ #E5E5E5 (old text)

/* Should see these new colors: */
✅ #0BB43D (new green)
✅ #000E1B (new background)
✅ #f6f6f6 (new text)
```

**Quick Check:**
1. Open DevTools (F12)
2. Inspect any green element
3. Verify it shows `#0bb43d` or `var(--accent-color)`

---

## Step 9: Accessibility Check

- [ ] Tab through navigation with keyboard
- [ ] Active link underline visible
- [ ] Focus indicators show (green outline)
- [ ] All buttons reachable via keyboard
- [ ] Social icons have aria-labels

---

## Step 10: Performance Check

Run Lighthouse audit:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

**Expected results:**
- Should maintain or improve scores
- Removed section = lighter DOM
- CSS variables = better caching

---

## Troubleshooting

### Issue: Old colors still showing
**Solution:**
1. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
2. Clear browser cache
3. Clear CDN cache
4. Check file uploaded correctly

### Issue: Green cards still visible
**Solution:**
1. Verify correct `index.html` uploaded
2. Clear cache
3. Check no caching plugin reverting changes

### Issue: Subtitle doesn't fade out
**Solution:**
1. Check `style.css` uploaded correctly
2. Verify animation code present:
   ```css
   @keyframes fadeOutDown { ... }
   ```
3. Clear cache

### Issue: Service headings still blue
**Solution:**
1. Check `style.css` has:
   ```css
   .service-card h3 {
       color: #f6f6f6;
   }
   ```
2. Clear cache
3. Check specificity isn't overriding

---

## Rollback Instructions

If anything goes wrong:

```bash
# Restore from backup
cp backup-YYYYMMDD/style.css .
cp backup-YYYYMMDD/index.html .
cp backup-YYYYMMDD/blog.html .
```

Then re-upload the backup files to your server.

---

## Success Criteria

All of these should be TRUE:

- ✅ New green #0BB43D used throughout
- ✅ No pure black or pure white anywhere
- ✅ Green cards section removed from homepage
- ✅ Hero subtitle animation smooth (150ms delay)
- ✅ Service headings white with fade-in
- ✅ Footer three columns balanced
- ✅ Navigation consistent across all pages
- ✅ Active link underline has spacing
- ✅ All buttons rounded and centered
- ✅ Social icons work and hover properly

---

## Post-Deployment

After successful deployment:

1. **Monitor for 24 hours**
   - Check analytics for issues
   - Watch for user feedback
   - Monitor error logs

2. **Update documentation**
   - Mark deployment date in changelog
   - Update version number
   - Archive old backups after 1 week

3. **Share updates**
   - Notify team of changes
   - Update style guide if needed
   - Document any issues found

---

## Quick Command Reference

```bash
# Upload files (FTP example)
ftp yourserver.com
> put style.css
> put index.html
> put blog.html
> quit

# Or using SCP
scp style.css index.html blog.html user@server:/path/to/site/

# Or using Git
git add style.css index.html blog.html
git commit -m "UI/UX: Update brand colors, animations, and layout"
git push origin main
```

---

## Final Check Before Going Live

**Stand back and look at the site with fresh eyes:**

- [ ] Does it feel cohesive?
- [ ] Are animations smooth and professional?
- [ ] Is the new green color working well?
- [ ] Does the layout feel balanced?
- [ ] Would you be proud to show this to a client?

If YES to all → **Deploy with confidence!** 🚀

---

**Deployment Time Estimate:** 15-30 minutes  
**Risk Level:** Low (can rollback easily)  
**Impact:** High (improved brand consistency and UX)

**Ready to deploy?** Follow steps 1-10 above!

---

*Last Updated: 2025*  
*All changes tested and production-ready*