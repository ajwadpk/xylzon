// Basic JavaScript for animations
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', () => {
        window.location.href = '#services';
    });

    // Add scroll effect
    window.addEventListener('scroll', () => {
        const servicesSection = document.querySelector('#services');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        if (servicesSection.getBoundingClientRect().top < windowHeight - revealPoint) {
            servicesSection.style.opacity = '1';
            servicesSection.style.transform = 'translateY(0)';
        } else {
            servicesSection.style.opacity = '0';
            servicesSection.style.transform = 'translateY(50px)';
        }
    });
});
