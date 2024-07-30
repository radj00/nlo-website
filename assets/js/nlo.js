document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const image = document.querySelector('.scroll-interactive-image');
    
    // Adjust the value below as needed for the effect
    const moveDistance = scrollY * 0.5; 
    
    image.style.transform = `translateX(${moveDistance}px)`;
});