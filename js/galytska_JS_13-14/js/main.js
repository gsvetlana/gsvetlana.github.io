(function(){
    'use strict';

    var test = {
        titleTest: 'Язык JavaScript',
        questions: [
            {
                title: 'Язык JavaScript является подвидом языка Java – верно?',
                answers: ['Да', 'Нет', 'Наоборот, Java – подвид JavaScript.'],
                correctAnswers: [2]
            },
            {
                title: 'Какие из этих вариантов задают массив из элементов «a», «b»?',
                answers: ['var a = new Array("a","b")', 'var a = { "a", "b" }', 'var a = ( "a", "b" )', 'var a = [ "a", "b" ]', 'var a = "a,b".split(",")'],
                correctAnswers: [1, 4, 5]
            },
            {
                title: 'Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?',
                answers: ['this', 'instanceof', 'constructor', 'parent', 'new', 'Все имеют специальное использование'],
                correctAnswers: [4]
            },
            {
                title: 'Верно ли сравнение: "ёжик" > "яблоко"?',
                answers: ['Да', 'Нет', 'Зависит от локальных настроек браузера'],
                correctAnswers: [1]
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
        var answerArr = [], ansIndex;
        for (var i = 0, max = obj.questions.length; i < max; i++) {
            ansIndex=0;
            for(var j = 0, maxJ = obj.questions[i].answers.length; j < maxJ; j++) {
                ansIndex++;
                answerArr.push(false);
                for(var n = 0, maxN = obj.questions[i].correctAnswers.length; n < maxN; n++) {
                    if (ansIndex === obj.questions[i].correctAnswers[n]) {
                        answerArr.pop();
                        answerArr.push(true);
                    }
                }
            }
        }
        return answerArr;
    }

    var currentAns = document.querySelectorAll('input');
    function getUserAnswers(arr) {
        return _.map(arr, function(item) {
            return item.checked;
        });
    }

    function clearTest() {
        document.querySelector('form').reset();
    }




    var btn = document.querySelector('.submitBtn');
    var curAnsArr = [], chek_sel = 0;

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var arr = getSetAnswers(test);
        var newArr = getUserAnswers(currentAns);
        if (_.isEqual(arr, newArr)) {
            alert('well done');
        } else {
            alert('try again');
        }
        clearTest();
    });



})();


