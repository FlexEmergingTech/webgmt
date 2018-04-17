angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    //$scope.statusSelect = "select";
  app.init($scope,function(data){
      
      //$scope.comment = "test comment";
      $scope.object={};
     
      $scope.paramObj = {}
      $scope.taskId = $scope.data.taskId;
         console.log("status",$scope.data.status);
      $scope.comment = "";
      $scope.object.status = [
          {id:"0",label:"OverDue"},
          {id:"1",label:"Closed"},
          {id:"2",label:"Open"}];
        console.log($scope.data.status);
        //$scope.object.statusSelect = $scope.data.status;
      // alert($scope.data.status);
    });
   $scope.update = function(){
       console.log( $scope.object.status);
      console.log($scope.data.comment);
      console.log($scope.data.taskId);
      $scope.paramObj = {"status" : $scope.object.statusSelect,"comment":$scope.data.comment,"taskId":$scope.data.taskId}
       app.call('login.updateDetail',$scope.paramObj);
       //alert($scope.data.popUp);
   }
   $scope.cancel = function(){
       app.call('login.cancelDetail');
   }
   $scope.redirect = function(){
        app.call('login.loginRedirect');
   }
}