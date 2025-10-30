/**
 * SCRIPT.JS
 * Portfolio of Marceli Cieplik - UI/UX Designer
 * Optimized JavaScript with modern patterns
 */

// ===================================================
// Core Initialization
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
});

/**
 * Initialize all portfolio functionality
 */
function initPortfolio() {
  // Core UI components
  const ui = {
    spinner: new LoadingSpinner(),
    navbar: new NavbarHandler(),
    lazyLoader: new LazyLoader()
  };

  // Initialize core components
  ui.spinner.init();
  ui.navbar.init();
  ui.lazyLoader.init();

  // Setup interactive elements
  setupInteractions();

  // Page-specific initializations
  if (document.querySelector('.skills-section')) {
    initSkillsPage();
  }

  // Log initialization
  if (window.performance) {
    const pageLoadTime = Math.round(performance.now());
    console.info(`Portfolio initialized in ${pageLoadTime}ms`);
  }
}

/**
 * Initialize Skills page specific features
 */
function initSkillsPage() {
  const animations = {
    skills: new SkillBarsAnimation(),
    timeline: new TimelineAnimation()
  };

  animations.skills.init();
  animations.timeline.init();

  setupSmoothScrolling();
  updateActiveNavigation();
}

// ===================================================
// UI Components
// ===================================================

/**
 * Loading Spinner Component
 * Handles showing/hiding the loading overlay
 */
class LoadingSpinner {
  constructor() {
    this.spinner = null;
    this.isVisible = false;
  }

  init() {
    this.createSpinner();
    this.show();

    // Hide spinner when page is fully loaded
    window.addEventListener('load', () => this.hide());

    // Fallback: Hide spinner after 5 seconds even if load event doesn't fire
    setTimeout(() => this.hide(), 5000);
  }

  createSpinner() {
    // Use existing spinner or create a new one
    this.spinner = document.getElementById('loading-spinner');

    if (!this.spinner) {
      this.spinner = document.createElement('div');
      this.spinner.id = 'loading-spinner';
      this.spinner.innerHTML = `
        <div class="spinner-overlay">
          <div class="spinner-container">
            <div class="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      `;
      document.body.appendChild(this.spinner);
    }
  }

  show() {
    if (this.spinner) {
      this.spinner.style.display = 'block';
      this.isVisible = true;
    }
  }

  hide() {
    if (this.spinner && this.isVisible) {
      this.spinner.style.opacity = '0';
      setTimeout(() => {
        this.spinner.style.display = 'none';
        this.isVisible = false;
      }, 300);
    }
  }
}

/**
 * Navbar Handler
 * Manages navbar behavior, visibility and active states
 */
class NavbarHandler {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.lastScrollTop = 0;
    this.scrollThreshold = 100;
    this.isScrolling = false;
  }

  init() {
    if (!this.navbar) return;

    // Add scroll event for navbar hide/show
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });

    // Add resize event to handle window resizing
    window.addEventListener('resize', () => {
      if (!this.isScrolling) {
        this.updateNavbarPosition();
      }
    });
  }

  handleScroll() {
    if (!this.isScrolling) {
      window.requestAnimationFrame(() => {
        this.updateNavbarPosition();
        this.isScrolling = false;
      });
      this.isScrolling = true;
    }
  }

  updateNavbarPosition() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    // Show/hide navbar based on scroll direction
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      // Scrolling down - hide navbar
      this.navbar.classList.add('hidden');
    } else {
      // Scrolling up - show navbar
      this.navbar.classList.remove('hidden');
    }

    this.lastScrollTop = currentScrollTop;
  }
}

/**
 * Lazy Loader
 * Handles lazy loading of images and videos
 */
class LazyLoader {
  constructor() {
    this.lazyMediaElements = [];
    this.observerConfig = {
      rootMargin: '200px 0px', // Load when within 200px of viewport
      threshold: 0.01
    };
    this.supportsIntersectionObserver = 'IntersectionObserver' in window;
  }

  init() {
    // Find all elements with lazy-loading class or data-src attribute
    this.lazyMediaElements = [
      ...document.querySelectorAll('.lazy-loading'),
      ...document.querySelectorAll('[data-src]'),
      ...document.querySelectorAll('[data-srcset]')
    ];

    if (this.lazyMediaElements.length === 0) return;

    if (this.supportsIntersectionObserver) {
      this.setupIntersectionObserver();
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadAllMedia();
    }
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMedia(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, this.observerConfig);

    this.lazyMediaElements.forEach(element => {
      observer.observe(element);
    });
  }

