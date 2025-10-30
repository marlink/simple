// Core DOM Content Loaded handler
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Initialize portfolio functionality
function initializePortfolio() {
    setupLoadingSpinner();
    setupLazyMediaLoading();
    setupHoverEffects();
    setupNavbarBehavior();
    
    // Portfolio-specific features
    if (document.querySelector('.skills-section')) {
        animateSkillBars();
        animateTimeline();
        setupSmoothScrolling();
        updateActiveNavigation();
    }
}

// Loading spinner functionality
function setupLoadingSpinner() {
    const spinner = createSpinner();
    showSpinner();
    
    window.addEventListener('load', hideSpinner);
    
    function createSpinner() {
        let existingSpinner = document.getElementById('loading-spinner');
        if (!existingSpinner) {
            existingSpinner = document.createElement('div');
            existingSpinner.id = 'loading-spinner';
            existingSpinner.innerHTML = `
                <div class="spinner-overlay">
                    <div class="spinner-container">
                        <div class="spinner"></div>
                        <p>Loading...</p>
                    </div>
                </div>
            `;
            document.body.appendChild(existingSpinner);
        }
        return existingSpinner;
    }
    
    function showSpinner() {
        spinner.style.display = 'block';
    }
    
    function hideSpinner() {
        if (spinner) {
            spinner.style.opacity = '0';
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500);
        }
    }
}

// Lazy loading setup
function setupLazyMediaLoading() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        document.querySelectorAll('video[data-src], img[data-src]').forEach(loadMediaElement);
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMediaElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '200px',
        threshold: 0.01
    });
    
    document.querySelectorAll('video[data-src], img[data-src]').forEach(el => {
        observer.observe(el);
    });
}

function loadMediaElement(element) {
    const src = element.getAttribute('data-src');
    if (!src) return;
    
    if (element.tagName === 'VIDEO') {
        element.src = src;
        element.load();
    } else if (element.tagName === 'IMG') {
        element.src = src;
    }
    
    element.removeAttribute('data-src');
}

// Hover effects setup
function setupHoverEffects() {
    setupNavbarLogoHover();
    setupHeroLogoHover();
    setupServiceCardsHover();
    setupZigzagHover();
}

function setupNavbarLogoHover() {
    const navbarLogo = document.querySelector('.navbar-logo');
    const coverImage = document.querySelector('.cover-image');
    const videoBg = document.querySelector('.video-bg');
    
    if (!navbarLogo || !coverImage || !videoBg) return;
    
    const enterHandler = () => {
        coverImage.style.opacity = '0';
        videoBg.style.opacity = '1';
        videoBg.play().catch(() => {});
    };
    
    const leaveHandler = () => {
        setTimeout(() => {
            coverImage.style.opacity = '1';
            videoBg.style.opacity = '0';
            videoBg.pause();
        }, 500);
    };
    
    // Mouse events
    navbarLogo.addEventListener('mouseenter', enterHandler);
    navbarLogo.addEventListener('mouseleave', leaveHandler);
    
    // Touch events
    navbarLogo.addEventListener('touchstart', enterHandler);
    navbarLogo.addEventListener('touchend', leaveHandler);
    
    // Video error handling
    videoBg.addEventListener('error', handleVideoError);
}

function handleVideoError() {
    console.error('Video playback failed');
    const coverImage = document.querySelector('.cover-image');
    const videoBg = document.querySelector('.video-bg');
    
    if (videoBg && coverImage) {
        videoBg.style.display = 'none';
        coverImage.style.opacity = '1';
    }
}

function setupHeroLogoHover() {
    const heroLogoContainer = document.querySelector('.hero-logo-container');
    const designerInfo = document.querySelector('.designer-info');
    const coverImage = document.querySelector('.cover-image');
    const videoBg = document.querySelector('.video-bg');
    
    if (!heroLogoContainer || !designerInfo) return;
    
    const enterHandler = () => {
        // Hide cover image and show video (same as navbar logo)
        if (coverImage && videoBg) {
            coverImage.style.opacity = '0';
            videoBg.style.opacity = '1';
            videoBg.play().catch(() => {});
        }
        
        // Show designer info with fade effect for Marceli Cieplik name
        setTimeout(() => {
            designerInfo.style.opacity = '1';
            designerInfo.style.visibility = 'visible';
            
            // Animate the designer name fade away
            const designerName = designerInfo.querySelector('.designer-name');
            if (designerName) {
                setTimeout(() => {
                    designerName.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
                    designerName.style.opacity = '0';
                    designerName.style.transform = 'translateY(20px)';
                }, 1000);
            }
        }, 200);
        
        // Add animation for UI/UX designer sub-heading (appears with delay)
        const designerTitle = designerInfo.querySelector('.designer-title');
        if (designerTitle) {
            designerTitle.style.transition = 'none';
            designerTitle.style.transform = 'translateY(20px)';
            designerTitle.style.opacity = '0';
            
            setTimeout(() => {
                designerTitle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                designerTitle.style.opacity = '0.8';
                designerTitle.style.transform = 'translateY(0)';
            }, 1500);
        }
    };
    
    const leaveHandler = () => {
        // Restore cover image and hide video
        if (coverImage && videoBg) {
            setTimeout(() => {
                coverImage.style.opacity = '1';
                videoBg.style.opacity = '0';
                videoBg.pause();
            }, 500);
        }
        
        // Reset designer name opacity for next time
        const designerName = designerInfo.querySelector('.designer-name');
        if (designerName) {
            designerName.style.opacity = '1';
        }
        
        // Animate UI/UX designer sub-heading to disappear (fade and move down)
        const designerTitle = designerInfo.querySelector('.designer-title');
        if (designerTitle) {
            designerTitle.style.transition = 'opacity 0.8s ease-in, transform 0.8s ease-in';
            designerTitle.style.opacity = '0';
            designerTitle.style.transform = 'translateY(20px)';
        }
        
        // Hide designer info after animations
        setTimeout(() => {
            designerInfo.style.opacity = '0';
            designerInfo.style.visibility = 'hidden';
        }, 1000);
    };
    
    heroLogoContainer.addEventListener('mouseenter', enterHandler);
    heroLogoContainer.addEventListener('mouseleave', leaveHandler);
    heroLogoContainer.addEventListener('touchstart', enterHandler);
    heroLogoContainer.addEventListener('touchend', leaveHandler);
}

