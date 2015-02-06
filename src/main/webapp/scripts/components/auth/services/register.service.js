'use strict';

angular.module('jumpstartApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


