document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const image = document.querySelector('.scroll-interactive-image img');

    // Adjust the value below as needed for the desired effect
    const moveDistance = scrollY * 0.5;

    // Ensure the image moves within the container
    image.style.transform = `translateX(${Math.min(moveDistance, window.innerWidth)}px)`;
});
/*
$(document).ready(function(){
    // Define image folder and files
    var imageFolder = 'assets/brands/';
    var imageFiles = [
        'Ginebra San Miguel, Inc.jpg',
        'Magnolia, Inc.png',
        'Nestle Philippines Inc.webp',
        'San Miguel Brewery, Inc.png',
        'San Miguel Corporation, Inc.jpg',
        'San Miguel Foods, Inc.png'
    ];
    var $carousel = $('.owl-carousel');

    // Dynamically add images to the carousel
    imageFiles.forEach(function(file) {
        $carousel.append('<div class="item"><a href="#"><img src="' + imageFolder + file + '" alt="brand-image" /></a></div>');
    });

    // Initialize Owl Carousel
    $carousel.owlCarousel({
        items: 4, // Number of items to show
        loop: true, // Loop the items
        margin: 5, // Margin between items
        nav: true, // Show navigation arrows
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay timeout in milliseconds
        autoplayHoverPause: true // Pause autoplay on hover
    });
});
*/
$(document).ready(function(){
    // Define image folders and files for each carousel
    var carousels = {
        'carousel1': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel2': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 4000 // 5 seconds
        },
        'carousel3': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 7 seconds
        },
        'carousel4': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 4000 // 4 seconds
        },
        'carousel5': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel6': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 4000 // 5 seconds
        },
        'carousel7': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel8': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 4000 // 5 seconds
        },
        'carousel9': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel10': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 5000 // 5 seconds
        },
        'carousel11': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Manila Water Company, Inc.jpg',
                'Meralco Industrial Engineering Services Corporation.jpg',
                'Meralco Powergen Corporation.png',
                'Meralco.png',
                'MIESCOR Builders.png',
                'MIESCOR LOGISTICS, INC.jpg',
                'Phoenix Petroleum Philippines, Inc.png'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel12': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png'
            ],
            autoplayTimeout: 5000 // 5 seconds
        }
    };

    // Function to initialize an Owl Carousel
    function initializeCarousel(carouselId, images, folder, timeout) {
        var $carousel = $('#' + carouselId);

        // Dynamically add images to the carousel
        images.forEach(function(file) {
            $carousel.append('<div class="item"><a href="#"><img src="' + folder + file + '" alt="brand-image" /></a></div>');
        });

        // Initialize Owl Carousel
        $carousel.owlCarousel({
            items: 4, // Number of items to show
            loop: true, // Loop the items
            margin: 10, // Margin between items
            nav: false, // Hide navigation arrows
            dots: false, // Hide dots
            autoplay: true, // Enable autoplay
            autoplayTimeout: timeout, // Autoplay timeout in milliseconds
            autoplayHoverPause: true // Pause autoplay on hover
        });
    }

    // Initialize all carousels
    for (var carouselId in carousels) {
        if (carousels.hasOwnProperty(carouselId)) {
            var config = carousels[carouselId];
            initializeCarousel(carouselId, config.files, config.folder, config.autoplayTimeout);
        }
    }
});
