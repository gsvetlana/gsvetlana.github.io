/**
 * Created by Admin on 25.05.2017.
 */
(function() {
    'use strict';

    function createNode(type, cls, attributes, str) {
        var el = document.createElement(type);

        if(cls && (typeof cls === 'object')) {
            for(var i = 0, max = cls.length; i < max; i++) {
                el.classList.add(cls[i]);
            }
        }

        if (attributes && (typeof attributes === 'object')) {
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    el.setAttribute(key, attributes[key]);
                }
            }
        }

        if (str && (typeof str === 'string')) {
            el.appendChild(document.createTextNode(str));
        }

        return el;
    }

    var Timer = function() {
        var elements = {},
            isTimerActive = false, //лічильник ще не запустили
            isDelay = false, //не натиснули на Pause
            startDate, delay = 0, timer;

        this.init = function() {
            var timerWrapper = createNode('div', ['timer'], null, null),
                timeHolder = createNode('div', ['timer-panel'], null, null),
                controlPanel = createNode('div', ['control-panel'], null, null);
            elements.timeH = createNode('span', ['time', 'hours'], null, 'hh:');
            elements.timeM = createNode('span', ['time', 'mins'], null, 'mm:');
            elements.timeS = createNode('span', ['time', 'secs'], null, 'ss:');
            elements.timeMS = createNode('span', ['time', 'milisecs'], null, 'ms');
            elements.btnStart = createNode('button', ['start', 'btn', 'btn-success', 'btn-lg'], null, 'Start');
            elements.btnClear = createNode('button', ['clear', 'btn', 'btn-danger', 'btn-lg'], null, 'Clear');

            elements.btnStart.addEventListener('click', startTimer);
            elements.btnClear.addEventListener('click', clearTimer);

            timeHolder.append(elements.timeH, elements.timeM, elements.timeS, elements.timeMS);
            controlPanel.append(elements.btnStart, elements.btnClear);
            timerWrapper.append(timeHolder, controlPanel);

            return timerWrapper; // we return our div element
        };

        function startTimer () {
            if(!isTimerActive) {
                if(!isDelay) {
                    startDate = Date.now();
                    console.log(startDate);
                } else {
                    startDate = startDate + Date.now() - delay;
                }
                timer = setInterval(displayTimer, 1);
                isTimerActive = true;
                elements.btnStart.innerHTML = 'Pause';
                elements.btnStart.classList.remove('btn-success');
                elements.btnStart.classList.add('btn-primary');
            } else {
                delay = Date.now();
                isTimerActive = false;
                isDelay = true;
                clearInterval(timer);
                elements.btnStart.innerHTML = 'Continue';
                elements.btnStart.classList.add('btn-success');
                elements.btnStart.classList.remove('btn-primary');
            }
        }

        function displayTimer () {
            var currentDate = Date.now(),
                t = currentDate - startDate;
            var hours = Math.floor(t / 3600000);
                t = t - hours * 3600000;
            var minutes = Math.floor(t / 60000);
                t = t - minutes * 60000;
            var seconds = Math.floor(t / 1000);
                t = t - seconds * 1000;
            var milliseconds = t;

            if(milliseconds < 100){
                milliseconds = '0' + milliseconds;
            }
            if(seconds < 10){
                seconds = '0' + seconds;
            }
            if (minutes < 10){
                minutes = '0' + minutes;
            }
            if (hours < 10){
                hours = '0' + hours;
            }

            elements.timeMS.innerHTML = milliseconds;
            elements.timeS.innerHTML = seconds + ':';
            elements.timeM.innerHTML = minutes + ':';
            elements.timeH.innerHTML = hours + ':';
        }

        function clearTimer () {
            isTimerActive = false;
            isDelay = false;
            clearInterval(timer);
            elements.timeMS.innerHTML = '000';
            elements.timeS.innerHTML = '00:';
            elements.timeM.innerHTML = '00:';
            elements.timeH.innerHTML = '00:';
            elements.btnStart.innerHTML = 'Start';
        }


    };

    var APP = {

        addTimer: function() {
            var timer = new Timer();
            return timer.init();
        },

        init: function() {
            var btn = document.querySelector('#btn');

            btn.addEventListener('click', function() {
                var timerContainer = createNode('div', ['timer-container'], null, null);
                document.querySelector('#root').append(timerContainer);
                timerContainer.append(this.addTimer());
            }.bind(this));
        }
    };

    APP.init();
})();
