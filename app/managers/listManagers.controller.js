(function () {
    'use strict';
    angular
        .module('app')
        .controller('ListController', ListController);
        ListController.$inject =['$scope','ManagerService'];

      function ListController($scope,VoitureService){
        ManagerService.loadManagers().success(function(resp){
        $scope.managers=resp;
    });
  };
})();
