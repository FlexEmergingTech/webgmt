angular.module('app').controller('app_home', app_home);
function app_home($scope,$window, app) {
    'use strict';
    app.init($scope,function(data){
          var username = $window.localStorage.getItem('username');
          $scope.listObj = {};
    });
        $scope.task = function (item) {
        $scope.listObj = {
            'username': $window.localStorage.getItem('username'),
            'item': item
        };
        app.call('login.taskList', $scope.listObj);
    };
    
}