var app = angular.module("myApp", []);

app.config(function($compileProvider) {
  $compileProvider.preAssignBindingsEnabled(true);
});
//var count = 0;
app.factory('test',function(){
  var count = 0;
  var plusOne = function(){
    count++;
    return count;
  }

  return{
    count: count,
    plusOne: plusOne
  }
});

app.controller("myCtrl",['$scope','test',function($scope,test) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.number = test.plusOne();
  $scope.testFun = function(){
    $scope.firstName = "cliced";
    var x = 0;
  }
}]);

app.controller('counter',['$scope','test',function($scope,test){
  $scope.count = test.plusOne();
}]);

app.controller('child',['$scope',function($scope){
  $scope.firstName = 'child first';
  $scope.addition = 'child addition';
}]);