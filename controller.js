var coffeeApp = angular.module('coffeeApp', ['ngRoute']);
//----- Routes
coffeeApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
          console.log("routing to home");
            return 'homeView.html';
        }
    });
    $routeProvider.when('/register', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
          console.log("routing to register");
            return 'registerView.html';
        }
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
//----------------
coffeeApp.controller('coffeeController', function($scope, $location, $route) {




});
