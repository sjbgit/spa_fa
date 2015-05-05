"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu', //always have a parent paMenu
        scope: { //isolated scope
            label: '@'
        },
        templateUrl: '../app/modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) { //has access to parent controller
            console.log('in menu item');
        }
    };
});