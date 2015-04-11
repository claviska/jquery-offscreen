jQuery Offscreen Plugin
=======================

## Overview

Filters that detect when an element is at least partially outside of the viewport. Useful for repositioning
menus, tooltips, etc. when they would otherwise appear off the screen.

## Usage

    $('#element').is(':off-top')    // top of the viewport
    $('#element').is(':off-right')  // right-side of the viewport
    $('#element').is(':off-bottom') // bottom of the viewport
    $('#element').is(':off-left')   // left-side of the viewport
    $('#element').is(':off-screen') // any side of the viewport

Each filter returns `true` if `#element`'s bottom edge is 1px or more past the specified side of the viewport.

## Bootstrap 3 dropdown example

This example will keep Bootstrap 3 dropdowns from going off the right side of the screen.

    $('.dropdown').on('shown.bs.dropdown', function() {

        var dropdown = $(this),
            menu = dropdown.find('.dropdown-menu');

        // Restore to default position
        menu.removeClass('dropdown-menu-right');

        // Adjust if it's off the screen
        if( menu.is(':off-right') ) {
            menu.addClass('dropdown-menu-right');
        }

    });

## License

Copyright Cory LaViska for A Beautiful Site, LLC

License: http://opensource.org/licenses/MIT