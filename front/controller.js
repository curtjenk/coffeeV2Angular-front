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
    $routeProvider.when('/order', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to order");
            $('.nav1').css('display', 'none');
            $('.nav2').css('display', 'block');
            return 'orderView.html';
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
        $scope.loginMessage = "clicked login";
        console.log($scope.loginUsername);
        if (!$scope.loginUsername || $scope.loginUsername.length === 0 || !$scope.loginPassword || $scope.loginPassword.length === 0) {
            $scope.loginMessage = "please enter a username and password";
            return;
        }
        var loginUrl = apiUrl + "/loginApi";
        var loginData = {
            username: $scope.loginUsername,
            password: $scope.loginPassword
        };
        console.log(loginData);
        $http.post(loginUrl, loginData).then(
            function(response) {
                console.log(response);
                if (response.data.success === false) {
                    $scope.loginMessage = "Invalid username and/or password";
                } else {
                    //redirect to order page
                    $location.path('/order');
                }
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
                //TODO: error handling
                $location.path('/order');
            },
            function(response) {
                console.log(response);
            }
        );
    };

});
