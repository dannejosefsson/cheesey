'use strict';

angular.module('cheeseyApp', ['ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'ArchiveCtrl'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .when('/reportpreview', {
        templateUrl: 'views/reportpreview.html',
        controller: 'ReportPreviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
