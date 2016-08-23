(function () {
    'use strict';


    angular
        .module('app')
        .controller('VoitureController', VoitureController);
        VoitureController.$inject =['$scope','VoitureService'];

      function VoitureController($scope,VoitureService){
    VoitureService.loadVoitures().success(function(resp){
        $scope.voitures=resp;
    });
  };
})();
