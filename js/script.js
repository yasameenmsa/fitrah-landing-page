/* ============================================
   FITRAH PROJECT - JAVASCRIPT
   Minimal JavaScript for smooth interactions
   ============================================ */

// ============================================
// 1. SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) {
                navMenu.classList.remove('show');
            }
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 2. MOBILE MENU TOGGLE
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

// Open menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}

// Close menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('show')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    }
});

// ============================================
// 3. STICKY HEADER WITH SHADOW ON SCROLL
// ============================================
const header = document.getElementById('header');

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ============================================
// 4. ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function highlightActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);

// ============================================
// 5. SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ============================================
const animateElements = document.querySelectorAll('[data-animate]');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
            // Optional: stop observing after animation
            // scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize animations
animateElements.forEach(element => {
    element.classList.add('fade-in');
    scrollObserver.observe(element);
});

// ============================================
// 6. FAQ ACCORDION (OPTIONAL - FUTURE ENHANCEMENT)
// ============================================
// If you want to make FAQ items collapsible, uncomment below:
/*
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    
    // Initially hide answers
    answer.style.maxHeight = answer.scrollHeight + 'px';
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('open');
            const otherAnswer = otherItem.querySelector('.faq__answer');
            otherAnswer.style.maxHeight = '0';
        });
        
        // Open clicked item if it was closed
        if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
*/

// ============================================
// 7. FORM VALIDATION (FOR CTA BUTTONS)
// ============================================
// Add form handling when forms are implemented
// Example:
/*
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Handle form submission or redirect
        console.log('CTA clicked!');
    });
});
*/

// ============================================
// 8. PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Initial scroll position check
    handleScroll();
    highlightActiveNav();
});

// ============================================
// 9. PREVENT HORIZONTAL SCROLL ON MOBILE
// ============================================
function preventHorizontalScroll() {
    const body = document.body;
    const scrollWidth = body.scrollWidth;
    const clientWidth = body.clientWidth;
    
    if (scrollWidth > clientWidth) {
        console.warn('Horizontal overflow detected. Check your layout.');
    }
}

window.addEventListener('resize', preventHorizontalScroll);
preventHorizontalScroll();

// ============================================
// 10. PERFORMANCE OPTIMIZATION - DEBOUNCE
// ============================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers for better performance
const debouncedScroll = debounce(() => {
    handleScroll();
    highlightActiveNav();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// 11. ACCESSIBILITY - KEYBOARD NAVIGATION
// ============================================
// Trap focus in mobile menu when open
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

if (navMenu) {
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            navToggle.focus();
        }
        
        if (e.key === 'Tab') {
            const focusableContent = navMenu.querySelectorAll(focusableElements);
            const firstFocusable = focusableContent[0];
            const lastFocusable = focusableContent[focusableContent.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// ============================================
// 12. CONSOLE MESSAGE
// ============================================
console.log('%c مشروع فطرة ', 'background: #4DD4C0; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('نحو إنسان منسجم مع أصل خلقته 🌱');

// ============================================
// 13. ANALYTICS TRACKING (PLACEHOLDER)
// ============================================
// Add your analytics code here
// Example: Google Analytics, Matomo, etc.
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'click', btn.textContent);
    });
});
*/
