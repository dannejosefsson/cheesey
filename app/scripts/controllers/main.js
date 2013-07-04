'use strict';

angular.module('cheeseyApp')
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
}])

.controller('ReportCtrl', ['$scope', function ($scope) {
  // Accordion
  $scope.oneAtATime = true;

  // Typeahead feature
  $scope.selected = undefined;
  $scope.expenseModules = [{'type':'Taxi','account':4067},{'type':'Train','account':4068}, {'type':'Airplane','account':4069}];

  //User settings
  $scope.defaultType = 'Train';
  //Report body
  $scope.report =
  {
    'reportId':4,
    'name':'Gabriel Ledung',
    'employeId':88,
    'place':'Norway',
    'placeID':4086,
    'date':'2013-06-25',
    'totalSum': 11023,
    'totalTax': 356,
    'expenses': [
      {
        'type':'Taxi',
        'account': 1345,
        'amount':'134.00',
        'tax':'0.08',
        'status':'success',
        'companions': ['Magnar Wium', 'Anders Linden']
      },
      {
        'type':'Taxi',
        'account': 1345,
        'amount':'177.00',
        'tax':'0.08',
        'status':'warning',
        'companions': ['Gabriel Ledung', 'Jonathan Melchert']
      }
    ]
  };
  $scope.addRow = function (type) {
    console.log('addRow> ', type);
    $scope.report.expenses.push(
        {
          'type':type || $scope.defaultType,
          'account': 1345,
          'amount':'1300.00',
          'tax':'0.08',
          'status':'warning'
        }
      );
  };
}])
.controller('ArchiveCtrl', ['$scope', function ($scope) {
  $scope.archive = [
  {
    'id':3,
    'date':'2013-06-25',
    'totalSum': 11023
  },
  {
    'id':2,
    'date':'2013-05-22',
    'totalSum': 10438
  },
  {
    'id':1,
    'date':'2013-04-27',
    'totalSum': 14389
  },
  ];
}])

.directive('percent', function($filter){
    var p = function(viewValue){
        var m = viewValue.match(/^(\d+)\/(\d+)/);
        if (m !== null) {
          return $filter('number')(parseInt(m[1],10)/parseInt(m[2],10), 2);
        }
        return $filter('number')(parseFloat(viewValue)/100, 2);
    };

    var f = function(modelValue){
        return $filter('number')(parseFloat(modelValue)*100, 2);
    };

    return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(p);
            ctrl.$formatters.unshift(f);
        }
    };
});

function Ctrl($scope) {
    $scope.var = '1.0';
}