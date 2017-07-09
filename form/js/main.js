(function() {
    'use strict';

    var wrapper = document.querySelector('.wrapper'),
        arrData = new Array();

    function getData() {
        var name = document.getElementById('name'),
            surname = document.getElementById('surname'),
            tel = document.getElementById('tel'),
            email = document.getElementById('email'),
            newObj = {};

        newObj.name = name.value;
        newObj.surname = surname.value;
        newObj.tel = tel.value;
        newObj.email = email.value;

        arrData.push(newObj);
    }

    var btn = document.querySelector('.addData');
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var input = document.createElement('p');

        wrapper.appendChild(input);
        getData();

        var sourceUser = document.querySelector('#userRow').textContent,
            templateUser = _.template(sourceUser),
            parent = document.querySelector('tbody');

            parent.innerHTML = templateUser({list: arrData});
    });
})();

