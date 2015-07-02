(function(){
    'use strict';

    angular
        .module('ng-backendless', [])
        .factory('ngBackendless', ngBackendless);

        function ngBackendless($window) {
            return $window.Backendless;
        }
})();
