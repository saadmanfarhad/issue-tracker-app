(function () {
  'use strict';
  angular.module('app.home').factory('HomeService',
    HomeService);
  HomeService.$inject = ['$http'];
  /* @ngInject */
  function HomeService($http) {
    return {
      getAllIssues: getAllIssues
    };

    function getAllIssues() {
      // var request = $http({
      //   method: 'get',
      //   url: 'http://localhost:4000/api/issues',
      //   headers: data
      // });

      $http.get("http://localhost:4000/api/issues")
            .then(function successCallback(response){
              console.log(response);
              return response;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
      // console.log(request);
      // return (request.then(requestService.handleSuccess, requestService.handleError));
    }
  }
})();
