(function () {
    'use strict';
    angular.module('app.issue')
        .controller('IssueController', IssueController);
    IssueController.$inject = ['$scope','$http','$location'
    ];
    /* @ngInject */
    function IssueController($scope,$http, $location) {
      var vm = this;

      vm.sendData = function () {
        var issue = {
            title: vm.title,
            description: vm.description,
            assignedTo: vm.assignedTo,
            category: vm.category
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
