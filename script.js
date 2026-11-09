// 1. Mobile Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Dark / Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 3. Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if fields are empty
    if (!name || !email || !message) {
        formFeedback.textContent = 'Please fill out all required fields.';
        formFeedback.style.color = '#ef4444';
        return;
    }

    // Basic email format check
    const emailPattern = /^[^s@]+@[^s@]+\.[^s@]+$/;
    if (!emailPattern.test(email)) {
        formFeedback.textContent = 'Please enter a valid email address.';
        formFeedback.style.color = '#ef4444';
        return;
    }

    // Success state
    formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
    formFeedback.style.color = '#10b981';
    contactForm.reset();
});