// alert('hello!');
$(function() {
    $('#menu li').hover(function() { //over
        // .stop() --> зупинити всі попередні анімації
        $(this).find('.submenu:first').stop(false, true).fadeIn(300);
    }, function() { //out
        $(this).find('.submenu:first').stop(false, true).fadeOut(300);
    })
});
