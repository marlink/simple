/**
 * SimpleIcons API Utility for Company Logos
 * Easy-to-use functions for adding high-quality SVG logos to your portfolio
 */

class CompanyLogos {
    constructor() {
        this.baseUrl = 'https://cdn.simpleicons.org';
        this.defaultColor = 'ffffff'; // White for dark themes
        this.logoCache = new Map();
    }

    /**
     * Generate SVG logo URL for any company
     * @param {string} companyName - Company name (will be lowercased and formatted)
     * @param {string} color - Hex color (without #)
     * @returns {string} SVG URL
     */
    getLogoUrl(companyName, color = this.defaultColor) {
        const formattedName = companyName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .replace(/\s+/g, '');
        
        return `${this.baseUrl}/${formattedName}/${color}`;
    }

    /**
     * Create an img element with company logo
     * @param {string} companyName - Company name
     * @param {Object} options - Configuration options
     * @returns {HTMLImageElement} Image element
     */
    createLogo(companyName, options = {}) {
        const {
            alt = `${companyName} Logo`,
            width = '120',
            height = '40',
            className = 'partner-logo simple-icons-logo',
            color = this.defaultColor,
            fallbackText = companyName
        } = options;

        const img = document.createElement('img');
        img.src = this.getLogoUrl(companyName, color);
        img.alt = alt;
        img.width = width;
        img.height = height;
        img.className = className;
        img.loading = 'lazy';
        img.tabIndex = 0;
        
        // Error handling - hide if logo not available
        img.onerror = () => {
            img.style.display = 'none';
            console.warn(`Logo not found for: ${companyName}`);
        };

        return img;
    }

    /**
     * Add logo to container element
     * @param {HTMLElement} container - Container element
     * @param {string} companyName - Company name
     * @param {Object} options - Configuration options
     */
    addLogo(container, companyName, options = {}) {
        const logoElement = this.createLogo(companyName, options);
        
        const wrapper = document.createElement('div');
        wrapper.className = 'logo-item';
        wrapper.appendChild(logoElement);
        
        container.appendChild(wrapper);
    }

    /**
     * Populate logos grid with multiple companies
     * @param {HTMLElement} gridContainer - Grid container element
     * @param {Array} companies - Array of company names
     * @param {Object} options - Configuration options
     */
    populateGrid(gridContainer, companies, options = {}) {
        companies.forEach(company => {
            this.addLogo(gridContainer, company, options);
        });
    }

    /**
     * Preload logos for better performance
     * @param {Array} companies - Array of company names
     */
    preloadLogos(companies) {
        companies.forEach(company => {
            const url = this.getLogoUrl(company);
            const img = new Image();
            img.src = url;
            this.logoCache.set(company, url);
        });
    }

    /**
     * Get available logo colors for a company
     * @param {string} companyName - Company name
     * @returns {Array} Array of available colors
     */
    getAvailableColors(companyName) {
        // Common brand colors
        const commonColors = {
            'Santander': ['ff6f00', 'e31e24', 'ffffff'],
            'TUI': ['0076c0', 'ffffff'],
            'Barclays': ['00aeef', 'ffffff'],
            'Superbet': ['00ff88', 'ffffff'],
            'Costa Coffee': ['4a2b23', 'ffffff'],
            'PokerStars': ['33ccff', 'ffffff'],
            'Microsoft': ['0078d4', 'ffffff'],
            'Google': ['4285f4', 'ffffff'],
            'Apple': ['007aff', 'ffffff'],
            'Amazon': ['ff9900', 'ffffff'],
            'Netflix': ['e50914', 'ffffff'],
            'Spotify': ['1db954', 'ffffff'],
            'Facebook': ['1877f2', 'ffffff'],
            'Twitter': ['1da1f2', 'ffffff'],
            'Instagram': ['e4405f', 'ffffff'],
            'LinkedIn': ['0077b5', 'ffffff'],
            'Figma': ['f24e1e', 'ffffff'],
            'Adobe': ['ff0000', 'ffffff'],
            'Slack': ['4a154b', 'ffffff'],
            'Github': ['333', 'ffffff']
        };

        return commonColors[companyName] || [this.defaultColor];
    }

    /**
     * Update logo color dynamically
     * @param {HTMLImageElement} imgElement - Image element
     * @param {string} companyName - Company name
     * @param {string} color - New color
     */
    updateColor(imgElement, companyName, color) {
        imgElement.src = this.getLogoUrl(companyName, color);
    }
}

// Predefined company configurations for easy use
const COMPANY_CONFIGS = {
    'Santander': { width: 120, height: 40, color: 'ffffff' },
    'TUI': { width: 100, height: 40, color: 'ffffff' },
    'Barclays': { width: 140, height: 40, color: 'ffffff' },
    'Superbet': { width: 120, height: 40, color: 'ffffff' },
    'Costa Coffee': { width: 120, height: 40, color: 'ffffff' },
    'PokerStars': { width: 140, height: 40, color: 'ffffff' },
    'Microsoft': { width: 100, height: 40, color: 'ffffff' },
    'Google': { width: 100, height: 40, color: 'ffffff' },
    'Apple': { width: 80, height: 40, color: 'ffffff' },
    'Amazon': { width: 120, height: 40, color: 'ffffff' },
    'Netflix': { width: 120, height: 40, color: 'ffffff' },
    'Spotify': { width: 120, height: 40, color: 'ffffff' }
};

/**
 * Quick function to add a single logo
 * @param {string} companyName - Company name
 * @param {HTMLElement} container - Container element
 * @param {Object} customOptions - Custom options (optional)
 */
function addCompanyLogo(companyName, container, customOptions = {}) {
    const logos = new CompanyLogos();
    const config = COMPANY_CONFIGS[companyName] || {};
    const options = { ...config, ...customOptions };
    
    logos.addLogo(container, companyName, options);
}

/**
 * Quick function to create logos grid
 * @param {HTMLElement} gridContainer - Grid container element
 * @param {Array} companies - Array of company names
 * @param {Object} customOptions - Custom options (optional)
 */
function createLogosGrid(gridContainer, companies, customOptions = {}) {
    const logos = new CompanyLogos();
    const defaultOptions = {
        className: 'partner-logo simple-icons-logo',
        loading: 'lazy',
        tabIndex: 0,
        ...customOptions
    };
    
    logos.populateGrid(gridContainer, companies, defaultOptions);
}

/**
 * HOW TO USE
 * ==========
 *
 * 1. Include this script in your HTML:
 *    <script src="company-logos.js"></script>
 *
 * 2. Add logos directly in HTML:
 *    <img src="https://cdn.simpleicons.org/santander/ffffff" alt="Santander" class="partner-logo simple-icons-logo" width="120" height="40">
 *
 * 3. Or use JavaScript to create logos dynamically:
 *    const logos = new CompanyLogos();
 *    logos.addLogo(container, 'Santander', { width: 120, height: 40 });
 *
 * 4. For a complete grid:
 *    createLogosGrid(gridContainer, ['Google', 'Microsoft', 'Apple']);
 */

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CompanyLogos, COMPANY_CONFIGS, addCompanyLogo, createLogosGrid };
}