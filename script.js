// Dark Mode Toggle (removed .dark-mode-toggle, now only use .theme-toggle-menu)
const body = document.body;

// Scroll Animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
    });
}

// Theme Toggle in Menu Bar
const themeToggleMenu = document.querySelector('.theme-toggle-menu');
if (themeToggleMenu) {
    themeToggleMenu.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
}

// Auto-close mobile menu on nav link click
const navLinkEls = document.querySelectorAll('.nav-links a');
if (navLinks && menuToggle) {
    navLinkEls.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });
}