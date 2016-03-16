"use strict";

let user = require('../lib/user.js');

module.exports = {
    getUsers: function (req, res, next) {
        res.end(user.getUsers());
        next();
    },
    addUser: function (req, res, next) {

        let post = '',
            new_user = {};
        req.on('readable', function () {
            post += req.read() || "";
        });
        req.on('end', function () {
            new_user = JSON.parse(post);

            let status = user.addUser(new_user);
            res.statusCode = status.statusCode;
            res.end(status.text);
        });
        next();
    }
};