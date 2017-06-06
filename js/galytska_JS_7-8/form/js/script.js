$(function() {
    $('input[type="text"]').each(function() {
        var $title = $(this).attr('title');
        $(this).next().text($title);

        var $width = $(this).outerWidth() + $(this).prev().outerWidth() + 5;
        console.log($width);
        $('.tooltip')
            .css({ left: $width })
    });

    $('input[type="text"]').hover(
        function() { //over
            $(this).siblings('.tooltip').show();
    }, function() { //out
            $('.tooltip').hide();
    });

    $('#showhelp').on('click', function(event) {
        $('.tooltip').toggle();
        event.preventDefault();

    });
});
