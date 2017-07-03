(function($) {
    'use strict';

    $.fn.carousel = function(options) {
        var defaults = {
            elemWidth: 150,
            elemToShow : 5,
            elemMargin : 25
        };
        var settings = $.extend(defaults, options);

        var carousel = $('.carousel');

        //create control buttons
        var carouselArrowLeft = '<div class="carousel-arrow-left">Left</div>';
        var carouselArrowRight = '<div class="carousel-arrow-right">Right</div>';
        var controls = '<div class="controls"></div>';
        carousel.append(controls);
        $('.controls').append(carouselArrowLeft,carouselArrowRight);

        var arrowLeft = $('.carousel-arrow-left'),
            arrowRight = $('.carousel-arrow-right'),
            imgElemWrapper = carousel.children().first(),
            elementsCount = imgElemWrapper.children().addClass('carousel__item').length;

        var pixelsOffset = defaults.elemWidth + defaults.elemMargin,
            currentLeftValue = 0,
            minimumOffset = - ((elementsCount - defaults.elemToShow) * pixelsOffset),
            maximumOffset = 0;

        carousel.css({
            'width': pixelsOffset * defaults.elemToShow - defaults.elemMargin + 'px'
        });

        $('.carousel__item').css({
            'margin-right' : defaults.elemMargin + 'px'
        });

        $('.carousel__item img').css({
            'max-width' : defaults.elemWidth + 'px'
        });

        arrowLeft.click(function() {
            if(currentLeftValue !== maximumOffset) {
                currentLeftValue += pixelsOffset;
                imgElemWrapper.animate({ left: currentLeftValue + 'px'}, 500);
            }
        });
        arrowRight.click(function() {
            if(currentLeftValue !== minimumOffset) {
                currentLeftValue -= pixelsOffset;
                imgElemWrapper.animate({ left: currentLeftValue + 'px'}, 500);
            }
        });
        return this;
    };
})(jQuery);