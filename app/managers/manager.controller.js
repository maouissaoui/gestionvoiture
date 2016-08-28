(function () {
    'use strict';

    angular
        .module('app')
        .controller('ManagerController', ManagerController);
        ManagerController.$inject =['$scope','ManagerService','$routeParams','$location'];

      function ManagerController($scope,ManagerService,$routeParams,$location){
    ManagerService.findById($routeParams.id).success(function(resp){
	        $scope.manager = resp;
	    });
  };
})();
