(function() {
    'use strict';

    var wrapper = document.querySelector('.wrapper'),
        arrData = [];

    function getData() {
        var name = wrapper.querySelector('#name'),
            surname = wrapper.querySelector('#surname'),
            tel = wrapper.querySelector('#tel'),
            email = wrapper.querySelector('#email'),
            newObj = {};

        newObj.name = name.value;
        newObj.surname = surname.value;
        newObj.tel = tel.value;
        newObj.email = email.value;

        arrData.push(newObj);
    }

    function createElements() {
        var btn = document.createElement('button');
        btn.classList.add('addData');
        btn.innerHTML = 'Add data';

        var table = document.createElement('table');
        table.createCaption().innerHTML = 'User Info';
        table.createTHead().innerHTML = '<th>Name</th><th>Surname</th><th>Phone number</th><th>Email address</th>';
        table.appendChild(document.createElement('tbody'));

        return {
            btnItem: btn,
            tableItem: table
        };
    }

    var elem = createElements();
    var getUserData = wrapper.querySelector('.get-data');
    getUserData.appendChild(elem.btnItem);

    elem.btnItem.addEventListener('click', function(e) {
        e.preventDefault();
        elem.tableItem.tBodies[0].innerHTML = '';

        getData();

        wrapper.appendChild(elem.tableItem);
        for(var i = 0, max = arrData.length; i < max; i++) {
            var newRow = elem.tableItem.tBodies[0].insertRow(i);
            for(var item in arrData[i]) {
                if(arrData[i].hasOwnProperty(item)) {
                    newRow.insertCell().innerHTML = arrData[i][item];
                }
            }
        }

        var inputs = wrapper.querySelectorAll('input');
        for(var k = 0, maxK = inputs.length; k < maxK; k++) {
            inputs[k].value = '';
        }
    });
})();

