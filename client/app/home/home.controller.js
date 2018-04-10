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
    }
})();
