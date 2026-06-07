/*!
=========================================================
* Rubic Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    function refreshNavbarAffix() {
        var $navbar = $('.page-navbar');

        if ($.fn.affix && $navbar.data('bs.affix')) {
            $navbar.affix('checkPosition');
        }

        var isWelcomeTop = getScrollTop() <= 20;

        $navbar
            .toggleClass('affix-top', isWelcomeTop)
            .toggleClass('affix', !isWelcomeTop);
    }

    $(window).on('load resize hashchange scroll', refreshNavbarAffix);
    refreshNavbarAffix();

    $(".nav-link").on('click', function(event) {

        if (this.hash !== "") {
            var hash = this.hash;
            var $target = $(hash);

            if (!$target.length) {
                return;
            }

            event.preventDefault();

            var navbarHeight = $('.page-navbar').outerHeight() || 0;
            var scrollTop = Math.max($target.offset().top - navbarHeight - 8, 0);

            $('html, body').animate({
                scrollTop: scrollTop
            }, {
                duration: 700,
                step: refreshNavbarAffix,
                complete: function(){
                    refreshNavbarAffix();

                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', hash);
                    } else {
                        window.location.hash = hash;
                    }

                    refreshNavbarAffix();
                }
            });
        } 
    });
});
