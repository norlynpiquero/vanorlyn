
// Smooth scroll functionality
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
// Add a delay to trigger the animation
setTimeout(function() {
    document.querySelectorAll('.skill-bar-fill').forEach(function(bar) {
        bar.style.width = bar.classList.contains('skill-98') ? '98%' :
                           bar.classList.contains('skill-85') ? '85%' :
                           bar.classList.contains('skill-95') ? '95%' :
                           bar.classList.contains('skill-75') ? '75%' :
                           bar.classList.contains('skill-50') ? '50%' : '100%';
    });
}, 100); // Delay to trigger the animation after the page load
});


// Subtle scroll animation for the background image
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${50 + scrollY * 0.1}%`;
});