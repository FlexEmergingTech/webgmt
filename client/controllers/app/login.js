angular.module('app').controller('app_login', app_login);
function app_login($scope, $window, app, $ionicLoading) {
    'use strict';
    app.init($scope, function (data) {
        $scope.crediantialsObj = {};
    });
    $scope.login = function () {
        $scope.crediantialsObj = {
            'username': $scope.data.username,
            'password': $scope.data.password
        };
        $window.localStorage.setItem('username', $scope.data.username);
        app.call('login.login', $scope.crediantialsObj);
    };
}