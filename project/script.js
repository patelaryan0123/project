document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
elements.forEach(element => observer.observe(element));
});
document.addEventListener("DOMContentLoaded", () => {
    const transitionOverlay = document.querySelector('.transition-overlay');
    const links = document.querySelectorAll('.transition-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = e.target.href; 
            transitionOverlay.classList.add('active');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); 
        });
    });
    window.addEventListener('load', () => {
        transitionOverlay.classList.remove('active');
    });
});





