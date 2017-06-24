$(function() {
    'use strict';

    $('.select-next').click(function(event) {
        event.preventDefault();
    }).focus(function(){
        $(this).blur();
    });

    $('select').wSelect();

    //checkbox
    check();
    $('.niceCheck').mousedown(function() {
        changeCheck($(this));
    });

    function changeCheck(el) {
        var input = el.find('input').eq(0);
        if(!input.attr('checked')) {
            input.attr('checked', true);

            el.css('background-position','-18px 0');
        } else {
            input.attr('checked', false);

            el.css('background-position','0 0');
        }
    }

    function check() {
        $('.niceCheck').each(function() {
            var input = $(this).find('input').eq(0);
            if(input.attr('checked')) {
                $(this).css('background-position','-18px 0');
            }
        });
    }


});