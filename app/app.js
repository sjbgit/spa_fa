/**
 * Created by sbunke on 4/30/2015.
 */
var app = angular.module('app', ['psFramework']);

app.controller('MainController', ['$scope', function($scope) {
    $scope.info = 'this is my test';
}]);