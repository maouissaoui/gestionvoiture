(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
                })
            .when('/connect', {
                controller: 'ConnectController',
                templateUrl: 'connecter/connecter.view.html',
                controllerAs: 'vm'
            })
            .when('/voiture', {
                controller: 'VoitureController',
                templateUrl: 'voiture/voiture.view.html'
            })
            .when('/voiture/:id', {
                controller: 'VoituredetailController',
                templateUrl: 'voiture/voituredetail.view.html'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
            .when('/tarifs', {
                controller: 'VoitureController',
                templateUrl: 'tarifs/tarif.view.html'
            })
                .when('/connecter', {
                    controller: 'ConnectController',
                    templateUrl: 'connecter/connecter.view.html',
                    controllerAs: 'vm'
            })
            .when('/reservation', {
                controller: 'ReservationController',
                templateUrl: 'reservation/reservation.view.html'
            })
            .when('/voitureAdmin', {
                controller: 'VoitureController',
                templateUrl: 'voiture/voitureAdmin.view.html'
            })

            .when('/homeAdmin', {
                controller: 'HomeAdminController',
                templateUrl: 'homeAdmin/homeAdmin.view.html',
                controllerAs: 'vm'
            })
            .when('/managers', {
                controller: 'ListController',
                templateUrl: 'managers/listManagers.view.html'
            })
             .when('/manager/:id', {
                    controller: 'ManagerController',
                    templateUrl: 'managers/manager.view.html'
            })
              .when('/manager/:id?', {
                    controller: 'EdiManagerController',
                    templateUrl: 'managers/editManager.view.html'
            })
            .when('/voitureAdmin/:id', {
                controller: 'VoitureAdminDetailController',
                templateUrl: 'voitureAdmin/VoitureAdminDetail.html'
            })

            .when('/edit/:id?', {
                controller: 'EditController',
                templateUrl: 'voitureAdmin/edit.html'
            })
            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
