/**
 * Created by sbunke on 5/5/2015.
 */
angular.module('app').config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            //alert(exception.message);
        };
    }]);
});