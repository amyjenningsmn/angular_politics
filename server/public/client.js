var app = angular.module('politicsApp', []);

app.controller('MainController', function($scope, $http){
  $scope.democrats = [];
  $scope.republicans = [];
  $scope.showCandidates = false;
  $scope.showPresident = false;


  $scope.displayCandidates = function() {
    $http.get('/democrats').then(function(response){
      $scope.showCandidates = true;
      $scope.democrats = response.data;
      console.log(response);
    })
    $http.get('/republicans').then(function(response){
      $scope.showCandidates = true;
      $scope.republicans = response.data;
      console.log(response);
    })
  }


  $scope.pickPres = function() {
    $scope.showPresident = true;
    $scope.presArray = $scope.democrats.concat($scope.republicans);
    console.log($scope.presArray);
    $scope.rand = Math.floor(Math.random() * $scope.presArray.length);
    console.log($scope.rand)
      // $scope.winner=$scope.presArray[$scope.rand];

  }




})
