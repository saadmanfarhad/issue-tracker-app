(function () {
    'use strict';
    angular.module('app.home')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','$http','HomeService'
    ];
    /* @ngInject */
    function HomeController($scope,$http, HomeService) {
      $scope.issues = {};
      $scope.sortBy = 'title';
      $scope.getRequest = function () {
        console.log("I've been pressed!");
        $http.get("http://localhost:4000/api/issues")
          .then(function successCallback(response){
            console.log(response.data);
            $scope.issues = response.data;
            $scope.objs = Object.keys($scope.issues).map(function(key) {
              return $scope.issues[key];
            });
          }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
      };

      $scope.updateSolve = function(obj){
        console.log(obj);
        var updatedIssue = {
          title: obj.title,
          description: obj.description,
          assignedTo: obj.assignedTo,
          solved: obj.solved
        }
        $http.put("http://localhost:4000/api/issues/"+obj._id, updatedIssue)
          .then(function(response){
            console.log(response);
            $scope.getRequest();
          },
          function(err){
            console.log(err);
          });
      }
    }
})();
