// Consolidated DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', function() {
    // Show loading spinner on page load
    showLoadingSpinner();

    // Load all videos normally (remove lazy loading)
    loadAllVideos();

    // Hide spinner when page is ready
    window.addEventListener('load', hideLoadingSpinner);

    // Loading spinner functions
    function showLoadingSpinner() {
        let spinner = document.getElementById('loading-spinner');
        if (!spinner) {
            spinner = document.createElement('div');
            spinner.id = 'loading-spinner';
            spinner.innerHTML = `
                <div class="spinner-overlay">
                    <div class="spinner-container">
                        <div class="spinner"></div>
                        <p>Loading...</p>
                    </div>
                </div>
            `;
            document.body.appendChild(spinner);
        }
        spinner.style.display = 'block';
    }

    function hideLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.opacity = '0';
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500);
        }
    }

    // Load all videos normally
    function loadAllVideos() {
        // Load all videos with data-src
        document.querySelectorAll('video[data-src]').forEach(video => {
            video.src = video.getAttribute('data-src');
            video.load();
        });

        // Load all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }

    // Unified hover handlers with cleanup
    function setupHoverEffect(trigger, target, showDelay = 0, hideDelay = 0) {
        let hideTimeout;
        const enterHandler = () => {
            clearTimeout(hideTimeout);
            setTimeout(() => target.style.opacity = '1', showDelay);
        };
        const leaveHandler = () => {
            hideTimeout = setTimeout(() => target.style.opacity = '0', hideDelay);
        };
        trigger.addEventListener('mouseenter', enterHandler);
        trigger.addEventListener('mouseleave', leaveHandler);

        // Return cleanup function
        return () => {
            trigger.removeEventListener('mouseenter', enterHandler);
            trigger.removeEventListener('mouseleave', leaveHandler);
            clearTimeout(hideTimeout);
        };
    }

    // Navbar logo hover
    const navbarLogo = document.querySelector('.navbar-logo');
    const coverImage = document.querySelector('.cover-image');
    const videoBg = document.querySelector('.video-bg');
    if (navbarLogo && coverImage && videoBg) {
        navbarLogo.addEventListener('mouseenter', () => {
            coverImage.style.opacity = '0';
            videoBg.style.opacity = '1';
            videoBg.play().catch(() => {});
        });
        navbarLogo.addEventListener('mouseleave', () => {
            coverImage.style.opacity = '1';
            videoBg.style.opacity = '0';
            videoBg.pause();
        });
    }

    // Designer info hover with cleanup
    const heroLogoContainer = document.querySelector('.hero-logo-container');
    const designerInfo = document.querySelector('.designer-info');
    const heroSection = document.querySelector('.hero');
    if (heroLogoContainer && designerInfo) {
        const cleanupHover = setupHoverEffect(heroLogoContainer, designerInfo, 200, 1000);
        if (heroSection) {
            let sectionHideTimeout;
            const sectionEnter = () => clearTimeout(sectionHideTimeout);
            const sectionLeave = () => {
                sectionHideTimeout = setTimeout(() => {
                    designerInfo.style.opacity = '0';
                    designerInfo.style.visibility = 'hidden';
                }, 1000);
            };
            heroSection.addEventListener('mouseenter', sectionEnter);
            heroSection.addEventListener('mouseleave', sectionLeave);

            // Store cleanup for potential future use
            window.addEventListener('beforeunload', () => {
                cleanupHover();
                heroSection.removeEventListener('mouseenter', sectionEnter);
                heroSection.removeEventListener('mouseleave', sectionLeave);
                clearTimeout(sectionHideTimeout);
            });
        }
    }
});

// Navbar scroll behavior with cleanup
let lastScrollTop = 0;
let scrollTimeout;
let interactionTimeout;
const navbar = document.getElementById('navbar');

// Check if cursor is over navbar
function isCursorOverNavbar(event) {
    if (!navbar) return false;
    const rect = navbar.getBoundingClientRect();
    return (event.clientY >= rect.top && event.clientY <= rect.bottom &&
            event.clientX >= rect.left && event.clientX <= rect.right);
}

