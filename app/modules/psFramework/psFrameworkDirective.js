/**
 * Created by sbunke on 5/1/2015.
 */
angular.module('psFramework').directive('psFramework', function() {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: 'psFrameworkController',
        templateUrl: '../app/modules/psFramework/psFrameworkTemplate.html'
    };
});