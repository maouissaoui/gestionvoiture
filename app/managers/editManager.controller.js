'use strict';

angular.module('app')
  .controller('EdiManagerController', function ($scope,ManagerService,$routeParams,$location) {

    $scope.state = "new";
      if ($routeParams.id) {
          $scope.state = "update";
          ManagerService.findById($routeParams.id).then(function (response) {
              $scope.manager = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return ($scope.state=="new")?"Ajouter":"Modifier";
      };
    $scope.submit=function(){
          if($scope.state = "new"){
            ManagerService.createManager($scope.manager);
          }
          else{
            ManagerService.updateManager($scope.manager);
          }
          $location.path('/managers');
      }

  });
