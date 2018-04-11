(function () {
  'use strict';
  var app = angular.module('app', ['ngRoute','app.home','app.issue','app.update'
  ]);
  app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider
      .when('/home',{
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/issue',{
        templateUrl: 'app/issue/issue.html',
        controller: 'IssueController'
      })
      .when('/update/:id',{
        templateUrl: 'app/update/update.html',
        controller: 'UpdateController'
      })
  }]);
})();
