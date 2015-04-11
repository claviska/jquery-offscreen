jQuery Offscreen Plugin
=======================

## Overview

Filters that detect when an element is at least partially outside of the viewport. Useful for repositioning
menus, tooltips, etc. when they would otherwise appear off the screen.

## Usage

    $('#element').is(':off-top')
    $('#element').is(':off-right')
    $('#element').is(':off-bottom')
    $('#element').is(':off-left')

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