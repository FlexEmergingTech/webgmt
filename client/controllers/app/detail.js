angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
  app.init($scope,function(data){
        console.log(data);
    });
   $scope.update = function(){
       alert("hi");
   }
}