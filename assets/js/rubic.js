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
    var navbarAffixFrame;
    var navbarAffixTimer;
    var targetSettleTimer;
    var activeScrollToken = 0;

    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    function getElementTop($element) {
        return $element[0].getBoundingClientRect().top + getScrollTop();
    }

    function getMaxScrollTop() {
        var documentElement = document.documentElement;
        var body = document.body;
        var documentHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            documentElement.clientHeight,
            documentElement.scrollHeight,
            documentElement.offsetHeight
        );

        return Math.max(documentHeight - window.innerHeight, 0);
    }

    function getTargetScrollTop($target) {
        var navbarHeight = $('.page-navbar').outerHeight() || 0;
        var scrollTop = getElementTop($target) - navbarHeight - 8;

        return Math.max(Math.min(scrollTop, getMaxScrollTop()), 0);
    }

    function refreshNavbarAffix() {
        var $navbar = $('.page-navbar');

        var isWelcomeTop = getScrollTop() <= 20;

        $navbar
            .toggleClass('affix-top', isWelcomeTop)
            .toggleClass('affix', !isWelcomeTop)
            .css('background-color', isWelcomeTop ? 'rgba(52, 58, 64, 0.2)' : '#111825');
    }

    function scheduleNavbarAffixRefresh() {
        if (window.requestAnimationFrame && !navbarAffixFrame) {
            navbarAffixFrame = window.requestAnimationFrame(function() {
                navbarAffixFrame = null;
                refreshNavbarAffix();
            });
        } else {
            refreshNavbarAffix();
        }

        window.clearTimeout(navbarAffixTimer);
        navbarAffixTimer = window.setTimeout(refreshNavbarAffix, 80);
    }

    function updateHash(hash) {
        if (window.history && window.history.pushState) {
            window.history.pushState(null, '', hash);
        } else {
            window.location.hash = hash;
        }
    }

    function settleTargetPosition($target, attempts, scrollToken) {
        attempts = attempts || 8;

        window.clearTimeout(targetSettleTimer);
        targetSettleTimer = window.setTimeout(function() {
            if (scrollToken !== activeScrollToken) {
                return;
            }

            var targetScrollTop = getTargetScrollTop($target);

            if (Math.abs(getScrollTop() - targetScrollTop) > 2) {
                $('html, body').stop(true).animate({
                    scrollTop: targetScrollTop
                }, {
                    duration: 140,
                    step: scheduleNavbarAffixRefresh,
                    complete: function() {
                        refreshNavbarAffix();

                        if (attempts > 1 && scrollToken === activeScrollToken) {
                            settleTargetPosition($target, attempts - 1, scrollToken);
                        }
                    }
                });
            } else {
                refreshNavbarAffix();

                if (attempts > 1) {
                    settleTargetPosition($target, attempts - 1, scrollToken);
                }
            }
        }, 300);
    }

    function collapseNavbarMenu(callback) {
        var $menu = $('#navbarSupportedContent');
        var callbackCalled = false;

        function runCallback() {
            if (callbackCalled) {
                return;
            }

            callbackCalled = true;
            callback();
        }

        if (!$menu.hasClass('show')) {
            runCallback();
            return;
        }

        if ($.fn.collapse) {
            $menu.one('hidden.bs.collapse', runCallback);
            $menu.collapse('hide');
            window.setTimeout(runCallback, 420);
        } else {
            $menu.removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
            runCallback();
        }
    }

    function scrollToSection(hash, $target) {
        activeScrollToken += 1;
        var scrollToken = activeScrollToken;
        var scrollTop = getTargetScrollTop($target);

        window.clearTimeout(targetSettleTimer);
        $('html, body').stop(true).animate({
            scrollTop: scrollTop
        }, {
            duration: 700,
            step: scheduleNavbarAffixRefresh,
            complete: function(){
                if (scrollToken !== activeScrollToken) {
                    return;
                }

                refreshNavbarAffix();
                updateHash(hash);
                refreshNavbarAffix();
                settleTargetPosition($target, 8, scrollToken);
            }
        });
    }

    $(window).on('load resize hashchange scroll wheel touchmove keydown', scheduleNavbarAffixRefresh);
    $(document).on('scroll wheel touchmove keydown', scheduleNavbarAffixRefresh);
    $('body').on('scroll wheel touchmove', scheduleNavbarAffixRefresh);
    refreshNavbarAffix();

    $('.nav-link, .navbar-brand[href^="#"], .footer a[href^="#"]').on('click', function(event) {

        if (this.hash !== "") {
            var hash = this.hash;
            var $target = $(hash);

            if (!$target.length) {
                return;
            }

            event.preventDefault();

            collapseNavbarMenu(function() {
                scrollToSection(hash, $target);
            });
        } 
    });
});
