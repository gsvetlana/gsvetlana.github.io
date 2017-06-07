// $(this) - dom-елемент, на якому спрацював event. Використовуємо
// для зручності в callback-ах 

$(function() {
    'use strict';
    var $tabs = $('.link'),
        $content = $('.tabs-text'),
        currentTab, currentContent;

    $tabs.first().addClass('active');
    $content.hide().first().show();

    $tabs.on('focus', function (event) {
        event.preventDefault();

        currentTab = $(this);

        $tabs.removeClass('active');
        currentTab.addClass('active');

        currentContent = currentTab.attr('href');
        $content.hide();
        $(currentContent).show();

    });


});