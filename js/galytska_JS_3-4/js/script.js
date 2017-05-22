'use strict';
(function() {
  var test = {
    data: {
      title: 'Тест по программированию',
      questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      },
      {
        title: 'Вопрос #4',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4', 'Вариант овтета 5', 'Вариант овтета 6']
      }
      ]
    },

    createForm: function() {
      var form = document.createElement('form'),
        formTitle = document.createElement('h1'),
        fieldset = document.createElement('fieldset'),
        btn = document.createElement('button');

        formTitle.innerHTML = this.data.title;
        formTitle.classList.add('title');
        btn.setAttribute('type', 'submit');
        btn.innerHTML = 'Проверить мои результаты';
        btn.classList.add('submitBtn');

        for(var i = 0, max = this.data.questions.length; i < max; i++) {
          var result = this.createQuestion(this.data.questions[i]);
          fieldset.appendChild(result);
        }
        form.appendChild(formTitle);
        form.appendChild(fieldset);
        form.appendChild(btn);

        return form;

    },

    createQuestion: function(data) {
      var section = document.createElement('section'),
        h6 = document.createElement('h6'),
        ul = document.createElement('ul');

        h6.innerHTML = data.title;

      for(var i = 0, max = data.answers.length; i < max; i++){
            var li = document.createElement('li'),
              check = document.createElement('input'),
              label = document.createElement('label');
            check.setAttribute('type', 'checkbox');
            var textElem = document.createTextNode(data.answers[i]);
            li.appendChild(label);
            label.appendChild(check);
            label.appendChild(textElem);

            ul.appendChild(li);
      }

      section.appendChild(h6);
      section.appendChild(ul);

      return section;
    },

    init: function () {
      var parent = document.querySelector('.wrapper'),
      form = this.createForm();

      parent.appendChild(form);
    }
  };

  test.init();
})();
