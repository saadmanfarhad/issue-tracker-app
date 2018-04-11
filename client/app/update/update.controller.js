(function () {
    'use strict';
    angular.module('app.update')
        .controller('UpdateController', UpdateController);
    UpdateController.$inject = ['$scope','$http','$routeParams','$location'
    ];
    /* @ngInject */
    function UpdateController($scope,$http,$routeParams,$location) {
      const id = $routeParams.id;
      //console.log(id);

      $scope.updateData = function () {
       // use $.param jQuery function to serialize data from JSON
        var updatedIssue = {
            title: $scope.title,
            description: $scope.description,
            assignedTo: $scope.assignedTo,
            category: $scope.category,
            solved: $scope.solved
        };

        $http.put("http://localhost:4000/api/issues/"+id, updatedIssue)
          .then(function(response){
            console.log(response);
            $location.path('/home');
          },
          function(err){
            console.log(err);
          });
      };

      $scope.deleteData = function () {
       // use $.param jQuery function to serialize data from JSON
        $http.delete("http://localhost:4000/api/issues/"+id)
          .then(function(response){
            console.log(response);
            $location.path('/home');
          },
          function(err){
            console.log(err);
          });
      };

      $scope.getData = function() {
        $http.get("http://localhost:4000/api/issues/"+id)
          .then(function successCallback(response){
            //console.log(response.data);
            $scope.title= response.data.title;
            $scope.assignedTo = response.data.assignedTo;
            $scope.description = response.data.description;
            $scope.category = response.data.category;
            $scope.solved = response.data.solved;
          }, function errorCallback(response){
            console.log("Unable to perform get request");
          });
      }
    }
})();
