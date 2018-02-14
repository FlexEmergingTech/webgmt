angular.module('app').controller('app_detail', app_detail);
function app_detail($scope, app) {
    'use strict';
    $scope.statusSelect = "Closed";
  app.init($scope,function(data){
      $scope.status = ["OverDue","Closed"];
        console.log(data);
    });
   $scope.update = function(){
       alert($scope.statusSelect);
   }
}