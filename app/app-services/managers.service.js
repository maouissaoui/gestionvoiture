(function () {
    'use strict';

    angular
        .module('app')
        .factory('ManagerService', function ($http) {
        var API_URI = 'http://localhost:8082/gestionvoitures/api/managers';
    return {

    	loadManagers : function() {
            return $http.get(API_URI);
        },

        createManager : function(manager) {
            return  $http.post(API_URI, manager);
        },

        deleteManager  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findById : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        updateManager : function(manager) {
             return $http.put(API_URI, manager);
        }

    };

});
})();
