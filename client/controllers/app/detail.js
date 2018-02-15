angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    //$scope.statusSelect = "select";
  app.init($scope,function(data){
      //$scope.comment = "test comment";
      $scope.object={};
      $scope.paramObj = {}
      $scope.taskId = $scope.data.taskId;
      $scope.comment = "";
      $scope.object.status = [
          {id:"0",label:"OverDue"},
          {id:"1",label:"Closed"},
          {id:"2",label:"Open"}];
       // console.log($scope.taskId);
    });
   $scope.update = function(){
      console.log($scope.data.comment);
      console.log($scope.data.taskId);
      $scope.paramObj = {"status" : $scope.object.statusSelect,"comment":$scope.data.comment,"taskId":$scope.data.taskId}
       app.call('home.updateDetail',$scope.paramObj);
       console.log($scope.data.popUp);
   }
}