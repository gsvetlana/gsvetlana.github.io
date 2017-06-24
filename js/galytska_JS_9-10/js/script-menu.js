//Variant 1 - JQuery
$(function() {
    'use strict';

    $('.sub-menu').hide();
    $('.dropdown').hover(function() {
        $(this).find('.sub-menu').first().slideToggle(200, 'easeInOutSine');
    });
});