  loadAllMedia() {
    this.lazyMediaElements.forEach(element => {
      this.loadMedia(element);
    });
  }

  loadMedia(element) {
    if (element.tagName === 'VIDEO') {
      this.loadVideo(element);
    } else if (element.tagName === 'IMG' || element.tagName === 'PICTURE') {
      this.loadImage(element);
    }
  }

  loadVideo(video) {
    const src = video.dataset.src;
    if (!src) return;

    video.src = src;
    video.load();

    // Play video if autoplay is set
    if (video.hasAttribute('autoplay')) {
      // Wait a bit to start playing to ensure loading
      setTimeout(() => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn('Video autoplay failed:', error);
          });
        }
      }, 100);
    }

    // Add error handling
    video.addEventListener('error', handleMediaError);

    // Remove lazy loading class and attributes
    this.cleanupElement(video);
  }

  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (src) img.src = src;
    if (srcset) img.srcset = srcset;

    // Add loaded class when image is successfully loaded
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });

    // Add error handling
    img.addEventListener('error', handleMediaError);

    // Remove lazy loading class and attributes
    this.cleanupElement(img);
  }

  cleanupElement(element) {
    element.classList.remove('lazy-loading');
    delete element.dataset.src;
    delete element.dataset.srcset;
  }
}

// ===================================================
// Interactions & Effects
// ===================================================

/**
 * Setup interactive elements across the site
 */
function setupInteractions() {
  // Logo hover effects
  setupHeroLogoInteraction();

  // Service cards hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length > 0) {
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', handleServiceCardHover);
      card.addEventListener('mouseleave', handleServiceCardHover);
    });
  }

  // Hero video background
  setupHeroVideo();
}

/**
 * Handle hero logo hover effects and animations
 */
function setupHeroLogoInteraction() {
  const heroLogo = document.querySelector('.hero-logo');
  const mcLogo = document.querySelector('.mc-logo-hero');
  const hiddenHeading = document.querySelector('.hidden-heading');
  const heroContainer = document.querySelector('.hero-logo-container');

  if (!heroLogo || !mcLogo || !hiddenHeading || !heroContainer) return;

  // Also trigger on focus for accessibility
  mcLogo.addEventListener('focus', () => {
    heroContainer.classList.add('focused');
    showHeroContent();
  });

  mcLogo.addEventListener('blur', () => {
    heroContainer.classList.remove('focused');
    hideHeroContent();
  });

  // For touch devices
  mcLogo.addEventListener('touchstart', () => {
    if (heroContainer.classList.contains('focused')) {
      heroContainer.classList.remove('focused');
      hideHeroContent();
    } else {
      heroContainer.classList.add('focused');
      showHeroContent();
    }
  });

  function showHeroContent() {
    mcLogo.style.filter = 'brightness(0) invert(1)';
    mcLogo.style.opacity = '0';
    mcLogo.style.transform = 'scale(0.8)';
    hiddenHeading.style.opacity = '1';
    hiddenHeading.style.visibility = 'visible';

    // Load and show video when hovering logo
    const heroVideo = document.querySelector('.video-bg');
    const coverImage = document.querySelector('.cover-image');

    if (heroVideo && coverImage) {
      heroVideo.style.opacity = '1';
      coverImage.style.opacity = '0';

      // Load video if it has data-src
      if (heroVideo.dataset.src && !heroVideo.src) {
        heroVideo.src = heroVideo.dataset.src;
        heroVideo.load();

        heroVideo.addEventListener('canplay', () => {
          const playPromise = heroVideo.play();

          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn('Video playback failed:', error);
            });
          }
        });

        heroVideo.addEventListener('error', handleMediaError);
      }
    }
  }

  function hideHeroContent() {
    mcLogo.style.filter = '';
    mcLogo.style.opacity = '';
    mcLogo.style.transform = '';
    hiddenHeading.style.opacity = '';
    hiddenHeading.style.visibility = '';

    // Hide video when not hovering
    const heroVideo = document.querySelector('.video-bg');
    const coverImage = document.querySelector('.cover-image');

    if (heroVideo && coverImage) {
      heroVideo.style.opacity = '0';
      coverImage.style.opacity = '1';
    }
  }
}

