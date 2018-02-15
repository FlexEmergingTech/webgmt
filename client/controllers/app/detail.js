angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    //$scope.statusSelect = "select";
  app.init($scope,function(data){
      
      $scope.status = [
          {value:0,label:"OverDue"},
          {value:1,label:"Closed"},
          {value:2,label:"Open"}];
        console.log(data);
    });
   $scope.update = function(){
       alert($scope.statusSelect.value);
   }
}