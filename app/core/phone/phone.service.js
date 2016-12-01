'use strict';

angular.module('core.phone')
    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('data/subscription.json/:id', {
        id:'@id'
      }, {
      //return $resource('http://jsonplaceholder.typicode.com/users/', {}, {
        query: {
        //e7557823d3e839129fae26008f577e39
        //    url: 'https://sandbox.trainingrocket.com/api/rest/v2/manage/user_group/116',
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);