(function () {
    'use strict';
    angular.module('app.home')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','$location','$http'
    ];
    /* @ngInject */
    function HomeController($scope, $location, $http) {
      var vm = this;
      vm.issues = {};
      vm.sortBy = 'title';
      vm.getRequest = function () {
        console.log("I've been pressed!");
        $http.get("http://localhost:4000/api/issues")
          .then(function successCallback(response){
            //console.log(response.data);
            vm.issues = response.data

            vm.objs = Object.keys(vm.issues).map(function(key) {
              return vm.issues[key];
            });

            vm.objs.forEach(function(element){
              if(!element.updatedAt){
                element.updatedAt = 'N/A';
              }
            });

          }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
      };

      vm.updateSolve = function(obj){
        console.log(obj);

        var updatedIssue = {
          title: obj.title,
          description: obj.description,
          assignedTo: obj.assignedTo,
          solved: obj.solved
        }

        $http.put("http://localhost:4000/api/issues/"+obj._id, updatedIssue)
          .then(function(response){
            vm.getRequest();
          },
          function(err){
            console.log(err);
          });
      }

      vm.changeView = function(id) {
        var view = '/update/'+id;
        $location.path(view);
      }
    }
})();
