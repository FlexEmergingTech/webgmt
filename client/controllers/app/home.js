angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    app.init($scope,function(data){
        console.log(data);
        
    });
    
}