/**
 * Image Loader - Optimized image loading for better performance
 * Portfolio of Marceli Cieplik - UI/UX Designer
 *
 * Features:
 * - Progressive image loading
 * - Lazy loading with IntersectionObserver
 * - Resolution switching for responsive images
 * - Format detection (WebP support)
 * - Error handling with fallbacks
 */

class ImageLoader {
  constructor(options = {}) {
    // Default configuration
    this.config = {
      lazySelector: '[data-src], .lazy-img',
      rootMargin: '200px 0px', // Start loading 200px before image enters viewport
      threshold: 0.01, // Trigger when 1% of the image is visible
      placeholderColor: '#121212',
      lowQualityWidth: 20, // Width for low quality placeholder
      ...options
    };

    // Feature detection
    this.supportsIntersection = 'IntersectionObserver' in window;
    this.supportsWebp = null; // Will be detected

    // State
    this.images = [];
    this.observer = null;
    this.initialized = false;
  }

  /**
   * Initialize the image loader
   */
  init() {
    if (this.initialized) return;

    // Check for WebP support
    this._detectWebpSupport().then(supported => {
      this.supportsWebp = supported;

      // Find all images to optimize
      this._findImages();

      // Set up lazy loading
      if (this.supportsIntersection) {
        this._setupIntersectionObserver();
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        this._loadAllImages();
      }

      // Mark as initialized
      this.initialized = true;
      console.info('ImageLoader initialized', {
        images: this.images.length,
        webpSupport: this.supportsWebp
      });
    });

    // Add window resize handler for responsive images
    window.addEventListener('resize', this._debounce(() => {
      this._updateResponsiveImages();
    }, 200));

    return this; // For chaining
  }

  /**
   * Add a single image to be optimized
   * @param {HTMLImageElement} img - The image element to optimize
   */
  addImage(img) {
    if (!img || this.images.includes(img)) return;

    this.images.push(img);

    // If we're already initialized, start observing the new image
    if (this.initialized && this.observer) {
      this.observer.observe(img);
    } else if (this.initialized) {
      // No observer but initialized, load immediately
      this._loadImage(img);
    }
  }

  /**
   * Preload critical images that should be loaded immediately
   * @param {string} selector - CSS selector for critical images
   */
  preloadCritical(selector = '.preload') {
    const criticalImages = document.querySelectorAll(selector);

    if (criticalImages.length === 0) return;

    criticalImages.forEach(img => {
      this._loadImage(img, true); // Force immediate loading
    });

    console.info(`Preloaded ${criticalImages.length} critical images`);
  }

  /**
   * Force load all images immediately
   */
  loadAll() {
    this._loadAllImages();
    console.info(`Forced loading of all ${this.images.length} images`);
  }

  /**
   * Detect WebP support
   * @returns {Promise<boolean>} Whether WebP is supported
   * @private
   */
  _detectWebpSupport() {
    return new Promise(resolve => {
      const webP = new Image();
      webP.onload = () => resolve(webP.height === 1);
      webP.onerror = () => resolve(false);
      webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    });
  }

  /**
   * Find all images to be optimized
   * @private
   */
  _findImages() {
    // Clear existing images array
    this.images = [];

    // Find all images with data-src attribute or lazy-img class
    const lazyImages = document.querySelectorAll(this.config.lazySelector);

    // Add them to our collection
    lazyImages.forEach(img => {
      this.images.push(img);
    });

    return this.images;
  }

