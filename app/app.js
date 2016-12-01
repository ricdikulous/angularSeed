'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'core.phone'
]).
config(['$locationProvider', '$routeProvider', '$sceDelegateProvider', function($locationProvider, $routeProvider, $sceDelegateProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

  $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://sandbox.trainingrocket.com/**', 'http://mhnystatic2.s3.amazonaws.com/**']);

}]);

//angular.
//  module('myApp').
//  component('phoneList', {
//    templateUrl: 'view1/list-template.html',
//    controller: ['Phone',
//      function PhoneListController(Phone) {
//        this.subs = Phone.query();
//        console.log(this.subs);
//        this.orderProp = 'age';
//      }
//    ]
//});

angular.
  module('myApp').
  directive('phoneList', function () {
    return {
        templateUrl: 'view1/list-template.html',
        controller: ['$scope', 'Phone',
          function PhoneListController($scope, Phone) {
            console.log($scope.subscriptionPackageId)
            console.log($scope)
            //$scope.subs = Phone.query();
            var promise = Phone.query({id:1}).$promise.then(function (value) {
                console.log($scope.subscriptionPackageId)
                console.log("value");
                console.log(value);
                $scope.subs = value;
                return value;
            })
            .catch( function(error) {
                console.log("ERROR");
                console.log(error);
            })
            .finally( function() {
                console.log("Always does this");
            });

            console.log(this.subs);
            console.log(this.subs1);
            console.log(promise);
            this.orderProp = 'age';
          }
        ],
        controllerAs: '$ctrl',
        bindToController: true
    }
});

//angular.
//  module('myApp').
//    directive('greetUser', function () {
//        return {
//
//            template: 'Hello, {{$cont.user}}!',
//            controller: function GreetUserController() {
//              this.user = 'world';
//            },
//            controllerAs: '$cont',
//            bindToController: true
//        }
//    }
//);
