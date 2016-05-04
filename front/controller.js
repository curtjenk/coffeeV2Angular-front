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
    $routeProvider.when('/login', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to login");
            return 'loginView.html';
        }
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
//----------------
coffeeApp.controller('coffeeController', function($scope, $http, $location, $route) {
    var apiUrl = "http://localhost:3000";

    $scope.loginFunc = function() {
      console.log("here");
        var loginUrl = apiUrl + "/loginApi";
        var loginData = {
          username: $scope.loginUsername,
          password: $scope.loginPassword
        };
      //  console.log(loginData);
        $http.post(loginUrl, loginData).then(
            function(response) {
              console.log(response);
            },
            function(response) {
              console.log(response);
            }
        );
    };

    $scope.registerFunc = function() {
      console.log("here");
        var regUrl = apiUrl + "/registerApi";
        var regData = {
          username: $scope.regUsername,
          password: $scope.regPassword,
          password2: $scope.regPassword2,
          email: $scope.regEmail
        };
      //  console.log(loginData);
        $http.post(regUrl, regData).then(
            function(response) {
              console.log(response);
            },
            function(response) {
              console.log(response);
            }
        );
    };

});
