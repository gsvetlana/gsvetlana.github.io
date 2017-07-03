(function() {
    'use strict';
    var membersData = [
        {
            id: 'user1',
            imgSrc: 'support-pic-2.png',
            name: 'Lara Tompson',
            occupation: 'creative director',
            FBlink: 'facebook.com/LaraTompson',
            TWLink: 'twitter.com/LaraTompson',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            id: 'user2',
            imgSrc: 'support-pic-1.png',
            name: 'John Doe',
            occupation: 'art director',
            FBlink: 'facebook.com/JohnDoe',
            TWLink: 'twitter.com/JohnDoe',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            id: 'user3',
            imgSrc: 'support-pic-2.png',
            name: 'Mary Freedom',
            occupation: 'web developer',
            FBlink: 'facebook.com/MaryFreedom',
            TWLink: 'twitter.com/MaryFreedom',
            trait: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.'
        },
        {
            id: 'user4',
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

    function checkMember () {
        var divInfo = document.querySelectorAll('.info');
        for(var i = 0, max = divInfo.length; i < max; i++) {
            divInfo[i].style.display = 'none';
        }

        divInfo[0].style.display = 'block';

        var blockMembers = document.querySelector('.team-members');
        blockMembers.addEventListener('click', function(event) {

        });
    }

    checkMember();
})();