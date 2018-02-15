angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    //$scope.statusSelect = "select";
  app.init($scope,function(data){
      $scope.object={};
      $scope.taskId = data.taskId;
      $scope.object.status = [
          {id:"0",label:"OverDue"},
          {id:"1",label:"Closed"},
          {id:"2",label:"Open"}];
        console.log(data.taskId);
    });
   $scope.update = function(){
       alert($scope.comment);
       app.call('home.updateDetail',$scope.object.statusSelect,$scope.comment,$scope.taskId);
       //console.log($scope.object.statusSelect);
   }
}