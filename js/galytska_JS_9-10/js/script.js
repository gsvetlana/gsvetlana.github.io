$(function() {
    //carousel
    $('.jcarousel').jcarousel({
    });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    //select
    $('select').wSelect();

    //checkbox jQuery
    $('.niceCheck').mousedown(function() {
        changeCheck($(this));
    });

    function changeCheck(el) {
        var $el = el,
            $input = $el.find('input').eq(0);
        if(!$input.attr("checked")) {
            $input.attr("checked", true);

            $el.css("background-position","-17px 0");
        } else {
            $input.attr("checked", false);

            $el.css("background-position","0 0");
        }
        return true;
    }
});


