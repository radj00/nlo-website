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
                'The Hongkong and Shanghai Banking Corp.',
                'Bank of the Philippine Islands',
                'Standard Chartered Bank',
                'Security Bank Corporation',
                'Philippine Dealing System Holdings Corp.',
                'Philippine Business Bank'
            ],
            autoplayTimeout: 3000 // 7 seconds
        },
        'carousel4': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Mercury Group of Companies',
                'St. Luke’s Medical Center ',
                'Wyeth Phils, Inc.',
                'Unilab, Inc.',
                'Sanofi-Aventis Philippines Inc  ',
                'Philusa Corporation',
                'Metro Drug, Inc.',
                'Mead Johnson Nutrition (Phils.) Inc.',
                'HMC, Inc. (Healthway Medical)',
                'A.  Menarini Philippines, Inc.',
                'Viatris Pharmaceuticals, Inc.',
                'BASF Philippines, Inc.',
                'HEBE Beauty Cosmetic, Inc.',
                'Executive Optical',
                'Genson Distribution, Inc.'
            ],
            autoplayTimeout: 4000 // 4 seconds
        },
        'carousel5': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'ABS-CBN Corporation',
                'Sky Cable Corporation',
                'Pilipino Cable Corporation',
                'The Velarde Group of Companies, Inc.'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel6': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Globe Telecom, Inc.',
                'PLDT, Inc.'
            ],
            autoplayTimeout: 4000 // 5 seconds
        },
        'carousel7': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Makati Shangri-la Hotel & Resort, Inc.',
                'The Peninsula Manila',
                'Tiger Resort, Leisure & Entertainment, Inc.',
                'Shangri-La at the Fort, Manila',
                'Fairmont Raffles Hotel Makati',
                'Edsa Shangri-La Hotel',
                'AyalaLand Hotels and Resorts',
                'Shangri-La Boracay Resort & Spa',
                'Shangrila Mactan Resort & Spa (Makati Shangrila) ',
                'Marco Polo Ortigas Manila',
                'Holiday Inn & Suites Makati',
                'Discovery Suites',
                'Discovery Primea Hotel'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel8': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ayala Land, Inc.',
                'Ayala Land Sales, Inc.',
                'Ayala Corporation',
                'Kuok Properties Philippines, Inc.',
                'Makati Development Corporation',
                'MDBI Construction Corporation',
                'MDC Buildplus, Inc.',
                'MDC Concrete Inc.',
                'MDC Equipment Solutions, Inc.',
                'San Miguel Properties Philippines, Inc.',
                'Century Phirst Corp.',
                'Avida Land Corporation',
                'Alveo Land Corporation',
                'Ayala Land Malls, Inc.',
                'Ayala Land Malls Vismin, Inc.',
                'Ayala Property Management Corporation',
                'Leechiu Property Consultants, Inc.',
                'Shang Global City Properties, Inc.'
            ],
            autoplayTimeout: 4000 // 5 seconds
        },
        'carousel9': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Nickel Asia Corporation',
                'Filminera Resources Corporation'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel10': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Avon Products Manufacturing, Inc.',
                'LT Group',
                'Nexperia Philippines, Inc.',
                'JT International (Philippines), Inc.',
                'Armscor Global Defense, Inc.',
                'CEMEX Philippines, Inc.',
                'Solid Cement Corporation',
                'Republic Cement Services, Inc.',
                'Cygnus Industries, Inc.'
            ],
            autoplayTimeout: 5000 // 5 seconds
        },
        'carousel11': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Toyota Motor Philippines Corporation'
            ],
            autoplayTimeout: 3000 // 3 seconds
        },
        'carousel12': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ikano Philippines', // Text placeholders
                'JS Unitrade Merchandise, Inc.',
                'Personal Collection Direct Selling Inc.',
                'GR8 Affinity BPO, Inc.',
                'Temps & Staffers, Inc.',
                'Servicio Filipino'
            ],
            autoplayTimeout: 5000 // 5 seconds
        }
    };

    // Function to initialize an Owl Carousel
    function initializeCarousel(carouselId, images, folder, timeout) {
        var $carousel = $('#' + carouselId);

        // Dynamically add images or text placeholders to the carousel
        images.forEach(function(item) {
            var imgSrc = folder + item;
            var imgAlt = item.split('.')[0]; // Use the item name before the extension as alt text

            if (item.includes('.jpg') || item.includes('.png') || item.includes('.webp')) {
                // Handle images
                var $img = $('<img>').attr({
                    src: imgSrc,
                    alt: imgAlt
                });

                // Handle the error event for images
                $img.on('error', function() {
                    $(this).replaceWith('<div class="item"><div class="fallback-text">' + imgAlt + '</div></div>');
                });

                // Append the image to the carousel
                $carousel.append('<div class="item"><a href="#">' + $img.prop('outerHTML') + '</a></div>');
            } else {
                // Handle text placeholders
                $carousel.append('<div class="item"><div class="fallback-text">' + item + '</div></div>');
            }
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

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1, // Number of items to display at once
    loop: true, // Loop the carousel
    margin: 10, // Margin between items
    nav: false, // Hide navigation arrows
    dots: false, // Hide dots
    autoplay: true, // Auto-play the carousel
    autoplayTimeout: 5000, // Time between slides
    autoplayHoverPause: true // Pause on hover
  });
});