function setupServiceCardsHover() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        });
        
        card.addEventListener('touchstart', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
        
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.style.transform = '';
                card.style.boxShadow = '';
                card.style.borderColor = '';
            }, 300);
        });
    });
}

function setupZigzagHover() {
    const zigzagImages = document.querySelectorAll('.zigzag-image');
    
    if (zigzagImages.length === 0) return;
    
    // Setup for first zigzag item (bolid video)
    const bolidImage = zigzagImages[0];
    const bolidCover = bolidImage.querySelector('img');
    const bolidVideo = bolidImage.querySelector('.zigzag-video');
    
    if (!bolidCover || !bolidVideo) return;
    
    const activateVideo = () => {
        bolidCover.style.opacity = '0';
        bolidVideo.style.opacity = '1';
        bolidVideo.play().catch(() => {});
    };
    
    const deactivateVideo = () => {
        setTimeout(() => {
            bolidCover.style.opacity = '1';
            bolidVideo.style.opacity = '0';
            bolidVideo.pause();
        }, 500);
    };
    
    bolidImage.addEventListener('mouseenter', activateVideo);
    bolidImage.addEventListener('mouseleave', deactivateVideo);
    bolidImage.addEventListener('touchstart', activateVideo);
    bolidImage.addEventListener('touchend', deactivateVideo);
    bolidImage.addEventListener('focus', activateVideo);
    bolidImage.addEventListener('blur', deactivateVideo);
    
    // Make focusable
    bolidImage.tabIndex = 0;
    bolidImage.setAttribute('role', 'button');
    bolidImage.setAttribute('aria-label', 'Reveal bolid video');
    
    bolidVideo.addEventListener('error', () => {
        console.error('Bolid video playback failed');
        bolidVideo.style.display = 'none';
        bolidCover.style.opacity = '1';
    });
}

// Navbar behavior
let lastScrollTop = 0;
let hideTimeout;
let interactionTimeout;

function setupNavbarBehavior() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    // Track interactions
    navbar.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        clearTimeout(interactionTimeout);
        navbar.classList.remove('hidden');
    });
    
    navbar.addEventListener('mouseleave', () => {
        interactionTimeout = setTimeout(() => {
            hideTimeout = setTimeout(() => {
                // Only hide if we're not at the top of the page
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 100) {
                    navbar.classList.add('hidden');
                }
            }, 2000);
        }, 1000);
    });
    
    // Scroll behavior
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        clearTimeout(hideTimeout);
        clearTimeout(interactionTimeout);
        
        // Always show navbar when at the top of the page (or very close to it)
        if (scrollTop <= 10) {
            navbar.classList.remove('hidden');
        }
        // Only hide navbar when scrolling down and we're past the top
        else if (scrollTop > lastScrollTop && scrollTop > 100) {
            hideTimeout = setTimeout(() => {
                navbar.classList.add('hidden');
            }, 1500);
        }
        // Show navbar when scrolling up
        else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Visibility change
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            navbar.classList.remove('hidden');
            clearTimeout(hideTimeout);
            clearTimeout(interactionTimeout);
        }
    });
    
    // Mouse movement tracking
    document.addEventListener('mousemove', (event) => {
        const rect = navbar.getBoundingClientRect();
        const isOverNavbar = event.clientY >= rect.top && event.clientY <= rect.bottom &&
                             event.clientX >= rect.left && event.clientX <= rect.right;
        
        if (isOverNavbar) {
            clearTimeout(hideTimeout);
            clearTimeout(interactionTimeout);
            navbar.classList.remove('hidden');
        }
    });
}

// Portfolio-specific animations
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length === 0) return;
    
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        skillBars.forEach(animateSkillBar);
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

function animateSkillBar(progressBar) {
    const progress = progressBar.getAttribute('data-progress');
    if (!progress) return;
    
    setTimeout(() => {
        progressBar.style.width = progress + '%';
    }, 200);
}

function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;
    
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        timelineItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    // Clear any pending timeouts
    clearTimeout(hideTimeout);
    clearTimeout(interactionTimeout);
});