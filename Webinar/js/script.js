(function() {
    'use strict';
    var app = {
        users: [
            {
                private: {
                    id: 0,
                    login: 'coolguy123',
                    mail: 'coolguy123@mail.dev',
                    pass: 12345,
                    phone: '(068)-123-45-56'
                },
                public: {
                    name: 'Chelsey',
                    age: 20,
                    location: 'Zambia',
                    avatar: 'link-to-avatar-file',
                    images: ['path-to-img1.jpg', 'path-to-img2.jpg', 'path-to-img3.jpg'],
                    facebook: 'facebook link',
                    twitter: 'twitter link',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                }
            },

            {
                private: {
                    id: 1,
                    login: 'medmeduk912',
                    mail: 'medmeduk912@mail.dev',
                    pass: 548963,
                    phone: '(067)-987-45-56'
                },
                public: {
                    name: 'Mango',
                    age: 32,
                    location: 'Ukraine',
                    avatar: 'link-to-avatar-file',
                    images: ['path-to-img1.jpg', 'path-to-img2.jpg', 'path-to-img3.jpg'],
                    facebook: 'facebook link',
                    twitter: 'twitter link',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                }
            }
        ]
    };

    console.log(app);
    function showUsers(objDB) {
        for(var key in objDB) {
            if(objDB.hasOwnProperty(key)) {
                for(var i = 0, max = objDB[key].length; i < max; i++) {
                    console.log(objDB[key][i].private.login);
                }
            }
        }
    }

    function searchDataBase(objDB, mail) {
        for(var key in objDB) {
            if(objDB.hasOwnProperty(key)) {
                for(var i = 0, max = objDB[key].length; i < max; i++) {
                    if(objDB[key][i].private.mail === mail) {
                        return objDB[key][i].public; 
                    }
                }
            }
        }

        return null;
    }

    showUsers(app);

    var searchResult = searchDataBase(app, 'medmeduk912@mail.dev');
    if(searchResult) {
        console.log(searchResult);
    } else {
        console.log('пользователя не существует');
    }
})();