// Clear all navbar timeouts
function clearNavbarTimeouts() {
    clearTimeout(scrollTimeout);
    clearTimeout(interactionTimeout);
}

// Handle tab visibility change
const visibilityHandler = function() {
    if (!document.hidden && isCursorOverNavbar(event)) {
        navbar.classList.remove('hidden');
        clearNavbarTimeouts();
    }
};
document.addEventListener('visibilitychange', visibilityHandler);

// Track navbar interactions
const navbarEnterHandler = function() {
    clearNavbarTimeouts();
    navbar.classList.remove('hidden');
};
const navbarLeaveHandler = function() {
    interactionTimeout = setTimeout(function() {
        if (!isCursorOverNavbar(event)) {
            scrollTimeout = setTimeout(function() {
                navbar.classList.add('hidden');
            }, 2000);
        }
    }, 1000);
};
navbar.addEventListener('mouseenter', navbarEnterHandler);
navbar.addEventListener('mouseleave', navbarLeaveHandler);

// Track mouse movements
const mouseMoveHandler = function(event) {
    if (isCursorOverNavbar(event)) {
        clearNavbarTimeouts();
        navbar.classList.remove('hidden');
    }
};
document.addEventListener('mousemove', mouseMoveHandler);

    // Video play/pause based on viewport visibility (for loaded videos only)
    function handleVideoVisibility() {
        const videos = document.querySelectorAll('video.video-bg');
        videos.forEach(video => {
            if (video.src && isElementInViewport(video)) {
            } else if (video.src) {
                video.pause();
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Scroll and resize handlers with cleanup
    const scrollHandler = function() {
        handleVideoVisibility();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        clearNavbarTimeouts();

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            if (!isCursorOverNavbar(event)) {
                scrollTimeout = setTimeout(() => navbar.classList.add('hidden'), 1500);
            }
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    };

    const resizeHandler = function() {
        handleVideoVisibility();
    };

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        clearNavbarTimeouts();
        document.removeEventListener('visibilitychange', visibilityHandler);
        navbar.removeEventListener('mouseenter', navbarEnterHandler);
        navbar.removeEventListener('mouseleave', navbarLeaveHandler);
        document.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', resizeHandler);
    });

// Bolid card hover/focus functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find the first zigzag-image that has a video (bolid card)
    const zigzagImages = document.querySelectorAll('.zigzag-image');
    const bolidImage = zigzagImages[0]; // First one with bolid video

    if (bolidImage) {
        const bolidCover = bolidImage.querySelector('img');
        const bolidVideo = bolidImage.querySelector('.zigzag-video');

        if (bolidCover && bolidVideo) {

            // Function to handle hover/focus activation
            function activateBolidVideo() {
                bolidCover.style.opacity = '0';
                bolidVideo.style.opacity = '1';
                bolidVideo.play().catch(() => {});
            }

            // Function to handle hover/focus deactivation
            function deactivateBolidVideo() {
                bolidCover.style.opacity = '1';
                bolidVideo.style.opacity = '0';
                bolidVideo.pause();
            }

            // Mouse events
            bolidImage.addEventListener('mouseenter', function(e) {
                activateBolidVideo();
            });

            bolidImage.addEventListener('mouseleave', function(e) {
                deactivateBolidVideo();
            });

            // Focus events for keyboard navigation
            bolidImage.addEventListener('focus', function(e) {
                activateBolidVideo();
            });

            bolidImage.addEventListener('blur', function(e) {
                deactivateBolidVideo();
            });

            // Make bolid image focusable
            bolidImage.tabIndex = 0;
            bolidImage.setAttribute('role', 'button');
            bolidImage.setAttribute('aria-label', 'Reveal bolid video');

        }
    }
});

// Service card hover logging
document.addEventListener('DOMContentLoaded', function() {
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
    });
});