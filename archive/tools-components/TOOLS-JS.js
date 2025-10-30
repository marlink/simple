// TOOLS SECTION JAVASCRIPT - Extract to your main script.js

// Enhanced interactive behavior for tools section
document.addEventListener('DOMContentLoaded', function() {
    const toolCategories = document.querySelectorAll('.tool-category');
    const toolItems = document.querySelectorAll('.tool-item');
    
    // Stagger animation on load
    toolCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Category click effects
    toolCategories.forEach(category => {
        category.addEventListener('click', function(e) {
            // Prevent click if clicking on a tool item
            if (e.target.classList.contains('tool-item') || e.target.classList.contains('item-icon')) {
                return;
            }
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Enhanced tool item interactions
        const items = category.querySelectorAll('.tool-item');
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                
                // Add subtle glow effect
                this.style.boxShadow = '0 4px 12px rgba(0, 255, 0, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });

            // Add ripple effect on click
            item.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });

    // Add scroll-based reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    toolCategories.forEach(category => {
        observer.observe(category);
    });

    // Add random floating animation to icons
    setInterval(() => {
        toolCategories.forEach(category => {
            const icon = category.querySelector('.category-icon');
            if (Math.random() < 0.1) { // 10% chance
                icon.style.transform = 'scale(1.05) rotate(' + (Math.random() - 0.5) * 10 + 'deg)';
                setTimeout(() => {
                    icon.style.transform = '';
                }, 2000);
            }
        });
    }, 3000);
});

// Utility functions for external use
const ToolsSection = {
    /**
     * Add a new tool category dynamically
     * @param {Object} options - Category configuration
     */
    addCategory: function(options) {
        const {
            title,
            categoryKey,
            iconEmoji = '🛠️',
            tools = []
        } = options;

        const gridContainer = document.querySelector('.tools-grid');
        if (!gridContainer) {
            console.warn('Tools grid container not found');
            return;
        }

        const categoryHTML = `
            <div class="tool-category" data-category="${categoryKey}">
                <div class="category-header">
                    <div class="category-icon">
                        <span style="font-size: 1.5rem;">${iconEmoji}</span>
                    </div>
                    <h2 class="category-title">${title}</h2>
                </div>
                <div class="tools-list">
                    ${tools.map(toolGroup => `
                        <div class="tool-group">
                            <div class="tool-group-title">${toolGroup.title}</div>
                            <div class="tool-items">
                                ${toolGroup.items.map(tool => `
                                    <span class="tool-item">
                                        <span class="tool-text">${tool}</span>
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        gridContainer.insertAdjacentHTML('beforeend', categoryHTML);
        
        // Re-initialize event listeners for the new category
        this.initializeCategoryEvents(document.querySelector('.tool-category:last-child'));
    },

    /**
     * Initialize event listeners for a category
     * @param {HTMLElement} category - Category element
     */
    initializeCategoryEvents: function(category) {
        if (!category) return;

        category.addEventListener('click', function(e) {
            if (e.target.classList.contains('tool-item') || e.target.classList.contains('item-icon')) {
                return;
            }
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        const items = category.querySelectorAll('.tool-item');
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.boxShadow = '0 4px 12px rgba(0, 255, 0, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    },

    /**
     * Filter tools by search term
     * @param {string} searchTerm - Search term
     */
    filterTools: function(searchTerm) {
        const toolItems = document.querySelectorAll('.tool-item');
        
        toolItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const toolGroup = item.closest('.tool-group');
            
            if (text.includes(searchTerm.toLowerCase()) || searchTerm === '') {
                item.style.display = 'flex';
                if (toolGroup) {
                    toolGroup.style.display = 'block';
                }
            } else {
                item.style.display = 'none';
                // Hide tool group if all items are hidden
                const groupItems = toolGroup.querySelectorAll('.tool-item');
                const visibleItems = Array.from(groupItems).filter(el => el.style.display !== 'none');
                if (visibleItems.length === 0 && toolGroup) {
                    toolGroup.style.display = 'none';
                }
            }
        });
    },

    /**
     * Reset all filters
     */
    resetFilters: function() {
        const toolItems = document.querySelectorAll('.tool-item');
        const toolGroups = document.querySelectorAll('.tool-group');
        
        toolItems.forEach(item => {
            item.style.display = 'flex';
        });
        
        toolGroups.forEach(group => {
            group.style.display = 'block';
        });
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ToolsSection;
}

// Make available globally
window.ToolsSection = ToolsSection;