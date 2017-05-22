'use strict';
(function() {
  var pageWrapper;
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
    generateWrapper: function() {
      pageWrapper = document.createElement('div');
      pageWrapper.classList.add('wrapper');
      document.body.appendChild(pageWrapper);
    },

    generateTitle: function() {
      var h1 = document.createElement('h1');
      h1.innerHTML = this.data.title;
      h1.classList.add('title');
      pageWrapper.appendChild(h1);
    },

    generateQuestionsForm: function() {
      var form = document.createElement('form');
      pageWrapper.appendChild(form);
      var fieldset = document.createElement('fieldset');
      form.appendChild(fieldset);
      for (var i = 0, max = this.data.questions.length; i < max; i++){
          var section = document.createElement('section');
          var sectionTitle = document.createElement('h6');
          section.appendChild(sectionTitle);
          sectionTitle.innerHTML = this.data.questions[i].title;
          fieldset.appendChild(section);
          var ul = document.createElement('ul');
          section.appendChild(ul);
          for(var j = 0, maxJ = this.data.questions[i].answers.length; j < maxJ; j++){
            var li = document.createElement('li');
            var check = document.createElement('input');
            check.type = 'checkbox';
            ul.appendChild(li);
            var label = document.createElement('label');
            li.appendChild(label);
            label.appendChild(check);
            var textElem = document.createTextNode(this.data.questions[i].answers[j]);
            label.appendChild(textElem);
          }
      }

      var button = document.createElement('input');
      button.type = 'submit';
      button.value = 'Проверить мои результаты';
      button.classList.add('submitBtn');
      form.appendChild(button);
    }

  };

  test.generateWrapper();
  test.generateTitle();
  test.generateQuestionsForm();
})();
