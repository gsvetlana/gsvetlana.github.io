(function(){
    'use strict';

    var test = {
        titleTest: 'Язык JavaScript',
        questions: [
            {
                title: 'Язык JavaScript является подвидом языка Java – верно?',
                answers: ['Да', 'Нет', 'Наоборот, Java – подвид JavaScript.'],
                correctAnswers: [0, 1, 0]
            },
            {
                title: 'Какие из этих вариантов задают массив из элементов «a», «b»?',
                answers: ['var a = new Array("a","b")', 'var a = { "a", "b" }', 'var a = ( "a", "b" )', 'var a = [ "a", "b" ]', 'var a = "a,b".split(",")'],
                correctAnswers: [1, 0, 0, 1, 1]
            },
            {
                title: 'Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?',
                answers: ['this', 'instanceof', 'constructor', 'parent', 'new', 'Все имеют специальное использование'],
                correctAnswers: [0, 0, 0, 1, 0, 0]
            },
            {
                title: 'Верно ли сравнение: "ёжик" > "яблоко"?',
                answers: ['Да', 'Нет', 'Зависит от локальных настроек браузера'],
                correctAnswers: [1, 0, 0]
            }
        ]
    };

    localStorage.setItem('testData', JSON.stringify(test));
    var data = JSON.parse(localStorage.getItem('testData'));

    var sourceTest = document.getElementById('testJS').textContent,
        parentTest = document.querySelector('form'),
        templateTest = _.template(sourceTest);
    parentTest.innerHTML += templateTest(data);

    function getSetAnswers(obj) {
        var answerArr = [];
        for(var i = 0, questions = obj.questions, max = questions.length; i < max; i++) {
            answerArr = answerArr.concat(questions[i].correctAnswers);
        }
        return answerArr;
    }

    var currentAns = document.querySelectorAll('input');

    function getUserAnswers(arr) {
        return _.map(arr, function(item) {
            if(item.checked) {
                return 1;
            }
            return 0;
        });
    }

    function clearTest() {
        document.querySelector('form').reset();
    }

    function createModalWindow() {
        var modalWindow = {
            block: null,
            win: null,

            initLayout: function() {
                var _this = this;
                this.block = document.getElementById('blockscreen');
                if(!this.block) {
                    var parent = document.querySelector('.wrapper'),
                        obj = parent.firstChild;
                    this.block = document.createElement('div');
                    this.block.id = 'blockscreen';
                    parent.insertBefore(this.block, obj);
                    this.block.addEventListener('click', function() {
                        _this.hideModal();
                    });
                } else {
                    this.block.style.display = 'flex';
                }
            },
            initWin: function() {
                this.win = document.getElementById('modalwindow');
                if(!this.win) {
                    var parent = document.querySelector('#blockscreen');
                    this.win = document.createElement('div');
                    this.win.id = 'modalwindow';
                    parent.appendChild(this.win);
                    var p = document.createElement('p');
                    this.win.appendChild(p);
                } else {
                    this.win.style.display = 'block';
                }
            },
            hideModal: function () {
                this.win.style.display = 'none';
                this.block.style.display = 'none';

            },
            showModal: function() {
                this.initLayout();
                this.initWin();
            }

        };
        return modalWindow.showModal();
    }

    var btn = document.querySelector('.submitBtn');
    var curAnsArr = [];

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var arr = getSetAnswers(test);
        createModalWindow();
        var message, element = document.querySelector('#modalwindow p');
        var newArr = getUserAnswers(currentAns);
        if (_.isEqual(arr, newArr)) {
            element.innerHTML = 'Congratulation! You have passed the test';

        } else {
            element.innerHTML = 'Sorry! Try again!';
        }
        clearTest();
    });

})();


