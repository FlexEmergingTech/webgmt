angular.module('app').controller('app_home', app_home);
function app_home($scope,$window, app) {
    'use strict';
    app.init($scope,function(data){
        console.log("data",$scope.data);
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