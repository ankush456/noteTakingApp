(function ()
{
    'use strict';

    angular
        .module('test')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(testTheming)
    {
        var vm = this;

        // Data
        vm.themes = testTheming.themes;

        //////////
    }
})();
