$(function() {
    'use strict';
    var $tooltips = $('.tooltip'),
        $inputs = $('input[type="text"]'),
        $labels = $('.show > label');

    var $width = $inputs.outerWidth()  + $labels.outerWidth() + 10;
    $tooltips.css({ left: $width });

    $inputs.focusin(function () {
        $(this).next().fadeToggle(600, 'linear');
    }).focusout(function () {
        $(this).next().fadeToggle('fast');
    });


    $('#showhelp').focusin(function () {
        $tooltips.each(function() {
            $(this).fadeToggle(600, 'linear');
        });
    }).focusout(function () {
        $tooltips.each(function () {
            $(this).fadeToggle(1000);
        });
    });

});
