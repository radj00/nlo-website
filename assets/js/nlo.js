document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const image = document.querySelector('.scroll-interactive-image img');

    // Adjust the value below as needed for the desired effect
    const moveDistance = scrollY * 0.5;

    // Ensure the image moves within the container
    image.style.transform = `translateX(${Math.min(moveDistance, window.innerWidth)}px)`;
});
