// alert('hello!');
$(function() {
    'use strict';

    $('#menu li').hover(function() { //over
        $(this).find('.submenu:first').stop(false, true).fadeIn(300);
    }, function() { //out
        $(this).find('.submenu:first').stop(false, true).fadeOut(300);
    });
});
