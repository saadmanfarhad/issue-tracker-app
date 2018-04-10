(function () {
    'use strict';
    angular.module('app.issue')
        .controller('IssueController', IssueController);
    IssueController.$inject = ['$scope','$http'
    ];
    /* @ngInject */
    function IssueController($scope,$http) {
      $scope.sendData = function () {
       // use $.param jQuery function to serialize data from JSON
        var issue = {
            title: $scope.title,
            description: $scope.description,
            assignedTo: $scope.assignedTo,
            category: $scope.category
        };

        // var config = {
        //     headers : {
        //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        //     }
        // }
        console.log(issue);

        $http.post("http://localhost:4000/api/issues", issue)
          .then(function(response){
            console.log(response);
          },
          function(err){
            console.log(err);
          });
      };
    }
})();
