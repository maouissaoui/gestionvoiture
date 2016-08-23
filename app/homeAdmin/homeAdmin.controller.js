(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeAdminController', HomeAdminController);

    HomeAdminController.$inject = ['UserService', '$rootScope'];
    function HomeAdminController(UserService, $rootScope) {

    }

})();
