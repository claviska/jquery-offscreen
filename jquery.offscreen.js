/*
 * jQuery offscreen plugin
 *
 * Filters that detect when an element is partially or completely outside
 * of the viewport.
 *
 *  Usage:
 *
 *      $('#element').is(':off-bottom')
 *
 * The above example returns true if #element's bottom edge is even 1px past
 * the bottom part of the viewport.
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
    $.extend($.expr[':'], {
        'off-top': function(el) {
            return $(el).offset().top < $(window).scrollTop();
        },
        'off-right': function(el) {
            return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
        },
        'off-bottom': function(el) {
            return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
        },
        'off-left': function(el) {
            return $(el).offset().left < $(window).scrollLeft();
        }
    });
})(jQuery);