/**
 * Handle service card hover effects
 */
function handleServiceCardHover(event) {
  const isHovering = event.type === 'mouseenter';
  const card = event.currentTarget;

  if (isHovering) {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    card.style.borderColor = 'var(--accent-color)';
  } else {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = '';
  }
}

/**
 * Setup hero video background
 */
function setupHeroVideo() {
  const videoContainer = document.querySelector('.video-container');
  if (!videoContainer) return;

  const video = videoContainer.querySelector('.video-bg');
  const coverImage = videoContainer.querySelector('.cover-image');

  if (!video || !coverImage) return;

  // Handle hover on the entire video container
  videoContainer.addEventListener('mouseenter', () => {
    if (video.paused && video.dataset.src && !video.src) {
      // Load video source if not already loaded
      video.src = video.dataset.src;
      video.load();
    }

    video.style.opacity = '1';
    coverImage.style.opacity = '0';

    // Play video
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn('Video playback failed:', error);
      });
    }
  });

  videoContainer.addEventListener('mouseleave', () => {
    video.style.opacity = '0';
    coverImage.style.opacity = '1';
    video.pause();
  });
}

// ===================================================
// Animations
// ===================================================

/**
 * Skill Bars Animation
 * Animates skill progress bars on scroll
 */
class SkillBarsAnimation {
  constructor() {
    this.skillBars = document.querySelectorAll('.skill-progress-bar');
    this.observer = null;
  }

  init() {
    if (this.skillBars.length === 0) return;

    // Reset initial state
    this.skillBars.forEach(bar => {
      const progressValue = bar.getAttribute('data-progress') || '0';
      bar.style.width = '0%';
      bar.setAttribute('aria-valuenow', '0');
      bar.setAttribute('aria-valuemax', progressValue);
    });

    // Setup IntersectionObserver
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateBar(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe each skill bar
    this.skillBars.forEach(bar => {
      this.observer.observe(bar);
    });
  }

  animateBar(bar) {
    const progressValue = bar.getAttribute('data-progress') || '0';

    // Ensure we're working with a number
    const targetWidth = parseInt(progressValue, 10);

    // Animate the width
    setTimeout(() => {
      bar.style.width = `${targetWidth}%`;
      bar.setAttribute('aria-valuenow', targetWidth);
    }, 100);
  }
}

/**
 * Timeline Animation
 * Animates timeline items on scroll
 */
class TimelineAnimation {
  constructor() {
    this.timelineItems = document.querySelectorAll('.timeline-item');
    this.observer = null;
  }

  init() {
    if (this.timelineItems.length === 0) return;

    // Reset initial state
    this.timelineItems.forEach(item => {
      item.classList.add('hidden');
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
    });

    // Setup IntersectionObserver
    this.observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger the animations
          setTimeout(() => {
            this.animateItem(entry.target);
          }, index * 150);

          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe each timeline item
    this.timelineItems.forEach(item => {
      this.observer.observe(item);
    });
  }

  animateItem(item) {
    item.classList.remove('hidden');
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  }
}

// ===================================================
// Utility Functions
// ===================================================

/**
 * Update active navigation based on scroll position
 */
function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  if (sections.length === 0) return;

  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks.length === 0) return;

  // Add scroll event listener
  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    // Find the current section based on scroll position
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update active navigation
    navLinks.forEach(link => {
      link.classList.remove('active');

      const href = link.getAttribute('href');
      if (href && href.includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Skip if target is not in the document
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      e.preventDefault();

      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });

      // Update URL hash without scrolling
      history.pushState(null, null, `#${targetId}`);
    });
  });
}

/**
 * Handle media loading errors
 */
function handleMediaError(event) {
  const element = event.target;
  const tagName = element.tagName.toLowerCase();
  const src = element.src || element.dataset.src || 'unknown';

  console.warn(`Failed to load ${tagName}: ${src}`);

  // Add error class for styling
  element.classList.add('media-error');

  // For images, try to show a fallback
  if (tagName === 'img') {
    element.alt = element.alt || 'Image failed to load';
    element.style.background = 'rgba(0, 0, 0, 0.1)';
  }

  // For videos, try to hide or show poster
  if (tagName === 'video') {
    // If there's a poster, make sure it's visible
    if (element.poster) {
      element.removeAttribute('autoplay');
      element.load(); // Reload to show poster
    }
  }
}
