'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector('.btn-warning').onclick = powCalculation;
    var btn = document.querySelector('.btn-info').onclick = checkUserName;
});

function powCalculation () {
    while(true) {
        var value = prompt("Enter number and power", 'ex: 4, 2');
        if(value.match(/-?\d+\,\s-?\d+/g) === null) {
            alert('Try again! Follow hint');
        } else {
            var arr = value.split(/,\s/);
            break;
        }        
    }

    if(arr[0] == 0 && arr[1] <= 0) {
        console.log('Result is not defined');
    } else if(arr[1] < 0) {
        console.log('Result of pow (' + arr[0] + ', ' + arr[1] + ') is: ' + 1/pow(+arr[0], Math.abs(arr[1])) );
    } else {
        console.log('Result of pow (' + arr[0] + ', ' + arr[1] + ') is: ' + pow(+arr[0], +arr[1]) );
    }    
}

function pow(base, exp) {
    var result = 1;
    for (var i = 1; i <= exp; i++) {
        result *= base;
    }
    return result;
}

function checkUserName() {
    var users = enterUsers(),
        searchName;
    while(true) {
        searchName = prompt('Enter name to start search first: ');
        if(( searchName === '' ) || ( searchName === null)) {
            alert('Try again!');
        } else {
            break;
        }
    }   
    
    arraySearch(users, searchName);
}

function enterUsers() {
    var arr = [],
        name;
    alert('Enter 5 users first!');
    for ( var i = 0; i < 5; i++) {
        while(true) {
            name = prompt('Enter Name number ' + (i+1));
            if(( name === '' ) || ( name === null)) {
                alert('Try again! Enter name number ' + (i+1));
            } else {
                arr.push(name);
                break;
            }
        }      
    }
    return arr;
}

function arraySearch (array, userName) {
    for ( var i = 0; i < array.length; i++) {
        if (array[i] === userName) {
            alert(userName + ', you have successfully logged in.');
            return;
        }
    }
    alert('Sorry! We cannot recognise you.');
        return;
}

