(function(){
    'use strict';

    angular
        .module('ng-backendless', [])
        .factory('Backendless', Backendless);

        function Backendless($window) {
            return $window.Backendless;
        }
})();
