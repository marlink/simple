# SimpleIcons API Guide - Company Logo Solution

## Overview
I've implemented **SimpleIcons.org** API for accessing high-quality SVG logos of popular companies and tools. This solution provides professional logos for your portfolio at no cost.

## 🔗 API Endpoint
```
https://cdn.simpleicons.org/{company-name}/{color}
```

**Example:** `https://cdn.simpleicons.org/santander/ffffff`

## ✅ Companies Currently Available in Your Portfolio
- **Santander** - Banking services
- **TUI** - Travel & tourism  
- **Barclays** - Banking services
- **Superbet** - Gaming/Sports betting

## 🛠️ Additional Popular Companies Available
### Technology
- Google, Microsoft, Apple, Amazon, Netflix, Spotify
- Facebook, Twitter, Instagram, LinkedIn
- Figma, Adobe, Slack, Github

### Finance
- PayPal, Visa, MasterCard, Bitcoin
- Revolut, Monzo, HSBC, NatWest

### Gaming
- PokerStars, Steam, Discord, Roblox

### Other
- McDonald's, Starbucks, IKEA, Tesla

## 📋 How to Use

### Method 1: Direct HTML (Recommended)
```html
<img src="https://cdn.simpleicons.org/companyname/ffffff" 
     alt="Company Name" 
     class="partner-logo simple-icons-logo" 
     width="120" height="40"
     loading="lazy">
```

### Method 2: JavaScript Utility
```javascript
// Include the utility script
<script src="company-logos.js"></script>

// Add a single logo
addCompanyLogo('Company Name', containerElement);

// Create a grid of logos
createLogosGrid(gridContainer, ['Google', 'Microsoft', 'Apple']);
```

### Method 3: Using the Class Directly
```javascript
const logos = new CompanyLogos();
logos.addLogo(container, 'Google', { 
    width: 100, 
    height: 40, 
    color: 'ffffff' 
});
```

## 🎨 Color Options
Use these color codes for different themes:
- **Dark themes:** `ffffff` (white)
- **Light themes:** `000000` (black)
- **Brand colors:** Use company's primary brand color

**Example brand colors:**
- Google: `#4285f4`
- Netflix: `#e50914`
- Spotify: `#1db954`
- Santander: `#ff6f00`

## 🔧 Implementation in Your Portfolio

### Current Partner Logos Section
Your portfolio already uses SimpleIcons in the partner logos section:
```html
<div class="logos-grid">
    <div class="logo-item">
        <img src="https://cdn.simpleicons.org/santander/ffffff" 
             alt="Santander" 
             class="partner-logo simple-icons-logo" 
             tabindex="0" 
             loading="lazy" 
             width="120" 
             height="40" 
             onerror="this.style.display='none'">
    </div>
    <!-- More logos... -->
</div>
```

### For Blog Articles
Add company logos to blog articles about projects:
```html
<div class="project-info">
    <h3>Santander Mobile Banking App</h3>
    <img src="https://cdn.simpleicons.org/santander/ffffff" 
         alt="Santander" 
         class="client-logo" 
         width="100" 
         height="35">
</div>
```

### For Case Studies
```html
<section class="case-study">
    <div class="client-info">
        <h2>TUI Website Redesign</h2>
        <img src="https://cdn.simpleicons.org/tui/ffffff" 
             alt="TUI Travel" 
             class="client-logo large" 
             width="120" 
             height="40">
    </div>
</section>
```

## 📱 Responsive Sizing
```css
.partner-logo {
    height: 70px;
    width: auto;
    max-width: 200px;
}

@media (max-width: 767px) {
    .partner-logo {
        height: 50px;
    }
}
```

## 🚀 Benefits
1. **Free** - No API keys or payments required
2. **High Quality** - Professional SVG logos
3. **Fast Loading** - CDN optimized
4. **Consistent** - Same style across all logos
5. **Reliable** - Stable API service
6. **SEO Friendly** - Proper alt text support

## ⚠️ Fallback Handling
If a logo fails to load:
- `onerror="this.style.display='none'"` hides broken images
- Consider adding a fallback text logo
- Console warns about missing logos for debugging

## 🔄 Dynamic Color Changes
```javascript
const logos = new CompanyLogos();
logos.updateColor(imgElement, 'Google', '4285f4');
```

## 📊 Preloading for Performance
```javascript
const logos = new CompanyLogos();
logos.preloadLogos(['Google', 'Microsoft', 'Apple', 'Amazon']);
```

## 🎯 Best Practices
1. Use consistent sizing across similar logos
2. Always include proper alt text for accessibility
3. Implement fallback handling for missing logos
4. Use appropriate colors for your theme
5. Consider preloading for better performance
6. Test on different screen sizes

## 🔍 Logo Availability Check
If a company doesn't have a logo, you can:
1. Check [simpleicons.org](https://simpleicons.org/) 
2. Use a different company name format
3. Implement a fallback system
4. Consider creating a custom logo

This solution gives you instant access to professional company logos for your portfolio, blog, and any other sections where client/company branding is needed!