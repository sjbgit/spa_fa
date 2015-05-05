/**
 * Created by sbunke on 5/5/2015.
 */
"use strict";

angular.module('psMenu').directive('psMenu', function () {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: '../app/modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {
            console.log('menu link');
        }
    };
});