'use strict';

angular.module('app')
  .controller('EditController', function ($scope,VoitureService,$routeParams,$location) {

    $scope.state = "new";
      //Check if we have a user
      if ($routeParams.id) {
          $scope.state = "update";
          VoitureService.findById($routeParams.id).then(function (response) {
              $scope.voiture = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return ($scope.state=="new")?"Ajouter":"Modifier";
      };
    $scope.submit=function(){
          if($scope.state = "new"){
            VoitureService.createVoiture($scope.voiture);
          }
          else{
            VoitureService.updateVoiture($scope.voiture);
          }
          $location.path('/voitureAdmin');
      }

  });
