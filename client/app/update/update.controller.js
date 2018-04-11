(function () {
    'use strict';
    angular.module('app.update')
        .controller('UpdateController', UpdateController);
    UpdateController.$inject = ['$scope','$http','$routeParams','$location'
    ];
    /* @ngInject */
    function UpdateController($scope,$http,$routeParams,$location) {
      const id = $routeParams.id;
      var vm = this;

      vm.updateData = function () {
       // use $.param jQuery function to serialize data from JSON
        var updatedIssue = {
            title: vm.title,
            description: vm.description,
            assignedTo: vm.assignedTo,
            category: vm.category,
            solved: vm.solved
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

      vm.deleteData = function () {
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

      vm.getData = function() {
        $http.get("http://localhost:4000/api/issues/"+id)
          .then(function successCallback(response){
            //console.log(response.data);
            vm.title= response.data.title;
            vm.assignedTo = response.data.assignedTo;
            vm.description = response.data.description;
            vm.category = response.data.category;
            vm.solved = response.data.solved;
          }, function errorCallback(response){
            console.log("Unable to perform get request");
          });
      }
    }
})();
