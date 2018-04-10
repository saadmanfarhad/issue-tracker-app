var myIssueTrackerApp = angular.module('myIssueTrackerApp', ['ngResource', 'toaster']);

myIssueTrackerApp.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

myIssueTrackerApp.factory('myHttpInterceptor', function ($q,toaster) {
    return {
        responseError: function (response) {
          console.log(response);
          if(response.data){
            if(response.data.message)
            toaster.error("Error: ", response.data.message);
            else
            toaster.error("Error: ", response.data);
          }
          return $q.reject(response);
        }
    };
});

myIssueTrackerApp.factory('Issue', function($resource) {
  return $resource('/api/issues/:id', { id: '@_id' }, {
    update: { // We need to define this method manually as it is not provided with ng-resource
      method: 'PUT'
    }
  });
})

// myIssueTrackerApp.controller('IssueTrackerController', ['$scope', function($scope) {
//   $scope.msg = "Working";
//
//   $scope.players = [
//     {
//       name: 'messi',
//       foot: 'left'
//     },
//     {
//       name: 'ronaldo',
//       foot: 'right'
//     },
//     {
//       name: 'neymar',
//       foot: 'right'
//     }
//   ];
//
// }]);
