(function() {
    'use strict';

//Basic
    //     var users = ['singu', 'mango', 'devboss', 'ashlybae'];
    //
    //     function listUsers(data) {
    //         for(var i = 0, max = data.length; i < max; i++){
    //             console.log(data[i]);
    //         }
    //     }
    //
    //     listUsers(users);
    //
    //     function findUser(data, name) {
    //         for(var i = 0, max = data.length; i < max; i++){
    //             if(data[i] === name) {
    //                 return true;
    //             }
    //         }
    //
    //         return false;
    //     }
    //
    //     var result = findUser(users, 'mango');
    //     if(result) {
    //         console.log('find such user');
    //     } else {
    //         console.log('user is not in DB');
    //     }
    //
    //     function addUser(data, user) {
    //         data.push(user);
    //     }
    //
    //     addUser(users, 'ajax');
    //     console.log(users);


//Now as an object
    //     var app = {
    //         users: ['singu', 'mango', 'devboss', 'ashlybae'],
    //         listUsers: function() {
    //             for(var i = 0, max = this.users.length; i < max; i++){
    //                 console.log(this.users[i]);
    //             }
    //         },
    //         findUsers: function (name) {
    //             for(var i = 0, max = this.users.length; i < max; i++){
    //                 if(this.users[i] === name) {
    //                     console.log('success!');
    //                     return;
    //                 }
    //             }
    //
    //             console.log('no such user :(');
    //         },
    //         addUser: function(user) {
    //             this.users.push(user);
    //         }
    //     };
    //
    //     app.listUsers();
    //     app.findUsers('mango');
    //     app.addUser('ajax');
    //     console.log(app);



//More complex object
    //         var app = {
    //             users: [
    //                 {
    //                     login: 'coolguy123',
    //                     mail: 'coolguy123@mail.dev',
    //                     name: 'Chelsey',
    //                     age: 20
    //
    //                 },
    //                 {
    //                     login: 'medmeduk912',
    //                     mail: 'medmeduk912@mail.dev',
    //                     name: 'Mango',
    //                     age: 32
    //                 }
    //             ],
    //
    //             listUsers: function() {
    //                 for(var i = 0, max = this.users.length; i < max; i++){
    //                     console.log(this.users[i]);
    //                 }
    //             },
    //
    //             findUsers: function (name) {
    //                 for(var i = 0, max = this.users.length; i < max; i++){
    //                     if(this.users[i].name.toLowerCase() === name.toLowerCase()) {
    //                         return 'find ' + name;
    //                     }
    //                 }
    //
    //                 return 'do not find ' + name;
    //             },
    //
    //             getUsersName: function() {
    //                 for(var i = 0, max = this.users.length; i < max; i++){
    //                     console.log(this.users[i].name);
    //                 }
    //             },
    //
    //             addUser: function(user) {
    //                 this.users.push(user);
    //             },
    //
    //             searchAnyField: function(field, searchQuery) {
    //                 for(var i = 0, max = this.users.length; i < max; i++){
    //                     if(this.users[i].hasOwnProperty(field)) {
    //                         if (searchQuery === this.users[i][field]) {
    //                             console.log('success!');
    //                         }
    //                     } else {
    //                         console.log('no such field');
    //                         return;
    //                     }
    //                 }
    //
    //                 return null;
    //             }
    //         };
    //
    //     // app.listUsers();
    //     // console.log(app.findUsers('maNgo'));
    //     // app.getUsersName();
    //     var newUser = {
    //         login: 'blackMan',
    //         mail: 'blackMan12@mail.dev',
    //         name: 'Jack',
    //         age: 18
    //     };
    //
    //     app.addUser(newUser);
    //     console.log(app.users);
    //     app.searchAnyField('loffgin', 'medmeduk912');


//final obj arch
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
})();