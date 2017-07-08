(function() {
    'use strict';
    var membersData = [
        {
            imgSrc: 'support-pic-2.png',
            name: 'Lara Tompson',
            occupation: 'creative director',
            FBlink: 'facebook.com/LaraTompson',
            TWLink: 'twitter.com/LaraTompson',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            imgSrc: 'support-pic-1.png',
            name: 'John Doe',
            occupation: 'art director',
            FBlink: 'facebook.com/JohnDoe',
            TWLink: 'twitter.com/JohnDoe',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            imgSrc: 'support-pic-2.png',
            name: 'Mary Freedom',
            occupation: 'web developer',
            FBlink: 'facebook.com/MaryFreedom',
            TWLink: 'twitter.com/MaryFreedom',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            imgSrc: 'support-pic-3.png',
            name: 'Caroline Black',
            occupation: 'photographer',
            FBlink: 'facebook.com/CarolineBlack',
            TWLink: 'twitter.com/Caroline Black',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        }
    ];

    var parentTeam = document.querySelector('.team-members'),
        parentInfo = document.querySelector('.member-info');

    var sourceTeam = document.getElementById('member-card').textContent,
        sourceInfo = document.getElementById('member-desc').textContent,
        templateTeam = _.template(sourceTeam),
        templateInfo = _.template(sourceInfo);

    parentTeam.innerHTML += templateTeam({data: membersData});
    parentInfo.innerHTML += templateInfo({data: membersData});

    //function checkMember () {
        var  tabs = document.querySelectorAll('.member'),
            tabContent = document.querySelectorAll('.info'),
            currentTab;

        tabContent[0].classList.add('active');
        for (var i = 1, max = tabContent.length; i < max; i++) {
            tabContent[i].classList.add('hidden');
        }

        var parentBlock = document.querySelector('.team-members');
        parentBlock.addEventListener('click', function(event) {
            var target = event.target.closest('.member');
            if(target) {
                for(var i = 0, max = tabs.length; i < max; i++) {
                    tabs[i].matchedElement = tabContent[i];
                }
                currentTab = document.querySelector('.active');
                currentTab.classList.remove('active');
                currentTab.classList.add('hidden');
                target.matchedElement.classList.add('active');
                target.matchedElement.classList.remove('hidden');
            }
        });
    //}

    //checkMember();
})();
