angular.module('app').controller('app_home', app_home);
function app_home($scope,$window, app) {
    'use strict';
    app.init($scope,function(data){
        console.log("data",$scope.data);
          $scope.taskObj = {};
    });
    $scope.login = function () {
        $scope.taskObj = {
            'username': $window.localStorage.getItem('username'),
        };
        app.call('login.taskUpdate', $scope.taskObj);
    };
    
}