  /**
   * Set up IntersectionObserver for lazy loading
   * @private
   */
  _setupIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: this.config.rootMargin,
      threshold: this.config.threshold
    });

    // Start observing all images
    this.images.forEach(img => {
      this.observer.observe(img);
    });
  }

  /**
   * Load all images immediately (fallback for browsers without IntersectionObserver)
   * @private
   */
  _loadAllImages() {
    this.images.forEach(img => {
      this._loadImage(img);
    });
  }

  /**
   * Load a specific image
   * @param {HTMLImageElement} img - The image to load
   * @param {boolean} immediate - Whether to bypass progressive loading
   * @private
   */
  _loadImage(img, immediate = false) {
    // Skip if already loaded
    if (img.classList.contains('loaded') || (!img.dataset.src && !img.dataset.srcset)) {
      return;
    }

    // For immediate loading, just set the src and srcset
    if (immediate) {
      if (img.dataset.src) {
        img.src = this._getOptimalImageUrl(img.dataset.src);
      }
      if (img.dataset.srcset) {
        img.srcset = this._optimizeSrcset(img.dataset.srcset);
      }

      // Mark as loaded when complete
      img.onload = () => {
        img.classList.add('loaded');
      };

      // Handle errors
      img.onerror = () => this._handleImageError(img);

      return;
    }

    // For progressive loading:
    // 1. Load low-quality placeholder
    if (img.dataset.src && !img.dataset.placeholder) {
      this._loadLowQualityPlaceholder(img);
    }

    // 2. Load the full image
    const fullImage = new Image();

    // Set up load handler
    fullImage.onload = () => {
      // Replace the src with the loaded image
      if (img.dataset.src) {
        img.src = fullImage.src;
      }
      if (img.dataset.srcset) {
        img.srcset = fullImage.srcset;
      }

      // Add loaded class for CSS transitions
      img.classList.add('loaded');

      // Clean up data attributes
      this._cleanupImageAttributes(img);
    };

    // Set up error handler
    fullImage.onerror = () => this._handleImageError(img);

    // Start loading the full image
    if (img.dataset.src) {
      fullImage.src = this._getOptimalImageUrl(img.dataset.src);
    }
    if (img.dataset.srcset) {
      fullImage.srcset = this._optimizeSrcset(img.dataset.srcset);
    }
  }

  /**
   * Load a low quality placeholder for progressive loading
   * @param {HTMLImageElement} img - The image element
   * @private
   */
  _loadLowQualityPlaceholder(img) {
    // Skip if there's already a src set
    if (img.src && !img.src.startsWith('data:')) return;

    // Check for placeholder option
    if (img.dataset.placeholder) {
      img.src = img.dataset.placeholder;
      return;
    }

    // No placeholder specified, use solid color
    img.style.backgroundColor = this.config.placeholderColor;

    // If the original image URL is available, we could generate a tiny placeholder
    // But that would require server-side support, so we just use a color for now
  }

  /**
   * Get the optimal image URL (WebP if supported)
   * @param {string} url - The original image URL
   * @returns {string} Optimized URL
   * @private
   */
  _getOptimalImageUrl(url) {
    // If WebP is supported and the URL is not already WebP, try to use WebP
    if (this.supportsWebp && !url.endsWith('.webp') && !url.endsWith('.svg')) {
      // Check if there's a WebP alternative
      const webpUrl = url.replace(/\.(jpe?g|png)$/i, '.webp');

      // For this to work, the server should have WebP versions available
      // Since we don't know if they exist, we'll provide the original as fallback
      return webpUrl;
    }

    return url;
  }

  /**
   * Optimize a srcset string (add WebP if supported)
   * @param {string} srcset - The original srcset
   * @returns {string} Optimized srcset
   * @private
   */
  _optimizeSrcset(srcset) {
    if (!srcset || !this.supportsWebp) return srcset;

    // Split the srcset and process each entry
    return srcset.split(',').map(entry => {
      const [url, descriptor] = entry.trim().split(/\s+/);
      const optimizedUrl = this._getOptimalImageUrl(url);
      return `${optimizedUrl} ${descriptor || ''}`;
    }).join(', ');
  }

  /**
   * Update responsive images on window resize
   * @private
   */
  _updateResponsiveImages() {
    // Get loaded responsive images
    const responsiveImages = this.images.filter(img =>
      img.classList.contains('loaded') &&
      img.dataset.responsive === 'true'
    );

    // Skip if none found
    if (responsiveImages.length === 0) return;

    // Update each responsive image
    responsiveImages.forEach(img => {
      // Only update if there are responsive sources defined
      if (img.dataset.srcset || img.dataset.sizes) {
        if (img.dataset.srcset) {
          img.srcset = this._optimizeSrcset(img.dataset.srcset);
        }
        if (img.dataset.sizes) {
          img.sizes = img.dataset.sizes;
        }
      }
    });
  }

  /**
   * Handle image loading errors
   * @param {HTMLImageElement} img - The image that failed to load
   * @private
   */
  _handleImageError(img) {
    console.warn(`Failed to load image: ${img.dataset.src || img.src}`);

    // Add error class for styling
    img.classList.add('img-error');

    // Try fallback if specified
    if (img.dataset.fallback) {
      console.info(`Using fallback image: ${img.dataset.fallback}`);
      img.src = img.dataset.fallback;
      return;
    }

    // If WebP was attempted and failed, try original format
    if (this.supportsWebp && img.src.endsWith('.webp')) {
      // Extract original URL from data-src
      const originalSrc = img.dataset.src;
      if (originalSrc && !originalSrc.endsWith('.webp')) {
        console.info(`WebP failed, using original format: ${originalSrc}`);
        img.src = originalSrc;
      }
    }

    // Make sure alt text is set for accessibility
    if (!img.alt) {
      img.alt = img.dataset.alt || 'Image failed to load';
    }

    // Add a visual indicator that the image failed
    img.style.backgroundColor = '#2d2d2d';
    img.style.padding = '1rem';
  }

  /**
   * Clean up data attributes after image is loaded
   * @param {HTMLImageElement} img - The image to clean up
   * @private
   */
  _cleanupImageAttributes(img) {
    // Keep data-responsive and data-sizes for potential responsive updates
    const keepAttributes = ['data-responsive', 'data-sizes', 'data-srcset'];

    // Remove all other data attributes
    Object.keys(img.dataset).forEach(key => {
      if (!keepAttributes.includes(`data-${key}`)) {
        delete img.dataset[key];
      }
    });
  }

  /**
   * Debounce function to limit the rate at which a function can fire
   * @param {Function} func - The function to debounce
   * @param {number} wait - The time to wait between calls (ms)
   * @returns {Function} Debounced function
   * @private
   */
  _debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}

// Export for usage
window.ImageLoader = ImageLoader;

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Create global instance
  window.imageLoader = new ImageLoader();

  // Initialize image loader
  window.imageLoader.init();

  // Preload critical images if any
  window.imageLoader.preloadCritical('.preload, .hero img');
});
