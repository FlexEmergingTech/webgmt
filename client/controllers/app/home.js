angular.module('app').controller('app_home', app_home);
function app_home($scope,$window, app) {
    'use strict';
    app.init($scope,function(data){
        console.log("data",$scope.data.list);
                console.log("user name: ",$window.localStorage.getItem('username'));
          var username = $window.localStorage.getItem('username');
    });
    
}