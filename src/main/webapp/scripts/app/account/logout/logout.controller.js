'use strict';

angular.module('jumpstartApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
