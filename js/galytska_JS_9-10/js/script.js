// $(function() {
//     'use strict';
//
//     $('.sub-menu').hide();
//     $('.dropdown').click(function(){
//         $(this).next().css({
//             'opacity':'0', 'display':'block'
//         }).animate({opacity:'1'}, 700, 'easeInCirc');
//     });
//
// });
(function(){
    'use strict';

    var submenu = document.getElementsByClassName('sub-menu'),
        menu = document.getElementsByClassName('menu')[0];
    console.log(submenu);
    console.log(menu);
    for(var i = 0, max = submenu.length; i < max; i++) {
        submenu[i].style.display = 'none';
    }

    menu.addEventListener('click', function(event) {
        var target = event.target;
        if(!target.classList.contains('dropdown') &&
            !target.classList.contains('fa-caret-down') &&
            !target.classList.contains('fa-caret-right')) {
            return;
        }
        target.closest('.dropdown').nextElementSibling.style.display = 'block';
    });


}());


