angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    //$scope.statusSelect = "select";
  app.init($scope,function(data){
      $scope.object={};
      $scope.object.status = [
          {id:"0",label:"OverDue"},
          {id:"1",label:"Closed"},
          {id:"2",label:"Open"}];
        console.log(data);
    });
   $scope.update = function(){
       alert($scope.object.statusSelect);
       app.call('home.updateDetail',item)
       //console.log($scope.object.statusSelect);
   }
}