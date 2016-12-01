'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ViewController($scope) {
    console.log("hello mello");
//    console.log(Phone.query());
    console.log($scope.subscription);
    //console.log(angular.element('#subscriptionPackagedId').val())
    console.log(document.getElementById("subscriptionPackagedId").value)
//    console.log($attrs)
    $scope.phones = [
    {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
    }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
    }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
    }
    ];
});

//angular.
//  module('myApp').
//  component('greetUser', {
//    template: 'Hello, {{$ctrl.user}}!',
//    controller: function GreetUserController() {
//      this.user = 'world';
//    }
//});

angular.
  module('myApp').
    directive('greetUser', function () {
        return {

            template: 'Hello, {{$cont.user}}!',
            controller: function GreetUserController() {
              this.user = 'world';
            },
            controllerAs: '$cont',
            bindToController: true
        }
    }
);



//angular.module('myApp', ['ngResource']);

