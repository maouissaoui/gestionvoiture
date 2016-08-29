(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeAdminController', HomeAdminController);

    HomeAdminController.$inject = ['VoitureService','$scope','$location'];
    function HomeAdminController(VoitureService,$scope,$location) {
      $scope.isCurrent=function(path){
          return $location.path()==path;
    }
  }
})();
