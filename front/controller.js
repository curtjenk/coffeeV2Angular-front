var coffeeApp = angular.module('coffeeApp', ['ngRoute', 'ngCookies']);
//----- Routes
coffeeApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to home");
            $('.home-nav').css('display', 'block');
            $('.order-nav').css('display', 'none');
            return 'homeView.html';
        }
    });
    $routeProvider.when('/register', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to register");
            $('.home-nav').css('display', 'none');
            $('.order-nav').css('display', 'none');
            return 'registerView.html';
        }
    });
    $routeProvider.when('/login', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to login");
            $('.home-nav').css('display', 'none');
            $('.order-nav').css('display', 'none');
            return 'loginView.html';
        }
    });
    $routeProvider.when('/order', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to order");
            $('.home-nav').css('display', 'none');
            $('.order-nav').css('display', 'block');
            return 'orderView.html';
        }
    });
    $routeProvider.when('/delivery', {
        controller: 'coffeeController',
        templateUrl: function($routeParams) {
            console.log("routing to order");
            $('.home-nav').css('display', 'none');
            $('.order-nav').css('display', 'block');
            return 'deliveryView.html';
        }
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
//----------------
coffeeApp.controller('coffeeController', function($scope, $http, $location, $route) {
    var apiUrl = "http://localhost:3000";

    $scope.dlvrStateOptions = states;

    function is_int(value) {
        if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
            return true;
        } else {
            return false;
        }
    }

    $scope.loginFunc = function() {
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
                    $('li.active-session').css('display', 'block');
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
