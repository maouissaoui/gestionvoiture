
    'use strict';

    angular
        .module('app')
        .controller('ManagerController', function ManagerController($scope,ManagerService,$routeParams,$location){
    ManagerService.findById($routeParams.id).success(function(resp){
	        $scope.manager = resp;
	    });

      $scope.delete=function(){
            var r = confirm("Voulez vous supprimer ce manager ?");
            if (r == true) {
                ManagerService.deleteManager($scope.manager.id).then(function(){
                    $location.path('/managers');
                })
            }
        }
      });
