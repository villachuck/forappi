(function(){
    'use strict';

    angular
        .module('rappiApp')
        .config(config);
        config.$inject = ["$routeProvider", "$locationProvider"];
        function config($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');

            $routeProvider

                .when('/', {
                    template: '<home></home>'
                })

                .otherwise({
                    redirectTo: '/'
                });

        }
})();