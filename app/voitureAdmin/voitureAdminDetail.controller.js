    'use strict';

    angular
        .module('app')
        .controller('VoitureAdminDetailController', function VoitureAdminDetailController($scope,VoitureService,$routeParams,$location){
    VoitureService.findById($routeParams.id).success(function(resp){
	        $scope.voiture = resp;
	    });


  $scope.delete=function(){
        var r = confirm("Voulez vous supprimer cette Voiture ?");
        if (r == true) {
            VoitureService.deleteVoiture($scope.voiture.id).then(function(){
                $location.path('/voitureAdmin');
            })
        }
    }
});
