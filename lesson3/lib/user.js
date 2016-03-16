"use strict";
let users = {};

let getUsers = function () {
    return JSON.stringify(users);
};

let addUser = function (user) {
    let bad_req = {statusCode: 400, text: "Bad request!"};


    for (let prop in user) {
        if (prop != "nick" && prop != "name" && prop != "e-mail" && prop != "description" && prop != "age") {
            delete user[prop];
        }
    }

    if ( !checkUser(user) ) {
        return bad_req;
    }

    users[user['nick']] = user;
    delete users[user['nick']]['nick'];

    return {statusCode: 201, text: "Успішно додано"};
};

// Перевірка введених даних
function checkUser (user) {
    let email_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        nick_reg = /^[a-z0-9_]+$/;

    if (user['nick'] && user['name'] && nick_reg.test(user['nick'])) {

        if (user['e-mail'] && !email_reg.test(user['e-mail'])) {
            return false;
        }

        if (user['age']) {
            if (!(user['age'] > 0 && user['age'] < 300)) {
                return false;
            }
        }
        return true;
    }

    return false;
}

module.exports.users = users;
module.exports.getUsers = getUsers;
module.exports.addUser = addUser;