/**
 * MAIN.JS - Script Loader
 * Portfolio of Marceli Cieplik - UI/UX Designer
 * Efficiently loads and manages all JavaScript modules
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // Script loading strategy
    loadingStrategy: 'async', // 'sync', 'async', or 'defer'

    // Performance monitoring
    enablePerformanceLogging: true,

    // Error handling
    enableErrorLogging: true,

    // Feature detection
    modernBrowserFeatures: [
      'IntersectionObserver',
      'requestAnimationFrame',
      'Promise'
    ]
  };

  // State management
  const state = {
    scriptsLoaded: 0,
    totalScripts: 0,
    loadStartTime: performance.now(),
    isModernBrowser: true
  };

  /**
   * Initialize the application
   */
  function init() {
    // Feature detection
    detectBrowserCapabilities();

    // Start performance monitoring
    if (CONFIG.enablePerformanceLogging) {
      monitorPerformance();
    }

    // Set up error handling
    if (CONFIG.enableErrorLogging) {
      setupErrorHandling();
    }

    // Load core scripts
    loadCoreScripts();

    // Set up cleanup
    setupCleanup();
  }

  /**
   * Detect browser capabilities
   */
  function detectBrowserCapabilities() {
    state.isModernBrowser = CONFIG.modernBrowserFeatures.every(feature => {
      return feature in window || feature in document;
    });

    if (!state.isModernBrowser) {
      console.warn('Some modern features are not supported. Falling back to basic functionality.');
    }

    // Add browser capability classes to body
    document.body.classList.toggle('modern-browser', state.isModernBrowser);
    document.body.classList.toggle('legacy-browser', !state.isModernBrowser);
  }

  /**
   * Load core scripts based on browser capabilities
   */
  function loadCoreScripts() {
    const scripts = state.isModernBrowser
      ? getModernScripts()
      : getLegacyScripts();

    state.totalScripts = scripts.length;

    // Load scripts
    scripts.forEach((script, index) => {
      loadScript(script, index === scripts.length - 1);
    });
  }

  /**
   * Get scripts for modern browsers
   */
  function getModernScripts() {
    return [
      {
        src: 'js/script.min.js',
        priority: 'high',
        critical: true
      },
      {
        src: 'js/image-loader.js',
        priority: 'medium',
        critical: false
      }
    ];
  }

  /**
   * Get scripts for legacy browsers
   */
  function getLegacyScripts() {
    return [
      {
        src: 'js/script.js', // Use non-minified for better debugging in legacy browsers
        priority: 'high',
        critical: true
      }
    ];
  }

  /**
   * Load a single script
   */
  function loadScript(scriptConfig, isLast = false) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      // Set script attributes
      script.src = scriptConfig.src;
      script.async = CONFIG.loadingStrategy === 'async';
      script.defer = CONFIG.loadingStrategy === 'defer';

      // Add priority hints if supported
      if ('fetchPriority' in script) {
        script.fetchPriority = scriptConfig.priority || 'auto';
      }

      // Handle successful load
      script.onload = function() {
        state.scriptsLoaded++;

        if (CONFIG.enablePerformanceLogging) {
          console.info(`Loaded: ${scriptConfig.src} (${state.scriptsLoaded}/${state.totalScripts})`);
        }

        // If this is the last script, finalize initialization
        if (isLast || state.scriptsLoaded === state.totalScripts) {
          finalizeInitialization();
        }

        resolve(script);
      };

      // Handle load errors
      script.onerror = function() {
        console.error(`Failed to load script: ${scriptConfig.src}`);

        // Try to continue without this script if it's not critical
        if (!scriptConfig.critical) {
          state.scriptsLoaded++; // Count as "loaded" to not block initialization

          if (isLast || state.scriptsLoaded === state.totalScripts) {
            finalizeInitialization();
          }
        } else {
          // For critical scripts, show user-friendly error
          showCriticalError(scriptConfig.src);
        }

        reject(new Error(`Script load failed: ${scriptConfig.src}`));
      };

      // Add to document
      document.head.appendChild(script);
    });
  }

  /**
   * Finalize initialization after all scripts are loaded
   */
  function finalizeInitialization() {
    const loadTime = performance.now() - state.loadStartTime;

    if (CONFIG.enablePerformanceLogging) {
      console.info(`All scripts loaded in ${Math.round(loadTime)}ms`);
    }

    // Dispatch custom event to signal app is ready
    const event = new CustomEvent('appReady', {
      detail: {
        loadTime: loadTime,
        scriptsLoaded: state.scriptsLoaded,
        isModernBrowser: state.isModernBrowser
      }
    });

    document.dispatchEvent(event);

    // Remove loading states
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

    // Hide loading spinner if it exists
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
      spinner.style.opacity = '0';
      setTimeout(() => {
        spinner.style.display = 'none';
      }, 300);
    }
  }

  /**
   * Show critical error to user
   */
  function showCriticalError(scriptSrc) {
    // Create error message element
    const errorEl = document.createElement('div');
    errorEl.className = 'critical-error';
    errorEl.innerHTML = `
      <div class="error-content">
        <h3>Loading Error</h3>
        <p>Failed to load essential scripts. Please refresh the page.</p>
        <button onclick="location.reload()">Refresh Page</button>
      </div>
    `;

    // Add basic error styles
    errorEl.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      color: white;
      font-family: Arial, sans-serif;
    `;

    const content = errorEl.querySelector('.error-content');
    content.style.cssText = `
      text-align: center;
      padding: 2rem;
      background: #333;
      border-radius: 8px;
      max-width: 400px;
    `;

    const button = errorEl.querySelector('button');
    button.style.cssText = `
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    `;

    document.body.appendChild(errorEl);
  }

  /**
   * Set up performance monitoring
   */
  function monitorPerformance() {
    // Monitor Core Web Vitals if supported
    if ('web-vital' in window) {
      // This would be implemented with web-vitals library
      console.info('Performance monitoring enabled');
    }

    // Monitor memory usage (if supported)
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > memory.totalJSHeapSize * 0.9) {
          console.warn('High memory usage detected');
        }
      };

      // Check memory every 30 seconds
      setInterval(checkMemory, 30000);
    }

    // Monitor long tasks (if supported)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration}ms`);
            }
          });
        });

        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // PerformanceObserver not fully supported
      }
    }
  }

  /**
   * Set up global error handling
   */
  function setupErrorHandling() {
    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });

      // Could send to error tracking service here
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);

      // Could send to error tracking service here
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target && event.target !== window) {
        console.error('Resource Load Error:', {
          type: event.target.tagName,
          source: event.target.src || event.target.href,
          message: event.message || 'Failed to load resource'
        });
      }
    }, true);
  }

  /**
   * Set up cleanup on page unload
   */
  function setupCleanup() {
    window.addEventListener('beforeunload', () => {
      // Clear any intervals or timeouts
      // Cleanup event listeners if needed
      // Cancel any pending requests

      if (CONFIG.enablePerformanceLogging) {
        const sessionTime = performance.now() - state.loadStartTime;
        console.info(`Session ended after ${Math.round(sessionTime / 1000)}s`);
      }
    });
  }

  /**
   * Expose public API
   */
  window.PortfolioApp = {
    config: CONFIG,
    state: state,
    reload: () => {
      location.reload();
    },
    getPerformanceMetrics: () => {
      return {
        loadTime: performance.now() - state.loadStartTime,
        scriptsLoaded: state.scriptsLoaded,
        totalScripts: state.totalScripts,
        isModernBrowser: state.isModernBrowser
      };
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }

})();
