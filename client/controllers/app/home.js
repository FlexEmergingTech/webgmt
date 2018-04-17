angular.module('app').controller('app_home', app_home);
function app_home($scope,$window, app) {
    'use strict';
    app.init($scope,function(data){
        console.log("data",$scope.data);
                console.log("user name: ",$window.localStorage.getItem('username'));
          $scope.taskObj = {};
          var username = $window.localStorage.getItem('username');
    });
    $scope.task = function () {
        alert("hii");
        $scope.taskObj = {
            'username': $window.localStorage.getItem('username'),
        };
        app.call('login.taskUpdate', $scope.taskObj);
    };
    
}