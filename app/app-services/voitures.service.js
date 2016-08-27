(function () {
    'use strict';

    angular
        .module('app')
        .factory('VoitureService', function ($http) {
        var API_URI = 'http://localhost:8082/gestionvoitures/api/voitures';
    return {

    	loadVoitures : function() {
            return $http.get(API_URI);
        },

        createVoiture : function(voiture) {
            return  $http.post(API_URI, voiture);
        },

        deleteVoiture  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findById : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        updateVoiture : function(voiture) {
             return $http.put(API_URI, voiture);
        }

    };

});
})();
