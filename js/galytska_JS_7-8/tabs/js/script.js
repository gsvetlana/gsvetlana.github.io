// jQuery | $

// $(this) - dom-елемент, на якому спрацював event. Використовуємо
// для зручності в callback-ах 

$(function() {
    
    $('#tab-1').show();

    $('.shifter li').on('click', function() {
        // if( $(this).attr('class') == 'active'){
        //     return false;
        // }

        var link = $(this).children().attr('href'); //текст для показу
        // var prevActive = $('li.active').children().attr('href'); //активна на момент кліка 
        
        // $('li.active').removeClass('active');
        // $(this).addClass('active');

        $(prevActive).hide();
        $(link).show();
    });

});