document.addEventListener('DOMContentLoaded', function() {
    var currentYear = document.getElementById('current-year');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
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
            ]
        },
        'carousel2': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Ginebra San Miguel, Inc.jpg',
                'Magnolia, Inc.png',
                'Nestle Philippines Inc.webp',
                'San Miguel Brewery, Inc.png',
                'San Miguel Corporation, Inc.jpg',
                'San Miguel Foods, Inc.png',
                'San Miguel Purefoods Company, Inc.jpg'
            ]
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
            ]
        },
        'carousel4': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Mercury Group of Companies',
                "St. Luke's Medical Center",
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
            ]
        },
        'carousel5': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'ABS-CBN Corporation',
                'Sky Cable Corporation',
                'Pilipino Cable Corporation',
                'The Velarde Group of Companies, Inc.'
            ]
        },
        'carousel6': {
            folder: 'assets/brands/FOOD and BEVERAGE MANUFACTURING/',
            files: [
                'Globe Telecom, Inc.',
                'PLDT, Inc.'
            ]
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
            ]
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
            ]
        },
        'carousel9': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Nickel Asia Corporation',
                'Filminera Resources Corporation'
            ]
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
            ]
        },
        'carousel11': {
            folder: 'assets/brands/OIL, POWER, ENERGY and UTILITIES/',
            files: [
                'Toyota Motor Philippines Corporation'
            ]
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
            ]
        }
    };

    // Function to render client lists
    function renderClientList(carouselId, images, folder) {
        var $clientList = $('#' + carouselId);
        var uniqueItems = [];
        var seenItems = {};

        images.forEach(function(item) {
            var cleanItem = item.trim();
            var key = cleanItem.toLowerCase();

            if (!seenItems[key]) {
                seenItems[key] = true;
                uniqueItems.push(cleanItem);
            }
        });

        // Dynamically add images or text client names to the list
        uniqueItems.forEach(function(item) {
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
                    $(this).replaceWith($('<div>', { class: 'client-name', text: imgAlt }));
                });

                // Append the image to the carousel
                $('<div>', { class: 'client-item client-logo' }).append($img).appendTo($clientList);
            } else {
                // Handle text-only client names
                $('<div>', { class: 'client-item' })
                    .append($('<div>', { class: 'client-name', text: item }))
                    .appendTo($clientList);
            }
        });
    }

    // Render all client groups
    for (var carouselId in carousels) {
        if (carousels.hasOwnProperty(carouselId)) {
            var config = carousels[carouselId];
            renderClientList(carouselId, config.files, config.folder);
        }
    }
});

