(function () {
  'use strict';
  var app = angular.module('app', ['ngRoute','app.home','app.issue'
  ]);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/issue',{
        templateUrl: 'app/issue/issue.html',
        controller: 'IssueController'
      })
  }]);
})();
