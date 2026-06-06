document.addEventListener('DOMContentLoaded', function() {
    var currentYear = document.getElementById('current-year');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
$(document).ready(function(){
    // Define client groups and logo/text entries.
    var clientGroups = {
        'carousel1': {
            files: [
                'Manila Water Company, Inc',
                'Meralco Industrial Engineering Services Corporation',
                'Meralco Powergen Corporation',
                'Meralco',
                'MIESCOR Builders',
                'MIESCOR LOGISTICS, INC',
                'Phoenix Petroleum Philippines, Inc'
            ]
        },
        'carousel2': {
            files: [
                'Ginebra San Miguel, Inc',
                'Magnolia, Inc',
                'Nestle Philippines Inc',
                'San Miguel Brewery, Inc',
                'San Miguel Corporation, Inc',
                'San Miguel Foods, Inc',
                'San Miguel Purefoods Company, Inc'
            ]
        },
        'carousel3': {
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
            files: [
                'ABS-CBN Corporation',
                'Sky Cable Corporation',
                'Pilipino Cable Corporation',
                'The Velarde Group of Companies, Inc.'
            ]
        },
        'carousel6': {
            files: [
                'Globe Telecom, Inc.',
                'PLDT, Inc.'
            ]
        },
        'carousel7': {
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
            files: [
                'Nickel Asia Corporation',
                'Filminera Resources Corporation'
            ]
        },
        'carousel10': {
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
            files: [
                'Toyota Motor Philippines Corporation'
            ]
        },
        'carousel12': {
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
    function getClientKey(item) {
        return item
            .trim()
            .replace(/\.(jpg|jpeg|png|webp)$/i, '')
            .replace(/\s+/g, ' ')
            .toLowerCase();
    }

    function getClientName(item) {
        return item
            .trim()
            .replace(/\.(jpg|jpeg|png|webp)$/i, '')
            .replace(/\s+/g, ' ');
    }

    function getVisibleItems(count, maxItems) {
        return Math.max(1, Math.min(count, maxItems));
    }

    function renderClientList(groupId, clients, renderedClients) {
        var $clientList = $('#' + groupId);
        var uniqueItems = [];
        var seenItems = {};

        if (!$clientList.length) {
            return;
        }

        $clientList.empty();

        clients.forEach(function(item) {
            var cleanItem = getClientName(item);
            var key = getClientKey(cleanItem);

            if (cleanItem && !seenItems[key] && !renderedClients[key]) {
                seenItems[key] = true;
                renderedClients[key] = true;
                uniqueItems.push(cleanItem);
            }
        });

        uniqueItems.forEach(function(item) {
            $('<div>', { class: 'client-item' })
                .append($('<div>', { class: 'client-name', text: item }))
                .appendTo($clientList);
        });

        if (uniqueItems.length > 1 && $.fn.owlCarousel) {
            $clientList.addClass('owl-carousel owl-theme').owlCarousel({
                loop: false,
                rewind: false,
                margin: 14,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3200,
                autoplayHoverPause: true,
                smartSpeed: 450,
                responsive: {
                    0: { items: 1 },
                    576: { items: getVisibleItems(uniqueItems.length, 2) },
                    992: { items: getVisibleItems(uniqueItems.length, 3) },
                    1200: { items: getVisibleItems(uniqueItems.length, 4) }
                }
            });
        } else {
            $clientList.addClass('client-list-static');
        }
    }

    // Render all client groups
    var renderedClients = {};

    for (var groupId in clientGroups) {
        if (clientGroups.hasOwnProperty(groupId)) {
            var config = clientGroups[groupId];
            renderClientList(groupId, config.files, renderedClients);
        }
    }
});

