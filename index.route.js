(function ()
{
    'use strict';

    angular
        .module('test')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {

        $urlRouterProvider.otherwise('/notes');

        /**
         * Layout Style Switcher
         *
         * This code is here for demonstration purposes.
         * If you don't need to switch between the layout
         * styles like in the demo, you can set one manually by
         * typing the template urls into the `State definitions`
         * area and remove this code
         */
        // Inject $cookies
        var $cookies;

        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies)
            {
                $cookies = _$cookies;
            }
        ]);
        // State definitions
        $stateProvider
            .state('notes', {
                url: '/notes',
                templateUrl: 'app/notes/notes.html',
                controller: 'NotesController',
                controllerAs: 'vm'
            });
    }

})();
