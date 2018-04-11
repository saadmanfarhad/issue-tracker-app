(function () {
    'use strict';
    angular.module('app.issue')
        .controller('IssueController', IssueController);
    IssueController.$inject = ['$scope','$http','$location'
    ];
    /* @ngInject */
    function IssueController($scope,$http, $location) {
      $scope.sendData = function () {
       // use $.param jQuery function to serialize data from JSON
        var issue = {
            title: $scope.title,
            description: $scope.description,
            assignedTo: $scope.assignedTo,
            category: $scope.category
        };


        $http.post("http://localhost:4000/api/issues", issue)
          .then(function(response){
            $location.path('/home');
            console.log(response);
          },
          function(err){
            console.log(err);
          });
      };
    }
})();
