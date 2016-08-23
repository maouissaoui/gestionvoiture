(function () {
    'use strict';

    angular
        .module('app')
        .controller('VoituredetailController', VoituredetailController);
        VoituredetailController.$inject =['$scope','VoitureService','$routeParams','$location'];

      function VoituredetailController($scope,VoitureService,$routeParams,$location){
    VoitureService.findById($routeParams.id).success(function(resp){
	        $scope.voiture = resp;
	    });
  };
})();
