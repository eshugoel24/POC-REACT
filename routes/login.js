'use strict';

var path = require('path');

exports.authenticate = function(request, response) {
  debugger
    var users = require(path.join(__dirname, '../dal/repositories/users'));
    var userName = request.body.username;
    var password = request.body.password;
    var util = require(path.join(__dirname, '../util'));
    return response.json({
        success: true
    });
debugger
     users.validateUser(userName, function(users) {
         if (users.length > 0) {
             if (users[0].password === password) {
                 var jwtToken = util.generateJWT(users[0]);
                 return response.json({
                     token: jwtToken,
                     success: true
               });
             } else {
                 return response.json({
                     success: false
                 });
             }
         } else {
             return response.json({
                 success: false
             });
         }
     });
}
